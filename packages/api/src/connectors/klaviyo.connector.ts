import { BaseConnector, SyncMetadata, ConnectorHealth } from './base.connector'

const MOCK_API_URL = process.env.API_URL || 'http://localhost:3001'

export class KlaviyoConnector extends BaseConnector {
  readonly connectorId = 'klaviyo'
  readonly version = '2024-01'
  readonly displayName = 'Klaviyo'

  async fetchOrders(merchantId: string, cursor?: string) { return [] }

  async fetchCampaigns(merchantId: string) {
    const res = await fetch(`${MOCK_API_URL}/api/mock/klaviyo/campaigns?merchantId=${merchantId}`)
    const data = await res.json() as any
    return data.data || []
  }

  async fetchInventory(merchantId: string) { return [] }

  /**
   * Maps raw Klaviyo campaign fields → UnifiedCampaign shape.
   * Klaviyo uses email-specific metrics (sends, opens, revenue_attributed)
   * rather than ad-style metrics (spend, impressions, roas).
   */
  normalize(raw: any, metadata: SyncMetadata): any {
    const sends = parseInt(raw.sends ?? raw.statistics?.recipients ?? 0)
    const opens = parseInt(raw.opens ?? raw.statistics?.opens ?? 0)
    const revenueAttributed = parseFloat(raw.revenueAttributed ?? raw.revenue_attributed ?? raw.statistics?.revenue ?? 0)
    const clickRate = opens > 0 && sends > 0 ? opens / sends : 0

    return {
      sourceId: raw.sourceId || raw.id,
      sourceConnector: metadata.connectorType,      // 'klaviyo'
      sourceSyncedAt: metadata.syncedAt,
      connectorVersion: metadata.connectorVersion,
      name: raw.name,
      type: raw.type ?? (raw.campaign_type === 'SMS' ? 'sms' : 'email'),
      status: (raw.status || 'unknown').toLowerCase(),
      channel: raw.channel ?? (raw.campaign_type === 'SMS' ? 'sms' : 'email'),
      periodStart: raw.periodStart ? new Date(raw.periodStart) : new Date(raw.send_time || raw.scheduled_at || Date.now()),
      periodEnd: raw.periodEnd ? new Date(raw.periodEnd) : new Date(raw.send_time || raw.scheduled_at || Date.now()),
      // Email campaigns have no ad spend — these are left null
      spendAmount: null,
      impressions: null,
      clicks: raw.clicks ? BigInt(raw.clicks) : null,
      conversions: raw.conversions ?? null,
      conversionValue: null,
      roas: null,
      // Email-specific metrics
      sends,
      opens,
      revenueAttributed,
      rawPayload: raw,
    }
  }

  async healthCheck(): Promise<ConnectorHealth> {
    try {
      const res = await fetch(`${MOCK_API_URL}/api/mock/klaviyo/campaigns?merchantId=health-check`)
      return {
        status: res.ok ? 'healthy' : 'degraded',
        lastChecked: new Date(),
        message: res.ok ? 'Mock Klaviyo API reachable' : `Returned ${res.status}`
      }
    } catch (e: any) {
      return { status: 'down', lastChecked: new Date(), message: e.message }
    }
  }
}
