'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface LineItem {
  id: string
  description: string
  details?: string
  quantity: number
  unit_price: number
  sort_order: number
  section_title?: string
}

const euro = (n: number) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n)

// ── Offerte datum & nummer (vast) ────────────────────────────
const offerteNumber = 'OF-260223-01'
const todayFormatted = '23 februari 2026'
const validUntilFormatted = '9 maart 2026'

// ── Hardcoded offerte data ───────────────────────────────────
const offerte = {
  number: offerteNumber,
  client_name: 'Salesspark.nl',
  client_contact_person: 'Kevin Smith' as string | null,
  client_email: 'kevin@ns-ma.nl' as string | null,
  client_phone: '+31 6 57681376' as string | null,
  date: todayFormatted,
  valid_until: validUntilFormatted,
  status: 'verzonden',
  subtotal: 500,
  btw_percentage: 21,
  btw_amount: 105,
  total: 605,
  intro_text: 'Hey Kevin, bedankt voor je aanvraag! Zoals besproken bouwen we een echte oranje sparkling website die perfect aansluit bij de branding van Sales Spark. Een site die energie uitstraalt, vertrouwen wekt en jouw klanten direct overtuigt — precies zoals een salesster als jij verdient. Hieronder vind je de offerte met alles wat erbij komt kijken.',
  terms_text: `Betaling: 50% aanbetaling bij akkoord, 50% bij oplevering
Timeline: 2-4 weken na kickoff en content briefing
Geldigheid: Deze offerte is geldig voor 14 dagen na datum
Revisions: 2 feedback ronden voor webdesign`,
  notes: null as string | null,
}

const items: LineItem[] = [
  { id: '1', sort_order: 0, description: 'Professioneel Website Design', details: 'Custom gebouwde website, volledig op maat', quantity: 1, unit_price: 999, section_title: 'Website & Design' },
  { id: '2', sort_order: 1, description: "3 pagina's", details: 'Home, Over mij, Contact', quantity: 1, unit_price: 0, section_title: 'Website & Design' },
  { id: '3', sort_order: 2, description: 'Responsive design', details: 'Desktop, tablet & mobiel', quantity: 1, unit_price: 0, section_title: 'Website & Design' },
  { id: '4', sort_order: 3, description: 'Basis SEO-optimalisatie', details: 'Vindbaar in Google', quantity: 1, unit_price: 0, section_title: 'SEO & Technisch' },
  { id: '5', sort_order: 4, description: 'SSL-certificaat', details: 'Veilige verbinding', quantity: 1, unit_price: 0, section_title: 'SEO & Technisch' },
  { id: '6', sort_order: 5, description: 'Contactformulier', details: 'Direct leads ontvangen', quantity: 1, unit_price: 0, section_title: 'SEO & Technisch' },
  { id: '7', sort_order: 6, description: 'Twee feedback rondes', details: 'Voor de website', quantity: 1, unit_price: 0, section_title: 'Support' },
  { id: '8', sort_order: 7, description: 'Begeleiding & technische ondersteuning', details: 'Via email en WhatsApp – snelle reactie', quantity: 1, unit_price: 0, section_title: 'Support' },
]

