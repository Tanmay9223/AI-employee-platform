import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/session'
import { seedConnectorData } from '@/lib/seeder'

export async function POST(req: Request, { params }: { params: Promise<{ type: string }> }) {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Need to await params in Next.js 15
  const { type } = await params

  try {
    const existing = await db.connectorInstance.findUnique({
      where: { merchantId_connectorType: { merchantId: session.merchantId, connectorType: type } }
    })

    if (existing) {
      return NextResponse.json({ error: 'Connector already authorized' }, { status: 400 })
    }

    // Seed data
    await seedConnectorData(session.merchantId, type)

    // Create connector instance
    await db.connectorInstance.create({
      data: {
        merchantId: session.merchantId,
        connectorType: type,
        status: 'active',
        lastSyncedAt: new Date()
      }
    })

    return NextResponse.json({ success: true, redirect: '/connectors' })
  } catch (error) {
    console.error('Failed to authorize connector:', error)
    return NextResponse.json({ error: 'Failed to authorize connector' }, { status: 500 })
  }
}
