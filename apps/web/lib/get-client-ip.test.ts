import { getClientIp } from './get-client-ip'
import { headers } from 'next/headers'

// Mock next/headers
jest.mock('next/headers', () => ({
  headers: jest.fn()
}))

describe('getClientIp', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.clearAllMocks()
    process.env = { ...originalEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  function mockHeaders(mockConfig: Record<string, string>) {
    ;(headers as jest.Mock).mockResolvedValue({
      get: (key: string) => mockConfig[key] || null
    })
  }

  it('prefers cf-connecting-ip', async () => {
    mockHeaders({
      'cf-connecting-ip': '1.2.3.4',
      'x-forwarded-for': '5.6.7.8'
    })
    const ip = await getClientIp()
    expect(ip).toBe('1.2.3.4')
  })

  it('prefers x-real-ip if cf is missing', async () => {
    mockHeaders({
      'x-real-ip': '1.2.3.4',
      'x-forwarded-for': '5.6.7.8'
    })
    const ip = await getClientIp()
    expect(ip).toBe('1.2.3.4')
  })

  it('extracts IP from single hop x-forwarded-for', async () => {
    process.env.TRUSTED_PROXY_HOPS = '1'
    mockHeaders({
      'x-forwarded-for': '1.2.3.4, 5.6.7.8' // 1.2.3.4 -> proxy(5.6.7.8) -> us
    })
    const ip = await getClientIp()
    expect(ip).toBe('5.6.7.8')
  })

  it('extracts IP with multiple hops', async () => {
    process.env.TRUSTED_PROXY_HOPS = '2'
    mockHeaders({
      'x-forwarded-for': '1.1.1.1, 2.2.2.2, 3.3.3.3'
    })
    const ip = await getClientIp()
    expect(ip).toBe('2.2.2.2')
  })

  it('rejects spoofed leftmost entry', async () => {
    process.env.TRUSTED_PROXY_HOPS = '1'
    mockHeaders({
      'x-forwarded-for': '6.6.6.6, 1.2.3.4'
    })
    const ip = await getClientIp()
    expect(ip).toBe('1.2.3.4')
  })

  it('handles trailing comma', async () => {
    process.env.TRUSTED_PROXY_HOPS = '1'
    mockHeaders({
      'x-forwarded-for': '1.2.3.4, '
    })
    const ip = await getClientIp()
    expect(ip).toBe('1.2.3.4')
  })

  it('returns null for invalid IP string', async () => {
    process.env.TRUSTED_PROXY_HOPS = '1'
    mockHeaders({
      'x-forwarded-for': 'not-an-ip'
    })
    const ip = await getClientIp()
    expect(ip).toBeNull()
  })

  it('returns null for missing header', async () => {
    mockHeaders({})
    const ip = await getClientIp()
    expect(ip).toBeNull()
  })

  it('normalizes IPv6 to /64', async () => {
    mockHeaders({
      'cf-connecting-ip': '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
    })
    const ip = await getClientIp()
    expect(ip).toBe('2001:0db8:85a3:0000::/64')
  })

  it('normalizes compressed IPv6 to /64', async () => {
    mockHeaders({
      'cf-connecting-ip': '2001:db8::1'
    })
    const ip = await getClientIp()
    expect(ip).toBe('2001:0db8:0000:0000::/64')
  })

  it('returns null for hop count larger than list length', async () => {
    process.env.TRUSTED_PROXY_HOPS = '5'
    mockHeaders({
      'x-forwarded-for': '1.2.3.4, 5.6.7.8'
    })
    const ip = await getClientIp()
    expect(ip).toBeNull()
  })
})
