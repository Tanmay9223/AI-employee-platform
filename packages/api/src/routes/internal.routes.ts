import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function internalRoutes(fastify: FastifyInstance) {

  // Fetch all active merchants
  fastify.get('/merchants', async (req, reply) => {
    const merchants = await prisma.merchant.findMany({
      select: { id: true, name: true }
    })
    return merchants
  })

  // Fetch signals for Python agent
  fastify.get('/signals/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }

    const inventory = await prisma.unifiedInventory.findMany({
      where: { merchantId },
      orderBy: { quantityAvailable: 'asc' }
    })

    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const recentOrders = await prisma.unifiedOrder.aggregate({
      where: {
        merchantId,
        orderedAt: { gte: thirtyDaysAgo },
        status: { in: ['paid', 'fulfilled'] }
      },
      _count: { id: true },
      _avg: { totalAmount: true }
    })

    const activeCampaigns = await prisma.unifiedCampaign.findMany({
      where: { merchantId, status: { in: ['active', 'completed'] } },
      orderBy: { spendAmount: 'desc' }
    })

    // Serialize BigInt fields (impressions, clicks) to Number for JSON compatibility
    const serializedCampaigns = activeCampaigns.map(c => ({
      ...c,
      impressions: c.impressions != null ? Number(c.impressions) : null,
      clicks: c.clicks != null ? Number(c.clicks) : null,
      spendAmount: c.spendAmount != null ? Number(c.spendAmount) : null,
      conversionValue: c.conversionValue != null ? Number(c.conversionValue) : null,
      roas: c.roas != null ? Number(c.roas) : null,
      revenueAttributed: c.revenueAttributed != null ? Number(c.revenueAttributed) : null,
    }))

    return {
      inventory,
      orderMetrics: {
        totalOrders: recentOrders._count.id,
        avgOrderValue: recentOrders._avg.totalAmount || 0
      },
      campaigns: serializedCampaigns
    }
  })

  // Save recommendations from agent
  fastify.post('/recommendations', async (req, reply) => {
    const data = req.body as any
    await prisma.agentRecommendation.create({ data })
    return { status: 'ok' }
  })

  // Save agent run logs
  fastify.post('/logs', async (req, reply) => {
    const data = req.body as any
    await prisma.agentRunLog.create({
      data: {
        ...data,
        startedAt: new Date(data.startedAt),
        completedAt: data.completedAt ? new Date(data.completedAt) : new Date(),
      }
    })
    return { status: 'ok' }
  })
}
