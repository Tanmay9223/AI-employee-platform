import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { createSession } from '@/lib/session'
import { checkRateLimit } from '@/lib/rate-limit'
import { hashPassword } from '@/lib/auth-utils'
import { getClientIp } from '@/lib/get-client-ip'

const SHARED_REGISTRATION_CODE = process.env.REGISTRATION_CODE

export async function POST(req: Request) {
  try {
    if (!SHARED_REGISTRATION_CODE) {
      console.error('REGISTRATION_CODE environment variable is not set')
      return NextResponse.json({ error: 'Registration is currently unavailable' }, { status: 503 })
    }
    const ip = await getClientIp()

    // Fallback bucket for unknown IPs with a much stricter limit
    const ipBucket = ip ? `register_ip_${ip}` : 'register_ip_unknown'
    const ipLimit = ip ? 5 : 2

    const rateLimit = await checkRateLimit(ipBucket, ipLimit, 60000)
    
    if (!rateLimit.success) {
      return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 })
    }

    const { email: rawEmail, password, code, companyName } = await req.json()

    if (!rawEmail || !password || !code || !companyName) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const email = rawEmail.toLowerCase().trim()

    // Add per-account limiter for registration
    const accountRateLimit = await checkRateLimit(`register_acc_${email}`, 5, 60000)
    if (!accountRateLimit.success) {
      return NextResponse.json({ error: 'Too many attempts for this email. Please try again later.' }, { status: 429 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Password strength check (min 8 chars)
    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters long' }, { status: 400 })
    }

    if (code !== SHARED_REGISTRATION_CODE) {
      return NextResponse.json({ error: 'Invalid registration code' }, { status: 401 })
    }

    const existingUser = await db.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 400 })
    }

    // Hash password
    const passwordHash = hashPassword(password)

    // Create Merchant and User in a transaction
    const result = await db.$transaction(async (tx) => {
      const slug = companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.random().toString(36).substring(2, 6)
      
      const merchant = await tx.merchant.create({
        data: {
          name: companyName,
          slug,
        }
      })

      const user = await tx.user.create({
        data: {
          email,
          passwordHash,
          merchantId: merchant.id
        }
      })

      return { user, merchant }
    })

    // Create session
    await createSession(result.user.id, result.merchant.id, companyName)

    return NextResponse.json({ success: true, redirect: '/connectors' })
  } catch (error: any) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}
