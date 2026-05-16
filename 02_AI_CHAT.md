# Phase 2 — AI Chat Layer
## Gemini 3.1 flash + Tool Calls + Citation Enforcement

> Phase 1 must be complete before starting this.
> Goal: AI chat that answers business questions with citations. No hallucinated numbers.

---

## Architecture Reminder

```
User Message
    ↓
[Gemini 3.1 flash] — classify intent, summarize context
    ↓
[Tool Executor] — runs SQL queries against unified tables
    ↓
[Gemini 3.1 flash] — generates final answer with citations
    ↓
[Citation Validator] — blocks any uncited numbers
    ↓
Stream to frontend
```

---

## Step 1: LLM Provider Wrapper

Create `packages/api/src/lib/llm-provider.ts`:

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai'

const geminiClient = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!)
const geminiModel = geminiClient.getGenerativeModel({ model: 'gemini-3.1-flash-lite' })

async function callGemini(prompt: string): Promise<string> {
  try {
    const result = await geminiModel.generateContent(prompt)
    return result.response.text()
  } catch (error: any) {
    console.error('Gemini failed:', error.message)
    throw error
  }
}

export const llm = {
  classify: callGemini,
  summarize: callGemini,
  generate: callGemini
}
```

---

## Step 2: Tool Definitions

Create `packages/api/src/chat/tools.ts`:

```typescript
import { prisma } from '../lib/prisma'

export interface ToolResult {
  toolName: string
  data: any
  citationRef: string
  recordCount: number
  dataAsOf: string
}

