import { NextRequest, NextResponse } from 'next/server'
import { approveOfferte } from '@/lib/supabaseOffertes'

export async function POST(request: NextRequest) {
  try {
    const { email, name, offerteId, slug } = await request.json()

    if (!email || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim()
      || request.headers.get('cf-connecting-ip')
      || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Gebruik slug als die er is, anders probeer offerteId als slug
    const offerteSlug = slug || offerteId

    if (offerteSlug) {
      const success = await approveOfferte(offerteSlug, name, email, clientIp, userAgent)
      if (!success) {
        console.warn('Could not approve offerte in Supabase:', offerteSlug)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Approval recorded',
    })
  } catch (error) {
    console.error('Error recording approval:', error instanceof Error ? error.message : String(error))
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
