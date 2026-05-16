import { BaseConnector, SyncMetadata, ConnectorHealth } from './base.connector'

const MOCK_API_URL = process.env.API_URL || 'http://localhost:3001'

export class MetaAdsConnector extends BaseConnector {
  readonly connectorId = 'meta_ads'
  readonly version = '2024-01'
  readonly displayName = 'Meta Ads'

  async fetchOrders(merchantId: string, cursor?: string) { return [] }

  async fetchCampaigns(merchantId: string) {
    const res = await fetch(`${MOCK_API_URL}/api/mock/meta/campaigns?merchantId=${merchantId}`)
    const data = await res.json() as any
    return data.data || []
  }

  async fetchInventory(merchantId: string) { return [] }

  /**
   * Maps raw Meta Ads campaign fields → UnifiedCampaign shape.
   * Meta-specific field names (spend, impressions, clicks, purchase_roas) → canonical schema.
   */
  normalize(raw: any, metadata: SyncMetadata): any {
    const spend = parseFloat(raw.spendAmount ?? raw.spend ?? raw.amount_spent ?? 0)
    const conversionValue = parseFloat(raw.conversionValue ?? raw.purchase_roas?.[0]?.value ?? raw.action_values?.[0]?.value ?? 0)
    const roas = spend > 0 ? conversionValue / spend : (parseFloat(raw.roas ?? 0))
    const conversions = parseInt(raw.conversions ?? raw.actions?.find((a: any) => a.action_type === 'purchase')?.value ?? 0)

    return {
      sourceId: raw.sourceId || raw.id,
      sourceConnector: metadata.connectorType,      // 'meta_ads'
      sourceSyncedAt: metadata.syncedAt,
      connectorVersion: metadata.connectorVersion,
      name: raw.name || raw.campaign_name,
      type: 'paid_social',
      status: (raw.status || raw.effective_status || 'unknown').toLowerCase(),
      channel: raw.channel || raw.publisher_platform || 'facebook',
      periodStart: raw.periodStart ? new Date(raw.periodStart) : new Date(raw.date_start || Date.now()),
      periodEnd: raw.periodEnd ? new Date(raw.periodEnd) : new Date(raw.date_stop || Date.now()),
      spendAmount: spend,
      impressions: raw.impressions ? BigInt(raw.impressions) : null,
      clicks: raw.clicks ? BigInt(raw.clicks) : null,
      conversions,
      conversionValue,
      roas,
      rawPayload: raw,
    }
  }

  async healthCheck(): Promise<ConnectorHealth> {
    try {
      const res = await fetch(`${MOCK_API_URL}/api/mock/meta/campaigns?merchantId=health-check`)
      return {
        status: res.ok ? 'healthy' : 'degraded',
        lastChecked: new Date(),
        message: res.ok ? 'Mock Meta Ads API reachable' : `Returned ${res.status}`
      }
    } catch (e: any) {
      return { status: 'down', lastChecked: new Date(), message: e.message }
    }
  }
}
