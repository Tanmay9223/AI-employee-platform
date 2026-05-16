import { NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { seedConnectorData } from '@/lib/seeder'

export async function POST(req: Request) {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { startDate, endDate } = await req.json()
    
    if (!startDate || !endDate) {
      return NextResponse.json({ error: 'Missing date bounds' }, { status: 400 })
    }

    // Trigger chunked historical sync via the seeder logic we updated
    // In production, this would dispatch a background job
    await seedConnectorData(session.merchantId, 'shopify', { 
      startDate: new Date(startDate), 
      endDate: new Date(endDate) 
    })

    return NextResponse.json({ success: true, message: 'Historical sync completed successfully' })
  } catch (error) {
    console.error('Failed to sync historical data:', error)
    return NextResponse.json({ error: 'Failed to sync historical data' }, { status: 500 })
  }
}
