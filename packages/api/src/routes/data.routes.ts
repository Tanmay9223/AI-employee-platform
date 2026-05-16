import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function dataRoutes(fastify: FastifyInstance) {

  // Get revenue summary
  fastify.get('/revenue/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    const { from, to } = req.query as { from?: string; to?: string }

    const where = {
      merchantId,
      status: { in: ['paid', 'fulfilled'] },
      ...(from || to ? {
        orderedAt: {
          ...(from ? { gte: new Date(from) } : {}),
          ...(to ? { lte: new Date(to) } : {})
        }
      } : {})
    }

    const result = await prisma.unifiedOrder.aggregate({
      where,
      _sum: { totalAmount: true },
      _count: { id: true },
      _avg: { totalAmount: true }
    })

    return {
      totalRevenue: result._sum.totalAmount,
      orderCount: result._count.id,
      avgOrderValue: result._avg.totalAmount,
      currency: 'USD',
      sourceConnector: 'shopify',
      citationRef: `shopify:unified_orders:${from || 'all'}:${to || 'now'}`
    }
  })

  // Get orders
  fastify.get('/orders/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    const { cursor, limit = '20' } = req.query as { cursor?: string; limit?: string }
    const take = parseInt(limit)

    const orders = await prisma.unifiedOrder.findMany({
      where: { merchantId },
      orderBy: { orderedAt: 'desc' },
      take: take + 1,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {})
    })

    let nextCursor: string | undefined = undefined
    if (orders.length > take) {
      const nextItem = orders.pop()
      nextCursor = nextItem?.id
    }

    return {
      data: orders.map((o: typeof orders[number]) => ({
        ...o,
        totalAmount: o.totalAmount != null ? Number(o.totalAmount) : null,
        subtotalAmount: o.subtotalAmount != null ? Number(o.subtotalAmount) : null,
        taxAmount: o.taxAmount != null ? Number(o.taxAmount) : null,
        citationRef: `shopify:unified_orders:${o.sourceId}`
      })),
      nextCursor
    }
  })

  // Get campaigns
  fastify.get('/campaigns/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    const { cursor, limit = '20' } = req.query as { cursor?: string; limit?: string }
    const take = parseInt(limit)

    const campaigns = await prisma.unifiedCampaign.findMany({
      where: { merchantId },
      orderBy: { periodStart: 'desc' },
      take: take + 1,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {})
    })

    let nextCursor: string | undefined = undefined
    if (campaigns.length > take) {
      const nextItem = campaigns.pop()
      nextCursor = nextItem?.id
    }

    return {
      data: campaigns.map((c: typeof campaigns[number]) => ({
        ...c,
        impressions: c.impressions != null ? Number(c.impressions) : null,
        clicks: c.clicks != null ? Number(c.clicks) : null,
        spendAmount: c.spendAmount != null ? Number(c.spendAmount) : null,
        conversionValue: c.conversionValue != null ? Number(c.conversionValue) : null,
        roas: c.roas != null ? Number(c.roas) : null,
        revenueAttributed: c.revenueAttributed != null ? Number(c.revenueAttributed) : null,
        citationRef: `${c.sourceConnector}:unified_campaigns:${c.sourceId}`
      })),
      nextCursor
    }
  })

  // Get inventory
  fastify.get('/inventory/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    const { cursor, limit = '20' } = req.query as { cursor?: string; limit?: string }
    const take = parseInt(limit)

    const inventory = await prisma.unifiedInventory.findMany({
      where: { merchantId },
      orderBy: { quantityAvailable: 'asc' },
      take: take + 1,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {})
    })

    let nextCursor: string | undefined = undefined
    if (inventory.length > take) {
      const nextItem = inventory.pop()
      nextCursor = nextItem?.id
    }

    return {
      data: inventory.map((inv: typeof inventory[number]) => ({
        ...inv,
        unitPrice: inv.unitPrice != null ? Number(inv.unitPrice) : null,
        citationRef: `shopify:unified_inventory:${inv.sourceId}`,
        isLowStock: inv.quantityAvailable < 50,
        isCritical: inv.quantityAvailable < 10
      })),
      nextCursor
    }
  })

  // Get dashboard summary
  fastify.get('/summary/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const [revenueResult, customerCount, campaignCount, lowStockCount] = await Promise.all([
      prisma.unifiedOrder.aggregate({
        where: { merchantId, orderedAt: { gte: thirtyDaysAgo } },
        _sum: { totalAmount: true },
        _count: { id: true }
      }),
      prisma.unifiedCustomer.count({ where: { merchantId } }),
      prisma.unifiedCampaign.count({ where: { merchantId } }),
      prisma.unifiedInventory.count({ where: { merchantId, quantityAvailable: { lt: 50 } } })
    ])

    return {
      revenue30d: revenueResult._sum.totalAmount || 0,
      orders30d: revenueResult._count.id,
      totalCustomers: customerCount,
      activeCampaigns: campaignCount,
      lowStockSkus: lowStockCount,
      dataAsOf: new Date().toISOString()
    }
  })
}
