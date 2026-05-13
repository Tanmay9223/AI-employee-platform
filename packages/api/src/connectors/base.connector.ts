export interface SyncMetadata {
  merchantId: string
  connectorType: string
  syncedAt: Date
  connectorVersion: string
}

export interface ConnectorHealth {
  status: 'healthy' | 'degraded' | 'down'
  lastChecked: Date
  message?: string
}

export abstract class BaseConnector {
  abstract readonly connectorId: string
  abstract readonly version: string
  abstract readonly displayName: string

  // For real connectors: implement API calls
  // For our demo: reads from seed data files
  abstract fetchOrders(merchantId: string, cursor?: string): Promise<any[]>
  abstract fetchCampaigns(merchantId: string, cursor?: string): Promise<any[]>
  abstract fetchInventory(merchantId: string): Promise<any[]>
  abstract normalize(raw: any, metadata: SyncMetadata): any
  abstract healthCheck(): Promise<ConnectorHealth>
}
