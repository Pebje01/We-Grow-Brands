import { NextRequest, NextResponse } from 'next/server'
import { getPublicOfferteBySlug } from '@/lib/supabaseOffertes'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
    }

    const offerte = await getPublicOfferteBySlug(slug)

    if (!offerte) {
      return NextResponse.json({ error: 'Offerte not found' }, { status: 404 })
    }

    const response = NextResponse.json({ offerte })
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive')
    response.headers.set('Cache-Control', 'private, no-store')
    return response
  } catch (error) {
    console.error('Public offerte error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
