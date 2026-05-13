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
