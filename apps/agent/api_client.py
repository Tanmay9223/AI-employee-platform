import httpx
import os

API_BASE = os.getenv("API_URL", "http://localhost:3001/api/internal")

def get_merchants() -> list:
    resp = httpx.get(f"{API_BASE}/merchants")
    resp.raise_for_status()
    return resp.json()

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
