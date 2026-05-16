# Productionizing the AI Employee Platform

We've successfully upgraded the Data Explorer architecture and the Shopify connector syncing logic to production-grade standards. 

## 1. Splitting the Data Explorer
**What changed**: We removed the unified `/data` route and created distinct `/orders`, `/inventory`, and `/campaigns` routes, each directly accessible from the left sidebar.
**Why (Interview Answer)**: 
*   **Performance & OOM Prevention**: Previously, loading the `/data` page would dispatch `fetch` queries for both Inventory and Campaigns simultaneously. If a merchant has a massive catalog and years of campaigns, pulling both datasets simultaneously into memory (both on the Node backend and React frontend) could crash the server and freeze the browser. 
*   **Separation of Concerns**: Splitting routes implements lazy loading naturally. The backend only queries the DB for the exact table the user intends to view.

## 2. Campaign Filtering
**What changed**: Added a dropdown on the `/campaigns` page allowing users to filter by "Meta Ads" or "Klaviyo".
**Why (Interview Answer)**: 
*   **Unified Abstractions**: The database normalizes different ad platforms into a single `UnifiedCampaign` model. However, marketers often need to isolate channel performance. We perform this filter on the frontend for immediate, snappy feedback without a network round-trip. (Note: For 1M+ campaigns, you would migrate this filter to the backend via a query parameter `?connector=meta_ads`).

## 3. Shopify Real-Time Webhook Toggle
**What changed**: Added an "Edit" pane to the Connectors page that allows users to toggle "Live Order Sync (Webhooks)".
**Why (Interview Answer)**:
*   **Event-Driven vs Polling**: Constant polling (checking the API every hour) is inefficient and wastes API rate limits. By establishing a webhook, the AI platform reacts to data *as it happens*. This makes the AI Agent instantly aware of a new order, without unnecessary network traffic.

## 4. Chunked Historical Sync
**What changed**: The initial Shopify authorization now strictly fetches the last **7 days** of data. Users can subsequently navigate to the connector's Edit pane to manually migrate historical data (e.g., Previous Month, Previous Year) in small **chunks**.
**Why (Interview Answer)**:
*   **Snappy Onboarding**: First impressions matter. If you force an initial sync of 5 years of historical orders, the user will be staring at a loading spinner for 10 minutes. Limiting it to 7 days provides instant gratification and populates the dashboard immediately.
*   **Memory Management (Chunking)**: Fetching 1 million rows from an external API or Postgres all at once will trigger a `V8 heap out of memory` crash. By implementing a `while(hasMore)` chunking loop with `take` and `cursor`, we stream the data into our DB safely, keeping memory overhead constant regardless of the total dataset size.