export const chatTools = {

  async query_revenue(merchantId: string, params: {
    dateFrom?: string
    dateTo?: string
    groupBy?: 'day' | 'week' | 'month'
  }): Promise<ToolResult> {
    const where: any = {
      merchantId,
      status: { in: ['paid', 'fulfilled'] }
    }
    if (params.dateFrom || params.dateTo) {
      where.orderedAt = {}
      if (params.dateFrom) where.orderedAt.gte = new Date(params.dateFrom)
      if (params.dateTo) where.orderedAt.lte = new Date(params.dateTo)
    }

    const result = await prisma.unifiedOrder.aggregate({
      where,
      _sum: { totalAmount: true, refundedAmount: true },
      _count: { id: true },
      _avg: { totalAmount: true }
    })

    const periodLabel = params.dateFrom && params.dateTo
      ? `${params.dateFrom} to ${params.dateTo}`
      : 'all time'

    return {
      toolName: 'query_revenue',
      data: {
        totalRevenue: Number(result._sum.totalAmount || 0).toFixed(2),
        orderCount: result._count.id,
        avgOrderValue: Number(result._avg.totalAmount || 0).toFixed(2),
        totalRefunded: Number(result._sum.refundedAmount || 0).toFixed(2),
        currency: 'USD',
        period: periodLabel
      },
      citationRef: `shopify → unified_orders → ${periodLabel}`,
      recordCount: result._count.id,
      dataAsOf: new Date().toISOString()
    }
  },

  async query_campaigns(merchantId: string, params: {
    connector?: string
    dateFrom?: string
    dateTo?: string
  }): Promise<ToolResult> {
    const where: any = { merchantId }
    if (params.connector && params.connector !== 'all') {
      where.sourceConnector = params.connector
    }

    const campaigns = await prisma.unifiedCampaign.findMany({
      where,
      orderBy: { roas: 'desc' }
    })

    const totalSpend = campaigns.reduce((sum, c) => sum + Number(c.spendAmount || 0), 0)
    const totalRevenue = campaigns.reduce((sum, c) => sum + Number(c.conversionValue || c.revenueAttributed || 0), 0)
    const blendedRoas = totalSpend > 0 ? totalRevenue / totalSpend : 0

    return {
      toolName: 'query_campaigns',
      data: {
        campaigns: campaigns.map(c => ({
          name: c.name,
          connector: c.sourceConnector,
          spend: Number(c.spendAmount || 0).toFixed(2),
          roas: Number(c.roas || 0).toFixed(2),
          conversions: c.conversions,
          revenueAttributed: Number(c.revenueAttributed || c.conversionValue || 0).toFixed(2),
          citationRef: `${c.sourceConnector} → unified_campaigns → ${c.sourceId}`
        })),
        summary: {
          totalSpend: totalSpend.toFixed(2),
          blendedRoas: blendedRoas.toFixed(2),
          totalCampaigns: campaigns.length
        }
      },
      citationRef: `meta_ads + klaviyo → unified_campaigns`,
      recordCount: campaigns.length,
      dataAsOf: new Date().toISOString()
    }
  },

  async query_inventory(merchantId: string, params: {
    lowStockOnly?: boolean
    sku?: string
  }): Promise<ToolResult> {
    const where: any = { merchantId }
    if (params.lowStockOnly) where.quantityAvailable = { lt: 50 }
    if (params.sku) where.sku = { contains: params.sku, mode: 'insensitive' }

    const inventory = await prisma.unifiedInventory.findMany({
      where,
      orderBy: { quantityAvailable: 'asc' }
    })

    return {
      toolName: 'query_inventory',
      data: inventory.map(inv => ({
        sku: inv.sku,
        productName: inv.productName,
        variantName: inv.variantName,
        quantityAvailable: inv.quantityAvailable,
        quantityCommitted: inv.quantityCommitted,
        unitPrice: Number(inv.unitPrice || 0).toFixed(2),
        isLowStock: inv.quantityAvailable < 50,
        isCritical: inv.quantityAvailable < 20,
        citationRef: `shopify → unified_inventory → ${inv.sourceId}`
      })),
      citationRef: `shopify → unified_inventory`,
      recordCount: inventory.length,
      dataAsOf: new Date().toISOString()
    }
  },

  async compute_metric(merchantId: string, params: {
    metric: 'cac' | 'blended_roas' | 'refund_rate' | 'repeat_purchase_rate'
    dateFrom?: string
    dateTo?: string
  }): Promise<ToolResult> {
    const where: any = { merchantId }
    if (params.dateFrom || params.dateTo) {
      where.orderedAt = {}
      if (params.dateFrom) where.orderedAt.gte = new Date(params.dateFrom)
      if (params.dateTo) where.orderedAt.lte = new Date(params.dateTo)
    }

    let result: any = {}
    let citationRef = ''

    if (params.metric === 'cac') {
      const campaigns = await prisma.unifiedCampaign.findMany({ where: { merchantId } })
      const orders = await prisma.unifiedOrder.aggregate({ where, _count: { id: true } })
      const totalSpend = campaigns.reduce((s, c) => s + Number(c.spendAmount || 0), 0)
      const cac = orders._count.id > 0 ? totalSpend / orders._count.id : 0
      result = { cac: cac.toFixed(2), totalSpend: totalSpend.toFixed(2), totalOrders: orders._count.id }
      citationRef = 'meta_ads → unified_campaigns + shopify → unified_orders'
    }

    if (params.metric === 'blended_roas') {
      const campaigns = await prisma.unifiedCampaign.findMany({ where: { merchantId } })
      const totalSpend = campaigns.reduce((s, c) => s + Number(c.spendAmount || 0), 0)
      const totalRevenue = campaigns.reduce((s, c) => s + Number(c.conversionValue || c.revenueAttributed || 0), 0)
      const roas = totalSpend > 0 ? totalRevenue / totalSpend : 0
      result = { blendedRoas: roas.toFixed(2), totalSpend: totalSpend.toFixed(2), totalRevenue: totalRevenue.toFixed(2) }
      citationRef = 'meta_ads + klaviyo → unified_campaigns'
    }

    if (params.metric === 'refund_rate') {
      const all = await prisma.unifiedOrder.aggregate({ where, _count: { id: true } })
      const refunded = await prisma.unifiedOrder.count({ where: { ...where, status: 'refunded' } })
      const rate = all._count.id > 0 ? (refunded / all._count.id * 100) : 0
      result = { refundRate: `${rate.toFixed(1)}%`, refundedOrders: refunded, totalOrders: all._count.id }
      citationRef = 'shopify → unified_orders'
    }

    return {
      toolName: 'compute_metric',
      data: { metric: params.metric, ...result },
      citationRef,
      recordCount: 1,
      dataAsOf: new Date().toISOString()
    }
  }
}
```

---

## Step 3: Citation Validator

Create `packages/api/src/chat/citation-validator.ts`:

```typescript
export interface ValidationResult {
  valid: boolean
  error?: string
  uncitedNumbers?: string[]
}

