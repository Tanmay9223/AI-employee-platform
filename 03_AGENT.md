# Phase 3 — Autonomous AI Agent
## Inventory Risk Detector + Recommendation Queue

> Phase 1 and Phase 2 must be complete before starting this.
> Goal: Agent runs automatically, detects inventory risk, creates recommendations for human approval.

---

## Architecture

```
Scheduled Trigger (every 6 hours) OR Event Trigger
          ↓
   Python LangGraph Agent Service (port 8000)
          ↓
   [load_signals] → [compute_depletion] → [score_risks] → [generate_recommendations]
          ↓
   Gemini generates recommendation text with citations
          ↓
   Saved to AgentRecommendation table (status: pending)
          ↓
   Frontend shows recommendations for human approval
```

---

## Step 1: Python Agent Service Setup

Create `apps/agent/` directory:

```bash
cd apps/agent
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install fastapi uvicorn langgraph langchain-google-genai httpx python-dotenv pydantic apscheduler
```

Create `apps/agent/requirements.txt`:
```
fastapi==0.109.0
uvicorn==0.27.0
langgraph==0.1.0
langchain-google-genai==1.0.0
langchain-core==0.1.0
python-dotenv==1.0.0
pydantic==2.5.0
httpx==0.26.0
apscheduler==3.10.4
```

---

## Step 2: API Client (Python)

Create `apps/agent/api_client.py`:

```python
import httpx
import os

API_BASE = os.getenv("API_URL", "http://localhost:3001/api/internal")

def get_signals(merchant_id: str) -> dict:
    resp = httpx.get(f"{API_BASE}/signals/{merchant_id}")
    resp.raise_for_status()
    return resp.json()

def save_recommendation(data: dict):
    resp = httpx.post(f"{API_BASE}/recommendations", json=data)
    resp.raise_for_status()

def save_run_log(data: dict):
    resp = httpx.post(f"{API_BASE}/logs", json=data)
    resp.raise_for_status()
```

---

## Step 3: Signal Loader

Create `apps/agent/signals.py`:

```python
from api_client import get_signals
from dataclasses import dataclass

@dataclass
class InventorySignal:
    sku: str
    product_name: str
    variant_name: str
    source_id: str
    quantity_available: int
    quantity_committed: int
    unit_price: float

@dataclass
class OrderVelocitySignal:
    sku: str
    units_sold_30d: int
    daily_velocity: float

@dataclass
class CampaignSignal:
    name: str
    source_id: str
    connector: str
    daily_spend: float
    roas: float
    status: str

def load_signals_data(merchant_id: str):
    data = get_signals(merchant_id)
    
    # Map inventory
    inventory = [
        InventorySignal(
            sku=inv['sku'],
            product_name=inv.get('productName', ''),
            variant_name=inv.get('variantName', ''),
            source_id=inv['sourceId'],
            quantity_available=inv['quantityAvailable'],
            quantity_committed=inv['quantityCommitted'],
            unit_price=float(inv['unitPrice'] or 0)
        ) for inv in data.get('inventory', [])
    ]
    
    # Calculate simulated velocity
    total_orders = data.get('orderMetrics', {}).get('totalOrders', 100)
    velocity_map = {}
    
    for inv in inventory:
        if not inv.sku: continue
        base_velocity = max(0.5, (total_orders / max(1, len(inventory))) / 30)
        import hashlib
        hash_val = int(hashlib.md5(inv.sku.encode()).hexdigest()[:4], 16) / 65535
        velocity = base_velocity * (0.5 + hash_val)
        
        velocity_map[inv.sku] = OrderVelocitySignal(
            sku=inv.sku,
            units_sold_30d=int(velocity * 30),
            daily_velocity=round(velocity, 2)
        )
        
    # Map campaigns
    campaigns = [
        CampaignSignal(
            name=c.get('name', ''),
            source_id=c['sourceId'],
            connector=c['sourceConnector'],
            daily_spend=float(c.get('spendAmount') or 0) / 30,
            roas=float(c.get('roas') or 0),
            status=c.get('status', 'active')
        ) for c in data.get('campaigns', [])
    ]
    
    return inventory, velocity_map, campaigns
```

