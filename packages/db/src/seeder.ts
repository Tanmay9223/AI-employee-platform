import { PrismaClient } from './generated/client'
import ordersData from '../prisma/seed-data/orders.json'
import campaignsData from '../prisma/seed-data/campaigns.json'
import inventoryData from '../prisma/seed-data/inventory.json'

const prisma = new PrismaClient()

export async function seedConnectorData(merchantId: string, connectorType: string) {
  console.log(`Seeding mock data for connector ${connectorType} and merchant ${merchantId}...`)

  if (connectorType === 'shopify') {
    // Seed orders (generate 200 from template to be faster)
    const orderRecords = generateOrders(merchantId, 200)
    await prisma.unifiedOrder.createMany({
      data: orderRecords,
      skipDuplicates: true
    })
    console.log(`[${merchantId}] Seeded orders`)

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

function generateOrders(merchantId: string, count: number) {
  const skus = ['HOODIE-BLK-L', 'HOODIE-BLK-M', 'TEE-WHT-M', 'CAP-BLK-OS', 'JOGGER-GRY-L', 'TEE-BLK-L']
  const statuses = ['paid', 'paid', 'paid', 'fulfilled', 'fulfilled', 'refunded']

  return Array.from({ length: count }, (_, i) => {
    const total = Math.floor(Math.random() * 780 + 20)
    const orderedAt = new Date()
    orderedAt.setDate(orderedAt.getDate() - Math.floor(Math.random() * 180))

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
