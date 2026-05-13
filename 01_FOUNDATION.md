# Phase 1 — Foundation
## Database + Seed Data + Connectors + API Setup

> Read 00_MASTER.md first before starting this phase.
> Goal: By end of this phase, seed data flows into PostgreSQL and API is running.

---

## Step 1: Project Initialization

Create the monorepo with pnpm workspaces:

```bash
mkdir ai-employee-platform && cd ai-employee-platform
pnpm init
mkdir -p apps/web apps/agent packages/api packages/db packages/shared
```

Root `package.json`:
```json
{
  "name": "ai-employee-platform",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "db:migrate": "cd packages/db && pnpm prisma migrate dev",
    "db:seed": "cd packages/db && pnpm prisma db seed"
  }
}
```

---

## Step 2: Docker Compose Setup

Create `docker-compose.yml` in root:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: ai_employee_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

---

## Step 3: Prisma Schema

Create `packages/db/prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Merchant {
  id        String   @id @default(uuid())
  name      String
  slug      String   @unique
  timezone  String   @default("UTC")
  createdAt DateTime @default(now())
  isActive  Boolean  @default(true)

  connectorInstances ConnectorInstance[]
  orders             UnifiedOrder[]
  customers          UnifiedCustomer[]
  campaigns          UnifiedCampaign[]
  inventory          UnifiedInventory[]
  recommendations    AgentRecommendation[]
  auditLogs          AuditLog[]
}

model ConnectorInstance {
  id            String    @id @default(uuid())
  merchantId    String
  connectorType String    // 'shopify', 'meta_ads', 'klaviyo'
  status        String    @default("active")
  lastSyncedAt  DateTime?
  syncCursor    Json?
  config        Json?
  createdAt     DateTime  @default(now())

  merchant Merchant @relation(fields: [merchantId], references: [id])

  @@unique([merchantId, connectorType])
}

model UnifiedOrder {
  id               String    @id @default(uuid())
  merchantId       String
  sourceId         String
  sourceConnector  String
  sourceSyncedAt   DateTime
  connectorVersion String    @default("1.0.0")

  orderNumber    String?
  status         String?
  currency       String    @default("USD")
  subtotalAmount Decimal   @db.Decimal(15, 4)
  discountAmount Decimal   @default(0) @db.Decimal(15, 4)
  taxAmount      Decimal   @default(0) @db.Decimal(15, 4)
  totalAmount    Decimal   @db.Decimal(15, 4)
  refundedAmount Decimal   @default(0) @db.Decimal(15, 4)
  itemCount      Int       @default(1)

  orderedAt    DateTime?
  fulfilledAt  DateTime?
  cancelledAt  DateTime?

  rawPayload Json?
  checksum   String?
  createdAt  DateTime @default(now())

  merchant Merchant @relation(fields: [merchantId], references: [id])

  @@unique([merchantId, sourceConnector, sourceId])
  @@index([merchantId, orderedAt(sort: Desc)])
}

model UnifiedCustomer {
  id              String   @id @default(uuid())
  merchantId      String
  sourceId        String
  sourceConnector String
  sourceSyncedAt  DateTime

  emailHash   String?
  firstName   String?
  lastName    String?
  orderCount  Int     @default(0)
  totalSpent  Decimal @default(0) @db.Decimal(15, 4)
  avgOrderValue Decimal? @db.Decimal(15, 4)
  firstOrderAt DateTime?
  lastOrderAt  DateTime?
  tags         String[]

  rawPayload Json?
  checksum   String?
  createdAt  DateTime @default(now())

  merchant Merchant @relation(fields: [merchantId], references: [id])

  @@unique([merchantId, sourceConnector, sourceId])
}

model UnifiedCampaign {
  id              String   @id @default(uuid())
  merchantId      String
  sourceId        String
  sourceConnector String   // 'meta_ads', 'klaviyo'
  sourceSyncedAt  DateTime

  name        String?
  type        String?  // 'paid_social', 'email', 'sms'
  status      String?
  channel     String?  // 'facebook', 'instagram', 'email'

  periodStart DateTime
  periodEnd   DateTime

  spendAmount       Decimal? @db.Decimal(15, 4)
  impressions       BigInt?
  clicks            BigInt?
  conversions       Int?
  conversionValue   Decimal? @db.Decimal(15, 4)
  roas              Decimal? @db.Decimal(8, 4)

  sends             Int?
  opens             Int?
  revenueAttributed Decimal? @db.Decimal(15, 4)

  rawPayload Json?
  checksum   String?
  createdAt  DateTime @default(now())

  merchant Merchant @relation(fields: [merchantId], references: [id])

  @@unique([merchantId, sourceConnector, sourceId, periodStart])
}

model UnifiedInventory {
  id              String   @id @default(uuid())
  merchantId      String
  sourceId        String
  sourceConnector String
  sourceSyncedAt  DateTime

  productId        String?
  variantId        String?
  sku              String?
  productName      String?
  variantName      String?
  quantityAvailable Int    @default(0)
  quantityCommitted Int    @default(0)
  quantityIncoming  Int    @default(0)
  unitCost         Decimal? @db.Decimal(15, 4)
  unitPrice        Decimal? @db.Decimal(15, 4)

  rawPayload Json?
  createdAt  DateTime @default(now())

  merchant Merchant @relation(fields: [merchantId], references: [id])

  @@unique([merchantId, sourceConnector, sourceId])
}

model AgentRecommendation {
  id          String   @id @default(uuid())
  merchantId  String
  agentRunId  String
  createdAt   DateTime @default(now())

  sku               String?
  productName       String?
  riskLevel         String   // 'CRITICAL', 'HIGH', 'MEDIUM'
  recommendedAction String
  reorderQuantity   Int?
  daysToDepletion   Float?
  revenueAtRisk     Decimal? @db.Decimal(15, 4)
  confidenceScore   Float?
  reasoningSummary  String?
  citations         Json?

  status      String   @default("pending") // 'pending', 'approved', 'dismissed', 'snoozed'
  reviewedAt  DateTime?
  reviewedBy  String?

  merchant Merchant @relation(fields: [merchantId], references: [id])
}

model AuditLog {
  id          String   @id @default(uuid())
  merchantId  String?
  actorId     String?
  actorType   String?  // 'user', 'agent', 'connector'
  action      String
  resourceType String?
  resourceId  String?
  metadata    Json?
  createdAt   DateTime @default(now())

  merchant Merchant? @relation(fields: [merchantId], references: [id])
}

model AgentRunLog {
  id          String   @id @default(uuid())
  merchantId  String
  agent       String
  triggeredBy String
  startedAt   DateTime
  completedAt DateTime?
  durationMs  Int?
  status      String   // 'success', 'failed', 'partial'
  nodesExecuted Json?
  llmCalls    Json?
  errors      Json?
  createdAt   DateTime @default(now())
}
```

