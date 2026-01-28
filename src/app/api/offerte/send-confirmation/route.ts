import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs/promises'
import * as path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { email, name, offerteType, offerteId } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const type = offerteType === 'with-photo' ? 'Met Fotografie' : 'Zonder Fotografie'
    const totalAmount = offerteType === 'with-photo' ? '€1.960,20' : '€1.603,25'
    const priceExclVat = offerteType === 'with-photo' ? '€1.620,00' : '€1.325,00'
    const vat = offerteType === 'with-photo' ? '€340,20' : '€278,25'
    const timestamp = new Date().toISOString()
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown'

    // Create proof record for legal documentation
    const proofRecord = {
      offerteId,
      clientName: name,
      clientEmail: email,
      offerteType: type,
      totalAmount,
      priceExclVat,
      vat,
      timestamp,
      clientIp,
      userAgent: request.headers.get('user-agent'),
      acceptanceMethod: 'Web Signature',
    }

    // Log approval for legal proof
    try {
      const logDir = path.join(process.cwd(), 'public', 'offerte-approvals')
      await fs.mkdir(logDir, { recursive: true })
      const filename = `${offerteId}-${Date.now()}.json`
      await fs.writeFile(path.join(logDir, filename), JSON.stringify(proofRecord, null, 2))
      console.log('Approval proof recorded:', filename)
    } catch (logError) {
      console.warn('Could not write approval log:', logError)
    }

    // Return success - emails will be sent client-side via Web3Forms
    // This keeps the API endpoint server-safe without needing Pro plan
    return NextResponse.json({
      success: true,
      message: 'Approval recorded. Emails should be sent from client-side.'
    })
  } catch (error) {
    console.error('Error recording approval:', error instanceof Error ? error.message : String(error))
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
