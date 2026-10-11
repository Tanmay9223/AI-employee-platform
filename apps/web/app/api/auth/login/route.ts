import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { createSession } from '@/lib/session'
import { checkRateLimit } from '@/lib/rate-limit'
import { verifyPassword } from '@/lib/auth-utils'
import { getClientIp } from '@/lib/get-client-ip'

export async function POST(req: Request) {
  try {
    const ip = await getClientIp()

    // Fallback bucket for unknown IPs with a much stricter limit
    const ipBucket = ip ? `login_ip_${ip}` : 'login_ip_unknown'
    const ipLimit = ip ? 10 : 3

    const rateLimit = await checkRateLimit(ipBucket, ipLimit, 60000)
    
    if (!rateLimit.success) {
      return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 })
    }

    const { email: rawEmail, password } = await req.json()

    if (!rawEmail || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const email = rawEmail.toLowerCase().trim()

    // Add per-account limiter
    const accountRateLimit = await checkRateLimit(`login_acc_${email}`, 10, 60000)
    if (!accountRateLimit.success) {
      return NextResponse.json({ error: 'Too many attempts for this account. Please try again later.' }, { status: 429 })
    }

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