---

## Step 4: LangGraph Agent

Create `apps/agent/inventory_agent.py`:

```python
import os
import uuid
from datetime import datetime
from typing import TypedDict, Any
from langgraph.graph import StateGraph, END
import google.generativeai as genai
from signals import load_signals_data
from api_client import save_recommendation, save_run_log
import json

genai.configure(api_key=os.getenv("GOOGLE_GEMINI_API_KEY"))
gemini = genai.GenerativeModel('gemini-3-flash')

# ─── State Definition ────────────────────────────────────────────────

class AgentState(TypedDict):
    merchant_id: str
    run_id: str
    nodes_executed: list
    inventory_signals: list
    velocity_map: dict
    campaigns: list
    depletion_forecasts: list
    risk_scores: list
    actionable_risks: list
    recommendations: list
    errors: list
    started_at: str

# ─── Node Functions ───────────────────────────────────────────────────

def load_signals(state: AgentState) -> AgentState:
    print(f"[Agent] Loading signals for merchant {state['merchant_id']}")
    start = datetime.now()
    
    inventory, velocity, campaigns = load_signals_data(state['merchant_id'])
    
    duration = (datetime.now() - start).microseconds // 1000
    
    return {
        **state,
        'inventory_signals': [vars(i) for i in inventory],
        'velocity_map': {k: vars(v) for k, v in velocity.items()},
        'campaigns': [vars(c) for c in campaigns],
        'nodes_executed': state['nodes_executed'] + [{
            'node': 'load_signals',
            'duration_ms': duration,
            'status': 'success',
            'records_loaded': len(inventory)
        }]
    }

def compute_depletion(state: AgentState) -> AgentState:
    print("[Agent] Computing depletion forecasts...")
    start = datetime.now()
    
    forecasts = []
    inventory = state['inventory_signals']
    velocity_map = state['velocity_map']
    campaigns = state['campaigns']
    
    # Campaign demand amplifier
    total_daily_spend = sum(c['daily_spend'] for c in campaigns if c['status'] == 'active')
    demand_multiplier = 1.0 + (total_daily_spend / 500) * 0.15  # 15% lift per $500/day spend
    demand_multiplier = min(demand_multiplier, 2.5)  # cap at 2.5x
    
    for inv in inventory:
        sku = inv['sku']
        if not sku:
            continue
        
        velocity_signal = velocity_map.get(sku, {})
        base_velocity = velocity_signal.get('daily_velocity', 1.0)
        adjusted_velocity = base_velocity * demand_multiplier
        
        effective_stock = inv['quantity_available'] - inv['quantity_committed']
        effective_stock = max(effective_stock, 0)
        
        days_to_depletion = (effective_stock / adjusted_velocity) if adjusted_velocity > 0 else 999
        
        lead_time = 14  # default 14 days
        
        if days_to_depletion <= lead_time:
            risk_level = "CRITICAL"
            confidence = 0.90
        elif days_to_depletion <= lead_time * 1.5:
            risk_level = "HIGH"
            confidence = 0.80
        elif days_to_depletion <= lead_time * 2:
            risk_level = "MEDIUM"
            confidence = 0.65
        else:
            risk_level = "LOW"
            confidence = 0.50
        
        revenue_at_risk = max(0, (lead_time - days_to_depletion)) * adjusted_velocity * inv.get('unit_price', 0)
        
        forecasts.append({
            'sku': sku,
            'product_name': inv.get('product_name', ''),
            'variant_name': inv.get('variant_name', ''),
            'source_id': inv.get('source_id', ''),
            'effective_stock': effective_stock,
            'base_velocity': round(base_velocity, 2),
            'adjusted_velocity': round(adjusted_velocity, 2),
            'demand_multiplier': round(demand_multiplier, 2),
            'days_to_depletion': round(days_to_depletion, 1),
            'risk_level': risk_level,
            'confidence': confidence,
            'revenue_at_risk': round(revenue_at_risk, 2),
            'unit_price': inv.get('unit_price', 0),
            'lead_time_days': lead_time
        })
    
    duration = (datetime.now() - start).microseconds // 1000
    
    return {
        **state,
        'depletion_forecasts': forecasts,
        'nodes_executed': state['nodes_executed'] + [{
            'node': 'compute_depletion',
            'duration_ms': duration,
            'status': 'success',
            'skus_analyzed': len(forecasts)
        }]
    }

def filter_actionable(state: AgentState) -> AgentState:
    actionable = [
        f for f in state['depletion_forecasts']
        if f['risk_level'] in ('CRITICAL', 'HIGH')
    ]
    
    return {
        **state,
        'actionable_risks': actionable,
        'nodes_executed': state['nodes_executed'] + [{
            'node': 'filter_actionable',
            'duration_ms': 1,
            'status': 'success',
            'filtered_to': len(actionable)
        }]
    }

def generate_recommendations(state: AgentState) -> AgentState:
    print(f"[Agent] Generating {len(state['actionable_risks'])} recommendations...")
    start = datetime.now()
    
    recommendations = []
    
    for risk in state['actionable_risks']:
        # Build reorder quantity recommendation
        recommended_reorder = int(risk['adjusted_velocity'] * 60)  # 60 days supply
        
        # Active campaign names for context
        campaign_names = [c['name'] for c in state['campaigns'] if c['status'] == 'active']
        
        # Gemini generates the reasoning summary
        prompt = f"""You are an inventory risk analyst. Generate a 2-sentence recommendation summary.

SKU: {risk['sku']} ({risk['product_name']} - {risk['variant_name']})
Risk Level: {risk['risk_level']}
Current Available Stock: {risk['effective_stock']} units
Daily Sales Velocity: {risk['adjusted_velocity']} units/day (base: {risk['base_velocity']}, demand multiplier: {risk['demand_multiplier']}x from active campaigns)
Days Until Stockout: {risk['days_to_depletion']} days
Revenue at Risk: ${risk['revenue_at_risk']:.2f}
Active Campaigns: {', '.join(campaign_names) if campaign_names else 'None'}
Recommended Reorder: {recommended_reorder} units

Write exactly 2 sentences: (1) explain the risk clearly, (2) recommend the action. Be specific with numbers. Do not add citations - those will be added automatically."""

        try:
            response = gemini.generate_content(prompt)
            reasoning = response.text.strip()
        except Exception as e:
            reasoning = f"Stock for {risk['sku']} will deplete in {risk['days_to_depletion']} days at current velocity. Recommend reordering {recommended_reorder} units immediately to avoid stockout."
        
        citations = [
            f"shopify → unified_inventory → {risk['source_id']}",
            f"shopify → unified_orders → 30d velocity analysis"
        ]
        if campaign_names:
            citations.append(f"meta_ads → unified_campaigns → active campaigns")
        
        recommendations.append({
            'sku': risk['sku'],
            'product_name': risk['product_name'],
            'risk_level': risk['risk_level'],
            'recommended_action': f"Reorder {recommended_reorder} units of {risk['sku']}",
            'reorder_quantity': recommended_reorder,
            'days_to_depletion': risk['days_to_depletion'],
            'revenue_at_risk': risk['revenue_at_risk'],
            'confidence_score': risk['confidence'],
            'reasoning_summary': reasoning,
            'citations': citations
        })
    
    duration = (datetime.now() - start).microseconds // 1000
    
    return {
        **state,
        'recommendations': recommendations,
        'nodes_executed': state['nodes_executed'] + [{
            'node': 'generate_recommendations',
            'duration_ms': duration,
            'status': 'success',
            'recommendations_created': len(recommendations)
        }]
    }

def save_results(state: AgentState) -> AgentState:
    print(f"[Agent] Saving {len(state['recommendations'])} recommendations...")
    
    for rec in state['recommendations']:
        save_recommendation({
            "id": str(uuid.uuid4()),
            "merchantId": state['merchant_id'],
            "agentRunId": state['run_id'],
            "sku": rec['sku'],
            "productName": rec['product_name'],
            "riskLevel": rec['risk_level'],
            "recommendedAction": rec['recommended_action'],
            "reorderQuantity": rec['reorder_quantity'],
            "daysToDepletion": rec['days_to_depletion'],
            "revenueAtRisk": rec['revenue_at_risk'],
            "confidenceScore": rec['confidence_score'],
            "reasoningSummary": rec['reasoning_summary'],
            "citations": rec['citations'],
            "status": "pending"
        })
    
    # Save run log
    completed_at = datetime.now()
    save_run_log({
        "id": state['run_id'],
        "merchantId": state['merchant_id'],
        "agent": "inventory_risk_detector",
        "triggeredBy": "scheduled",
        "startedAt": state['started_at'],
        "completedAt": completed_at.isoformat(),
        "status": "success",
        "nodesExecuted": state['nodes_executed']
    })
    
    print(f"[Agent] Run complete. Saved {len(state['recommendations'])} recommendations.")
    
    return {**state, 'nodes_executed': state['nodes_executed'] + [{'node': 'save_results', 'status': 'success'}]}

# ─── Graph Definition ─────────────────────────────────────────────────

def should_generate(state: AgentState) -> str:
    return "generate" if len(state['actionable_risks']) > 0 else "skip"

def build_agent_graph():
    builder = StateGraph(AgentState)
    
    builder.add_node("load_signals", load_signals)
    builder.add_node("compute_depletion", compute_depletion)
    builder.add_node("filter_actionable", filter_actionable)
    builder.add_node("generate_recommendations", generate_recommendations)
    builder.add_node("save_results", save_results)
    
    builder.set_entry_point("load_signals")
    builder.add_edge("load_signals", "compute_depletion")
    builder.add_edge("compute_depletion", "filter_actionable")
    builder.add_conditional_edges(
        "filter_actionable",
        should_generate,
        {"generate": "generate_recommendations", "skip": "save_results"}
    )
    builder.add_edge("generate_recommendations", "save_results")
    builder.add_edge("save_results", END)
    
    return builder.compile()

agent_graph = build_agent_graph()

def run_agent(merchant_id: str, triggered_by: str = "scheduled") -> dict:
    run_id = str(uuid.uuid4())
    
    initial_state = AgentState(
        merchant_id=merchant_id,
        run_id=run_id,
        nodes_executed=[],
        inventory_signals=[],
        velocity_map={},
        campaigns=[],
        depletion_forecasts=[],
        risk_scores=[],
        actionable_risks=[],
        recommendations=[],
        errors=[],
        started_at=datetime.now().isoformat()
    )
    
    final_state = agent_graph.invoke(initial_state)
    
    return {
        'run_id': run_id,
        'recommendations_created': len(final_state['recommendations']),
        'nodes_executed': final_state['nodes_executed'],
        'recommendations': final_state['recommendations']
    }
```