Run migrations:
```bash
cd packages/db
pnpm prisma migrate dev --name init
```

---

## Step 4: Seed Data

Create `packages/db/prisma/seed-data/orders.json`:
Generate 500 realistic orders with these fields:
```json
[
  {
    "sourceId": "order_1001",
    "orderNumber": "#1001",
    "status": "paid",
    "currency": "USD",
    "subtotalAmount": 142.00,
    "discountAmount": 0,
    "taxAmount": 12.78,
    "totalAmount": 154.78,
    "refundedAmount": 0,
    "itemCount": 2,
    "orderedAt": "2024-09-15T10:23:00Z",
    "customerId": "customer_001",
    "items": [
      { "sku": "HOODIE-BLK-L", "quantity": 1, "price": 89.00 },
      { "sku": "TEE-WHT-M", "quantity": 1, "price": 53.00 }
    ]
  }
]
```

Create `packages/db/prisma/seed-data/campaigns.json`:
```json
[
  {
    "sourceId": "campaign_meta_001",
    "connector": "meta_ads",
    "name": "Black Friday Sale 2024",
    "type": "paid_social",
    "channel": "facebook",
    "status": "completed",
    "periodStart": "2024-11-25",
    "periodEnd": "2024-11-30",
    "spendAmount": 4200.00,
    "impressions": 284000,
    "clicks": 8420,
    "conversions": 210,
    "conversionValue": 18900.00,
    "roas": 4.5
  },
  {
    "sourceId": "campaign_meta_002",
    "connector": "meta_ads",
    "name": "Winter Collection Launch",
    "type": "paid_social",
    "channel": "instagram",
    "status": "active",
    "periodStart": "2024-12-01",
    "periodEnd": "2024-12-31",
    "spendAmount": 1800.00,
    "impressions": 142000,
    "clicks": 3200,
    "conversions": 64,
    "conversionValue": 5760.00,
    "roas": 3.2
  },
  {
    "sourceId": "campaign_klaviyo_001",
    "connector": "klaviyo",
    "name": "November Win-Back Flow",
    "type": "email",
    "channel": "email",
    "status": "active",
    "periodStart": "2024-11-01",
    "periodEnd": "2024-11-30",
    "sends": 4200,
    "opens": 1092,
    "revenueAttributed": 8400.00
  }
]
```

