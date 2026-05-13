import { FastifyInstance } from 'fastify'

const AGENT_SERVICE_URL = process.env.AGENT_SERVICE_URL || 'http://localhost:8000'

export async function agentRoutes(fastify: FastifyInstance) {

  // Trigger agent run manually
  fastify.post('/run/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    
    const response = await fetch(`${AGENT_SERVICE_URL}/agent/run/sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ merchant_id: merchantId, triggered_by: 'manual' })
    })
    
    return response.json()
  })

  // Get pending recommendations
  fastify.get('/recommendations/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    const { status = 'pending' } = req.query as { status?: string }
    
    // Now querying Prisma directly instead of Python DB
    const { prisma } = await import('../lib/prisma')
    const recs = await prisma.agentRecommendation.findMany({
      where: { merchantId, status },
      orderBy: { createdAt: 'desc' }
    })

    return recs.map(r => ({
      ...r,
      daysToDepletion: r.daysToDepletion != null ? Number(r.daysToDepletion) : null,
      confidenceScore: r.confidenceScore != null ? Number(r.confidenceScore) : null,
      revenueAtRisk: r.revenueAtRisk != null ? Number(r.revenueAtRisk) : null,
    }))
  })

  // Approve/dismiss recommendation
  fastify.patch('/recommendations/:id', async (req, reply) => {
    const { id } = req.params as { id: string }
    const { status, reviewedBy = 'user' } = req.body as { status: string; reviewedBy?: string }
    
    const { prisma } = await import('../lib/prisma')
    await prisma.agentRecommendation.update({
      where: { id },
      data: { status, reviewedAt: new Date(), reviewedBy }
    })
    return { status: 'updated' }
  })

  // Get run logs
  fastify.get('/logs/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    const { prisma } = await import('../lib/prisma')
    return prisma.agentRunLog.findMany({
      where: { merchantId },
      orderBy: { startedAt: 'desc' },
      take: 10
    })
  })
}