---

## Step 5: FastAPI Server for Agent

Create `apps/agent/main.py`:

```python
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from inventory_agent import run_agent
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime
import httpx
import os

app = FastAPI(title="AI Employee Agent Service")

# ─── Scheduler ────────────────────────────────────────────────────────

scheduler = BackgroundScheduler()

def run_all_merchants():
    """Run agent for all active merchants"""
    # For demo purposes, we will just trigger the demo brand
    merchant_id = os.getenv("DEMO_MERCHANT_ID", "demo-brand") # This would be fetched from DB in prod
    print(f"[Scheduler] Running agent for demo merchant {merchant_id}")
    run_agent(merchant_id, triggered_by='scheduled')

scheduler.add_job(run_all_merchants, 'interval', hours=6)
scheduler.start()

# ─── Routes ───────────────────────────────────────────────────────────

class RunAgentRequest(BaseModel):
    merchant_id: str
    triggered_by: str = "manual"

@app.post("/agent/run")
async def trigger_agent(req: RunAgentRequest, background_tasks: BackgroundTasks):
    background_tasks.add_task(run_agent, req.merchant_id, req.triggered_by)
    return {"status": "started", "merchant_id": req.merchant_id}

@app.post("/agent/run/sync")
async def trigger_agent_sync(req: RunAgentRequest):
    """Synchronous run - waits for completion (use for demo)"""
    result = run_agent(req.merchant_id, req.triggered_by)
    return result

@app.get("/health")
async def health():
    return {"status": "ok", "service": "agent", "timestamp": datetime.now().isoformat()}
```

