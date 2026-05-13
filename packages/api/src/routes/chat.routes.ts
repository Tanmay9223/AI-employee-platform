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
          model: 'gemini-3-flash',
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
