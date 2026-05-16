import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/session'

export async function POST(req: Request) {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { enabled } = await req.json()

    // Find the Shopify connector
    const connector = await db.connectorInstance.findUnique({
      where: { merchantId_connectorType: { merchantId: session.merchantId, connectorType: 'shopify' } }
    })

    if (!connector) {
      return NextResponse.json({ error: 'Shopify connector not found' }, { status: 404 })
    }

    // Update config to reflect webhook setting
    const currentConfig = (connector.config as Record<string, any>) || {}
    await db.connectorInstance.update({
      where: { id: connector.id },
      data: {
        config: { ...currentConfig, webhooksEnabled: enabled }
      }
    })

    return NextResponse.json({ success: true, webhooksEnabled: enabled })
  } catch (error) {
    console.error('Failed to toggle webhooks:', error)
    return NextResponse.json({ error: 'Failed to update webhook settings' }, { status: 500 })
  }
}
