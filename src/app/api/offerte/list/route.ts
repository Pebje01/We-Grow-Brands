import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import path from 'path'
import { verifyPassword } from '@/lib/offerteUtils'

interface Offerte {
  id: string
  slug: string
  bedrijfsnaam: string
  contactpersoon: string
  email: string
  telefoon: string
  type: string
  wachtwoord: string
  createdAt: string
  updatedAt: string
  isActive: boolean
  offerteType?: string
}

// Helper to get client IP
function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  return forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || 'unknown'
}

// Helper to read offertes
function readOffertes(): Offerte[] {
  try {
    const filePath = path.join(process.cwd(), 'src/data/offertes.json')
    const data = readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

// GET - List all offertes (admin only)
export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request)
  const ADMIN_IP = process.env.ADMIN_IP || '83.82.102.98'

  // Check if IP matches
  if (clientIP === ADMIN_IP) {
    const offertes = readOffertes()
    // Return without passwords
    return NextResponse.json({
      offertes: offertes.map(({ wachtwoord, ...rest }) => rest),
    })
  }

  // Otherwise check authorization header
  const authHeader = request.headers.get('authorization')
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const adminPassword = process.env.ADMIN_PASSWORD || 'Oosterschelde_01'
  const isPasswordValid = await verifyPassword(
    authHeader.replace('Bearer ', ''),
    await require('bcryptjs').hash(adminPassword, 10)
  )

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const offertes = readOffertes()
  return NextResponse.json({
    offertes: offertes.map(({ wachtwoord, ...rest }) => rest),
  })
}