Create `packages/db/prisma/seed-data/inventory.json`:
```json
[
  { "sourceId": "inv_001", "sku": "HOODIE-BLK-L", "productName": "Classic Hoodie", "variantName": "Black / L", "quantityAvailable": 89, "quantityCommitted": 12, "unitCost": 28.00, "unitPrice": 89.00 },
  { "sourceId": "inv_002", "sku": "HOODIE-BLK-M", "productName": "Classic Hoodie", "variantName": "Black / M", "quantityAvailable": 234, "quantityCommitted": 18, "unitCost": 28.00, "unitPrice": 89.00 },
  { "sourceId": "inv_003", "sku": "TEE-WHT-M", "productName": "Essential Tee", "variantName": "White / M", "quantityAvailable": 412, "quantityCommitted": 32, "unitCost": 12.00, "unitPrice": 45.00 },
  { "sourceId": "inv_004", "sku": "CAP-BLK-OS", "productName": "Logo Cap", "variantName": "Black / OS", "quantityAvailable": 23, "quantityCommitted": 8, "unitCost": 8.00, "unitPrice": 35.00 },
  { "sourceId": "inv_005", "sku": "JOGGER-GRY-L", "productName": "Comfort Jogger", "variantName": "Grey / L", "quantityAvailable": 18, "quantityCommitted": 6, "unitCost": 22.00, "unitPrice": 75.00 },
  { "sourceId": "inv_006", "sku": "HOODIE-NVY-S", "productName": "Classic Hoodie", "variantName": "Navy / S", "quantityAvailable": 7, "quantityCommitted": 4, "unitCost": 28.00, "unitPrice": 89.00 },
  { "sourceId": "inv_007", "sku": "TEE-BLK-L", "productName": "Essential Tee", "variantName": "Black / L", "quantityAvailable": 189, "quantityCommitted": 14, "unitCost": 12.00, "unitPrice": 45.00 }
]
```

Create `packages/db/prisma/seed.ts`:
```typescript
import { PrismaClient } from '@prisma/client'
import ordersData from './seed-data/orders.json'
import campaignsData from './seed-data/campaigns.json'
import inventoryData from './seed-data/inventory.json'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create demo merchant
  const merchant = await prisma.merchant.upsert({
    where: { slug: 'demo-brand' },
    update: {},
    create: {
      name: 'Demo Brand Co.',
      slug: 'demo-brand',
      timezone: 'America/New_York',
    }
  })

  console.log('Created merchant:', merchant.id)

  // Create connector instances
  await prisma.connectorInstance.createMany({
    data: [
      { merchantId: merchant.id, connectorType: 'shopify', status: 'active', lastSyncedAt: new Date() },
      { merchantId: merchant.id, connectorType: 'meta_ads', status: 'active', lastSyncedAt: new Date() },
      { merchantId: merchant.id, connectorType: 'klaviyo', status: 'active', lastSyncedAt: new Date() },
    ],
    skipDuplicates: true
  })

  // Seed orders (generate 500 from template)
  const orderRecords = generateOrders(merchant.id, 500)
  await prisma.unifiedOrder.createMany({
    data: orderRecords,
    skipDuplicates: true
  })
  console.log('Seeded 500 orders')

  // Seed campaigns
  await prisma.unifiedCampaign.createMany({
    data: campaignsData.map(c => ({
      merchantId: merchant.id,
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
  console.log('Seeded campaigns')

  // Seed inventory
  await prisma.unifiedInventory.createMany({
    data: inventoryData.map(inv => ({
      merchantId: merchant.id,
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
  console.log('Seeded inventory')

  console.log('Done! Merchant ID:', merchant.id)
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
      sourceId: `order_${1001 + i}`,
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

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

Run seed:
```bash
pnpm db:seed
```

---

## Step 5: Connector Abstraction Layer

Create `packages/api/src/connectors/base.connector.ts`:

```typescript
export interface SyncMetadata {
  merchantId: string
  connectorType: string
  syncedAt: Date
  connectorVersion: string
}

