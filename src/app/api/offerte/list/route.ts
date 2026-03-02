import { NextRequest, NextResponse } from 'next/server'
import { listWgbOffertes } from '@/lib/supabaseOffertes'

function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  return forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || 'unknown'
}

export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request)
  const ADMIN_IPS = (process.env.ADMIN_IP || '83.82.102.98').split(',').map((ip) => ip.trim())
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Oosterschelde_01'

  // Check IP of auth header
  const isAdminIp = ADMIN_IPS.includes(clientIP)
  const authHeader = request.headers.get('authorization')
  const isPasswordValid = authHeader?.startsWith('Bearer ') && authHeader.slice(7) === ADMIN_PASSWORD

  if (!isAdminIp && !isPasswordValid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const offertes = await listWgbOffertes()

    // Map naar het formaat dat de admin UI verwacht
    return NextResponse.json({
      offertes: offertes.map((o) => ({
        id: o.number,
        slug: o.slug,
        bedrijfsnaam: o.clientName,
        contactpersoon: o.clientContactPerson,
        email: o.clientEmail,
        telefoon: o.clientPhone,
        type: extractPackageType(o.notes),
        createdAt: o.createdAt,
        updatedAt: o.createdAt,
        isActive: o.status !== 'afgewezen',
        status: o.status,
        total: o.total,
      })),
    })
  } catch (error) {
    console.error('List offertes error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

function extractPackageType(notes: string | null): string {
  if (!notes) return 'custom'
  const match = notes.match(/Pakket:\s*(\w+)/)
  return match ? match[1] : 'custom'
}
