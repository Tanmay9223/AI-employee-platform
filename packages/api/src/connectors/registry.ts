import { ShopifyConnector } from './shopify.connector'
import { MetaAdsConnector } from './meta-ads.connector'
import { KlaviyoConnector } from './klaviyo.connector'
import { BaseConnector } from './base.connector'

class ConnectorRegistry {
  private connectors = new Map<string, BaseConnector>()

  constructor() {
    this.register(new ShopifyConnector())
    this.register(new MetaAdsConnector())
    this.register(new KlaviyoConnector())
  }

  private register(connector: BaseConnector) {
    this.connectors.set(connector.connectorId, connector)
  }

  get(connectorId: string): BaseConnector {
    const connector = this.connectors.get(connectorId)
    if (!connector) throw new Error(`Connector not found: ${connectorId}`)
    return connector
  }

  getAll(): BaseConnector[] {
    return Array.from(this.connectors.values())
  }
}

export const connectorRegistry = new ConnectorRegistry()