export interface ConnectorHealth {
  status: 'healthy' | 'degraded' | 'down'
  lastChecked: Date
  message?: string
}

export abstract class BaseConnector {
  abstract readonly connectorId: string
  abstract readonly version: string
  abstract readonly displayName: string

  // For real connectors: implement API calls
  // For our demo: reads from seed data files
  abstract fetchOrders(merchantId: string, cursor?: string): Promise<any[]>
  abstract fetchCampaigns(merchantId: string, cursor?: string): Promise<any[]>
  abstract fetchInventory(merchantId: string): Promise<any[]>
  abstract normalize(raw: any, metadata: SyncMetadata): any
  abstract healthCheck(): Promise<ConnectorHealth>
}
```

Create `packages/api/src/connectors/shopify.connector.ts`:

```typescript
import { BaseConnector, SyncMetadata, ConnectorHealth } from './base.connector'
import { prisma } from '../lib/prisma'

const MOCK_API_URL = process.env.API_URL || 'http://localhost:3001'

export class ShopifyConnector extends BaseConnector {
  readonly connectorId = 'shopify'
  readonly version = '2024-01'
  readonly displayName = 'Shopify'

  // Uses our internal mock API to simulate network requests
  async fetchOrders(merchantId: string, cursor?: string) {
    const res = await fetch(`${MOCK_API_URL}/api/mock/shopify/orders?merchantId=${merchantId}`)
    const data = await res.json()
    return data.orders || []
  }

  async fetchCampaigns(merchantId: string) { return [] }

  async fetchInventory(merchantId: string) {
    const res = await fetch(`${MOCK_API_URL}/api/mock/shopify/inventory?merchantId=${merchantId}`)
    const data = await res.json()
    return data.inventory || []
  }

  normalize(raw: any, metadata: SyncMetadata) {
    return { ...raw, ...metadata }
  }

  async healthCheck(): Promise<ConnectorHealth> {
    return { status: 'healthy', lastChecked: new Date(), message: 'Simulated connector active' }
  }
}
```

Create similar files for `meta-ads.connector.ts` and `klaviyo.connector.ts` following the same pattern.

Create `packages/api/src/connectors/registry.ts`:

```typescript
import { ShopifyConnector } from './shopify.connector'
import { MetaAdsConnector } from './meta-ads.connector'
import { KlaviyoConnector } from './klaviyo.connector'
import { BaseConnector } from './base.connector'

class ConnectorRegistry {
  private connectors = new Map<string, BaseConnector>()

  constructor() {
    this.register(new ShopifyConnector())
    this.register(new MetaAdsConnector())
    this.register(new KlaviyoConnector())
  }

  private register(connector: BaseConnector) {
    this.connectors.set(connector.connectorId, connector)
  }

  get(connectorId: string): BaseConnector {
    const connector = this.connectors.get(connectorId)
    if (!connector) throw new Error(`Connector not found: ${connectorId}`)
    return connector
  }

  getAll(): BaseConnector[] {
    return Array.from(this.connectors.values())
  }
}

export const connectorRegistry = new ConnectorRegistry()
```

---

## Step 6: Fastify API Server

Create `packages/api/src/index.ts`:

```typescript
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { merchantRoutes } from './routes/merchant.routes'
import { dataRoutes } from './routes/data.routes'
import { chatRoutes } from './routes/chat.routes'
import { agentRoutes } from './routes/agent.routes'
import { internalRoutes } from './routes/internal.routes'
import { mockRoutes } from './routes/mock.routes'

const server = Fastify({ logger: true })

await server.register(cors, { origin: true })
await server.register(merchantRoutes, { prefix: '/api/merchants' })
await server.register(dataRoutes, { prefix: '/api/data' })
await server.register(chatRoutes, { prefix: '/api/chat' })
await server.register(agentRoutes, { prefix: '/api/agent' })
await server.register(internalRoutes, { prefix: '/api/internal' })
await server.register(mockRoutes, { prefix: '/api/mock' })

