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
    return {
      status: 'success',
      orders: readSeedData('orders.json')
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
