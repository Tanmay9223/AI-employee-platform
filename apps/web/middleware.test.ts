import proxy from './middleware'
import { NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'
import type { NextRequest } from 'next/server'

// Mock dependencies
jest.mock('next/server', () => {
  return {
    NextResponse: {
      next: jest.fn(() => ({ type: 'next' })),
      redirect: jest.fn((url: string | URL) => ({
        type: 'redirect',
        url: url.toString(),
        cookies: {
          delete: jest.fn()
        }
      }))
    }
  }
})

jest.mock('@/lib/session', () => ({
  decrypt: jest.fn()
}))

describe('middleware', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.clearAllMocks()
  })

  // Helper to create a mock request
  const createMockRequest = (pathname: string, sessionValue?: string) => {
    return {
      nextUrl: {
        pathname
      },
      url: 'http://localhost' + pathname,
      cookies: {
        get: jest.fn((name: string) => {
          if (name === 'session' && sessionValue) {
            return { value: sessionValue }
          }
          return undefined
        })
      }
    } as unknown as NextRequest
  }

  describe('Unauthenticated user', () => {
    it('redirects to /login when accessing private route', async () => {
      const request = createMockRequest('/dashboard')
      const response = await proxy(request)

      expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/login', request.url))
      expect(response).toEqual(expect.objectContaining({ type: 'redirect' }))
    })

    it('allows accessing public routes', async () => {
      const routes = ['/login', '/register', '/api/auth/login', '/api/auth/register', '/api/auth/logout']

      for (const route of routes) {
        const request = createMockRequest(route)
        const response = await proxy(request)

        expect(NextResponse.next).toHaveBeenCalled()
        expect(response).toEqual(expect.objectContaining({ type: 'next' }))
        jest.clearAllMocks() // reset for next iteration
      }
    })

    it('allows accessing Next.js internal routes', async () => {
      const request1 = createMockRequest('/_next/static/css/style.css')
      const response1 = await proxy(request1)
      expect(NextResponse.next).toHaveBeenCalled()

      jest.clearAllMocks()

      const request2 = createMockRequest('/favicon.ico')
      const response2 = await proxy(request2)
      expect(NextResponse.next).toHaveBeenCalled()
    })
  })

  describe('Authenticated user', () => {
    it('redirects to /dashboard when accessing public auth routes (non-api)', async () => {
      const request = createMockRequest('/login', 'valid-session-token')
      ;(decrypt as jest.Mock).mockResolvedValue({ userId: '123' })

      const response = await proxy(request)

      expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/dashboard', request.url))
      expect(response).toEqual(expect.objectContaining({ type: 'redirect' }))
    })

    it('allows accessing API auth routes', async () => {
      const request = createMockRequest('/api/auth/login', 'valid-session-token')
      ;(decrypt as jest.Mock).mockResolvedValue({ userId: '123' })

      const response = await proxy(request)

      expect(NextResponse.next).toHaveBeenCalled()
      expect(response).toEqual(expect.objectContaining({ type: 'next' }))
    })

    it('allows accessing private routes with valid session', async () => {
      const request = createMockRequest('/dashboard', 'valid-session-token')
      ;(decrypt as jest.Mock).mockResolvedValue({ userId: '123' })

      const response = await proxy(request)

      expect(NextResponse.next).toHaveBeenCalled()
      expect(response).toEqual(expect.objectContaining({ type: 'next' }))
    })

    it('clears session and redirects to /login if session is invalid', async () => {
      const request = createMockRequest('/dashboard', 'invalid-session-token')
      ;(decrypt as jest.Mock).mockResolvedValue(null) // Mock invalid session

      const response = await proxy(request)

      expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/login', request.url))
      expect(response).toEqual(expect.objectContaining({ type: 'redirect' }))

      // Checking that response.cookies.delete was called
      const mockRedirectResult = (NextResponse.redirect as jest.Mock).mock.results[0].value
      expect(mockRedirectResult.cookies.delete).toHaveBeenCalledWith('session')
    })
  })

  describe('Root path redirect', () => {
    it('redirects root path to /dashboard if authenticated', async () => {
      const request = createMockRequest('/', 'valid-session-token')
      ;(decrypt as jest.Mock).mockResolvedValue({ userId: '123' })

      const response = await proxy(request)

      expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/dashboard', request.url))
      expect(response).toEqual(expect.objectContaining({ type: 'redirect' }))
    })

    // Unauthenticated root path redirect is covered by unauthenticated private route redirect (since '/' isn't public route)
    it('redirects root path to /login if unauthenticated', async () => {
      const request = createMockRequest('/')
      const response = await proxy(request)

      expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/login', request.url))
      expect(response).toEqual(expect.objectContaining({ type: 'redirect' }))
    })
  })
})