export default function OffertePage() {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [approved, setApproved] = useState(false)
  const [error, setError] = useState('')

  const downloadPdf = async () => {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const pw = 210, ml = 20, rx = pw - 20, cw = pw - 40
    let y = 0

    // Header
    doc.setFillColor(3, 72, 58)
    doc.rect(0, 0, pw, 36, 'F')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.setTextColor(255, 255, 255)
    doc.text('OFFERTE', ml, 18)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(180, 210, 200)
    doc.text('WE GROW BRANDS', ml, 24)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(255, 255, 255)
    doc.text('We Grow Brands', rx, 10, { align: 'right' })
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(210, 225, 220)
    doc.text('Daley Jansen', rx, 15, { align: 'right' })
    doc.text('Noorderpad 47, 1461CD Zuidoostbeemster', rx, 20, { align: 'right' })
    doc.text('hello@wegrowbrands.online | 0636162639', rx, 25, { align: 'right' })
    doc.setTextColor(160, 190, 180)
    doc.text('KVK: 84818883 | BTW: NL004023224B90', rx, 30, { align: 'right' })

    // Meta bar
    doc.setFillColor(2, 46, 38)
    doc.rect(0, 36, pw, 14, 'F')
    const metas = [
      { label: 'OFFERTENUMMER', value: offerte.number },
      { label: 'DATUM', value: offerte.date },
      { label: 'GELDIG TOT', value: offerte.valid_until },
    ]
    metas.forEach((m, i) => {
      const mx = ml + i * 50
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(6)
      doc.setTextColor(130, 165, 155)
      doc.text(m.label, mx, 41.5)
      doc.setFontSize(9)
      doc.setTextColor(255, 255, 255)
      doc.text(m.value, mx, 46.5)
    })

    y = 58

    // Client info
    doc.setFillColor(245, 245, 245)
    doc.roundedRect(ml, y, cw, 18, 3, 3, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6)
    doc.setTextColor(160, 160, 160)
    doc.text('KLANT', ml + 6, y + 5)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(30, 30, 30)
    doc.text(offerte.client_name, ml + 6, y + 11)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(100, 100, 100)
    if (offerte.client_contact_person) doc.text(`t.a.v. ${offerte.client_contact_person}`, ml + 6, y + 15.5)
    if (offerte.client_email) doc.text(offerte.client_email, rx - 6, y + 11, { align: 'right' })

    y += 26

    // Intro text
    if (offerte.intro_text) {
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(60, 60, 60)
      const introLines = doc.splitTextToSize(offerte.intro_text, cw)
      doc.text(introLines, ml, y)
      y += introLines.length * 4 + 6
    }

    // Group items by section
    const pdfSections: { title: string; items: LineItem[] }[] = []
    for (const item of items) {
      const title = item.section_title || ''
      const last = pdfSections[pdfSections.length - 1]
      if (last && last.title === title) {
        last.items.push(item)
      } else {
        pdfSections.push({ title, items: [item] })
      }
    }

    for (const section of pdfSections) {
      if (section.title) {
        if (y > 255) { doc.addPage(); y = 20 }
        doc.setFillColor(240, 248, 245)
        doc.rect(ml, y, cw, 7, 'F')
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(8)
        doc.setTextColor(2, 46, 38)
        doc.text(section.title.toUpperCase(), ml + 4, y + 5)
        y += 10
      }

      doc.setFillColor(240, 248, 245)
      doc.rect(ml, y, cw, 8, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(7)
      doc.setTextColor(3, 72, 58)
      doc.text('OMSCHRIJVING', ml + 4, y + 5.5)
      doc.text('AANTAL', ml + 100, y + 5.5)
      doc.text('PRIJS', ml + 120, y + 5.5)
      doc.text('TOTAAL', rx - 4, y + 5.5, { align: 'right' })
      y += 12

      doc.setFontSize(9)
      for (const item of section.items) {
        if (y > 255) { doc.addPage(); y = 20 }
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(30, 30, 30)
        doc.text(item.description, ml + 4, y)
        doc.setFont('helvetica', 'normal')
        doc.text(String(item.quantity), ml + 100, y)
        doc.text(euro(item.unit_price), ml + 120, y)
        doc.text(euro(item.quantity * item.unit_price), rx - 4, y, { align: 'right' })
        y += 4
        if (item.details) {
          doc.setFontSize(7.5)
          doc.setTextColor(120, 120, 120)
          const lines = doc.splitTextToSize(item.details, 90)
          doc.text(lines, ml + 4, y)
          y += lines.length * 3.5
          doc.setFontSize(9)
        }
        doc.setDrawColor(230, 230, 230)
        doc.line(ml, y + 1, rx, y + 1)
        y += 5
      }
      y += 3
    }

    // Totals
    y += 5
    const tx = ml + cw - 70
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(100, 100, 100)
    doc.text('Subtotaal', tx, y)
    doc.setTextColor(30, 30, 30)
    doc.text(euro(offerte.subtotal), rx - 4, y, { align: 'right' })
    y += 6
    doc.setTextColor(100, 100, 100)
    doc.text(`BTW ${offerte.btw_percentage}%`, tx, y)
    doc.setTextColor(30, 30, 30)
    doc.text(euro(offerte.btw_amount), rx - 4, y, { align: 'right' })
    y += 3
    doc.setDrawColor(3, 72, 58)
    doc.line(tx, y, rx, y)
    y += 6
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.setTextColor(3, 72, 58)
    doc.text('Totaal', tx, y)
    doc.text(euro(offerte.total), rx - 4, y, { align: 'right' })

    // Terms
    if (offerte.terms_text) {
      y += 14
      if (y > 260) { doc.addPage(); y = 20 }
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.setTextColor(100, 100, 100)
      doc.text('VOORWAARDEN & OPMERKINGEN', ml, y)
      y += 5
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(60, 60, 60)
      const termLines = doc.splitTextToSize(offerte.terms_text, cw)
      doc.text(termLines, ml, y)
    }

    // Footer
    const fy = 282
    doc.setDrawColor(200, 200, 200)
    doc.line(ml, fy, rx, fy)
    doc.setFontSize(7)
    doc.setTextColor(160, 160, 160)
    doc.text('We Grow Brands · hello@wegrowbrands.online · wegrowbrands.online', pw / 2, fy + 4, { align: 'center' })

    doc.save(`offerte-${offerte.number}.pdf`)
  }

  const handleApproval = async () => {
    if (!contactName || !contactEmail || !agreedToTerms) return

    setIsSubmitting(true)
    setError('')

    try {
      // Send notification email via Resend
      await fetch('/api/offerte/send-email-resend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactName,
          contactEmail,
          type: 'Offerte goedgekeurd',
          totalAmount: euro(offerte.total),
          offerteId: offerte.number,
        }),
      })

      setApproved(true)
    } catch (e) {
      console.error('Approval failed:', e)
      setError('Er ging iets mis bij het goedkeuren. Probeer het opnieuw.')
    }
    setIsSubmitting(false)
  }

  // ── Approved state ───────────────────────────────────────────
  if (approved) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-cream pt-44 pb-24 flex items-center justify-center px-4">
          <div className="max-w-lg w-full">
            <div className="bg-white rounded-[20px] shadow-lg p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-dark rounded-full mb-6">
                <span className="text-3xl text-white">&#10003;</span>
              </div>
              <h1 className="font-serif text-3xl text-green-dark mb-3">Offerte goedgekeurd</h1>
              <p className="text-text-muted mb-2">Bedankt! Offerte <strong>{offerte.number}</strong> is succesvol goedgekeurd.</p>
              <p className="text-text-muted text-sm mb-8">Je ontvangt binnenkort een bevestigingsmail van ons.</p>

              <div className="bg-cream rounded-[14px] p-6 text-left text-sm space-y-2 mb-8">
                <div className="flex justify-between">
                  <span className="text-text-muted">Bedrag</span>
                  <span className="font-semibold text-green-dark">{euro(offerte.total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Offerte</span>
                  <span>{offerte.number}</span>
                </div>
              </div>

              <button
                onClick={downloadPdf}
                className="bg-white text-green-dark border-2 border-green-dark px-6 py-3 rounded-[10px] font-semibold hover:bg-gray-50 transition"
              >
                Download Offerte als PDF
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  // ── Offerte view ─────────────────────────────────────────────
  // Group items by section_title
  const sections: { title: string; items: LineItem[] }[] = []
  for (const item of items) {
    const title = item.section_title || ''
    const last = sections[sections.length - 1]
    if (last && last.title === title) {
      last.items.push(item)
    } else {
      sections.push({ title, items: [item] })
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        <section className="pt-44 pb-24 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-[30px] shadow-lg overflow-hidden">

            {/* Header */}
            <div className="bg-green-dark p-8 lg:p-16">
              <div className="text-center mb-8">
                <h2 className="text-5xl font-serif text-white mb-4 font-light tracking-tight">OFFERTE</h2>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-serif text-white mb-2 font-light">Klantgegevens</h3>
                  <div className="space-y-0.5 text-xs text-white/80">
                    <p className="font-medium text-white">{offerte.client_name}</p>
                    {offerte.client_contact_person && <p>t.a.v. {offerte.client_contact_person}</p>}
                    {offerte.client_email && <p>{offerte.client_email}</p>}
                    {offerte.client_phone && <p>{offerte.client_phone}</p>}
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-serif text-lg text-white mb-1 font-light">We Grow Brands</h3>
                  <div className="space-y-0.5 text-xs text-white/80">
                    <p className="font-medium text-white">Daley Jansen</p>
                    <p>Noorderpad 47, 1461CD Zuidoostbeemster</p>
                    <p>hello@wegrowbrands.online | 0636162639</p>
                    <p className="text-white/60">KVK: 84818883 | BTW: NL004023224B90</p>
                  </div>
                  <div className="flex gap-6 mt-4 pt-3 border-t border-white/20 justify-end">
                    <div>
                      <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">Offertenummer</p>
                      <p className="text-xs text-white font-medium">{offerte.number}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">Datum</p>
                      <p className="text-xs text-white font-medium">{offerte.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">Geldig tot</p>
                      <p className="text-xs text-white font-medium">{offerte.valid_until}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white p-8 lg:p-24">

              {/* Intro text */}
              {offerte.intro_text && (
                <div className="mb-16">
                  <div className="bg-green-dark/5 rounded-[20px] p-10 border border-green-dark/10 text-center">
                    <p className="text-text-dark leading-relaxed whitespace-pre-wrap">{offerte.intro_text}</p>
                  </div>
                </div>
              )}

              {/* Line items grouped by section */}
              <div className="mb-16">
                <h3 className="text-xl font-serif text-green-dark mb-8 font-light tracking-tight">
                  <strong>Essentials Website Pakket</strong>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {sections.map((section, sIdx) => (
                    <div key={sIdx} className="bg-gradient-to-br from-green-dark/5 to-transparent rounded-[20px] p-8 border border-green-dark/10">
                      {section.title && (
                        <h4 className="text-lg font-serif text-green-dark mb-4 font-semibold tracking-tight">
                          {section.title}
                        </h4>
                      )}
                      <ul className="space-y-2 text-sm text-text-muted">
                        {section.items.map(item => (
                          <li key={item.id} className="flex items-start">
                            <span className="text-green-dark mr-3">•</span>
                            <span>
                              <strong>{item.description}</strong>
                              {item.details && <> – {item.details}</>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prijsoverzicht */}
              <div className="mb-16 pb-12 border-b border-gray-200">
                <h3 className="text-xl font-serif text-green-dark mb-8 font-light tracking-tight">
                  <strong>Prijsoverzicht</strong>
                </h3>
                <div className="max-w-md ml-auto text-sm">
                  <div className="flex justify-between py-2">
                    <span className="text-text-dark">Essentials Website Pakket</span>
                    <span className="font-semibold">{euro(999)}</span>
                  </div>
                  <div className="flex justify-between py-2 bg-orange-50 px-4 rounded-lg border border-orange-200">
                    <span className="font-semibold text-orange-700">Speciale Deal</span>
                    <span className="font-semibold text-orange-700">-{euro(499)}</span>
                  </div>
                  <div className="flex justify-between py-2 pt-3 mt-2 border-t border-gray-200">
                    <span className="font-semibold text-text-dark">Totaal excl. btw</span>
                    <span className="font-semibold">{euro(offerte.subtotal)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-text-dark">{offerte.btw_percentage}% btw</span>
                    <span className="font-semibold">{euro(offerte.btw_amount)}</span>
                  </div>
                  <div className="flex justify-between py-3 mt-2 bg-green-dark/5 px-4 rounded-lg border border-green-dark/10">
                    <span className="font-semibold text-lg text-green-dark">Totaal incl. btw</span>
                    <span className="font-semibold text-lg text-green-dark">{euro(offerte.total)}</span>
                  </div>
                  <div className="mt-4 bg-green-dark rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white text-base">Aanbetaling (50%)</span>
                      <p className="text-white/70 text-xs mt-0.5">Restant bij oplevering: {euro(offerte.total / 2)}</p>
                    </div>
                    <span className="font-bold text-white text-xl">{euro(offerte.total / 2)}</span>
                  </div>
                </div>
              </div>

              {/* Terms */}
              {offerte.terms_text && (
                <div className="mb-16">
                  <div className="bg-green-dark rounded-[20px] p-10 text-white">
                    <h3 className="text-2xl font-serif text-white/90 mb-4 font-light">Voorwaarden &amp; Opmerkingen</h3>
                    <p className="text-white/80 leading-relaxed whitespace-pre-wrap">{offerte.terms_text}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Download */}
            <div className="bg-white px-8 lg:px-24 pb-8">
              <button
                onClick={downloadPdf}
                className="bg-white text-green-dark border-2 border-green-dark px-6 py-3 rounded-[10px] font-semibold hover:bg-gray-50 transition"
              >
                &#11015; Download Offerte als PDF
              </button>
            </div>

            {/* Approval form */}
            {!approved && (
              <div className="bg-white px-8 lg:px-24 pb-16">
                <div className="bg-gray-50 rounded-[20px] p-10 border-l-4 border-green-dark">
                  <h3 className="font-serif text-2xl text-green-dark mb-6 font-light">Offerte Goedkeuren</h3>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-[10px] text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="mb-6 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-2">Uw naam *</label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={e => setContactName(e.target.value)}
                        placeholder="Voornaam en achternaam"
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-2">Uw e-mailadres *</label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={e => setContactEmail(e.target.value)}
                        placeholder="naam@bedrijf.nl"
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-8">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={e => setAgreedToTerms(e.target.checked)}
                      className="w-5 h-5 accent-green-dark cursor-pointer mt-1 flex-shrink-0"
                    />
                    <label className="text-base text-text-dark cursor-pointer leading-relaxed">
                      Ik heb de offerte gelezen en ga akkoord met de inhoud en{' '}
                      <a href="/algemene-voorwaarden" target="_blank" className="text-green-dark font-semibold hover:underline">
                        algemene voorwaarden
                      </a>
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={handleApproval}
                      disabled={!agreedToTerms || !contactEmail || !contactName || isSubmitting}
                      className={`flex-1 py-3 rounded-[10px] font-semibold transition ${
                        agreedToTerms && contactEmail && contactName && !isSubmitting
                          ? 'bg-green-dark text-white hover:bg-opacity-90'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? 'Verwerken...' : 'Akkoord'}
                    </button>
                    <a
                      href="mailto:hello@wegrowbrands.online?subject=Vraag%20over%20offerte"
                      className="flex-1 bg-white text-green-dark border-2 border-green-dark py-3 rounded-[10px] font-semibold hover:bg-gray-50 transition text-center"
                    >
                      Meer informatie
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
