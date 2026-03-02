// Pakket-templates voor WGB offertes
// Line items, intro-tekst en voorwaarden per pakkettype

export interface TemplateLineItem {
  description: string
  details?: string
  quantity: number
  unitPrice: number
  sectionTitle?: string
}

export interface OfferteTemplate {
  items: TemplateLineItem[]
  subtotal: number
  btwPercentage: number
  introText: string
  termsText: string
}

function calculateTotals(items: TemplateLineItem[], btwPercentage: number) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  const btwAmount = Math.round(subtotal * (btwPercentage / 100) * 100) / 100
  const total = subtotal + btwAmount
  return { subtotal, btwAmount, total }
}

const DEFAULT_TERMS = `Betaling: 50% aanbetaling bij akkoord, 50% bij oplevering
Timeline: 2-4 weken na kickoff en content briefing
Geldigheid: Deze offerte is geldig voor 14 dagen na datum
Revisions: 2 feedback ronden voor webdesign`

const DEFAULT_INTRO = (clientName: string) =>
  `Beste ${clientName}, bedankt voor je aanvraag! Hieronder vind je onze offerte met alle details. Neem gerust contact met ons op als je vragen hebt.`

// ── Essentials (€999) ──────────────────────────────────────────────

const essentialsItems: TemplateLineItem[] = [
  { description: 'Professioneel Website Design', details: 'Custom gebouwde website, volledig op maat', quantity: 1, unitPrice: 999, sectionTitle: 'Website & Design' },
  { description: "Tot 3 pagina's", details: 'Home, Over ons, Contact', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'Responsive design', details: 'Desktop, tablet & mobiel', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'Basis SEO-optimalisatie', details: 'Vindbaar in Google', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'SSL-certificaat', details: 'Veilige verbinding', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'Contactformulier', details: 'Direct leads ontvangen', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'Twee feedback rondes', details: 'Voor de website', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
  { description: 'Begeleiding & technische ondersteuning', details: 'Via email en WhatsApp – snelle reactie', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
]

// ── Groei (€1.450) ────────────────────────────────────────────────

const groeiItems: TemplateLineItem[] = [
  { description: 'Professioneel Website Design', details: 'Custom gebouwde website met uitgebreide branding', quantity: 1, unitPrice: 1450, sectionTitle: 'Website & Design' },
  { description: "Tot 8 pagina's", details: 'Home, Over ons, Diensten, Portfolio, Contact, etc.', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'Responsive design', details: 'Desktop, tablet & mobiel', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'CMS integratie', details: 'Zelf content beheren', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'Uitgebreide SEO-optimalisatie', details: 'Keyword research, meta tags, sitemap', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'Google Analytics & Search Console', details: 'Inzicht in bezoekers en prestaties', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'SSL-certificaat', details: 'Veilige verbinding', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'Contactformulier', details: 'Direct leads ontvangen', quantity: 1, unitPrice: 0, sectionTitle: 'Functionaliteit' },
  { description: 'Blog / Nieuws sectie', details: 'Regelmatig content publiceren', quantity: 1, unitPrice: 0, sectionTitle: 'Functionaliteit' },
  { description: 'Drie feedback rondes', details: 'Voor de website', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
  { description: 'Begeleiding & technische ondersteuning', details: 'Via email en WhatsApp – snelle reactie', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
]

// ── Premium (vanaf €2.650) ─────────────────────────────────────────

const premiumItems: TemplateLineItem[] = [
  { description: 'Premium Website Design', details: 'Volledig maatwerk website met uitgebreide branding', quantity: 1, unitPrice: 2650, sectionTitle: 'Website & Design' },
  { description: 'Onbeperkt aantal pagina\'s', details: 'Volledig op maat gebouwd', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'Responsive design', details: 'Desktop, tablet & mobiel', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'CMS integratie', details: 'Zelf content beheren', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'Uitgebreide animaties & interacties', details: 'Premium feel en gebruikerservaring', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
  { description: 'Uitgebreide SEO-optimalisatie', details: 'Keyword research, meta tags, sitemap, technische SEO', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'Google Analytics & Search Console', details: 'Inzicht in bezoekers en prestaties', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'SSL-certificaat', details: 'Veilige verbinding', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'Performance optimalisatie', details: 'Snelle laadtijden en Core Web Vitals', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
  { description: 'Contactformulier', details: 'Direct leads ontvangen', quantity: 1, unitPrice: 0, sectionTitle: 'Functionaliteit' },
  { description: 'Blog / Nieuws sectie', details: 'Regelmatig content publiceren', quantity: 1, unitPrice: 0, sectionTitle: 'Functionaliteit' },
  { description: 'Webshop / E-commerce', details: 'Indien van toepassing', quantity: 1, unitPrice: 0, sectionTitle: 'Functionaliteit' },
  { description: 'Email marketing integratie', details: 'Nieuwsbrief setup en koppeling', quantity: 1, unitPrice: 0, sectionTitle: 'Functionaliteit' },
  { description: 'Onbeperkt feedback rondes', details: 'Tot je 100% tevreden bent', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
  { description: 'Training & documentatie', details: 'Leer je website zelf beheren', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
  { description: 'Begeleiding & technische ondersteuning', details: 'Via email en WhatsApp – snelle reactie', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
]

// ── Export ──────────────────────────────────────────────────────────

export type PackageType = 'essentials' | 'groei' | 'premium' | 'custom'

export function getOfferteTemplate(
  packageType: PackageType,
  clientName: string
): OfferteTemplate {
  const btwPercentage = 21

  switch (packageType) {
    case 'essentials':
      return {
        items: essentialsItems,
        ...calculateTotals(essentialsItems, btwPercentage),
        btwPercentage,
        introText: DEFAULT_INTRO(clientName),
        termsText: DEFAULT_TERMS,
      }
    case 'groei':
      return {
        items: groeiItems,
        ...calculateTotals(groeiItems, btwPercentage),
        btwPercentage,
        introText: DEFAULT_INTRO(clientName),
        termsText: DEFAULT_TERMS,
      }
    case 'premium':
      return {
        items: premiumItems,
        ...calculateTotals(premiumItems, btwPercentage),
        btwPercentage,
        introText: DEFAULT_INTRO(clientName),
        termsText: DEFAULT_TERMS,
      }
    case 'custom':
      return {
        items: [],
        subtotal: 0,
        btwPercentage,
        introText: DEFAULT_INTRO(clientName),
        termsText: DEFAULT_TERMS,
      }
  }
}
