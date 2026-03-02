import { NextRequest, NextResponse } from 'next/server'
import { generateOfferteNumber, generatePassword, hashPassword, calculateValidUntil } from '@/lib/offerteUtils'
import { createWgbOfferte, getTodayWgbOfferteCount } from '@/lib/supabaseOffertes'
import { getOfferteTemplate, PackageType } from '@/lib/offerteTemplates'

export async function POST(request: NextRequest) {
  try {
    // Auth check
    const authHeader = request.headers.get('authorization')
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Oosterschelde_01'

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (authHeader.slice(7) !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { bedrijfsnaam, contactpersoon, email, telefoon, type, offerteType } = body

    if (!bedrijfsnaam || !contactpersoon || !email || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Genereer offerte nummer via Supabase telling
    const todayCount = await getTodayWgbOfferteCount()
    const number = generateOfferteNumber(todayCount)
    const slug = number.toLowerCase()
    const plainPassword = generatePassword()
    const passwordHash = await hashPassword(plainPassword)
    const validUntil = calculateValidUntil()

    // Haal template op basis van pakkettype
    const packageType = (type as PackageType) || 'custom'
    const template = getOfferteTemplate(packageType, contactpersoon)

    // Bereken totalen
    const subtotal = template.items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0)
    const btwAmount = Math.round(subtotal * (template.btwPercentage / 100) * 100) / 100
    const total = subtotal + btwAmount

    // Sla op in Supabase (retry bij collision)
    let offerte
    let retries = 0
    while (retries < 3) {
      try {
        offerte = await createWgbOfferte({
          number: retries > 0 ? generateOfferteNumber(todayCount + retries) : number,
          slug: retries > 0 ? generateOfferteNumber(todayCount + retries).toLowerCase() : slug,
          clientName: bedrijfsnaam,
          clientContactPerson: contactpersoon,
          clientEmail: email,
          clientPhone: telefoon,
          items: template.items,
          subtotal,
          btwPercentage: template.btwPercentage,
          btwAmount,
          total,
          introText: template.introText,
          termsText: template.termsText,
          notes: `Pakket: ${type}${offerteType ? ` | Fotografie: ${offerteType}` : ''}`,
          passwordHash,
          validUntil,
        })
        break
      } catch (e: unknown) {
        const errorMsg = e instanceof Error ? e.message : String(e)
        if (errorMsg.includes('duplicate') || errorMsg.includes('unique')) {
          retries++
          continue
        }
        throw e
      }
    }

    if (!offerte) {
      return NextResponse.json({ error: 'Could not create offerte' }, { status: 500 })
    }

    // Return met plain password (eenmalig)
    return NextResponse.json({
      success: true,
      offerte: {
        id: offerte.number,
        slug: offerte.slug,
        bedrijfsnaam: offerte.clientName,
        contactpersoon: offerte.clientContactPerson,
        email: offerte.clientEmail,
        telefoon: offerte.clientPhone,
        type,
        createdAt: offerte.createdAt,
        updatedAt: offerte.createdAt,
        isActive: true,
        offerteType: offerteType || 'without-photo',
        wachtwoord: plainPassword,
      },
      link: `/offerte/${offerte.slug}`,
    })
  } catch (error) {
    console.error('Create offerte error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