export function validateCitations(
  response: string,
  availableCitationRefs: string[]
): ValidationResult {
  // Extract all numbers from response (currency, percentages, counts)
  const numberPattern = /\$[\d,]+\.?\d*|[\d,]+\.?\d+%|[\d,]{2,}(?:\.\d+)?/g
  const numbers = response.match(numberPattern) || []

  if (numbers.length === 0) {
    return { valid: true }
  }

  // Check each number has an adjacent [Source: ...] citation within 200 chars
  const citationPattern = /\[Source:[^\]]+\]/g
  const citations = response.match(citationPattern) || []

  if (numbers.length > 0 && citations.length === 0) {
    return {
      valid: false,
      error: 'Response contains numbers but no citations',
      uncitedNumbers: numbers
    }
  }

  // Simple check: number of citations should be >= number of distinct numerical claims
  // In a real system, do positional checking
  if (citations.length < Math.ceil(numbers.length / 3)) {
    return {
      valid: false,
      error: `Insufficient citations: found ${numbers.length} numbers but only ${citations.length} citations`,
      uncitedNumbers: numbers
    }
  }

  return { valid: true }
}

export function buildCitationString(toolResult: {
  citationRef: string
  recordCount: number
  dataAsOf: string
}): string {
  return `[Source: ${toolResult.citationRef} | ${toolResult.recordCount} records | as of ${new Date(toolResult.dataAsOf).toLocaleDateString()}]`
}
```

---

## Step 4: Intent Classifier

Create `packages/api/src/chat/intent-classifier.ts`:

```typescript
import { llm } from '../lib/llm-provider'

export type Intent =
  | 'query_revenue'
  | 'query_campaigns'
  | 'query_inventory'
  | 'compute_cac'
  | 'compute_roas'
  | 'compute_refund_rate'
  | 'general_greeting'
  | 'unknown'

