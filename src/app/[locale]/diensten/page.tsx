import type { Metadata } from 'next'
import WavyText from '@/components/WavyText'
import WavyUnderline from '@/components/WavyUnderline'
import WavyLineScroll from '@/components/WavyLineScroll'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Link } from '@/i18n/routing'
import OfferCard, { type Offer } from '@/components/OfferCard'

export const metadata: Metadata = {
  title: 'Diensten | We Grow Brands',
  description: 'Hosting, onderhoud en AI-gedreven marketing voor je website. Alles wat je nodig hebt na de lancering.',
  alternates: {
    canonical: '/diensten/',
  },
  openGraph: {
    title: 'Diensten | We Grow Brands',
    description: 'Hosting, onderhoud en AI-gedreven marketing voor je website. Alles wat je nodig hebt na de lancering.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'We Grow Brands',
    url: 'https://wegrowbrands.online/diensten/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'We Grow Brands diensten' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diensten | We Grow Brands',
    description: 'Hosting, onderhoud en AI-gedreven marketing voor je website.',
  },
}

const categories = [
  {
    icon: '🛡️',
    title: 'Hosting & onderhoud',
    description: 'Houd je website veilig, snel en up-to-date. Van pure hosting tot volledig onderhoud aan je site.',
    highlights: [
      'Europese hosting binnen de EU',
      'Dagelijkse back-ups en beveiliging',
      'Optioneel onderhoud aan je website',
      'Vanaf €14,50 per maand',
    ],
    cta: 'Bekijk hosting & onderhoud',
    href: '/hosting' as const,
  },
  {
    icon: '🚀',
    title: 'AI-gedreven marketing',
    description: 'Word gevonden en haal meer uit je website met AI-gedreven nieuwsbrieven, SEO en SEA.',
    highlights: [
      'AI-nieuwsbrieven en blogartikelen',
      'Doorlopende SEO en SEA',
      'Conversie-optimalisatie',
      'Vanaf €99 per maand',
    ],
    cta: 'Bekijk marketing',
    href: '/marketing' as const,
  },
]

const extras: Offer[] = [
  {
    icon: '🎟️',
    title: 'Strippenkaart',
    subtitle: '100 minuten aan werkzaamheden, flexibel inzetbaar',
    price: '120',
    priceUnit: 'eenmalig',
    priceNote: '€1,20 per minuut',
    items: [
      'Tekst- en afbeeldingswijzigingen',
      'Layout aanpassingen',
      'Nieuwe secties of pagina\'s',
      'Design tweaks',
      '6 maanden geldig',
    ],
    cta: 'Strippenkaart aanvragen',
  },
  {
    icon: '📧',
    title: 'Zakelijke e-mail',
    subtitle: 'Professionele e-mail op jouw domeinnaam, volledig beheerd',
    price: '3,99',
    priceUnit: '/ maand',
    priceNote: 'per mailbox',
    items: [
      'E-mail op jouw domein (@jouwbedrijf.nl)',
      'Onbeperkt aliassen per mailbox',
      'Volledige setup & configuratie',
      'DNS-beheer (SPF, DKIM, DMARC)',
      'Webmail & app toegang',
      'Spam- en virusfilter',
      'Support bij problemen',
    ],
    cta: 'E-mail aanvragen',
  },
]

export default function DienstenPage() {
  return (
    <>
      <section className="bg-cream pt-44 pb-24 relative overflow-hidden">
        {/* Decoratieve golvende lila lijn - Desktop */}
        <WavyLineScroll
          className="hidden md:block absolute top-0 left-0 w-full h-[800px] pointer-events-none"
          viewBox="0 0 1200 800"
          path="M-50 150 Q 100 50, 250 200 Q 400 350, 550 300 Q 700 250, 850 450 Q 1000 650, 1150 600 Q 1300 550, 1400 750"
          strokeColor="#EAD7FF"
          strokeWidth={12}
          direction="up"
        />

        {/* Decoratieve golvende lila lijn - Mobiel */}
        <WavyLineScroll
          className="md:hidden absolute top-0 left-0 w-full h-[600px] pointer-events-none"
          viewBox="0 0 400 500"
          path="M-20 0 C 80 40, 40 100, 120 140 C 200 180, 160 240, 260 280 C 360 320, 300 400, 420 450"
          strokeColor="#EAD7FF"
          strokeWidth={8}
          direction="up"
        />

        <Breadcrumbs className="mb-8 relative z-10" />
        <div className="px-6 md:px-10 relative z-10">
          <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-text-dark mb-6">
                <span className="font-serif">Onze</span>{' '}
                <span className="serif-header italic text-green-dark">diensten</span>
              </h1>
              <p className="text-text-muted max-w-2xl mx-auto">
                Alles wat je website nodig heeft na de lancering. Hosting en onderhoud om hem draaiend te houden, marketing om hem te laten groeien.
              </p>
            </div>

            {/* Categorieën */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="bg-white rounded-[20px] md:rounded-[30px] p-8 md:p-10 border border-black/5 hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-lila/40 flex items-center justify-center text-3xl mb-5">
                    {category.icon}
                  </div>
                  <h2 className="text-green-dark text-2xl font-medium font-serif mb-3">{category.title}</h2>
                  <p className="text-text-muted leading-relaxed mb-6">{category.description}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {category.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-500">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                        <span className="text-text-dark text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={category.href}
                    className="btn-spring btn-uniform btn-no-lila link-wave w-full inline-flex justify-center bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all"
                  >
                    <WavyText text={category.cta} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Losse extra's */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-text-dark mb-4">
              <span className="font-serif">Losse</span>{' '}
              <span className="relative inline-block serif-header italic text-green-dark">
                extra&apos;s
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Aanvullingen op je hosting, onderhoud of marketing. Flexibel in te zetten, zonder verplichtingen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            {extras.map((extra) => (
              <OfferCard key={extra.title} offer={extra} />
            ))}
          </div>

          <p className="text-text-muted text-sm text-center mt-10">
            Op zoek naar een eenmalig project, zoals locatiepagina&apos;s?{' '}
            <Link
              href={'/pakketten#eenmalige-pakketten' as any}
              className="link-wave text-green-dark font-medium underline"
            >
              Bekijk de eenmalige pakketten
            </Link>
          </p>

          <p className="text-text-muted text-xs text-center mt-8 max-w-2xl mx-auto">
            E-mail wordt beheerd via een professionele e-mailpartner. Wij verzorgen de volledige setup, configuratie en het beheer zodat jij er geen omkijken naar hebt.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center bg-[#1a1a1a] rounded-[30px] p-10 md:p-12">
            <h2 className="text-white mb-4">
              <span className="font-serif">Alles in één</span>{' '}
              <span className="serif-header text-lila">totaalpakket?</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Combineer hosting, onderhoud en marketing. Vertel ons wat je nodig hebt, dan stellen we een offerte op maat samen.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all inline-block"
              >
                <WavyText text="Neem contact op" />
              </Link>
              <a
                href="https://wa.me/31636162639"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1FAF57] flex items-center justify-center transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-6 w-6 fill-white">
                  <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
