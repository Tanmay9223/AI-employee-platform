import { headers } from 'next/headers'
import { isIP } from 'node:net'

/**
 * Parses the client IP address from request headers.
 *
 * Trust Assumption:
 * This function assumes the application is sitting behind a trusted proxy (e.g., a load balancer or CDN like Cloudflare).
 * The number of proxy hops is configured via the TRUSTED_PROXY_HOPS environment variable (default: 1).
 * The origin MUST only accept traffic from the trusted proxy. Otherwise, an attacker can connect directly
 * and send a spoofed X-Forwarded-For header.
 */
export async function getClientIp(): Promise<string | null> {
  const headersList = await headers()

  // Prefer platform-specific headers if available
  const cfConnectingIp = headersList.get('cf-connecting-ip')
  if (cfConnectingIp && isIP(cfConnectingIp)) {
    return normalizeIp(cfConnectingIp)
  }

  const xRealIp = headersList.get('x-real-ip')
  if (xRealIp && isIP(xRealIp)) {
    return normalizeIp(xRealIp)
  }

  const forwardedFor = headersList.get('x-forwarded-for')
  if (!forwardedFor) {
    return null
  }

  const hops = parseInt(process.env.TRUSTED_PROXY_HOPS || '1', 10)

  // Split on commas, trim, and filter out empty entries
  const ips = forwardedFor.split(',').map(ip => ip.trim()).filter(Boolean)

  if (ips.length === 0) {
    return null
  }

  const targetIndex = ips.length - hops

  if (targetIndex < 0) {
    // If the number of elements in x-forwarded-for is fewer than the expected proxy hops,
    // this request bypassed the expected routing layer or the headers were mangled.
    // We cannot trust it, so we return null rather than falling back to the potentially spoofable leftmost IP.
    return null
  }

  const ip = ips[targetIndex]
  return isIP(ip) ? normalizeIp(ip) : null
}

function normalizeIp(ip: string): string {
  // Check if IPv6
  if (isIP(ip) === 6) {
    return normalizeIPv6(ip)
  }
  return ip
}

function normalizeIPv6(ip: string): string {
  // Expand IPv6
  let expanded = ip
  if (expanded.includes('::')) {
    const parts = expanded.split('::')
    const left = parts[0] ? parts[0].split(':') : []
    const right = parts[1] ? parts[1].split(':') : []
    const missing = 8 - (left.length + right.length)
    const middle = Array(missing).fill('0000')
    expanded = [...left, ...middle, ...right].join(':')
  }

  // Pad with leading zeros
  const fullBlocks = expanded.split(':').map(block => block.padStart(4, '0'))

  // Return first 4 blocks (/64)
  return fullBlocks.slice(0, 4).join(':') + '::/64'
}
