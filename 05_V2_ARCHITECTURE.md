# Phase 5 — V2 Production Architecture
## Scaling to Thousands of Merchants

> This phase outlines the transition from a "Seed Data" MVP to a production-scale SaaS platform.

---

## High-Level Vision

> "The system uses a hybrid ingestion architecture combining webhook-driven updates with periodic incremental reconciliation jobs. AI interactions query normalized internal operational models instead of external SaaS APIs to reduce latency, improve reliability, and avoid provider rate limits."

To handle production loads, we shift from synchronous internal polling to an event-driven, hybrid-sync architecture. This ensures high availability and data freshness without overloading the operational database.

---

## 1. Data Synchronization Strategy: Hybrid Sync Strategy

The best production-grade architecture relies on a **hybrid sync strategy**:
* some data is pulled periodically
* some data comes via webhooks
* AI queries mostly hit your normalized DB
* connectors are called live only when necessary

### Why Hybrid Is Best

**Webhooks alone are NOT enough** because sometimes a webhook fails, a provider misses events, or retries fail.  
**Polling alone is NOT enough** because it is expensive, delayed, and rate-limited.

By combining both, you achieve the mature architecture answer:
```txt
Webhook = immediate updates
Scheduled sync = consistency reconciliation
```

### Best Realistic Sync Strategy

#### A. Webhooks → Real-Time Critical Updates
Use webhooks for:
* new orders
* refunds
* inventory changes
* campaign updates

Example: Shopify Order Created, Klaviyo Campaign Sent, Meta Ad Status Changed. This keeps important data fresh.

#### B. Scheduled Incremental Syncs
Use cron jobs/workers (e.g. via BullMQ).

Example Frequency:
| Data Type            | Frequency    |
| -------------------- | ------------ |
| Orders               | every 5 min  |
| Ad metrics           | every 15 min |
| Inventory            | every 10 min |
| Customers            | every 1 hour |
| Historical analytics | nightly      |

This is exactly how real systems work.

### Recommended Sync Frequencies For Your Submission
* **Shopify**: Webhook + 5 min reconciliation
* **Meta Ads**: 15–30 min polling (ad metrics don’t need second-level freshness)
* **Klaviyo**: Webhook + hourly sync

---

## 2. Correct Architecture Flow

### What NOT To Do (Bad Architecture)

```txt
User asks question
    ↓
Call Shopify API
Call Meta API
Call Klaviyo API
Merge data live
Generate answer
```
Why this is bad: slow, rate-limit issues, expensive, unreliable, APIs timeout, impossible at scale, and terrible UX. If 10,000 merchants ask questions simultaneously, your system dies.

### Correct Architecture (Recommended Flow)

```txt
Connectors
    ↓
Incremental Sync / Webhooks
    ↓
Normalized DB
    ↓
AI Query Layer
```

AI talks mostly to YOUR DB, not external SaaS APIs during chat. This is critical.

---

## 3. What Happens During AI Chat?

### Example User Question
> “Why did ROAS drop yesterday?”

The AI should:
1. query YOUR normalized DB
2. retrieve metrics
3. fetch provenance rows
4. generate grounded answer
5. attach citations

NOT:
```txt
→ live call Meta API
→ live call Shopify
```

### When SHOULD You Call Connectors Live?
Only for:
* rarely accessed data
* drill-down details
* manual refresh
* cache misses
* explicit “sync latest data” requests

Example: User clicks "Refresh latest Meta metrics"
```txt
connector → fetch fresh data → normalize → save
```

---

## 4. Data Freshness Model & Storage

### Hot Operational Data
* synced every few minutes
* optimized for AI queries
* **Normalized Postgres:** Keep the operational database strictly normalized for performance. Only store business-critical entities needed for the Dashboard and AI reasoning.

### Cold Historical Data
* archived
* batch synced
* **Raw Payload Archival (S3):** Store every raw JSON payload from SaaS connectors in S3 before processing. This provides a "Point-in-Time" recovery mechanism and a clear audit trail (provenance) for AI citations.

### Real-Time Events
* webhook driven

---

## 5. Smart v0 Architecture

This architecture is scalable, practical, interview-grade, and production-aware. Exactly what they want.

```txt
SaaS APIs
   ↓
Webhook Ingestion
   ↓
Queue (BullMQ)
   ↓
Normalization Workers
   ↓
Postgres Operational Store
   ↓
AI Chat + AI Employee
```

---

## 6. Scalability Metrics
- **Multi-Tenant Isolation:** Row-level security at the DB level.
- **Rate Limiting:** Implement per-merchant buffers in BullMQ to ensure one large merchant doesn't starve small merchants of sync resources.