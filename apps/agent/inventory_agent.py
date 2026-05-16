import os
import uuid
from datetime import datetime
from typing import TypedDict, Any
# pyrefly: ignore [missing-import]
from langgraph.graph import StateGraph, END
# pyrefly: ignore [missing-import]
import google.generativeai as genai
from signals import load_signals_data
from api_client import save_recommendation, save_run_log
import json

# Use the google-generativeai package (not google.genai)
genai.configure(api_key=os.getenv("GOOGLE_GEMINI_API_KEY", ""))
_gemini_model = genai.GenerativeModel('gemini-3.1-flash-lite')

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
    print("[Agent] Computing depletion forecasts from real velocity data...")
    start = datetime.now()

    forecasts = []
    inventory = state['inventory_signals']
    velocity_map = state['velocity_map']
    campaigns = state['campaigns']

    # Campaign demand amplifier: active campaign spend increases expected sell-through rate
    total_daily_spend = sum(c['daily_spend'] for c in campaigns if c['status'] == 'active')
    demand_multiplier = 1.0 + (total_daily_spend / 500) * 0.15  # 15% lift per $500/day spend
    demand_multiplier = min(demand_multiplier, 2.5)  # cap at 2.5x

    for inv in inventory:
        sku = inv['sku']
        if not sku:
            continue

        velocity_signal = velocity_map.get(sku, {})
        base_velocity = velocity_signal.get('daily_velocity', 0.5)
        adjusted_velocity = base_velocity * demand_multiplier
        adjusted_velocity = max(adjusted_velocity, 0.01)  # floor at 0.01 to avoid div-by-zero

        effective_stock = inv['quantity_available'] - inv['quantity_committed']
        effective_stock = max(effective_stock, 0)

        days_to_depletion = effective_stock / adjusted_velocity

        lead_time = 14  # default 14-day reorder lead time

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

        # Revenue at risk = potential lost revenue during the lead time if we stockout
        days_at_risk = max(0, lead_time - days_to_depletion)
        revenue_at_risk = days_at_risk * adjusted_velocity * inv.get('unit_price', 0)

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
        # Recommend 60 days of supply to cover reorder lead time + buffer
        recommended_reorder = int(risk['adjusted_velocity'] * 60)

        campaign_names = [c['name'] for c in state['campaigns'] if c['status'] == 'active']

        prompt = f"""You are an inventory risk analyst. Generate a 2-sentence recommendation summary.

SKU: {risk['sku']} ({risk['product_name']} - {risk['variant_name']})
Risk Level: {risk['risk_level']}
Current Available Stock: {risk['effective_stock']} units
Daily Sales Velocity: {risk['adjusted_velocity']} units/day (base: {risk['base_velocity']}, demand multiplier: {risk['demand_multiplier']}x from active campaigns)
Days Until Stockout: {risk['days_to_depletion']} days
Revenue at Risk: ${risk['revenue_at_risk']:.2f}
Active Campaigns: {', '.join(campaign_names) if campaign_names else 'None'}
Recommended Reorder: {recommended_reorder} units

Write exactly 2 sentences: (1) explain the risk clearly using the numbers above, (2) recommend the action. Be specific with numbers. Do not add citations - those will be added automatically."""

        try:
            response = _gemini_model.generate_content(prompt)
            reasoning = response.text.strip()
        except Exception as e:
            print(f"[Agent] Gemini failed for {risk['sku']}: {e}")
            reasoning = f"Stock for {risk['sku']} will deplete in {risk['days_to_depletion']} days at current velocity of {risk['adjusted_velocity']} units/day. Recommend reordering {recommended_reorder} units immediately to avoid a ${risk['revenue_at_risk']:.2f} revenue loss."

        citations = [
            f"shopify → unified_inventory → {risk['source_id']}",
            f"shopify → unified_orders → 30d velocity analysis"
        ]
        if campaign_names:
            citations.append(f"meta_ads → unified_campaigns → active campaigns demand multiplier")

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