server.get('/health', async () => ({ status: 'ok', timestamp: new Date() }))

await server.listen({ port: Number(process.env.API_PORT || 3001), host: '0.0.0.0' })
console.log('API running on port 3001')
```

Create `packages/api/src/routes/data.routes.ts`:

```typescript
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

  // Get campaigns
  fastify.get('/campaigns/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    
    const campaigns = await prisma.unifiedCampaign.findMany({
      where: { merchantId },
      orderBy: { periodStart: 'desc' }
    })

    return campaigns.map(c => ({
      ...c,
      citationRef: `${c.sourceConnector}:unified_campaigns:${c.sourceId}`
    }))
  })

  // Get inventory
  fastify.get('/inventory/:merchantId', async (req, reply) => {
    const { merchantId } = req.params as { merchantId: string }
    
    const inventory = await prisma.unifiedInventory.findMany({
      where: { merchantId },
      orderBy: { quantityAvailable: 'asc' }
    })

    return inventory.map(inv => ({
      ...inv,
      citationRef: `shopify:unified_inventory:${inv.sourceId}`,
      isLowStock: inv.quantityAvailable < 50
    }))
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
```

Create `packages/api/src/routes/internal.routes.ts`:

```typescript
import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function internalRoutes(fastify: FastifyInstance) {

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

    return {
      inventory,
      orderMetrics: {
        totalOrders: recentOrders._count.id,
        avgOrderValue: recentOrders._avg.totalAmount || 0
      },
      campaigns: activeCampaigns
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
    await prisma.agentRunLog.create({ data })
    return { status: 'ok' }
  })
}
```

Create `packages/api/src/routes/mock.routes.ts`:

```typescript
import { FastifyInstance } from 'fastify'
import ordersData from '../../prisma/seed-data/orders.json'
import campaignsData from '../../prisma/seed-data/campaigns.json'
import inventoryData from '../../prisma/seed-data/inventory.json'

export async function mockRoutes(fastify: FastifyInstance) {

  // Mock Shopify Orders API
  fastify.get('/shopify/orders', async (req, reply) => {
    return {
      status: 'success',
      orders: ordersData
    }
  })

  // Mock Shopify Inventory API
  fastify.get('/shopify/inventory', async (req, reply) => {
    return {
      status: 'success',
      inventory: inventoryData
    }
  })

  // Mock Meta Ads API
  fastify.get('/meta/campaigns', async (req, reply) => {
    return {
      status: 'success',
      data: campaignsData.filter(c => c.connector === 'meta_ads')
    }
  })

  // Mock Klaviyo API
  fastify.get('/klaviyo/campaigns', async (req, reply) => {
    return {
      status: 'success',
      data: campaignsData.filter(c => c.connector === 'klaviyo')
    }
  })
}
```

---

## Step 7: Verify Phase 1

Run the following and confirm all pass:

```bash
# Start services
docker-compose up -d

# Run migrations
pnpm db:migrate

# Seed data
pnpm db:seed

# Start API
cd packages/api && pnpm dev

# Test endpoints
curl http://localhost:3001/health
curl http://localhost:3001/api/data/summary/[MERCHANT_ID_FROM_SEED_OUTPUT]
curl http://localhost:3001/api/data/inventory/[MERCHANT_ID]
curl http://localhost:3001/api/data/campaigns/[MERCHANT_ID]
```

Expected results:
- `/health` returns `{ status: 'ok' }`
- `/summary` returns revenue, order count, low stock count
- `/inventory` returns 7 SKUs with citationRef on each
- `/campaigns` returns 3 campaigns with citationRef on each

---

## Phase 1 Complete Checklist

- [ ] Docker running (postgres + redis)
- [ ] Prisma schema migrated
- [ ] 500 orders seeded
- [ ] 3 campaigns seeded (2 Meta, 1 Klaviyo)
- [ ] 7 inventory SKUs seeded
- [ ] BaseConnector interface created
- [ ] All 3 connector classes created
- [ ] ConnectorRegistry working
- [ ] Fastify API running on port 3001
- [ ] All 4 data endpoints returning correct data with citationRef

> Only move to Phase 2 when all checkboxes above are done.