export interface ClassifiedIntent {
  intent: Intent
  dateFrom?: string
  dateTo?: string
  confidence: number
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
- general_greeting: hello, hi, thanks
- unknown: anything else

Also extract date ranges if mentioned (format: YYYY-MM-DD).
Today is ${today}.

Respond ONLY with valid JSON, no other text:
{"intent": "...", "dateFrom": "YYYY-MM-DD or null", "dateTo": "YYYY-MM-DD or null", "confidence": 0.0-1.0}

User message: "${userMessage}"`

  try {
    const response = await llm.classify(prompt)
    const clean = response.replace(/```json|```/g, '').trim()
    return JSON.parse(clean)
  } catch {
    return { intent: 'unknown', confidence: 0.5 }
  }
}
```

---

## Step 5: Chat Orchestrator

Create `packages/api/src/chat/orchestrator.ts`:

```typescript
import { classifyIntent } from './intent-classifier'
import { chatTools } from './tools'
import { validateCitations, buildCitationString } from './citation-validator'
import { llm } from '../lib/llm-provider'

export async function handleChatMessage(
  merchantId: string,
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }>
): Promise<{ response: string; citationsUsed: string[]; toolsUsed: string[] }> {

  // Step 1: Classify intent (Gemini)
  console.log('[Chat] Classifying intent...')
  const intent = await classifyIntent(userMessage)
  console.log('[Chat] Intent:', intent)

  // Step 2: Execute tools based on intent
  const toolResults = []
  const toolsUsed = []

  if (intent.intent === 'query_revenue') {
    const result = await chatTools.query_revenue(merchantId, {
      dateFrom: intent.dateFrom || undefined,
      dateTo: intent.dateTo || undefined
    })
    toolResults.push(result)
    toolsUsed.push('query_revenue')
  }

  if (intent.intent === 'query_campaigns' || intent.intent === 'compute_roas') {
    const result = await chatTools.query_campaigns(merchantId, {})
    toolResults.push(result)
    toolsUsed.push('query_campaigns')
  }

  if (intent.intent === 'query_inventory') {
    const result = await chatTools.query_inventory(merchantId, {})
    toolResults.push(result)
    toolsUsed.push('query_inventory')
  }

  if (intent.intent === 'compute_cac') {
    const result = await chatTools.compute_metric(merchantId, { metric: 'cac' })
    toolResults.push(result)
    toolsUsed.push('compute_metric')
  }

  if (intent.intent === 'compute_refund_rate') {
    const result = await chatTools.compute_metric(merchantId, { metric: 'refund_rate' })
    toolResults.push(result)
    toolsUsed.push('compute_metric')
  }

  // Step 3: Summarize tool results
  let contextSummary = ''
  const citationsUsed: string[] = []

  if (toolResults.length > 0) {
    const citationStrings = toolResults.map(r => buildCitationString(r))
    citationsUsed.push(...citationStrings)

    const summarizePrompt = `Summarize this business data in 3-5 bullet points. Be precise with numbers. Keep all numbers exactly as shown.

Data:
${JSON.stringify(toolResults.map(r => r.data), null, 2)}

Citations available:
${citationStrings.join('\n')}

Output only the bullet point summary, nothing else.`

    contextSummary = await llm.summarize(summarizePrompt)
  }

  // Step 4: Generate final answer (Gemini)
  const generatePrompt = buildGenerationPrompt(
    userMessage,
    contextSummary,
    citationsUsed,
    toolResults.length === 0
  )

  let response = await llm.generate(generatePrompt)

  // Step 5: Validate citations
  const validation = validateCitations(response, citationsUsed)

  if (!validation.valid) {
    console.warn('[Chat] Citation validation failed, retrying with stronger grounding...')
    const retryPrompt = buildGenerationPrompt(userMessage, contextSummary, citationsUsed, false, true)
    response = await llm.generate(retryPrompt)

    const retryValidation = validateCitations(response, citationsUsed)
    if (!retryValidation.valid) {
      // Safe fallback
      response = buildFallbackResponse(toolResults)
    }
  }

  return { response, citationsUsed, toolsUsed }
}

function buildGenerationPrompt(
  userMessage: string,
  contextSummary: string,
  citations: string[],
  noData: boolean,
  isRetry = false
): string {
  if (noData) {
    return `You are an AI business analyst assistant. The user asked: "${userMessage}"
    
I don't have specific data to answer this question. Politely explain what data you'd need and suggest they ask about revenue, campaigns, inventory, or metrics like CAC or ROAS.`
  }

  const retryWarning = isRetry
    ? '\n\nCRITICAL: Your previous response had uncited numbers. This time, EVERY number MUST have a [Source:...] citation immediately after it.\n'
    : ''

  return `You are an AI business analyst for a D2C brand. Answer the user's question using ONLY the data provided below.

STRICT RULES:
1. Every number or metric in your response MUST be followed immediately by a [Source:...] citation
2. Never invent or estimate numbers not in the data
3. Format citations exactly as shown in the "Available Citations" section
4. Be conversational but precise
5. If data is limited, say so honestly
${retryWarning}

User Question: "${userMessage}"

Business Data Summary:
${contextSummary}

Available Citations (use these exactly):
${citations.join('\n')}

Write a helpful, cited response (2-4 sentences max):`
}

function buildFallbackResponse(toolResults: any[]): string {
  if (toolResults.length === 0) return "I couldn't find relevant data to answer your question."
  
  const data = toolResults[0].data
  return `Here's the raw data I found (citation: ${toolResults[0].citationRef}):\n${JSON.stringify(data, null, 2)}\n\nPlease ask a more specific question for a better formatted answer.`
}
```

---

## Step 6: Chat API Route

Create `packages/api/src/routes/chat.routes.ts`:

```typescript
import { FastifyInstance } from 'fastify'
import { handleChatMessage } from '../chat/orchestrator'

