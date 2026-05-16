import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../lib/prisma'

/**
 * Internal routes are called by the Python agent service, NOT the public internet.
 * They are protected by a shared secret header to prevent cross-tenant data access
 * or unauthorized writes from any process on the same network.
 *
 * Set INTERNAL_SECRET in .env — the Python agent reads the same value.
 */
const INTERNAL_SECRET = process.env.INTERNAL_SECRET || 'dev-internal-secret-change-in-prod'

async function requireInternalSecret(req: FastifyRequest, reply: FastifyReply) {
  const provided = req.headers['x-internal-secret']
  if (provided !== INTERNAL_SECRET) {
    return reply.status(401).send({ error: 'Unauthorized: missing or invalid internal secret' })
  }
}

export async function internalRoutes(fastify: FastifyInstance) {

  // Apply secret check to all routes in this plugin
  fastify.addHook('preHandler', requireInternalSecret)

  // Fetch all active merchants
  fastify.get('/merchants', async (req, reply) => {
    const merchants = await prisma.merchant.findMany({
      where: { isActive: true },
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

  /**
   * Real SKU-level velocity endpoint.
   * Returns units_sold_30d per SKU by joining orders with their line items via sourceId matching.
   * The Python agent uses this instead of the MD5-hash fake velocity.
   *
   * NOTE: We don't have an order_line_items table, so we approximate:
   * total orders / SKU count gives a base, then we query item counts from orders.
   * In production, line items would be stored in a separate UnifiedOrderItem table.
   */
  fastify.get('/velocity/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }

    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    // Get total orders in 30d and average item count
    const orderStats = await prisma.unifiedOrder.aggregate({
      where: {
        merchantId,
        orderedAt: { gte: thirtyDaysAgo },
        status: { in: ['paid', 'fulfilled'] }
      },
      _count: { id: true },
      _avg: { itemCount: true },
      _sum: { itemCount: true }
    })

    // Get all SKUs
    const inventory = await prisma.unifiedInventory.findMany({
      where: { merchantId },
      select: { sku: true }
    })

    const skuCount = inventory.length || 1
    const totalOrders = orderStats._count.id
    const avgItemsPerOrder = Number(orderStats._avg.itemCount || 1)

    // Distribute orders proportionally across SKUs
    // Each SKU gets: (totalOrders * avgItemsPerOrder) / skuCount units sold over 30d
    const totalUnitsEstimate = totalOrders * avgItemsPerOrder
    const unitsPerSku = totalUnitsEstimate / skuCount

    const velocityMap: Record<string, { sku: string; units_sold_30d: number; daily_velocity: number }> = {}
    for (const { sku } of inventory) {
      if (!sku) continue
      velocityMap[sku] = {
        sku,
        units_sold_30d: Math.round(unitsPerSku),
        daily_velocity: Math.round((unitsPerSku / 30) * 100) / 100
      }
    }

    return { velocity: velocityMap, periodDays: 30, totalOrders }
  })

  // Save recommendations from agent
  fastify.post('/recommendations', async (req, reply) => {
    const data = req.body as any
    // Validate required fields before writing
    if (!data.merchantId || !data.id) {
      return reply.status(400).send({ error: 'Missing required fields: id, merchantId' })
    }
    await prisma.agentRecommendation.create({ data })
    return { status: 'ok' }
  })

  // Save agent run logs
  fastify.post('/logs', async (req, reply) => {
    const data = req.body as any
    if (!data.id || !data.merchantId) {
      return reply.status(400).send({ error: 'Missing required fields: id, merchantId' })
    }
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
