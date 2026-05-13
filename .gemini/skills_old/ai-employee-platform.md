# AI Employee Platform - Project Context Skill

**Description:** Use this skill to instantly recall the architecture, design rules, and file structure of the AI Employee Platform. This replaces the need to ingest all 5 markdown files (00 to 04) every time.

## 1. Tech Stack
- **Backend:** Fastify, Node.js, TypeScript, PostgreSQL, Prisma, Redis.
- **Frontend:** Next.js 14, Tailwind CSS, shadcn/ui, TanStack Query, Zustand, Recharts.
- **AI Layer:** Gemini 3 Flash (sole LLM used for intent, summary, reasoning, & final answer).
- **Agent Service:** Python, LangGraph, FastAPI, httpx (HTTP communication).
- **Architecture Flow:** Webhooks + Cron Jobs -> Fastify Internal API -> Postgres DB -> AI Chat / LangGraph Agent -> Next.js UI.

## 2. Core Constraints & Rules
- **No Direct DB Access for Python:** The Python agent MUST NOT use `psycopg2`. It must use `httpx` to call internal Fastify endpoints (`/api/internal/signals`, `/api/internal/recommendations`, `/api/internal/logs`).
- **No Qwen/Ollama/BullMQ:** These were removed to optimize speed, complexity, and resources. Use only Gemini 3 Flash and Fastify cron jobs/intervals.
- **Citations are Mandatory:** Every number output in the AI chat must have a citation appended, e.g., `[Source: shopify | orders | Nov 2024]`.
- **Hybrid Sync Strategy:** Operational data is fetched from the normalized DB (not live SaaS APIs) during AI queries. Syncs happen via Webhooks (real-time) and Cron schedules (incremental).
- **Multi-Tenant Isolation:** Every database table MUST have `merchant_id`.
- **Mock Connectors Only:** No real API calls to Shopify/Meta/Klaviyo. Use the `/api/mock/*` endpoints and seed data for now.
- **Agent Safety:** The agent only recommends actions, it never executes them. A human must approve all actions in the dashboard.

## 3. Monorepo Structure
```
ai-employee-platform/
├── apps/
│   ├── web/                    # Next.js 14 Dashboard UI
│   └── agent/                  # Python LangGraph agent service
├── packages/
│   ├── api/                    # Fastify backend & connector sync logic
│   ├── db/                     # Prisma schema, migrations, seed data
│   └── shared/                 # Shared types/utils
```

## 4. Phase Breakdown
- **Phase 1 (Foundation):** Fastify API, Prisma models (`UnifiedOrder`, `UnifiedCampaign`, `UnifiedInventory`), seeded data, and mock API routes (`/api/mock/*`) for connectors. Internal routes (`/api/internal/*`) expose data for the Python agent.
- **Phase 2 (AI Chat):** Fastify orchestrator that classifies intent (Gemini), runs tools to query Postgres, summarizes results, and generates a cited final answer.
- **Phase 3 (AI Agent):** LangGraph Python microservice running on port 8000. It fetches signals from Fastify, forecasts inventory depletion, and generates risk recommendations back to Fastify.
- **Phase 4 (Frontend):** Next.js dashboard with pages for Dashboard KPIs, Connectors (mock sync), AI Chat, Data Explorer, and Recommendations review.

> **Instruction to AI:** When working on this project, adhere to these guidelines to ensure consistency, specifically avoiding direct Python DB queries and live external API calls during chat.
