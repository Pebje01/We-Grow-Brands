import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { contactName, contactEmail, type, totalAmount, priceExclVat, vat, offerteId } = await request.json()

    if (!contactName || !contactEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      console.error('Web3Forms access key not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Build URLEncoded form data for Web3Forms
    const message = `🎉 OFFERTE AKKOORD ONTVANGEN

KLANTGEGEVENS:
Naam: ${contactName}
Email: ${contactEmail}

OFFERTE DETAILS:
Offertenummer: ${offerteId || 'OF-260127-01'}
Type: ${type}
Totaal: ${totalAmount}
(Excl. btw: ${priceExclVat}, VAT: ${vat})

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

    const params = new URLSearchParams()
    params.append('access_key', accessKey)
    params.append('subject', `✓ OFFERTE AKKOORD - ${contactName} - ${offerteId || 'OF-260127-01'}`)
    params.append('from_name', 'Offerte System')
    params.append('email', 'hello@wegrowbrands.online')
    params.append('name', 'We Grow Brands')
    params.append('message', message)

    // Send to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    // Try to parse JSON, fallback to text
    let result: any
    const contentType = response.headers.get('content-type')

    try {
      if (contentType?.includes('application/json')) {
        result = await response.json()
      } else {
        const text = await response.text()
        console.log('Web3Forms response (non-JSON):', text.substring(0, 200))
        // Web3Forms might return 200 with plain text success message
        result = { success: text.includes('success') || response.ok }
      }
    } catch (parseError) {
      console.error('Error parsing Web3Forms response:', parseError)
      result = { success: response.ok }
    }

    // Check for success
    if (!response.ok && response.status !== 200) {
      console.error('Web3Forms error response:', {
        status: response.status,
        result,
        contactEmail,
        contactName,
      })
      return NextResponse.json(
        { error: 'Failed to send email', details: result },
        { status: response.status }
      )
    }

    // Web3Forms returns success: true when email is accepted
    if (result.success === false) {
      console.error('Web3Forms rejected email:', {
        result,
        contactEmail,
        contactName,
      })
      return NextResponse.json(
        { error: 'Email service rejected the request', details: result },
        { status: 400 }
      )
    }

    console.log('Email sent successfully via Web3Forms', {
      timestamp: new Date().toISOString(),
      contactName,
      contactEmail,
      offerteId,
    })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error sending email:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    })
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
