# AI Employee Platform

An autonomous AI system for D2C brands that ingests data from multiple SaaS tools, answers cross-tool business questions with cited answers, and proactively detects operational risks — without a human stitching exports in Excel.

---

## What Was Built

A working v0 AI employee system for Direct-to-Consumer brands. A D2C founder typically runs their business across Shopify (orders, inventory), Meta Ads (paid acquisition), and Klaviyo (email retention). Answering one cross-tool question — "What's my blended ROAS accounting for email attribution?" — requires manual CSV exports and Excel work. Most founders don't bother.

This system solves that by:

1. **Ingesting** data from all 3 sources behind a shared connector abstraction into a single normalized PostgreSQL database
2. **Answering** natural-language business questions via a Gemini-powered chat layer where every numerical claim is grounded to a database citation
3. **Watching** data autonomously via a LangGraph agent that detects inventory depletion risk and queues proposed actions for human approval
4. **Presenting** everything in a multi-tenant Next.js dashboard

---

## Architecture (5-Line Summary)

1. **Connector layer** (TypeScript/Fastify) — three `BaseConnector` implementations (Shopify, Meta Ads, Klaviyo) fetch data via pluggable source adapters and normalize it into a unified PostgreSQL schema
2. **Unified storage** (PostgreSQL/Prisma) — every row has `sourceId`, `sourceConnector`, `merchantId`, `sourceSyncedAt`, and `rawPayload` for full provenance
3. **Chat layer** (Fastify/Gemini) — intent classification → tool dispatch → DB query → LLM summarization → citation validation → response, with a retry loop if any number is uncited
4. **Autonomous agent** (Python/LangGraph) — a 5-node DAG that loads inventory + velocity signals, computes depletion forecasts with campaign demand amplification, filters CRITICAL/HIGH risks, generates Gemini-reasoned recommendations, and saves them for human review
5. **Frontend** (Next.js 16 / React 19) — multi-tenant dashboard with JWT session auth, React Query data fetching, real-time chat with inline citation rendering, and an approve/dismiss/snooze recommendation workflow

```
Seed Data (mock SaaS APIs)
        ↓
Connector.fetch*() → normalize() → Prisma upsert → UnifiedTables
                                                          ↓
                           ┌──────────────────────────────┤
                           ↓                              ↓
              Chat Pipeline (Node.js)          Agent DAG (Python)
        Intent → Tool → DB Query              Signals → Forecast → LLM
        → Gemini → Citation Validate           → Recommendations (pending)
                           ↓                              ↓
                    Next.js Dashboard ← React Query ←─────┘
```

---

## Why These 3 Connectors

| Connector | Why Chosen | Data It Provides |
|-----------|-----------|-----------------|
| **Shopify** | Primary commerce source — every D2C brand runs on it. Contains ground-truth revenue, order status, and inventory. | Orders, inventory levels, customers, refunds |
| **Meta Ads** | Largest paid acquisition channel for D2C. ROAS from Meta is the key lever for scaling spend. | Campaign spend, impressions, clicks, conversion value, ROAS |
| **Klaviyo** | The dominant email/SMS platform for D2C retention. Email attribution is often 30-40% of D2C revenue and gets missed when founders only look at Meta. | Email campaigns, sends, opens, revenue attributed |

Together they cover the three financial pillars of D2C: **commerce (Shopify)**, **acquisition (Meta)**, and **retention (Klaviyo)**. A blended ROAS calculation that includes Klaviyo email revenue alongside Meta paid spend is a question no single tool can answer today without manual work.

---

## Why This Schema

The schema is designed around three principles:

**1. Provenance on every row.** Every `Unified*` table has:
- `sourceId` — the original ID from the source system
- `sourceConnector` — which system it came from (`'shopify'`, `'meta_ads'`, `'klaviyo'`)
- `sourceSyncedAt` — when we fetched it
- `connectorVersion` — which version of our connector fetched it
- `rawPayload JSON` — the original API response for audit and re-processing

This means any number the AI cites can be traced back to a specific row in a specific source system.

**2. Financial precision.** All monetary fields use `Decimal(15,4)`, not floats. Floating-point arithmetic errors on financial data are a production risk — `0.1 + 0.2 !== 0.3` in IEEE 754. Prisma's `Decimal` type maps to PostgreSQL `NUMERIC` which is exact.

**3. Multi-tenant isolation.** Every table has `merchantId` as both a required field and part of the unique constraint: `@@unique([merchantId, sourceConnector, sourceId])`. This prevents cross-merchant data leakage and enables idempotent upserts — the same source record can be synced multiple times without creating duplicates.

