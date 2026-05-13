import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decrypt } from '@/lib/session'

export default async function proxy(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  const { pathname } = request.nextUrl

  const publicRoutes = ['/login', '/register', '/api/auth/login', '/api/auth/register', '/api/auth/logout']
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

  if (!session && !isPublicRoute && !pathname.startsWith('/_next') && !pathname.startsWith('/favicon.ico')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (session && isPublicRoute && !pathname.startsWith('/api')) {
    // Already logged in, trying to access login/register page
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Verify session validity
  if (session) {
    const payload = await decrypt(session)
    if (!payload && !isPublicRoute) {
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('session')
      return response
    }
  }

  // Handle root redirect
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