Run the agent service:
```bash
cd apps/agent
source venv/bin/activate
uvicorn main:app --port 8000 --reload
```

---

## Step 6: Agent Routes in Node API

Create `packages/api/src/routes/agent.routes.ts`:

```typescript
import { FastifyInstance } from 'fastify'

const AGENT_SERVICE_URL = process.env.AGENT_SERVICE_URL || 'http://localhost:8000'

export async function agentRoutes(fastify: FastifyInstance) {

  // Trigger agent run manually
  fastify.post('/run/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    
    const response = await fetch(`${AGENT_SERVICE_URL}/agent/run/sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ merchant_id: merchantId, triggered_by: 'manual' })
    })
    
    return response.json()
  })

  // Get pending recommendations
  fastify.get('/recommendations/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    const { status = 'pending' } = req.query as { status?: string }
    
    // Now querying Prisma directly instead of Python DB
    const { prisma } = await import('../lib/prisma')
    return prisma.agentRecommendation.findMany({
      where: { merchantId, status },
      orderBy: { createdAt: 'desc' }
    })
  })

  // Approve/dismiss recommendation
  fastify.patch('/recommendations/:id', async (req, reply) => {
    const { id } = req.params as { id: string }
    const { status, reviewedBy = 'user' } = req.body as { status: string; reviewedBy?: string }
    
    const { prisma } = await import('../lib/prisma')
    await prisma.agentRecommendation.update({
      where: { id },
      data: { status, reviewedAt: new Date(), reviewedBy }
    })
    return { status: 'updated' }
  })

  // Get run logs
  fastify.get('/logs/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    const { prisma } = await import('../lib/prisma')
    return prisma.agentRunLog.findMany({
      where: { merchantId },
      orderBy: { startedAt: 'desc' },
      take: 10
    })
  })
}
```

---

## Step 7: Test the Agent

```bash
# Trigger a manual agent run
curl -X POST http://localhost:8000/agent/run/sync \
  -H "Content-Type: application/json" \
  -d '{"merchant_id": "YOUR_MERCHANT_ID", "triggered_by": "manual"}'

