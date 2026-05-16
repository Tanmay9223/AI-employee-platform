import { BaseConnector, SyncMetadata, ConnectorHealth } from './base.connector'

const MOCK_API_URL = process.env.API_URL || 'http://localhost:3001'

export class ShopifyConnector extends BaseConnector {
  readonly connectorId = 'shopify'
  readonly version = '2024-01'
  readonly displayName = 'Shopify'

  async fetchOrders(merchantId: string, cursor?: string) {
    const params = new URLSearchParams({ merchantId })
    if (cursor) params.set('cursor', cursor)
    const res = await fetch(`${MOCK_API_URL}/api/mock/shopify/orders?${params}`)
    const data = await res.json() as any
    return data.orders || []
  }

  async fetchCampaigns(merchantId: string) { return [] }

  async fetchInventory(merchantId: string) {
    const res = await fetch(`${MOCK_API_URL}/api/mock/shopify/inventory?merchantId=${merchantId}`)
    const data = await res.json() as any
    return data.inventory || []
  }

  /**
   * Maps raw Shopify order/inventory fields → UnifiedOrder / UnifiedInventory shape.
   * Handles both camelCase (our seed format) and snake_case (real Shopify REST API).
   */
  normalize(raw: any, metadata: SyncMetadata): any {
    // Detect inventory vs order by field presence
    if ('quantityAvailable' in raw || 'quantity_available' in raw) {
      return {
        sourceId: raw.sourceId || raw.id,
        sourceConnector: metadata.connectorType,
        sourceSyncedAt: metadata.syncedAt,
        connectorVersion: metadata.connectorVersion,
        sku: raw.sku,
        productName: raw.productName || raw.product_name || raw.title,
        variantName: raw.variantName || raw.variant_name || raw.variant_title,
        quantityAvailable: raw.quantityAvailable ?? raw.quantity_available ?? 0,
        quantityCommitted: raw.quantityCommitted ?? raw.quantity_committed ?? 0,
        quantityIncoming: raw.quantityIncoming ?? raw.quantity_incoming ?? 0,
        unitCost: raw.unitCost ?? raw.cost ?? null,
        unitPrice: raw.unitPrice ?? raw.price ?? null,
        rawPayload: raw,
      }
    }

    // Order record
    const total = parseFloat(raw.totalAmount ?? raw.total_price ?? raw.total ?? 0)
    const subtotal = parseFloat(raw.subtotalAmount ?? raw.subtotal_price ?? total * 0.9)
    const tax = parseFloat(raw.taxAmount ?? raw.total_tax ?? total * 0.1)
    const discount = parseFloat(raw.discountAmount ?? raw.total_discounts ?? 0)
    const refunded = parseFloat(raw.refundedAmount ?? raw.total_refunded ?? 0)

    return {
      sourceId: raw.sourceId || raw.id,
      sourceConnector: metadata.connectorType,
      sourceSyncedAt: metadata.syncedAt,
      connectorVersion: metadata.connectorVersion,
      orderNumber: raw.orderNumber || raw.order_number || raw.name,
      status: (raw.status || raw.financial_status || 'unknown').toLowerCase(),
      currency: raw.currency || 'USD',
      subtotalAmount: subtotal,
      discountAmount: discount,
      taxAmount: tax,
      totalAmount: total,
      refundedAmount: refunded,
      itemCount: raw.itemCount ?? raw.item_count ?? raw.line_items?.length ?? 1,
      orderedAt: raw.orderedAt ? new Date(raw.orderedAt) : raw.created_at ? new Date(raw.created_at) : null,
      fulfilledAt: raw.fulfilledAt ? new Date(raw.fulfilledAt) : raw.fulfilled_at ? new Date(raw.fulfilled_at) : null,
      cancelledAt: raw.cancelledAt ? new Date(raw.cancelledAt) : raw.cancelled_at ? new Date(raw.cancelled_at) : null,
      rawPayload: raw,
    }
  }

  async healthCheck(): Promise<ConnectorHealth> {
    try {
      const res = await fetch(`${MOCK_API_URL}/health`)
      return {
        status: res.ok ? 'healthy' : 'degraded',
        lastChecked: new Date(),
        message: res.ok ? 'Mock Shopify API reachable' : `Mock API returned ${res.status}`
      }
    } catch (e: any) {
      return { status: 'down', lastChecked: new Date(), message: e.message }
    }
  }
}
