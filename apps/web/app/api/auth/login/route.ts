import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { createSession } from '@/lib/session'
import { checkRateLimit } from '@/lib/rate-limit'
import { verifyPassword } from '@/lib/auth-utils'

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'
    const rateLimit = await checkRateLimit(`login_${ip}`, 10, 60000)
    
    if (!rateLimit.success) {
      return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 })
    }

    const { email: rawEmail, password } = await req.json()

    if (!rawEmail || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const email = rawEmail.toLowerCase().trim()

    const user = await db.user.findUnique({
      where: { email },
      include: { merchant: true }
    })

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const isMatch = verifyPassword(password, user.passwordHash)

    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Create session
    await createSession(user.id, user.merchantId, user.merchant.name)

    return NextResponse.json({ success: true, redirect: '/dashboard' })
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}
