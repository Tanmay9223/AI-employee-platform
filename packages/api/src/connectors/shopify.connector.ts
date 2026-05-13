import { BaseConnector, SyncMetadata, ConnectorHealth } from './base.connector'
import { prisma } from '../lib/prisma'

const MOCK_API_URL = process.env.API_URL || 'http://localhost:3001'

export class ShopifyConnector extends BaseConnector {
  readonly connectorId = 'shopify'
  readonly version = '2024-01'
  readonly displayName = 'Shopify'

  // Uses our internal mock API to simulate network requests
  async fetchOrders(merchantId: string, cursor?: string) {
    const res = await fetch(`${MOCK_API_URL}/api/mock/shopify/orders?merchantId=${merchantId}`)
    const data = await res.json()
    return data.orders || []
  }

  async fetchCampaigns(merchantId: string) { return [] }

  async fetchInventory(merchantId: string) {
    const res = await fetch(`${MOCK_API_URL}/api/mock/shopify/inventory?merchantId=${merchantId}`)
    const data = await res.json()
    return data.inventory || []
  }

  normalize(raw: any, metadata: SyncMetadata) {
    return { ...raw, ...metadata }
  }

  async healthCheck(): Promise<ConnectorHealth> {
    return { status: 'healthy', lastChecked: new Date(), message: 'Simulated connector active' }
  }
}
