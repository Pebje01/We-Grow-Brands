'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

let generateOffortePDF: any = null
let blobToBase64: any = null

// Dynamically import PDF generation functions only on client
if (typeof window !== 'undefined') {
  ;(async () => {
    try {
      // eslint-disable-next-line @next/next/no-assign-module-variable
      const pdfModule = await import('@/lib/pdfGenerator')
      generateOffortePDF = pdfModule.generateOffortePDF
      blobToBase64 = pdfModule.blobToBase64
    } catch (e) {
      console.error('Failed to load PDF functions')
    }
  })()
}

export default function VerifyPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [verificationData, setVerificationData] = useState<any>(null)

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!token) {
          setStatus('error')
          return
        }

        // Get verification data from localStorage
        const verifications = JSON.parse(localStorage.getItem('offerteVerifications') || '[]')
        const verification = verifications.find((v: any) => v.token === token)

        if (!verification) {
          setStatus('error')
          return
        }

        // Check if token is expired (24 hours)
        const createdAt = new Date(verification.createdAt).getTime()
        const now = new Date().getTime()
        const hoursDiff = (now - createdAt) / (1000 * 60 * 60)

        if (hoursDiff > 24) {
          setStatus('error')
          return
        }

        // Mark as verified
        verification.verified = true
        verification.verifiedAt = new Date().toISOString()
        const updatedVerifications = verifications.map((v: any) => v.token === token ? verification : v)
        localStorage.setItem('offerteVerifications', JSON.stringify(updatedVerifications))

        // Generate PDF from offerte HTML
        const type = verification.offerteType === 'with-photo' ? 'Met Fotografie' : 'Zonder Fotografie'
        const totalAmount = verification.offerteType === 'with-photo' ? '€1.781,73' : '€1.603,25'

        try {
          // Create offerte HTML content for PDF
          const premiumPrice = 2650
          const discount = ((premiumPrice - parseFloat(totalAmount.replace('€', '').replace(',', '.'))) / premiumPrice * 100).toFixed(0)
          const savings = (premiumPrice - parseFloat(totalAmount.replace('€', '').replace(',', '.'))).toFixed(2)

          const offerteHTML = `
            <div style="font-family: Arial, sans-serif; padding: 40px; color: #333;">
              <h1 style="color: #164d42; font-size: 32px; margin-bottom: 30px;">OFFERTE</h1>

              <div style="margin-bottom: 30px;">
                <p><strong>We Grow Brands</strong></p>
                <p>Datum: ${new Date().toLocaleDateString('nl-NL')}</p>
                <p>Geldig tot: 14 dagen na datum</p>
              </div>

              <div style="margin-bottom: 30px; padding: 20px; background-color: #f5f5f5;">
                <h3 style="color: #164d42; margin-bottom: 15px;">Klantgegevens</h3>
                <p><strong>${verification.name}</strong></p>
                <p>${verification.email}</p>
              </div>

              <div style="margin-bottom: 30px;">
                <h3 style="color: #164d42; margin-bottom: 15px;">Offerte Samenvatting</h3>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Normaal tarief (Premium pakket):</strong> €${premiumPrice.toFixed(2)}</p>
                <p style="color: #d4a574; font-size: 14px; font-weight: bold; margin: 10px 0;">🎉 INTRODUCTIEKORTING: ${discount}% (€${savings})</p>
                <p style="font-size: 18px; color: #164d42; font-weight: bold; margin: 15px 0;">
                  <strong>Jouw prijs nu: ${totalAmount}</strong>
                </p>
                <p style="margin-top: 20px; color: #666; font-size: 12px; padding: 10px; background-color: #fffaf0;">
                  <strong>Dit is een beperkt aanbod voor onze eerste 3 showcaseprojecten!</strong>
                </p>
                <p style="margin-top: 15px; color: #666; font-size: 12px;">
                  <strong>Betaling:</strong> 50% vooruitbetaling bij acceptatie offerte, 50% bij oplevering
                </p>
                <p style="margin-top: 10px; color: #666; font-size: 12px;">
                  <strong>Timeline:</strong> 3-6 weken na kickoff en content briefing
                </p>
              </div>

              <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 11px;">
                <p><strong>Akkoord Bevestigd op:</strong> ${new Date(verification.verifiedAt).toLocaleString('nl-NL')}</p>
                <p style="margin-top: 15px;">Deze offerte is juridisch bindend na emailverificatie.</p>
                <p style="margin-top: 20px;">We Grow Brands | hello@wegrowbrands.online</p>
              </div>
            </div>
          `

          // Generate PDF
          const pdfBlob = await generateOffortePDF(offerteHTML, `offerte-${verification.email}.pdf`)
          const pdfBase64 = await blobToBase64(pdfBlob)

          // Send confirmation with PDF attachment via API
          const confirmationResponse = await fetch('/api/offerte/send-confirmation/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: verification.email,
              name: verification.name,
              offerteType: verification.offerteType,
              pdfBase64: pdfBase64,
              offerteId: verification.offerteId || undefined,
            }),
          })

          if (confirmationResponse.ok) {
            setVerificationData(verification)
            setStatus('success')
          } else {
            console.error('Failed to send confirmation email')
            setStatus('error')
          }
        } catch (error) {
          console.error('PDF generation error:', error)
          setStatus('error')
        }
      } catch (error) {
        console.error('Verification error:', error)
        setStatus('error')
      }
    }

    verifyToken()
  }, [token])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-44 pb-24">
        <div className="max-w-2xl mx-auto px-4">
          {status === 'verifying' && (
            <div className="text-center py-12">
              <h1 className="serif-header text-4xl text-green-dark mb-4">Bezig met verifiëren...</h1>
              <p className="text-text-muted text-lg">Even geduld, we verifiëren je offerte akkoord.</p>
            </div>
          )}

          {status === 'success' && (
            <div className="bg-white rounded-[20px] shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">✓</div>
              <h1 className="serif-header text-4xl text-green-dark mb-4">Akkoord Bevestigd!</h1>
              <p className="text-text-muted text-lg mb-8">
                Bedankt {verificationData?.name}! Je offerte akkoord is succesvol geregistreerd.
              </p>

              <div className="bg-gray-50 rounded-[15px] p-8 text-left mb-8">
                <h2 className="font-semibold text-green-dark mb-4">Wat gebeurt er nu?</h2>
                <ul className="space-y-3 text-text-dark">
                  <li>✓ Je ontvangt een bevestigingsmail met alle details</li>
                  <li>✓ De offerte is opgeslagen met datum en tijd</li>
                  <li>✓ We nemen snel contact met je op voor de volgende stappen</li>
                </ul>
              </div>

              <p className="text-text-muted text-sm">
                Vragen? Neem contact op via <a href="mailto:hello@wegrowbrands.online" className="text-green-dark font-semibold hover:underline">hello@wegrowbrands.online</a>
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-white rounded-[20px] shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="serif-header text-4xl text-red-600 mb-4">Verificatie Mislukt</h1>
              <p className="text-text-muted text-lg mb-8">
                De verificatielink is ongeldig of verlopen (24 uur geldig).
              </p>

              <p className="text-text-muted mb-8">
                Ga terug naar de offerte pagina en probeer het opnieuw.
              </p>

              <a
                href="/offerte"
                className="inline-block bg-green-dark text-white px-8 py-3 rounded-[10px] font-semibold hover:bg-opacity-90 transition"
              >
                Terug naar Offerte
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
