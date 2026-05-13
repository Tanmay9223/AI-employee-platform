-- CreateTable
CREATE TABLE "Merchant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConnectorInstance" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "connectorType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "lastSyncedAt" TIMESTAMP(3),
    "syncCursor" JSONB,
    "config" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConnectorInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnifiedOrder" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "sourceConnector" TEXT NOT NULL,
    "sourceSyncedAt" TIMESTAMP(3) NOT NULL,
    "connectorVersion" TEXT NOT NULL DEFAULT '1.0.0',
    "orderNumber" TEXT,
    "status" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "subtotalAmount" DECIMAL(15,4) NOT NULL,
    "discountAmount" DECIMAL(15,4) NOT NULL DEFAULT 0,
    "taxAmount" DECIMAL(15,4) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(15,4) NOT NULL,
    "refundedAmount" DECIMAL(15,4) NOT NULL DEFAULT 0,
    "itemCount" INTEGER NOT NULL DEFAULT 1,
    "orderedAt" TIMESTAMP(3),
    "fulfilledAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),
    "rawPayload" JSONB,
    "checksum" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnifiedOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnifiedCustomer" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "sourceConnector" TEXT NOT NULL,
    "sourceSyncedAt" TIMESTAMP(3) NOT NULL,
    "emailHash" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "orderCount" INTEGER NOT NULL DEFAULT 0,
    "totalSpent" DECIMAL(15,4) NOT NULL DEFAULT 0,
    "avgOrderValue" DECIMAL(15,4),
    "firstOrderAt" TIMESTAMP(3),
    "lastOrderAt" TIMESTAMP(3),
    "tags" TEXT[],
    "rawPayload" JSONB,
    "checksum" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnifiedCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnifiedCampaign" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "sourceConnector" TEXT NOT NULL,
    "sourceSyncedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "type" TEXT,
    "status" TEXT,
    "channel" TEXT,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "spendAmount" DECIMAL(15,4),
    "impressions" BIGINT,
    "clicks" BIGINT,
    "conversions" INTEGER,
    "conversionValue" DECIMAL(15,4),
    "roas" DECIMAL(8,4),
    "sends" INTEGER,
    "opens" INTEGER,
    "revenueAttributed" DECIMAL(15,4),
    "rawPayload" JSONB,
    "checksum" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnifiedCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnifiedInventory" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "sourceConnector" TEXT NOT NULL,
    "sourceSyncedAt" TIMESTAMP(3) NOT NULL,
    "productId" TEXT,
    "variantId" TEXT,
    "sku" TEXT,
    "productName" TEXT,
    "variantName" TEXT,
    "quantityAvailable" INTEGER NOT NULL DEFAULT 0,
    "quantityCommitted" INTEGER NOT NULL DEFAULT 0,
    "quantityIncoming" INTEGER NOT NULL DEFAULT 0,
    "unitCost" DECIMAL(15,4),
    "unitPrice" DECIMAL(15,4),
    "rawPayload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnifiedInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentRecommendation" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "agentRunId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sku" TEXT,
    "productName" TEXT,
    "riskLevel" TEXT NOT NULL,
    "recommendedAction" TEXT NOT NULL,
    "reorderQuantity" INTEGER,
    "daysToDepletion" DOUBLE PRECISION,
    "revenueAtRisk" DECIMAL(15,4),
    "confidenceScore" DOUBLE PRECISION,
    "reasoningSummary" TEXT,
    "citations" JSONB,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" TEXT,

    CONSTRAINT "AgentRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT,
    "actorId" TEXT,
    "actorType" TEXT,
    "action" TEXT NOT NULL,
    "resourceType" TEXT,
    "resourceId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentRunLog" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "agent" TEXT NOT NULL,
    "triggeredBy" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "durationMs" INTEGER,
    "status" TEXT NOT NULL,
    "nodesExecuted" JSONB,
    "llmCalls" JSONB,
    "errors" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AgentRunLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_slug_key" ON "Merchant"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ConnectorInstance_merchantId_connectorType_key" ON "ConnectorInstance"("merchantId", "connectorType");

-- CreateIndex
CREATE INDEX "UnifiedOrder_merchantId_orderedAt_idx" ON "UnifiedOrder"("merchantId", "orderedAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "UnifiedOrder_merchantId_sourceConnector_sourceId_key" ON "UnifiedOrder"("merchantId", "sourceConnector", "sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "UnifiedCustomer_merchantId_sourceConnector_sourceId_key" ON "UnifiedCustomer"("merchantId", "sourceConnector", "sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "UnifiedCampaign_merchantId_sourceConnector_sourceId_periodS_key" ON "UnifiedCampaign"("merchantId", "sourceConnector", "sourceId", "periodStart");

-- CreateIndex
CREATE UNIQUE INDEX "UnifiedInventory_merchantId_sourceConnector_sourceId_key" ON "UnifiedInventory"("merchantId", "sourceConnector", "sourceId");

-- AddForeignKey
ALTER TABLE "ConnectorInstance" ADD CONSTRAINT "ConnectorInstance_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnifiedOrder" ADD CONSTRAINT "UnifiedOrder_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnifiedCustomer" ADD CONSTRAINT "UnifiedCustomer_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnifiedCampaign" ADD CONSTRAINT "UnifiedCampaign_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnifiedInventory" ADD CONSTRAINT "UnifiedInventory_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentRecommendation" ADD CONSTRAINT "AgentRecommendation_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
