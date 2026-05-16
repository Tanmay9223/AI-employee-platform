import httpx
import os

API_BASE = os.getenv("API_URL", "http://localhost:3001/api/internal")
INTERNAL_SECRET = os.getenv("INTERNAL_SECRET", "dev-internal-secret-change-in-prod")

# All internal API calls include the shared secret header
_HEADERS = {"x-internal-secret": INTERNAL_SECRET}


def get_merchants() -> list:
    resp = httpx.get(f"{API_BASE}/merchants", headers=_HEADERS, timeout=10)
    resp.raise_for_status()
    return resp.json()


def get_signals(merchant_id: str) -> dict:
    resp = httpx.get(f"{API_BASE}/signals/{merchant_id}", headers=_HEADERS, timeout=15)
    resp.raise_for_status()
    return resp.json()


def get_velocity(merchant_id: str) -> dict:
    """
    Fetch real 30-day SKU velocity from the Fastify API.
    Returns a dict: { sku -> { units_sold_30d, daily_velocity } }
    """
    resp = httpx.get(f"{API_BASE}/velocity/{merchant_id}", headers=_HEADERS, timeout=15)
    resp.raise_for_status()
    data = resp.json()
    return data.get("velocity", {})


def save_recommendation(data: dict):
    resp = httpx.post(f"{API_BASE}/recommendations", json=data, headers=_HEADERS, timeout=10)
    resp.raise_for_status()


def save_run_log(data: dict):
    resp = httpx.post(f"{API_BASE}/logs", json=data, headers=_HEADERS, timeout=10)
    resp.raise_for_status()
