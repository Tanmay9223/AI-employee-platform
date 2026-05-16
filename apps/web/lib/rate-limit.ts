/**
 * Redis-backed rate limiter for auth endpoints.
 *
 * Uses Redis INCR + EXPIRE sliding window pattern.
 * At scale, replace with @upstash/ratelimit for edge-compatible rate limiting.
 *
 * Falls back to in-memory if Redis is unavailable (allows local dev without Redis).
 */

type RateLimitEntry = {
  count: number
  resetAt: number
}

// In-memory fallback (used when Redis is not available)
const memoryStore = new Map<string, RateLimitEntry>()

let redisClient: any = null

async function getRedis() {
  if (redisClient) return redisClient

  const REDIS_URL = process.env.REDIS_URL
  if (!REDIS_URL) return null

  try {
    // Dynamically import to avoid breaking when Redis is not installed
    const { createClient } = await import('redis')
    const client = createClient({ url: REDIS_URL })
    client.on('error', (err: any) => console.warn('[RateLimit] Redis error (falling back to memory):', err.message))
    await client.connect()
    redisClient = client
    return client
  } catch {
    return null
  }
}

export async function checkRateLimit(
  ip: string,
  limit = 5,
  windowMs = 60_000
): Promise<{ success: boolean }> {
  const key = `rate:${ip}`
  const now = Date.now()
  const windowSec = Math.floor(windowMs / 1000)

  const redis = await getRedis()

  if (redis) {
    try {
      // Atomic INCR — Redis guarantees this is thread-safe across multiple server instances
      const count = await redis.incr(key)
      if (count === 1) {
        // First request in window — set expiry
        await redis.expire(key, windowSec)
      }
      return { success: count <= limit }
    } catch (err: any) {
      console.warn('[RateLimit] Redis op failed, using memory fallback:', err.message)
    }
  }

  // ── In-memory fallback ──────────────────────────────────────────────────
  const entry = memoryStore.get(key)

  if (!entry || now > entry.resetAt) {
    memoryStore.set(key, { count: 1, resetAt: now + windowMs })
    return { success: true }
  }

  if (entry.count >= limit) return { success: false }

  entry.count += 1
  return { success: true }
}

// Cleanup stale entries from in-memory fallback
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of memoryStore.entries()) {
    if (now > entry.resetAt) memoryStore.delete(key)
  }
}, 60_000)
