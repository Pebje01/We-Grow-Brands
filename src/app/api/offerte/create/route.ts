import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { generateSlug, generatePassword, hashPassword, generateOfferteId } from '@/lib/offerteUtils'

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

function writeOffertes(offertes: Offerte[]): void {
  const filePath = path.join(process.cwd(), 'src/data/offertes.json')
  writeFileSync(filePath, JSON.stringify(offertes, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    // Check authorization - require password header
    const authHeader = request.headers.get('authorization')
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Oosterschelde_01'

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const providedPassword = authHeader.slice(7) // Remove 'Bearer ' prefix
    if (providedPassword !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { bedrijfsnaam, contactpersoon, email, telefoon, type, offerteType } = body

    // Validate required fields
    if (!bedrijfsnaam || !contactpersoon || !email || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Read existing offertes
    const offertes = readOffertes()

    // Generate new offerte
    const id = generateOfferteId(offertes.map(o => o.id))
    const slug = generateSlug(bedrijfsnaam, id)
    const plainPassword = generatePassword(10)
    const hashedPassword = await hashPassword(plainPassword)
    const now = new Date().toISOString()

    const newOfferte: Offerte = {
      id,
      slug,
      bedrijfsnaam,
      contactpersoon,
      email,
      telefoon,
      type,
      wachtwoord: hashedPassword,
      createdAt: now,
      updatedAt: now,
      isActive: true,
      offerteType: offerteType || 'without-photo',
    }

    // Add to list and save
    offertes.push(newOfferte)
    writeOffertes(offertes)

    // Return offerte with plain password (only shown once)
    return NextResponse.json({
      success: true,
      offerte: {
        ...newOfferte,
        wachtwoord: plainPassword, // Return plain password only in creation response
      },
      link: `/offerte/${slug}`,
    })
  } catch (error) {
    console.error('Create offerte error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
