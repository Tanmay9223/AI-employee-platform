import { db as prisma } from '@/lib/db'
import ordersData from '../../../packages/db/prisma/seed-data/orders.json'
import campaignsData from '../../../packages/db/prisma/seed-data/campaigns.json'
import inventoryData from '../../../packages/db/prisma/seed-data/inventory.json'

export async function seedConnectorData(merchantId: string, connectorType: string, options?: { historicalDays?: number, startDate?: Date, endDate?: Date }) {
  console.log(`Seeding mock data for connector ${connectorType} and merchant ${merchantId}...`)

  if (connectorType === 'shopify') {
    // Determine the date range
    let start = options?.startDate || new Date()
    let end = options?.endDate || new Date()
    if (options?.historicalDays) {
      start.setDate(end.getDate() - options.historicalDays)
    } else if (!options?.startDate) {
      start.setDate(end.getDate() - 180) // Default to 180 days if not specified
    }

    // Seed orders in chunks to mock chunking architecture
    // We generate a proportional number of orders to the days requested
    const daysDiff = Math.max(1, Math.floor((end.getTime() - start.getTime()) / (1000 * 3600 * 24)))
    const totalOrders = Math.min(200, daysDiff * 5) // Mock 5 orders per day, max 200 for demo

    const CHUNK_SIZE = 50
    let processed = 0

    while (processed < totalOrders) {
      const chunkSize = Math.min(CHUNK_SIZE, totalOrders - processed)
      const chunkRecords = generateOrders(merchantId, chunkSize, start, end)
      
      await prisma.unifiedOrder.createMany({
        data: chunkRecords,
        skipDuplicates: true
      })
      processed += chunkSize
      console.log(`[${merchantId}] Chunked orders: ${processed}/${totalOrders}`)
    }
    console.log(`[${merchantId}] Seeded orders successfully`)

    // Seed inventory
    await prisma.unifiedInventory.createMany({
      data: inventoryData.map(inv => ({
        merchantId,
        sourceId: inv.sourceId,
        sourceConnector: 'shopify',
        sourceSyncedAt: new Date(),
        sku: inv.sku,
        productName: inv.productName,
        variantName: inv.variantName,
        quantityAvailable: inv.quantityAvailable,
        quantityCommitted: inv.quantityCommitted,
        unitCost: inv.unitCost,
        unitPrice: inv.unitPrice,
      })),
      skipDuplicates: true
    })
    console.log(`[${merchantId}] Seeded inventory`)
  } else if (connectorType === 'meta_ads' || connectorType === 'klaviyo') {
    // Seed campaigns
    await prisma.unifiedCampaign.createMany({
      data: campaignsData.filter(c => c.connector === connectorType).map(c => ({
        merchantId,
        sourceId: c.sourceId,
        sourceConnector: c.connector,
        sourceSyncedAt: new Date(),
        name: c.name,
        type: c.type,
        channel: c.channel,
        status: c.status,
        periodStart: new Date(c.periodStart),
        periodEnd: new Date(c.periodEnd),
        spendAmount: c.spendAmount,
        impressions: c.impressions,
        clicks: c.clicks,
        conversions: c.conversions,
        conversionValue: c.conversionValue,
        roas: c.roas,
        sends: c.sends,
        opens: c.opens,
        revenueAttributed: c.revenueAttributed,
      })),
      skipDuplicates: true
    })
    console.log(`[${merchantId}] Seeded campaigns for ${connectorType}`)
  }
}

function generateOrders(merchantId: string, count: number, start: Date, end: Date) {
  const skus = ['HOODIE-BLK-L', 'HOODIE-BLK-M', 'TEE-WHT-M', 'CAP-BLK-OS', 'JOGGER-GRY-L', 'TEE-BLK-L']
  const statuses = ['paid', 'paid', 'paid', 'fulfilled', 'fulfilled', 'refunded']
  
  return Array.from({ length: count }, (_, i) => {
    const total = Math.floor(Math.random() * 780 + 20)
    
    // Generate random date between start and end
    const orderedAt = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    
    return {
      merchantId,
      sourceId: `order_${1001 + i}_${Date.now()}`, // Add timestamp to make unique per seed
      sourceConnector: 'shopify',
      sourceSyncedAt: new Date(),
      connectorVersion: '1.0.0',
      orderNumber: `#${1001 + i}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      currency: 'USD',
      subtotalAmount: total * 0.9,
      discountAmount: 0,
      taxAmount: total * 0.1,
      totalAmount: total,
      refundedAmount: 0,
      itemCount: Math.floor(Math.random() * 3) + 1,
      orderedAt,
    }
  })
}
