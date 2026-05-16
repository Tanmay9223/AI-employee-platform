# pyrefly: ignore [missing-import]
from fastapi import FastAPI, BackgroundTasks
# pyrefly: ignore [missing-import]
from pydantic import BaseModel
from inventory_agent import run_agent
# pyrefly: ignore [missing-import]
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime
import random

app = FastAPI(title="AI Employee Agent Service")

# ─── Scheduler ────────────────────────────────────────────────────────

scheduler = BackgroundScheduler()

from api_client import get_merchants

def run_all_merchants():
    """Run agent for all active merchants on a staggered schedule."""
    try:
        merchants = get_merchants()
        print(f"[Scheduler] Found {len(merchants)} active merchants.")
        for m in merchants:
            merchant_id = m['id']
            print(f"[Scheduler] Running agent for merchant {merchant_id} ({m['name']})")
            run_agent(merchant_id, triggered_by='scheduled')
    except Exception as e:
        print(f"[Scheduler] Error fetching merchants: {e}")

# jitter=600 means each run starts at a random offset up to 600s (10 min) after the interval.
# This prevents a thundering-herd spike where 10,000 merchants all hit the DB simultaneously.
# At scale, replace with a job queue (e.g. Celery + Redis) where each merchant is an
# individual task distributed across worker pods.
scheduler.add_job(run_all_merchants, 'interval', hours=6, jitter=600)
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
    """Synchronous run — waits for completion (use for demo and manual triggers)."""
    result = run_agent(req.merchant_id, req.triggered_by)
    return result

@app.get("/health")
async def health():
    return {"status": "ok", "service": "agent", "timestamp": datetime.now().isoformat()}