Additional fields: `checksum` (for detecting stale records), `rawPayload` (for replay), `BigInt` for impressions/clicks (can exceed 32-bit integer range in large campaigns).

---

## Chat Tool Schema and Citation Strategy

### Tool Interface

Every tool returns a `ToolResult`:

```typescript
interface ToolResult {
  toolName: string    // which tool was called
  data: any           // structured query result
  citationRef: string // human-readable source path, e.g. "shopify → unified_orders → Oct 2024"
  recordCount: number // how many DB rows informed this answer
  dataAsOf: string    // ISO timestamp of when data was fetched
}
```

### Available Tools

| Tool | Operation | Cross-Source? |
|------|-----------|---------------|
| `query_revenue` | Aggregates `UnifiedOrder` by date range | No (Shopify only) |
| `query_campaigns` | Fetches `UnifiedCampaign` ordered by ROAS | Yes (Meta + Klaviyo) |
| `query_inventory` | Fetches `UnifiedInventory` with low-stock flags | No (Shopify only) |
| `compute_metric` | Calculates CAC, blended ROAS, refund rate | Yes (CAC = campaigns + orders) |
| `update_recommendation` | **WRITE** — updates recommendation status | No (AgentRecommendation table) |

### Citation Pipeline

```
1. Tool executes → returns ToolResult with citationRef
2. buildCitationString() → "[Source: shopify → unified_orders → 847 records | as of 5/16/2026]"
3. LLM receives: data summary + citation strings + instruction to cite every number
4. validateCitations() checks: does the response contain [Source:...] tags for every number?
5. If not → retry with stricter prompt
6. If still not → buildFallbackResponse() generates a deterministic cited response
```

**Citation enforcement guarantee:** The regex `\$[\d,]+\.?\d*|[\d,]+\.?\d+%|[\d,]{2,}` catches currency values, percentages, and multi-digit numbers. If any number appears without an adjacent `[Source:...]` tag, the validator triggers a retry. The fallback path always appends citations manually, so no uncited number can reach the user.

---

## Agent Design and Reasoning

### The Problem It Solves
D2C brands run active paid campaigns that accelerate inventory depletion. A founder may not realize their bestselling SKU will stock out in 8 days — during a live campaign that's spending $500/day — until it's already out of stock. The agent watches for this pattern and queues a reorder recommendation.

### LangGraph DAG

```
load_signals → compute_depletion → filter_actionable
                                         ↓ (if CRITICAL/HIGH risks)
                              generate_recommendations → save_results
                                         ↓ (if no risks)
                                      save_results (skip recommendations)
```

**Node descriptions:**

| Node | What It Does |
|------|-------------|
| `load_signals` | Fetches inventory, real 30-day order velocity, and active campaigns via Fastify internal API |
| `compute_depletion` | For each SKU: `days_to_depletion = effective_stock / (base_velocity × demand_multiplier)`. Demand multiplier = 1 + (daily_campaign_spend / 500) × 0.15, capped at 2.5x |
| `filter_actionable` | Keeps only CRITICAL (< 14d) and HIGH (14-21d) risk items |
| `generate_recommendations` | Calls Gemini to write a 2-sentence reasoning summary with specific numbers. Adds citations pointing to source records |
| `save_results` | Writes recommendations to DB with `status: 'pending'` and saves full run log with node execution trace |

### Key Design Decisions

- **Demand amplifier**: Campaign spend is a leading indicator of future velocity. If a merchant is spending $1,000/day on Meta campaigns, their inventory will deplete faster than historical velocity suggests. The multiplier models this.
- **Does NOT execute**: The agent never places purchase orders, pauses campaigns, or modifies any data except writing its own recommendation records. A human must approve every action.
- **Full run traceability**: Every run saves an `AgentRunLog` with `nodesExecuted` (timing + record counts per node) so the reasoning can be audited.

---

## Scaling Strategy

### Current state: works for 1 merchant
- Single Fastify process, single Python process, single PostgreSQL instance
- Agent runs sequentially across all merchants on a 6-hour interval with 10-minute jitter
- In-memory rate limiter (with Redis fallback) on auth endpoints

### What breaks first at 10,000 merchants

**1. Agent scheduler (breaks at ~50 merchants)**
The current `run_all_merchants()` runs agents sequentially in a single loop. At 50 merchants, one 6-hour window would be consumed by sequential runs. At 10,000, it's impossible.

