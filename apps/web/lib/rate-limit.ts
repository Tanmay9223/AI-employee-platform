// Simple in-memory rate limiter for demo purposes.
// In a production environment with multiple instances, use Redis (e.g. ioredis or @upstash/ratelimit)

type RateLimitEntry = {
  count: number;
  resetAt: number;
}

const rateLimits = new Map<string, RateLimitEntry>()

export async function checkRateLimit(ip: string, limit: number = 5, windowMs: number = 60000): Promise<{ success: boolean }> {
  const now = Date.now()
  const entry = rateLimits.get(ip)

  if (!entry) {
    rateLimits.set(ip, { count: 1, resetAt: now + windowMs })
    return { success: true }
  }

  if (now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + windowMs })
    return { success: true }
  }

  if (entry.count >= limit) {
    return { success: false }
  }

  entry.count += 1
  return { success: true }
}

// Cleanup interval to prevent memory leaks in long-running processes
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimits.entries()) {
    if (now > entry.resetAt) {
      rateLimits.delete(key)
    }
  }
}, 60000)