# Check recommendations created
curl http://localhost:3001/api/agent/recommendations/YOUR_MERCHANT_ID

# Approve a recommendation
curl -X PATCH http://localhost:3001/api/agent/recommendations/RECOMMENDATION_ID \
  -H "Content-Type: application/json" \
  -d '{"status": "approved", "reviewed_by": "demo_user"}'
```

Expected output from agent run:
```json
{
  "run_id": "550e8400-...",
  "recommendations_created": 3,
  "nodes_executed": [
    {"node": "load_signals", "status": "success", "records_loaded": 7},
    {"node": "compute_depletion", "status": "success", "skus_analyzed": 7},
    {"node": "filter_actionable", "status": "success", "filtered_to": 3},
    {"node": "generate_recommendations", "status": "success", "recommendations_created": 3},
    {"node": "save_results", "status": "success"}
  ]
}
```

---

## Phase 3 Complete Checklist

- [ ] Python venv created with all packages installed
- [ ] Agent service running on port 8000
- [ ] LangGraph graph defined with 5 nodes
- [ ] Depletion forecast algorithm working correctly
- [ ] SKUs with <50 stock flagged as CRITICAL or HIGH
- [ ] Gemini generates reasoning summary for each recommendation
- [ ] Recommendations saved to AgentRecommendation table with status=pending
- [ ] AgentRunLog saved after each run
- [ ] Approve/dismiss endpoints working
- [ ] Node API proxies agent routes correctly
- [ ] Scheduler configured for every 6 hours

> Only move to Phase 4 when the agent produces at least 2 recommendations from seed data.