**Mitigation:** Replace APScheduler with a job queue (Celery + Redis, or BullMQ on the Node side). Each merchant becomes an independent task. Workers pull tasks from the queue. Scale workers horizontally.

**2. Internal signals API (breaks at ~500 merchants with large catalogs)**
`GET /api/internal/signals/:merchantId` fetches entire inventory + campaigns into Node.js memory for each agent run. At 10,000 SKUs per merchant × 500 concurrent runs, this causes OOM.

**Mitigation:** Paginate signals. Stream inventory to the agent in chunks. For the agent's depletion calculation, only load inventory with `quantityAvailable < 100` (candidates for depletion).

**3. PostgreSQL single instance (breaks at ~1,000 merchants, high write volume)**
10,000 merchants × multiple connector syncs per day = high write volume to shared tables. Row-level locking on `@@unique` upserts can cause contention.

**Mitigation:** Shard by `merchantId` range (tenant-based sharding). Use read replicas for all analytics queries (chat tools, dashboard). Use connection pooling (PgBouncer).

**4. Chat LLM latency (user-facing)**
Each chat message makes 2-3 Gemini API calls (classify → summarize → generate). At 10,000 concurrent users, this is 30,000 API calls/minute.

**Mitigation:** Cache intent classification for identical messages (Redis, 60s TTL). Cache tool results by `(merchantId, toolName, params hash)` with a 5-minute TTL. Use streaming for generation to reduce perceived latency.

### Architecture at scale

```
                     ┌─────────────────────────────────────────┐
                     │           Load Balancer                  │
                     └──────────┬──────────┬───────────────────┘
                                │          │
                     ┌──────────▼──┐  ┌────▼──────────┐
                     │ Fastify API │  │  Fastify API  │  (N replicas)
                     │  (stateless)│  │  (stateless)  │
                     └──────────┬──┘  └────┬──────────┘
                                │          │
              ┌─────────────────▼──────────▼───────────────────┐
              │                  Redis                          │
              │  (session cache | rate limits | job queue)      │
              └──────────┬──────────────────────────────────────┘
                         │
              ┌──────────▼──────────────────────────────────────┐
              │           PostgreSQL (primary)                   │
              │  + Read Replicas for analytics queries           │
              └─────────────────────────────────────────────────┘
```

## Scaling Strategy

### Current state: works for 1 merchant
- Single Fastify process, single Python process, single PostgreSQL instance
- Agent runs sequentially across all merchants on a 6-hour interval with 10-minute jitter
- In-memory rate limiter (with Redis fallback) on auth endpoints

### What breaks first at 10,000 merchants

**1. Agent scheduler (breaks at ~50 merchants)**
The current `run_all_merchants()` runs agents sequentially in a single loop. At 50 merchants, one 6-hour window would be consumed by sequential runs. At 10,000, it's impossible.

**Mitigation:** Replace APScheduler with a job queue (Celery + Redis, or BullMQ on the Node side). Each merchant becomes an independent task. Workers pull tasks from the queue. Scale workers horizontally.

**2. Internal signals API (breaks at ~500 merchants with large catalogs)**
`GET /api/internal/signals/:merchantId` fetches entire inventory + campaigns into Node.js memory for each agent run. At 10,000 SKUs per merchant × 500 concurrent runs, this causes OOM.

**Mitigation:** Paginate signals. Stream inventory to the agent in chunks. For the agent's depletion calculation, only load inventory with `quantityAvailable < 100` (candidates for depletion).

**3. PostgreSQL single instance (breaks at ~1,000 merchants, high write volume)**
10,000 merchants × multiple connector syncs per day = high write volume to shared tables. Row-level locking on `@@unique` upserts can cause contention.

**Mitigation:** Shard by `merchantId` range (tenant-based sharding). Use read replicas for all analytics queries (chat tools, dashboard). Use connection pooling (PgBouncer).

**4. Chat LLM latency (user-facing)**
Each chat message makes 2-3 Gemini API calls (classify → summarize → generate). At 10,000 concurrent users, this is 30,000 API calls/minute.

**Mitigation:** Cache intent classification for identical messages (Redis, 60s TTL). Cache tool results by `(merchantId, toolName, params hash)` with a 5-minute TTL. Use streaming for generation to reduce perceived latency.

### Architecture at scale

