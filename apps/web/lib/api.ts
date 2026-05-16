import { API_URL } from './config'

async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

export const api = {
  getSummary: (merchantId: string) =>
    apiFetch(`/api/data/summary/${merchantId}`),

  getRevenue: (merchantId: string, from?: string, to?: string) =>
    apiFetch(`/api/data/revenue/${merchantId}?${from ? `from=${from}&` : ''}${to ? `to=${to}` : ''}`),

  getCampaigns: (merchantId: string, cursor?: string, limit?: number) =>
    apiFetch(`/api/data/campaigns/${merchantId}?${cursor ? `cursor=${cursor}&` : ''}${limit ? `limit=${limit}` : ''}`),

  getInventory: (merchantId: string, cursor?: string, limit?: number) =>
    apiFetch(`/api/data/inventory/${merchantId}?${cursor ? `cursor=${cursor}&` : ''}${limit ? `limit=${limit}` : ''}`),

  getOrders: (merchantId: string, cursor?: string, limit?: number) =>
    apiFetch(`/api/data/orders/${merchantId}?${cursor ? `cursor=${cursor}&` : ''}${limit ? `limit=${limit}` : ''}`),

  toggleShopifyWebhooks: (enabled: boolean) =>
    apiFetch('/api/connectors/shopify/webhooks', {
      method: 'POST',
      body: JSON.stringify({ enabled })
    }),

  syncHistoricalData: (startDate: string, endDate: string) =>
    apiFetch('/api/connectors/shopify/sync-historical', {
      method: 'POST',
      body: JSON.stringify({ startDate, endDate })
    }),

  sendMessage: (merchantId: string, message: string, history: { role: string; content: string }[]) =>
    apiFetch('/api/chat/message', {
      method: 'POST',
      body: JSON.stringify({ merchantId, message, history }),
    }),

  runAgent: (merchantId: string) =>
    apiFetch(`/api/agent/run/${merchantId}`, { method: 'POST' }),

  getRecommendations: (merchantId: string, status = 'pending') =>
    apiFetch(`/api/agent/recommendations/${merchantId}?status=${status}`),

  updateRecommendation: (id: string, status: string) =>
    apiFetch(`/api/agent/recommendations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),

  getRunLogs: (merchantId: string) =>
    apiFetch(`/api/agent/logs/${merchantId}`),
}
