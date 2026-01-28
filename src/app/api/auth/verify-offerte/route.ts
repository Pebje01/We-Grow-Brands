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

function readOffertes(): Offerte[] {
  try {
    const filePath = path.join(process.cwd(), 'src/data/offertes.json')
    const data = readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function POST(request: NextRequest) {
  try {
    const { slug, password } = await request.json()

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
    }

    const offertes = readOffertes()
    const offerte = offertes.find((o) => o.slug === slug && o.isActive)

    if (!offerte) {
      return NextResponse.json({ authorized: false, offerte: null })
    }

    // If offerte has no password, allow access without password
    if (!offerte.wachtwoord || offerte.wachtwoord === '') {
      const { wachtwoord, ...safeOfferte } = offerte
      return NextResponse.json({
        authorized: true,
        offerte: safeOfferte,
      })
    }

    // Verify password if it exists
    const isPasswordValid = await verifyPassword(password, offerte.wachtwoord)

    if (!isPasswordValid) {
      return NextResponse.json({ authorized: false, offerte: null })
    }

    // Return offerte without password
    const { wachtwoord, ...safeOfferte } = offerte
    return NextResponse.json({
      authorized: true,
      offerte: safeOfferte,
    })
  } catch (error) {
    console.error('Verify offerte error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
