import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { createSession } from '@/lib/session'
import { checkRateLimit } from '@/lib/rate-limit'
import { hashPassword } from '@/lib/auth-utils'

const SHARED_REGISTRATION_CODE = process.env.REGISTRATION_CODE

export async function POST(req: Request) {
  try {
    if (!SHARED_REGISTRATION_CODE) {
      console.error('REGISTRATION_CODE environment variable is not set')
      return NextResponse.json({ error: 'Registration is currently unavailable' }, { status: 503 })
    }
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'
    const rateLimit = await checkRateLimit(`register_${ip}`, 5, 60000)
    
    if (!rateLimit.success) {
      return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 })
    }

    const { email: rawEmail, password, code, companyName } = await req.json()

    if (!rawEmail || !password || !code || !companyName) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const email = rawEmail.toLowerCase().trim()

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
