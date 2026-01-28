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

    console.log('[OFFERTE_AUTH] Verification attempt:', { slug, passwordLength: password?.length || 0 })

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
    }

    const offertes = readOffertes()
    console.log('[OFFERTE_AUTH] Loaded offertes:', {
      count: offertes.length,
      offertes: offertes.map((o) => ({ id: o.id, slug: o.slug, isActive: o.isActive })),
    })

    const offerte = offertes.find((o) => o.slug === slug && o.isActive)

    if (!offerte) {
      console.log('[OFFERTE_AUTH] Offerte not found:', slug)
      return NextResponse.json({ authorized: false, offerte: null })
    }

    console.log('[OFFERTE_AUTH] Offerte found:', {
      id: offerte.id,
      bedrijfsnaam: offerte.bedrijfsnaam,
      hasPassword: !!offerte.wachtwoord,
    })

    // If offerte has no password, allow access without password
    if (!offerte.wachtwoord || offerte.wachtwoord === '') {
      console.log('[OFFERTE_AUTH] No password required, granting access')
      const { wachtwoord, ...safeOfferte } = offerte
      return NextResponse.json({
        authorized: true,
        offerte: safeOfferte,
      })
    }

    // Verify password if it exists
    console.log('[OFFERTE_AUTH] Verifying password...', {
      passwordLength: password?.length || 0,
      hashLength: offerte.wachtwoord?.length || 0,
      hashPrefix: offerte.wachtwoord?.substring(0, 20) || 'EMPTY',
    })
    const isPasswordValid = await verifyPassword(password, offerte.wachtwoord)

    console.log('[OFFERTE_AUTH] Password verification result:', isPasswordValid, {
      password: password,
      hash: offerte.wachtwoord,
    })

    if (!isPasswordValid) {
      console.log('[OFFERTE_AUTH] Password verification failed')
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