```
                     ┌─────────────────────────────────────────┐
                     │           Load Balancer                  │
                     └──────────┬──────────┬───────────────────┘
                                │          │
                     ┌──────────▼──┐  ┌────▼──────────┐
                     │ Fastify API │  │  Fastify API  │  (N replicas)
                     │  (stateless)│  │  (stateless)  │
                     └──────────┬──┘  └────┬──────────┘
                                │          │
              ┌─────────────────▼──────────▼───────────────────┐
              │                  Redis                          │
              │  (session cache | rate limits | job queue)      │
              └──────────┬──────────────────────────────────────┘
                         │
              ┌──────────▼──────────────────────────────────────┐
              │           PostgreSQL (primary)                   │
              │  + Read Replicas for analytics queries           │
              └─────────────────────────────────────────────────┘
                         │
              ┌──────────▼──────────────────────────────────────┐
              │        Agent Worker Pool (Python/Celery)         │
              │  Each worker processes one merchant at a time    │
              │  Tasks queued in Redis, results written to PG    │
              └─────────────────────────────────────────────────┘
```

---

## Failure Cases / Eval Honesty

**What's real:**
- The LangGraph DAG executes as designed — nodes run in sequence, conditional routing works
- The citation validator is real — broken regex was identified and fixed during development
- The chat tools query actual PostgreSQL via Prisma — not hardcoded responses
- Multi-tenant isolation is enforced at the query level (`merchantId` on every query)
- The agent writes recommendations with traceable citations and never executes actions

**What's simulated for this demo:**
- Connector data comes from JSON seed files via an internal mock API, not real Shopify/Meta/Klaviyo OAuth
- Inventory velocity is approximated from aggregate order counts (no per-SKU line item table exists yet — that would require a `UnifiedOrderItem` model and Shopify line-item sync)
- The Redis rate limiter falls back to in-memory when REDIS_URL is not set
- Gemini API key is required — the system degrades gracefully if the key is invalid (returns error messages, doesn't crash)

**Known limitations:**
- Conversation history is included in prompts but Gemini context window is not explicitly managed for very long conversations
- The `checksum` field exists on the schema but is not yet computed in the seeder (planned for idempotent re-sync)
- No end-to-end tests exist — the system was validated manually during development

---

## Hours Spent

| Phase | Hours |
|-------|-------|
| Schema design + Prisma setup + seed data | 2h 30 min |
| Connector abstraction + mock API + seeder | 10 min |
| Chat pipeline (intent → tools → citation → retry) | 30 min |
| LangGraph agent (DAG + signals + Gemini reasoning) | 20 min |
| Next.js frontend (auth + all pages + components) | 30 min |
| Security hardening + debugging + integration + testing | 3h |
| README + documentation | 1h 30 min |
| **Total** | **~8h 30min** |

---

## What Would Be Done With Another Week

**Week 2 priorities, in order:**

1. **Real OAuth connectors** — implement Shopify OAuth flow (shop domain → access token), Meta Ads OAuth, Klaviyo private API key auth. Store encrypted tokens in `ConnectorInstance.config`. Move connector `fetch*()` methods to call real APIs with pagination and retry.

2. **`UnifiedOrderItem` table** — store line-item level data (SKU, quantity, price) from Shopify orders. This enables true per-SKU velocity calculation instead of the current approximation.

3. **Job queue for agent runs** — replace APScheduler with BullMQ (Node) or Celery (Python) backed by Redis. Each merchant's agent run becomes an isolated, retryable task.

4. **Structured LLM function calling** — replace the intent classifier + manual tool routing with Gemini's native function calling API. Define each tool as a JSON schema and let the model choose which tools to call and with what parameters. This handles multi-tool queries ("What's my CAC and which campaigns are driving it?").

5. **Streaming chat with token-level citations** — use Gemini's streaming API to stream tokens to the frontend. Insert citation markers at the token level so citations appear inline as the response generates rather than all at once.

6. **Observability** — add structured logging (Pino), a `/metrics` endpoint with Prometheus counters (chat latency, agent run duration, tool call counts), and OpenTelemetry tracing across the Fastify → Prisma → Python agent call chain.

---

## Setup

```bash
# 1. Clone and install
git clone <repo>
pnpm install

# 2. Copy environment variables
cp .env.example .env
# Edit .env: add your GOOGLE_GEMINI_API_KEY

# 3. Start PostgreSQL and Redis
docker-compose up -d

# 4. Run database migrations
pnpm --filter @ai-employee-platform/db exec prisma migrate dev

# 5. Start all services
pnpm dev   # starts Next.js (3000) + Fastify API (3001) concurrently

# 6. Start the Python agent (separate terminal)
cd apps/agent
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --port 8000 --reload
```

Then open http://localhost:3000, register an account, and connect your first data source from the Connectors page.
