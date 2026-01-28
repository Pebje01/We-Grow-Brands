import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { contactName, contactEmail, type, totalAmount, offerteId } = await request.json()

    if (!contactName || !contactEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const notificationEmail = process.env.OFFERTE_NOTIFICATION_EMAIL
    if (!notificationEmail) {
      console.error('OFFERTE_NOTIFICATION_EMAIL not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const akkoordDatum = new Date().toLocaleString('nl-NL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    const emailContent = `🎉 OFFERTE AKKOORD ONTVANGEN

JURIDISCHE BEVESTIGING VAN AKKOORD:

Datum & Tijd Akkoord: ${akkoordDatum}
Klant: ${contactName}
Email: ${contactEmail}

AKKOORD VERKLARING:
✓ Klant heeft de offerte gelezen
✓ Klant gaat akkoord met de inhoud
✓ Klant gaat akkoord met de algemene voorwaarden
✓ Dit akkoord is juridisch bindend

OFFERTE DETAILS:
Offertenummer: ${offerteId || 'OF-260127-01'}
Type: ${type}
Totaal: ${totalAmount}

Algemene Voorwaarden: https://wegrowbrands.online/algemene-voorwaarden

VOLGENDE ACTIES:
1. Stuur een bevestigingsmail naar: ${contactEmail}
2. Maak contact op voor kickoff planning

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KOPPEELBARE BEVESTIGINGSMAIL VOOR KLANT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hallo ${contactName},

Dank je wel voor je akkoord op onze offerte! Hierbij de bevestiging van je instemming.

OFFERTE SAMENVATTING:
Offertenummer: ${offerteId || 'OF-260127-01'}
Datum Akkoord: ${new Date().toLocaleDateString('nl-NL')}
Diensten: ${type}
Totaal: ${totalAmount}

Betaling: 50% vooruitbetaling, 50% bij oplevering
Geldigheid: 14 dagen na datum

Dit akkoord is juridisch bindend.

Vragen? Bel 06 36 16 26 39 of mail hello@wegrowbrands.online

Met vriendelijke groeten,
We Grow Brands`

    console.log('[RESEND] Sending email via Resend...', {
      timestamp: new Date().toISOString(),
      to: notificationEmail,
      contactName,
      contactEmail,
      offerteId,
    })

    const result = await resend.emails.send({
      from: 'Offerte System <onboarding@resend.dev>',
      to: notificationEmail,
      subject: `✓ OFFERTE AKKOORD - ${contactName} - ${offerteId || 'OF-260127-01'}`,
      text: emailContent,
    })

    console.log('[RESEND] Email sent response:', {
      timestamp: new Date().toISOString(),
      result,
    })

    if (result.error) {
      console.error('[RESEND] Error sending email:', {
        error: result.error,
        contactEmail,
        contactName,
      })
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 400 }
      )
    }

    console.log('[RESEND] Email sent successfully!', {
      timestamp: new Date().toISOString(),
      id: result.data?.id,
      contactEmail,
      contactName,
    })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully via Resend',
      timestamp: new Date().toISOString(),
      emailId: result.data?.id,
    })
  } catch (error) {
    console.error('[RESEND] Error sending email:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    })
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
