import { FastifyInstance } from 'fastify'
import * as path from 'path'
import * as fs from 'fs'

function readSeedData(filename: string) {
  const filePath = path.resolve(__dirname, '../../../db/prisma/seed-data', filename)
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

export async function mockRoutes(fastify: FastifyInstance) {

  // Mock Shopify Orders API
  fastify.get('/shopify/orders', async (req, reply) => {
    const { startDate, endDate, limit = '50', cursor } = req.query as { startDate?: string, endDate?: string, limit?: string, cursor?: string }
    let orders = readSeedData('orders.json') as any[]

    if (startDate) {
      const start = new Date(startDate).getTime()
      orders = orders.filter(o => new Date(o.ordered_at).getTime() >= start)
    }
    if (endDate) {
      const end = new Date(endDate).getTime()
      orders = orders.filter(o => new Date(o.ordered_at).getTime() <= end)
    }

    // Sort descending by date
    orders.sort((a, b) => new Date(b.ordered_at).getTime() - new Date(a.ordered_at).getTime())

    let startIndex = 0
    if (cursor) {
      const cursorIndex = orders.findIndex(o => o.id === cursor)
      if (cursorIndex !== -1) startIndex = cursorIndex + 1
    }

    const limitNum = parseInt(limit, 10)
    const chunk = orders.slice(startIndex, startIndex + limitNum)
    const nextCursor = chunk.length === limitNum ? chunk[chunk.length - 1].id : null

    return {
      status: 'success',
      orders: chunk,
      nextCursor,
      hasMore: !!nextCursor
    }
  })

  // Mock Shopify Inventory API
  fastify.get('/shopify/inventory', async (req, reply) => {
    return {
      status: 'success',
      inventory: readSeedData('inventory.json')
    }
  })

  // Mock Meta Ads API
  fastify.get('/meta/campaigns', async (req, reply) => {
    const campaignsData = readSeedData('campaigns.json')
    return {
      status: 'success',
      data: campaignsData.filter((c: any) => c.connector === 'meta_ads')
    }
  })

  // Mock Klaviyo API
  fastify.get('/klaviyo/campaigns', async (req, reply) => {
    const campaignsData = readSeedData('campaigns.json')
    return {
      status: 'success',
      data: campaignsData.filter((c: any) => c.connector === 'klaviyo')
    }
  })
}
