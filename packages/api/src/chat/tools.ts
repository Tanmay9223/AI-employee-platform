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
      status: { in: ['paid', 'fulfilled', 'PAID', 'FULFILLED', 'Paid', 'Fulfilled'] }
    }
    if (params.dateFrom || params.dateTo) {
      where.orderedAt = {}
      if (params.dateFrom) where.orderedAt.gte = new Date(params.dateFrom)
      if (params.dateTo) {
        const toDate = new Date(params.dateTo)
        toDate.setUTCHours(23, 59, 59, 999)
        where.orderedAt.lte = toDate
      }
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

    const totalSpend = campaigns.reduce((sum: number, c: any) => sum + Number(c.spendAmount || 0), 0)
    const totalRevenue = campaigns.reduce((sum: number, c: any) => sum + Number(c.conversionValue || c.revenueAttributed || 0), 0)
    const blendedRoas = totalSpend > 0 ? totalRevenue / totalSpend : 0

    return {
      toolName: 'query_campaigns',
      data: {
        campaigns: campaigns.map((c: any) => ({
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
      data: inventory.map((inv: any) => ({
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
      if (params.dateTo) {
        const toDate = new Date(params.dateTo)
        toDate.setUTCHours(23, 59, 59, 999)
        where.orderedAt.lte = toDate
      }
    }

    let result: any = {}
    let citationRef = ''

    if (params.metric === 'cac') {
      const campaigns = await prisma.unifiedCampaign.findMany({ where: { merchantId } })
      const orders = await prisma.unifiedOrder.aggregate({ where, _count: { id: true } })
      const totalSpend = campaigns.reduce((s: number, c: any) => s + Number(c.spendAmount || 0), 0)
      const cac = orders._count.id > 0 ? totalSpend / orders._count.id : 0
      result = { cac: cac.toFixed(2), totalSpend: totalSpend.toFixed(2), totalOrders: orders._count.id }
      citationRef = 'meta_ads → unified_campaigns + shopify → unified_orders'
    }

    if (params.metric === 'blended_roas') {
      const campaigns = await prisma.unifiedCampaign.findMany({ where: { merchantId } })
      const totalSpend = campaigns.reduce((s: number, c: any) => s + Number(c.spendAmount || 0), 0)
      const totalRevenue = campaigns.reduce((s: number, c: any) => s + Number(c.conversionValue || c.revenueAttributed || 0), 0)
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
  },

  // ── WRITE TOOL ────────────────────────────────────────────────────────────
  // Satisfies the "reads AND writes" requirement.
  // Allows the chat interface to update a pending recommendation status.
  async update_recommendation(merchantId: string, params: {
    recommendationId: string
    status: 'approved' | 'dismissed' | 'snoozed'
  }): Promise<ToolResult> {
    // Verify the recommendation belongs to this merchant before writing
    const existing = await prisma.agentRecommendation.findFirst({
      where: { id: params.recommendationId, merchantId }
    })

    if (!existing) {
      return {
        toolName: 'update_recommendation',
        data: { error: 'Recommendation not found or does not belong to this merchant' },
        citationRef: 'n/a',
        recordCount: 0,
        dataAsOf: new Date().toISOString()
      }
    }

    await prisma.agentRecommendation.update({
      where: { id: params.recommendationId },
      data: {
        status: params.status,
        reviewedAt: new Date(),
        reviewedBy: 'ai_chat'
      }
    })

    return {
      toolName: 'update_recommendation',
      data: {
        recommendationId: params.recommendationId,
        sku: existing.sku,
        newStatus: params.status,
        action: `Recommendation for ${existing.sku} has been ${params.status}`
      },
      citationRef: `agentRecommendation → ${params.recommendationId}`,
      recordCount: 1,
      dataAsOf: new Date().toISOString()
    }
  }
}