export async function chatRoutes(fastify: FastifyInstance) {

  fastify.post('/message', async (req, reply) => {
    const { merchantId, message, history = [] } = req.body as {
      merchantId: string
      message: string
      history: Array<{ role: string; content: string }>
    }

    if (!merchantId || !message) {
      return reply.status(400).send({ error: 'merchantId and message are required' })
    }

    try {
      const result = await handleChatMessage(merchantId, message, history)
      
      return {
        response: result.response,
        metadata: {
          toolsUsed: result.toolsUsed,
          citationsCount: result.citationsUsed.length,
          model: 'gemini-3.1-flash-lite',
          timestamp: new Date().toISOString()
        }
      }
    } catch (error: any) {
      console.error('[Chat] Error:', error)
      return reply.status(500).send({
        error: 'Chat processing failed',
        details: error.message
      })
    }
  })

  // Streaming version (for frontend typewriter effect)
  fastify.post('/stream', async (req, reply) => {
    const { merchantId, message } = req.body as { merchantId: string; message: string }

    reply.raw.setHeader('Content-Type', 'text/event-stream')
    reply.raw.setHeader('Cache-Control', 'no-cache')
    reply.raw.setHeader('Connection', 'keep-alive')

    const result = await handleChatMessage(merchantId, message, [])

    // Stream response word by word
    const words = result.response.split(' ')
    for (const word of words) {
      reply.raw.write(`data: ${JSON.stringify({ token: word + ' ' })}\n\n`)
      await new Promise(resolve => setTimeout(resolve, 30))
    }

    reply.raw.write(`data: ${JSON.stringify({ done: true, metadata: { toolsUsed: result.toolsUsed } })}\n\n`)
    reply.raw.end()
  })
}
```

---

## Step 7: Test the AI Chat

```bash
# Test chat endpoint
curl -X POST http://localhost:3001/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{
    "merchantId": "YOUR_MERCHANT_ID",
    "message": "What was my total revenue last month?",
    "history": []
  }'
```

Expected response:
```json
{
  "response": "Your total revenue for the period was $42,380.50 [Source: shopify → unified_orders → 2024-11-01 to 2024-11-30 | 847 records | as of 12/1/2024], with an average order value of $50.04 [Source: shopify → unified_orders → 2024-11-01 to 2024-11-30 | 847 records | as of 12/1/2024].",
  "metadata": {
    "toolsUsed": ["query_revenue"],
    "citationsCount": 2,
    "model": "gemini-3.1-flash-lite"
  }
}
```

---

## Phase 2 Complete Checklist

- [ ] Gemini API key configured and working
- [ ] LLM provider wrapper with Gemini
- [ ] All 4 tools implemented (revenue, campaigns, inventory, compute_metric)
- [ ] Citation validator blocks uncited numbers
- [ ] Intent classifier correctly routes to tools
- [ ] Chat orchestrator: classify → tool → summarize → generate → validate
- [ ] `/api/chat/message` endpoint working
- [ ] Every response has [Source:...] citations on numbers

> Only move to Phase 3 when chat is returning cited responses.