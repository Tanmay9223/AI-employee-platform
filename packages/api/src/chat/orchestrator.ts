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
  
  let friendlyText = `Here's a summary of the data I found:\n\n`
  for (const [key, value] of Object.entries(data)) {
    const friendlyKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
    friendlyText += `- **${friendlyKey}**: ${value}\n`
  }
  
  friendlyText += `\n*Citation: ${toolResults[0].citationRef}*`
  
  return friendlyText
}
