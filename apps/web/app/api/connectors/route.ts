import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/session'

export async function GET() {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const connectors = await db.connectorInstance.findMany({
      where: { merchantId: session.merchantId },
      select: { connectorType: true, status: true, lastSyncedAt: true }
    })

    return NextResponse.json(connectors)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch connectors' }, { status: 500 })
  }
}
