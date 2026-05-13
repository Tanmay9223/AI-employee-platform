import { BaseConnector, SyncMetadata, ConnectorHealth } from './base.connector'

const MOCK_API_URL = process.env.API_URL || 'http://localhost:3001'

export class KlaviyoConnector extends BaseConnector {
  readonly connectorId = 'klaviyo'
  readonly version = '2024-01'
  readonly displayName = 'Klaviyo'

  async fetchOrders(merchantId: string, cursor?: string) { return [] }

  async fetchCampaigns(merchantId: string) {
    const res = await fetch(`${MOCK_API_URL}/api/mock/klaviyo/campaigns?merchantId=${merchantId}`)
    const data = await res.json()
    return data.data || []
  }

  async fetchInventory(merchantId: string) { return [] }

  normalize(raw: any, metadata: SyncMetadata) {
    return { ...raw, ...metadata }
  }

  async healthCheck(): Promise<ConnectorHealth> {
    return { status: 'healthy', lastChecked: new Date(), message: 'Simulated connector active' }
  }
}
