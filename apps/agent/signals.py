from api_client import get_signals, get_velocity
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

    # ── Inventory ────────────────────────────────────────────────────────────
    inventory = [
        InventorySignal(
            sku=inv['sku'],
            product_name=inv.get('productName', ''),
            variant_name=inv.get('variantName', ''),
            source_id=inv['sourceId'],
            quantity_available=inv['quantityAvailable'],
            quantity_committed=inv['quantityCommitted'],
            unit_price=float(inv['unitPrice'] or 0)
        ) for inv in data.get('inventory', []) if inv.get('sku')
    ]

    # ── Velocity — from real 30-day order data ───────────────────────────────
    # Replaces the previous MD5-hash pseudorandom fake.
    # The /api/internal/velocity endpoint aggregates actual UnifiedOrder data.
    raw_velocity = get_velocity(merchant_id)

    velocity_map: dict[str, OrderVelocitySignal] = {}

    # For each SKU in inventory, use the real velocity if available.
    # Fall back to a conservative estimate (0.5 units/day) only if no orders exist yet.
    total_orders = data.get('orderMetrics', {}).get('totalOrders', 0)
    sku_count = max(1, len(inventory))
    fallback_daily = max(0.5, (total_orders / sku_count) / 30)

    for inv in inventory:
        if not inv.sku:
            continue
        real = raw_velocity.get(inv.sku)
        if real and real.get('daily_velocity', 0) > 0:
            velocity_map[inv.sku] = OrderVelocitySignal(
                sku=inv.sku,
                units_sold_30d=int(real['units_sold_30d']),
                daily_velocity=float(real['daily_velocity'])
            )
        else:
            # Conservative fallback for SKUs with no order history yet
            velocity_map[inv.sku] = OrderVelocitySignal(
                sku=inv.sku,
                units_sold_30d=int(fallback_daily * 30),
                daily_velocity=round(fallback_daily, 2)
            )

    # ── Campaigns ────────────────────────────────────────────────────────────
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
