'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

let generateOffortePDF: any = null
let blobToBase64: any = null

// Lazy load PDF functions only when needed
const loadPdfFunctions = async () => {
  if (generateOffortePDF) return { generateOffortePDF, blobToBase64 }
  try {
    const pdfModule = await import('@/lib/pdfGenerator')
    generateOffortePDF = pdfModule.generateOffortePDF
    blobToBase64 = pdfModule.blobToBase64
    return { generateOffortePDF, blobToBase64 }
  } catch (e) {
    console.error('Failed to load PDF functions', e)
    throw e
  }
}

interface Offerte {
  id: string
  slug: string
  bedrijfsnaam: string
  contactpersoon: string
  email: string
  telefoon: string
  type: string
  createdAt: string
  updatedAt: string
  isActive: boolean
  offerteType?: string
}

export default function DynamicOffertePage() {
  const params = useParams()
  const slug = params.slug as string

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [offerte, setOfferte] = useState<Offerte | null>(null)
  const [loading, setLoading] = useState(true)
  const [approval, setApproval] = useState<string | null>(null)
  const [offerteType, setOfferteType] = useState<'without-photo' | 'with-photo'>('without-photo')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [contactEmail, setContactEmail] = useState('')
  const [contactName, setContactName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    loadOfferte()
  }, [slug])

  const loadOfferte = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/offerte/list/`, {
        headers: {
          Authorization: `Bearer Oosterschelde_01`,
        },
      })
      const data = await res.json()
      const foundOfferte = data.offertes.find((o: Offerte) => o.slug === slug)
      setOfferte(foundOfferte)
    } catch (err) {
      console.error('Failed to load offerte:', err)
      setError('Fout bij het laden van de offerte')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/verify-offerte/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, password }),
      })

      const data = await res.json()

      if (data.authorized) {
        setIsLoggedIn(true)
        setOfferte(data.offerte)
        setError('')
        window.scrollTo(0, 0)
      } else {
        setError('Wachtwoord onjuist')
        setPassword('')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Er is een fout opgetreden')
    }
  }

  const downloadOffortePDF = async () => {
    try {
      // Get the entire offerte container
      const offerteContainer = document.querySelector('.max-w-7xl.mx-auto.rounded-\\[30px\\].shadow-lg.overflow-hidden')
      if (!offerteContainer) {
        alert('Fout bij het downloaden. Probeer het opnieuw.')
        return
      }

      // Clone the element and remove unnecessary content
      const clone = offerteContainer.cloneNode(true) as HTMLElement

      // Remove the description paragraph (Brand Approach intro) - only the one in white section
      const whiteSections = clone.querySelectorAll('.bg-white')
      whiteSections.forEach((section) => {
        const desc = section.querySelector('.mb-16.text-center')
        if (desc) {
          desc.remove()
        }
      })

      // Remove download button container
      const allButtons = clone.querySelectorAll('button')
      allButtons.forEach((btn) => {
        if (btn.textContent && btn.textContent.includes('Download')) {
          const parentDiv = btn.parentElement
          if (parentDiv) parentDiv.remove()
        }
      })

      const approvalSection = clone.querySelector('.bg-gray-50.rounded-\\[20px\\].p-10')
      if (approvalSection) {
        approvalSection.remove()
      }

      // Remove footer text
      const footerText = Array.from(clone.querySelectorAll('.text-center.text-sm')).pop()
      if (footerText) {
        footerText.remove()
      }

      // Remove green footer slogan bar (Meer dan websites, Wij bouwen merken)
      const footerBars = clone.querySelectorAll('.bg-green-dark.text-center')
      footerBars.forEach((bar) => {
        const h2 = bar.querySelector('h2')
        if (h2 && h2.textContent && h2.textContent.includes('Meer dan websites')) {
          bar.remove()
        }
      })

      // Remove Brand Approach section (lila box with "We benaderen alles vanuit jouw merk")
      const brandApproachSections = clone.querySelectorAll('.bg-lila\\\/20')
      brandApproachSections.forEach((section) => {
        if (section.textContent && section.textContent.includes('We benaderen alles')) {
          section.remove()
        }
      })

      // Create PDF HTML without green header at top - white background for header section only
      const offerteHTML = `
        <!DOCTYPE html>
        <html lang="nl">
        <head>
          <meta charset="UTF-8">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { width: 100%; height: 100%; margin: 0; padding: 0; }
            body { font-family: Georgia, Arial, sans-serif; line-height: 1.6; width: 100%; }
            .container { width: 100%; }
            .bg-green-dark { background-color: #164d42; color: white; padding: 32px; width: 100%; }
            .text-white { color: white; }
            .text-lila { color: #c5a3ff; }
            .text-green-dark { color: #164d42; }
            .text-text-muted { color: #666; }
            .text-text-dark { color: #1a1a1a; }
            .bg-white { background: white; padding: 32px; width: 100%; }
            .font-serif { font-family: Georgia, serif; }
            .font-light { font-weight: 300; }
            .text-white\/80 { color: rgba(255,255,255,0.8); }
            .text-white\/70 { color: rgba(255,255,255,0.7); }
            .border-white\/20 { border-color: rgba(255,255,255,0.2); }
            .mb-8 { margin-bottom: 32px; }
            .mb-16 { margin-bottom: 64px; }
            .mb-20 { margin-bottom: 80px; }
            .mb-3 { margin-bottom: 12px; }
            .mb-4 { margin-bottom: 16px; }
            .mb-6 { margin-bottom: 24px; }
            .mt-6 { margin-top: 24px; }
            .pt-4 { padding-top: 16px; }
            .px-8 { padding-left: 32px; padding-right: 32px; }
            .py-12 { padding-top: 48px; padding-bottom: 48px; }
            .text-center { text-align: center; }
            .text-right { text-align: right; }
            .flex { display: flex; }
            .justify-between { justify-content: space-between; }
            .items-start { align-items: flex-start; }
            .space-y-1 > * + * { margin-top: 4px; }
            .space-y-3 > * + * { margin-top: 12px; }
            .space-y-2 > * + * { margin-top: 8px; }
            .text-xl { font-size: 20px; }
            .text-6xl { font-size: 48px; }
            .text-4xl { font-size: 36px; }
            .text-3xl { font-size: 24px; }
            .text-base { font-size: 16px; }
            .text-xs { font-size: 12px; }
            .text-sm { font-size: 14px; }
            .font-medium { font-weight: 500; }
            .font-semibold { font-weight: 600; }
            .uppercase { text-transform: uppercase; }
            .leading-relaxed { line-height: 1.625; }
            .leading-tight { line-height: 1.2; }
            .tracking-tight { letter-spacing: -0.02em; }
            .tracking-widest { letter-spacing: 0.15em; }
            h1, h2, h3, h4 { margin: 0; }
            p { margin: 0; }
            .bg-lila\/20 { background-color: rgba(240, 232, 255, 0.2); }
            .border-l-4 { border-left: 4px solid; }
            .border-lila { border-color: #c5a3ff; }
            .rounded-\\[20px\\] { border-radius: 20px; }
            .rounded-lg { border-radius: 8px; }
            .max-w-md { max-width: 28rem; margin-left: auto; }
            strong { font-weight: 600; }
            .bg-yellow-50 { background-color: #fef3c7; }
            .border-2 { border: 2px solid; }
            .border-yellow-200 { border-color: #fde68a; }
            .text-yellow-800 { color: #92400e; }
            .text-yellow-700 { color: #b45309; }
            .bg-green-50 { background-color: #f0fdf4; }
            .bg-gray-50 { background-color: #f9f9f9; }
            .bg-gradient-to-br { background: linear-gradient(to bottom right, rgba(22,77,66,0.05), transparent); }
            .border-green-dark\/10 { border: 1px solid rgba(22,77,66,0.1); }
            ul { list-style: disc; padding-left: 20px; margin: 0; }
            li { margin-bottom: 8px; }
            .border-b { border-bottom: 1px solid #e5e5e5; }
            .border-t { border-top: 1px solid #e5e5e5; }
            .pb-3 { padding-bottom: 12px; }
            .pb-12 { padding-bottom: 48px; }
            .ml-auto { margin-left: auto; }
            .gap-4 { gap: 16px; display: flex; }
            .grid { display: grid; }
          </style>
        </head>
        <body>
          <div class="container">
            ${clone.innerHTML}
          </div>
        </body>
        </html>
      `

      // Load PDF functions and generate
      const { generateOffortePDF: generatePDF } = await loadPdfFunctions()
      const pdfBlob = await generatePDF(offerteHTML, `Offerte-${offerte?.id}.pdf`)

      // Download PDF
      const link = document.createElement('a')
      link.href = URL.createObjectURL(pdfBlob)
      link.download = `Offerte-${offerte?.id}.pdf`
      link.click()
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error('PDF download error:', error)
      setError('Fout bij het downloaden van de PDF. Probeer het opnieuw.')
    }
  }

  const handleApproval = async (status: string) => {
    if (!contactEmail || !contactName) {
      setError('Voer alstublieft je naam en e-mailadres in.')
      return
    }

    setIsSubmitting(true)
    setError('')
    try {
      const type = offerteType === 'with-photo' ? 'Met Fotografie' : 'Zonder Fotografie'
      const totalAmount = offerteType === 'with-photo' ? '€1.960,20' : '€1.603,25'
      const premiumPrice = 2650
      const discount = ((premiumPrice - parseFloat(totalAmount.replace('€', '').replace(',', '.'))) / premiumPrice * 100).toFixed(0)
      const savings = (premiumPrice - parseFloat(totalAmount.replace('€', '').replace(',', '.'))).toFixed(2)

      // Create offerte HTML content for PDF
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
            <p><strong>${contactName}</strong></p>
            <p>${contactEmail}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h3 style="color: #164d42; margin-bottom: 15px;">Offerte Samenvatting</h3>
            <p><strong>Offertenummer:</strong> ${offerte?.id}</p>
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
            <p><strong>Akkoord Bevestigd op:</strong> ${new Date().toLocaleString('nl-NL')}</p>
            <p style="margin-top: 15px;">Deze offerte is juridisch bindend na akkoord.</p>
            <p style="margin-top: 20px;">We Grow Brands | hello@wegrowbrands.online</p>
          </div>
        </div>
      `

      // Load PDF functions and generate
      const { generateOffortePDF: generatePDF, blobToBase64: convertToBase64 } = await loadPdfFunctions()
      const pdfBlob = await generatePDF(offerteHTML, `offerte-${offerte?.id}.pdf`)
      const pdfBase64 = await convertToBase64(pdfBlob)

      // First record the approval on server
      const recordResponse = await fetch('/api/offerte/send-confirmation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: contactEmail,
          name: contactName,
          offerteType: offerteType,
          offerteId: offerte?.id,
        }),
      })

      if (!recordResponse.ok) {
        setError('Fout bij het versturen. Probeer het opnieuw.')
        setIsSubmitting(false)
        return
      }

      // Send notification email via Resend (server-side, reliable)
      try {
        console.log('[OFFERTE] Starting email send via Resend...', {
          timestamp: new Date().toISOString(),
          contactName,
          contactEmail,
          offerteId: offerte?.id,
        })

        const emailResponse = await fetch('/api/offerte/send-email-resend', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contactName,
            contactEmail,
            type,
            totalAmount,
            offerteId: offerte?.id,
          }),
        })

        console.log('[OFFERTE] Resend response received', {
          status: emailResponse.status,
          timestamp: new Date().toISOString(),
        })

        if (!emailResponse.ok) {
          const errorData = await emailResponse.json()
          console.error('[OFFERTE] Resend returned error', {
            status: emailResponse.status,
            error: errorData,
          })
          setError('Email verzending mislukt. Neem contact op met support.')
          setIsSubmitting(false)
          return
        }

        const emailResult = await emailResponse.json()
        console.log('[OFFERTE] Email sent successfully via Resend!', {
          ...emailResult,
          timestamp: new Date().toISOString(),
          contactEmail,
          contactName,
        })
      } catch (emailError) {
        console.error('[OFFERTE] Email send failed with exception:', {
          error: emailError instanceof Error ? emailError.message : String(emailError),
          timestamp: new Date().toISOString(),
          contactEmail,
        })
        setError('Fout bij het versturen van email. Neem contact op met support.')
        setIsSubmitting(false)
        return
      }

      setApproval('success')
      setAgreedToTerms(false)
      setContactEmail('')
      setContactName('')
    } catch (error) {
      console.error('Error:', error)
      setError('Fout bij het verwerken van je akkoord. Neem contact op.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTodayDate = () => {
    const today = new Date()
    return today.toLocaleDateString('nl-NL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const getValidUntilDate = () => {
    const today = new Date()
    const validUntil = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)
    return validUntil.toLocaleDateString('nl-NL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-cream pt-44 pb-24 flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-text-muted">Offerte laden...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (!isLoggedIn) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-cream pt-44 pb-24 flex items-center justify-center px-4">
          <div className="bg-white rounded-[20px] shadow-lg p-12 max-w-md w-full">
            <h1 className="serif-header text-center text-green-dark mb-2">We Grow Brands</h1>
            <p className="text-center text-text-muted mb-8">Voer het wachtwoord in om de offerte te bekijken</p>

            <form onSubmit={handleLogin}>
              {error && <div className="text-red-600 text-sm mb-4 text-center">{error}</div>}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Wachtwoord"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-[10px] mb-6 focus:outline-none focus:border-green-dark font-serif"
                autoFocus
              />
              <button
                type="submit"
                className="w-full bg-green-dark text-white py-3 rounded-[10px] font-semibold hover:bg-opacity-90 transition"
              >
                Offerte bekijken
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (!offerte) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-cream pt-44 pb-24 flex items-center justify-center px-4">
          <div className="bg-white rounded-[20px] shadow-lg p-12 max-w-md w-full text-center">
            <h1 className="serif-header text-center text-green-dark mb-2">Offerte niet gevonden</h1>
            <p className="text-text-muted">Deze offerte bestaat niet of is niet meer actief.</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Offerte Content */}
        <section className="pt-44 pb-24 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-[30px] shadow-lg overflow-hidden">
            {/* Header with Green Background */}
            <div className="bg-green-dark p-8 lg:p-24">
              {/* Title - At Top */}
              <div className="text-center mb-12">
                <h2 className="text-6xl font-serif text-white mb-6 font-light tracking-tight">OFFERTE</h2>
              </div>

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-serif text-white mb-3 font-light tracking-tight">Klantgegevens</h3>
                  <div className="space-y-1 text-xs text-white/80 leading-relaxed">
                    <p className="font-medium text-white text-xs">{offerte.bedrijfsnaam}</p>
                    <p className="text-xs">t.a.v. {offerte.contactpersoon}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl text-white mb-1 font-light tracking-tight">We Grow Brands</h3>
                    <p className="text-xs text-white/80 mb-3">Daley Jansen</p>
                    <div className="space-y-1 text-xs text-white/80 leading-relaxed">
                      <p className="text-xs">Noorderpad 47</p>
                      <p className="text-xs">1461CD Zuidoostbeemster</p>
                      <p className="text-xs">hello@wegrowbrands.online</p>
                      <p className="text-xs">0636162639</p>
                    </div>
                  </div>
                  <div className="space-y-3 mt-6 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">Offertenummer</p>
                      <p className="text-xs text-white font-medium">{offerte.id}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">Datum</p>
                      <p className="text-xs text-white font-medium">{getTodayDate()}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">Geldig tot</p>
                      <p className="text-xs text-white font-medium">{getValidUntilDate()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* White Content Section */}
            <div className="bg-white p-8 lg:p-24">
            <div className="mb-16 text-center">
              <p className="text-base text-text-muted font-light leading-relaxed max-w-3xl mx-auto">
                Bedankt voor je aanvraag! Omdat er integraties moeten komen zoals E-mail marketing (LaPosta integratie) en een productpagina voor de verkoop van een aantal boeken (4-7 stuks), stel ik voor voor het <strong>Premium Pakket</strong> te kiezen. Hier valt alles onder. Ik zorg voor volledige begeleiding en technische ondersteuning hierin. Ik bied hierbij ook nog extra het opmaken van het eerste nieuwsbriefdesign aan.<br /><br />
                Is er al een bestaande huisstijl, dan werk ik met die richtlijnen. Is er ook nog een wens voor een huisstijl, dan kan ik deze ook verzorgen. Ik zorg dat alles goed samenhangt en een geheel vormt.
              </p>
            </div>

            {/* Brand Approach Section */}
            <div className="mb-20 bg-lila/20 rounded-[20px] p-8 border-l-4 border-lila">
              <p className="text-base text-text-dark leading-relaxed font-light">
                We benaderen alles vanuit <strong>jouw merk</strong>. Een holistische aanpak waarbij website, design, fotografie en communicatie een consistent geheel vormen dat jouw merkwaarde uitstraalt.
              </p>
            </div>

            {/* Client Info Section */}
            <div className="mb-20">
              <div className="bg-text-dark rounded-[20px] p-10 text-white">
                <h2 className="text-2xl font-serif text-cream mb-8 font-light tracking-tight">Klantgegevens</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest block mb-3 text-cream">Bedrijfsnaam</label>
                    <input type="text" defaultValue={offerte.bedrijfsnaam} className="w-full border-b-2 border-white/30 pb-3 bg-transparent focus:outline-none focus:border-white text-base transition-colors placeholder-white/50 text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest block mb-3 text-cream">Contactpersoon</label>
                    <input type="text" defaultValue={offerte.contactpersoon} className="w-full border-b-2 border-white/30 pb-3 bg-transparent focus:outline-none focus:border-white text-base transition-colors placeholder-white/50 text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest block mb-3 text-cream">Email</label>
                    <input type="email" defaultValue={offerte.email} className="w-full border-b-2 border-white/30 pb-3 bg-transparent focus:outline-none focus:border-white text-base transition-colors placeholder-white/50 text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest block mb-3 text-cream">Telefoonnummer</label>
                    <input type="tel" defaultValue={offerte.telefoon} className="w-full border-b-2 border-white/30 pb-3 bg-transparent focus:outline-none focus:border-white text-base transition-colors placeholder-white/50 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-20 pb-12 border-b border-gray-200">
              <h3 className="text-xl font-serif text-green-dark mb-8 font-light tracking-tight"><strong>Premium Website Pakket</strong></h3>

              <div className="space-y-6">
                {/* Website & Design */}
                <div className="bg-gradient-to-br from-green-dark/5 to-transparent rounded-[20px] p-8 border border-green-dark/10">
                  <h4 className="font-semibold text-green-dark text-[20px] mb-4">Website &amp; Design</h4>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span><strong>Premium Website Design</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span><strong>Meerdere pagina&apos;s</strong> met complexere functionaliteit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span><strong>CMS via Elementor</strong> – zelf aanpassen en updaten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span><strong>Blog functionaliteit</strong> – artikelen beheren</span>
                    </li>
                  </ul>
                </div>

                {/* Product Verkoop */}
                <div className="bg-gradient-to-br from-green-dark/5 to-transparent rounded-[20px] p-8 border border-green-dark/10">
                  <h4 className="font-semibold text-green-dark text-[20px] mb-4">Product Verkoop</h4>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span><strong>4-7 Product pagina&apos;s</strong> – met betalingslinks ge&iuml;ntegreerd</span>
                    </li>
                  </ul>
                </div>

                {/* Email Marketing & Begeleiding */}
                <div className="bg-gradient-to-br from-green-dark/5 to-transparent rounded-[20px] p-8 border border-green-dark/10">
                  <h4 className="font-semibold text-green-dark text-[20px] mb-4">Email Marketing &amp; Begeleiding</h4>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span>Volledige begeleiding bij instellen en integreren</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span>Integratie op de website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span>Testing &amp; validatie</span>
                    </li>
                  </ul>
                </div>

                {/* Support */}
                <div className="bg-gradient-to-br from-green-dark/5 to-transparent rounded-[20px] p-8 border border-green-dark/10">
                  <h4 className="font-semibold text-green-dark text-[20px] mb-4">Support</h4>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span>Twee feedback rondes voor de website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span>Doorlopende begeleiding &amp; technische ondersteuning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-dark mr-3">•</span>
                      <span>Via email en WhatsApp – snelle reactie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Offerte Type Selection */}
            <div className="mb-20 flex gap-4">
              <button
                onClick={() => setOfferteType('without-photo')}
                className={`flex-1 py-4 px-6 rounded-[10px] font-semibold transition ${
                  offerteType === 'without-photo'
                    ? 'bg-green-dark text-white'
                    : 'bg-gray-100 text-text-dark hover:bg-gray-200'
                }`}
              >
                Zonder Fotografie
              </button>
              <button
                onClick={() => setOfferteType('with-photo')}
                className={`flex-1 py-4 px-6 rounded-[10px] font-semibold transition ${
                  offerteType === 'with-photo'
                    ? 'bg-green-dark text-white'
                    : 'bg-gray-100 text-text-dark hover:bg-gray-200'
                }`}
              >
                Met Fotografie
              </button>
            </div>

            {/* Photography Info Section */}
            {offerteType === 'with-photo' && (
              <div className="mb-20 bg-lila/20 rounded-[20px] p-8 border-l-4 border-lila">
                <h4 className="font-semibold text-green-dark text-[18px] mb-3">Over de Fotografie</h4>
                <p className="text-base text-text-dark leading-relaxed font-light">
                  De fotografie betreft een <strong>portretfotografieshoot zonder locatie</strong>. Dit pakket gaat puur om de fotoshoot zelf, waarbij we <strong>ongeveer 15 foto&apos;s</strong> produceren voor gebruik op je website en in je communicatie. Bij wens voor een locatie worden afspraken en evt. kosten daarvoor nog besproken.
                </p>
              </div>
            )}

            {/* Summary */}
            <div className="mb-20 pb-12 border-b border-gray-200">
              <div className="max-w-md ml-auto space-y-3 text-sm">
                {/* Base Price */}
                <div className="flex justify-between">
                  <span className="text-text-dark">Premium Website Pakket</span>
                  <span className="font-semibold text-text-dark">€2.650,00</span>
                </div>

                {/* Discount */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 my-2 flex justify-between items-center">
                  <span className="text-yellow-800 font-semibold">🎉 Introductiekorting (50%)</span>
                  <span className="font-semibold text-yellow-800">
                    -€1.325,00
                  </span>
                </div>

                {/* Photography if selected */}
                {offerteType === 'with-photo' && (
                  <div className="flex justify-between">
                    <span className="text-text-dark">Professionele Fotografie</span>
                    <span className="font-semibold text-text-dark">€295,00</span>
                  </div>
                )}

                {/* Subtotal */}
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-semibold text-text-dark">Totaal excl. btw</span>
                  <span className="font-semibold text-text-dark">
                    {offerteType === 'with-photo' ? '€1.620,00' : '€1.325,00'}
                  </span>
                </div>

                {/* VAT */}
                <div className="flex justify-between">
                  <span className="text-text-dark">21% btw</span>
                  <span className="font-semibold text-text-dark">
                    {offerteType === 'with-photo' ? '€340,20' : '€278,25'}
                  </span>
                </div>

                {/* Final Price */}
                <div className="flex justify-between pt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="font-semibold text-lg text-green-dark">JOUW PRIJS NU (incl. btw)</span>
                  <span className="font-semibold text-lg text-green-dark">
                    {offerteType === 'with-photo' ? '€1.960,20' : '€1.603,25'}
                  </span>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="mb-20">
              <div className="bg-green-dark rounded-[20px] p-10 text-white">
                <h3 className="text-2xl font-serif text-cream mb-8 font-light tracking-tight">Voorwaarden &amp; Informatie</h3>
                <ul className="text-base text-white/90 space-y-3 list-disc list-inside leading-relaxed">
                  <li><strong>Betaling:</strong> 50% vooruitbetaling bij acceptatie offerte, 50% bij oplevering</li>
                  <li><strong>Timeline:</strong> 3-6 weken na kickoff en content briefing</li>
                  <li><strong>Inclusief:</strong> Website ontwerp &amp; development, product pagina&apos;s, betaalsysteem, email marketing setup &amp; begeleiding, Elementor CMS training, begeleiding bij nieuwsbriefopzet</li>
                  <li><strong>Geldigheid:</strong> Deze offerte is geldig voor 14 dagen na datum</li>
                  <li><strong>Revisions:</strong> 2 feedback ronden voor webdesign</li>
                </ul>
              </div>
            </div>

            {/* Download Section */}
            <div className="mb-8">
              <button
                onClick={downloadOffortePDF}
                className="bg-white text-green-dark border-2 border-green-dark px-6 py-3 rounded-[10px] font-semibold hover:bg-gray-50 transition"
              >
                ⬇ Download Offerte als PDF
              </button>
            </div>

            {/* Approval Section */}
            {approval === 'success' ? (
              <div className="bg-green-50 rounded-[20px] p-10 mb-12 border-l-4 border-green-dark">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-dark rounded-full mb-4">
                    <span className="text-3xl text-white">✓</span>
                  </div>
                  <h3 className="font-serif text-3xl text-green-dark mb-3 font-light">Akkoord ontvangen!</h3>
                  <p className="text-text-dark text-lg mb-2">Dank je wel voor je akkoord.</p>
                  <p className="text-text-muted">Je ontvangt binnenkort een bevestigingsmail van ons.</p>
                  <p className="text-text-muted text-sm mt-4">Wij nemen snel contact met je op voor de volgende stappen.</p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-[20px] p-10 mb-12 border-l-4 border-green-dark">
                <h3 className="font-serif text-2xl text-green-dark mb-6 font-light">Offerte Goedkeuren</h3>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-[10px] text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <div className="mb-6 space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-text-dark mb-2">
                      Uw naam *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Voornaam en achternaam"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-text-dark mb-2">
                      Uw e-mailadres *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="naam@bedrijf.nl"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <input
                    type="checkbox"
                    id="agree-terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-5 h-5 accent-green-dark cursor-pointer mt-1 flex-shrink-0"
                  />
                  <label htmlFor="agree-terms" className="text-base text-text-dark cursor-pointer leading-relaxed">
                    Ik heb de offerte gelezen en ga akkoord met de inhoud en{' '}
                    <a
                      href="/algemene-voorwaarden"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-dark font-semibold hover:underline"
                    >
                      algemene voorwaarden
                    </a>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleApproval('approved')}
                    disabled={!agreedToTerms || !contactEmail || !contactName || isSubmitting}
                    className={`flex-1 py-3 rounded-[10px] font-semibold transition ${
                      agreedToTerms && contactEmail && contactName && !isSubmitting
                        ? 'bg-green-dark text-white hover:bg-opacity-90 cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? '⏳ Verifying...' : '✓ Akkoord'}
                  </button>
                  <a
                    href="mailto:hello@wegrowbrands.online?subject=Offerteverzoek%20om%20meer%20informatie&body=Hallo%2C%0A%0AIk%20heb%20vragen%20over%20de%20offerte%20en%20wil%20graag%20meer%20informatie%20ontvangen.%0A%0ABedankt!"
                    className="flex-1 bg-white text-green-dark border-2 border-green-dark py-3 rounded-[10px] font-semibold hover:bg-gray-50 transition text-center"
                  >
                    ✉ Meer informatie
                  </a>
                </div>
              </div>
            )}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
