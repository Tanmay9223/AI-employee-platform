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

  getCampaigns: (merchantId: string) =>
    apiFetch(`/api/data/campaigns/${merchantId}`),

  getInventory: (merchantId: string) =>
    apiFetch(`/api/data/inventory/${merchantId}`),

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
