import { llm } from '../lib/llm-provider'

export type Intent =
  | 'query_revenue'
  | 'query_campaigns'
  | 'query_inventory'
  | 'compute_cac'
  | 'compute_roas'
  | 'compute_refund_rate'
  | 'update_recommendation'
  | 'general_greeting'
  | 'unknown'

export interface ClassifiedIntent {
  intent: Intent
  dateFrom?: string
  dateTo?: string
  confidence: number
  recommendationId?: string
  recommendationStatus?: string
}

export async function classifyIntent(userMessage: string): Promise<ClassifiedIntent> {
  const today = new Date().toISOString().split('T')[0]

  const prompt = `You are an intent classifier for a D2C business analytics platform.
Classify this user message into one of these intents:
- query_revenue: asking about sales, revenue, GMV, orders
- query_campaigns: asking about ads, campaigns, ROAS, Meta, Klaviyo
- query_inventory: asking about stock, inventory, SKUs, products
- compute_cac: asking about customer acquisition cost, cost per customer
- compute_roas: asking about blended ROAS, return on ad spend
- compute_refund_rate: asking about refunds, returns
- update_recommendation: user wants to approve, dismiss, or snooze an agent recommendation
- general_greeting: hello, hi, thanks
- unknown: anything else

Also extract:
- date ranges if mentioned (format: YYYY-MM-DD)
- for update_recommendation: extract recommendationId (UUID) and recommendationStatus (approved/dismissed/snoozed) if present

Today is ${today}.

Respond ONLY with valid JSON, no other text:
{"intent": "...", "dateFrom": "YYYY-MM-DD or null", "dateTo": "YYYY-MM-DD or null", "confidence": 0.0-1.0, "recommendationId": "uuid or null", "recommendationStatus": "approved|dismissed|snoozed or null"}

User message: "${userMessage}"`

  try {
    const response = await llm.classify(prompt)
    const clean = response.replace(/```json|```/g, '').trim()
    return JSON.parse(clean)
  } catch {
    return { intent: 'unknown', confidence: 0.5 }
  }
}
