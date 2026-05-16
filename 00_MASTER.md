# AI Employee Platform — Master Project Context
> Keep this file open in your IDE at all times. Every phase references this.

---

## What We Are Building

A multi-tenant SaaS dashboard for D2C (Direct-to-Consumer) brands that:
1. Pulls business data from Shopify, Meta Ads, Klaviyo (using DUMMY/SEED data for now)
2. Normalizes everything into one PostgreSQL database
3. Has an AI Chat where merchants ask business questions and get cited answers
4. Has an Autonomous AI Agent that detects inventory risk and recommends actions
5. Has a clean dashboard UI showing all of this

---

## Tech Stack (Do Not Change These)

### Backend
- **Runtime:** Node.js with TypeScript
- **Framework:** Fastify
- **Database:** PostgreSQL
- **Cache:** Redis
- **ORM:** Prisma

### AI Layer
- **Primary LLM:** Google Gemini 3.1 flash (via API key)
- **Agent Framework:** LangGraph (Python microservice)
- **Pattern:** Gemini 3.1 flash handles intent classification, summarization, and final cited answer

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **State:** TanStack Query + Zustand
- **Charts:** Recharts

### Infrastructure
- **Containerization:** Docker + Docker Compose
- **Auth:** Clerk
- **Package Manager:** pnpm (monorepo)

---

## Monorepo Structure

```
ai-employee-platform/
├── apps/
│   ├── web/                    # Next.js frontend
│   └── agent/                  # Python LangGraph agent service
├── packages/
│   ├── api/                    # Fastify backend
│   ├── db/                     # Prisma schema + migrations
│   └── shared/                 # Shared types and utilities
├── docker-compose.yml
├── .env.example
└── package.json                # Root pnpm workspace
```

---

## Environment Variables Needed

```env
# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/ai_employee_db

# Redis
REDIS_URL=redis://localhost:6379

# AI - Primary
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here

# Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# App
NODE_ENV=development
API_PORT=3001
NEXT_PUBLIC_API_URL=http://localhost:3001
AGENT_SERVICE_URL=http://localhost:8000
```

---

## Key Design Rules (Never Break These)

1. **Every number in AI chat MUST have a citation** — format: `[Source: shopify | orders | Nov 2024]`
2. **Every database table MUST have merchant_id** — multi-tenant isolation
3. **Gemini is the only LLM used** — handles both pre-processing and final answer generation
4. **No real API calls to Shopify/Meta/Klaviyo** — use seed data only for now
5. **Agent only recommends, never executes** — human must approve all actions

---

## Data Flow (Understand This First)

```
Seed Data (fake JSON)
      ↓
Connector Sync (Fastify Cron/Interval)
      ↓
PostgreSQL Unified Tables (normalized)
      ↓
          ┌─────────────────┬──────────────────┐
          ↓                 ↓                  ↓
     AI Chat           AI Agent          Dashboard
     (Gemini)        (LangGraph)        (Next.js UI)
          ↓                 ↓                  ↓
   Cited Answers    Recommendations      Charts/Tables
```

---

## AI Model Usage (Important)

| Task | Model | Why |
|------|-------|-----|
| Classify user intent | Gemini 3.1 flash | Fast, accurate routing |
| Summarize raw DB results | Gemini 3.1 flash | Reduces context window for final answer |
| Generate final cited answer | Gemini 3.1 flash | Accurate, reliable citations |
| Agent reasoning | Gemini 3.1 flash | Needs accuracy for recommendations |

---

## Dummy Data Overview

We use seed data that mimics real connector responses:
- **500 orders** (last 6 months, random amounts $20–$800)
- **200 customers** (mix of new and returning)
- **3 ad campaigns** (Meta-style: spend, ROAS, impressions)
- **3 email campaigns** (Klaviyo-style: open rate, revenue)
- **15 SKUs** with inventory levels (some intentionally low for agent demo)

---

## Three Connector Types (Simulated)

| Connector | Data It Provides | Simulated Via |
|-----------|-----------------|---------------|
| Shopify | Orders, customers, inventory | Seed JSON file |
| Meta Ads | Campaign spend, ROAS, impressions | Seed JSON file |
| Klaviyo | Email campaigns, open rates, revenue | Seed JSON file |

All connectors share the same `BaseConnector` interface.

---

## Citation Format

Every AI response must format citations like this:
```
Your revenue last month was $42,380 [Source: shopify → unified_orders → Oct 2024 | 847 records]
Your best ROAS campaign was "Black Friday Sale" at 4.2x [Source: meta_ads → unified_campaigns → Nov 2024]
```

---

## Agent Output Format

```json
{
  "risk_level": "CRITICAL",
  "sku": "HOODIE-BLK-L",
  "message": "Stock will deplete in 2.8 days at current velocity",
  "recommended_action": "Reorder 300 units immediately",
  "revenue_at_risk": 8900,
  "confidence": 0.87,
  "citations": ["inventory_shopify_7721", "orders_30d_velocity"],
  "status": "pending_approval"
}
```

---

## Phases Overview

| Phase | File | What Gets Built |
|-------|------|-----------------|
| 1 | 01_FOUNDATION.md | DB schema, seed data, connector workers, API setup |
| 2 | 02_AI_CHAT.md | Gemini chat with tool calls and citation enforcement |
| 3 | 03_AGENT.md | LangGraph inventory risk agent with recommendation queue |
| 4 | 04_FRONTEND.md | Next.js dashboard: connect screen, chat screen, recommendations screen |

---

> Start with Phase 1. Do not begin Phase 2 until Phase 1 is fully working.
> Run `docker-compose up` before starting any phase.