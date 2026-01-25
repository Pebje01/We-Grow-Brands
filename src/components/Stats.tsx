import Link from 'next/link'
import WavyText from '@/components/WavyText'
import ScrollReveal from '@/components/ScrollReveal'

const comparisonData = [
  {
    label: 'Merk integratie',
    wgb: 'Je start vanuit je merk: richting, design en keuzes.',
    agencies: 'Meestal vanuit techniek, niet vanuit branding.',
    lease: 'Generieke branding.',
    wgbIcon: '✓',
    agenciesIcon: '～',
    leaseIcon: '✕',
  },
  {
    label: 'Design & uitstraling',
    wgb: 'Premium design, onderscheidende branding.',
    agencies: 'Goed design, niet altijd onderscheidende branding.',
    lease: 'Template look.',
    wgbIcon: '✓',
    agenciesIcon: '✓',
    leaseIcon: '✕',
  },
  {
    label: 'Maatwerk',
    wgb: 'Volledig op maat.',
    agencies: 'Soms maatwerk, soms template based.',
    lease: 'Geen, standaard opzet.',
    wgbIcon: '✓',
    agenciesIcon: '～',
    leaseIcon: '✕',
  },
  {
    label: 'Eigendom',
    wgb: 'Na betaling: 100% jouw eigendom.',
    agencies: 'Na betaling: 100% jouw eigendom.',
    lease: 'Nooit jouw eigendom.',
    wgbIcon: '✓',
    agenciesIcon: '✓',
    leaseIcon: '✕',
  },
  {
    label: 'Prijsniveau',
    wgb: 'Eerlijke prijzen voor premium niveau.',
    agencies: 'Hoge maatwerktarieven.',
    lease: 'Laag maandelijks tarief.',
    wgbIcon: '✓',
    agenciesIcon: '✕',
    leaseIcon: '✕',
  },
  {
    label: 'Betaling',
    wgb: 'In termijnen mogelijk. Korting bij betaling ineens.',
    agencies: 'In één keer of max 2-3 termijnen.',
    lease: 'Doorlopende betaling zolang de website draait.',
    wgbIcon: '✓',
    agenciesIcon: '～',
    leaseIcon: '✕',
  },
  {
    label: 'Ondersteuning',
    wgb: 'Persoonlijke ondersteuning via e-mail en WhatsApp.',
    agencies: 'Wisselend.',
    lease: 'Vaak basisondersteuning.',
    wgbIcon: '✓',
    agenciesIcon: '～',
    leaseIcon: '✓',
  },
  {
    label: 'Website aanpassingen',
    wgb: 'Zelf kiezen voor onderhoudspakketten.',
    agencies: 'Uurtje, factuurtje.',
    lease: 'Kleine aanpassingen vaak mogelijk.',
    wgbIcon: '✓',
    agenciesIcon: '～',
    leaseIcon: '✓',
  },
  {
    label: 'Beheer',
    wgb: 'Zelf aanpassen via CMS óf volledig uitbesteden.',
    agencies: 'Wachten op reactie, dan factuur.',
    lease: 'Beperkte toegang, afhankelijk van aanbieder.',
    wgbIcon: '✓',
    agenciesIcon: '～',
    leaseIcon: '✕',
  },
]

export default function Stats() {
  return (
    <section className="bg-cream min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
        <ScrollReveal
          className="max-w-5xl mx-auto mb-8 md:mb-12"
          animation="fade-up"
        >
          <h2 className="text-text-dark mb-10 md:mb-12 lg:mb-14 text-center">
            <span className="font-serif">Waarom kiezen voor</span>{' '}
            <span className="serif-header italic text-green-dark">We Grow Brands</span>
          </h2>

          {/* Mobile/Tablet: Card-based layout */}
          <div className="lg:hidden space-y-4">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm"
              >
                {/* Category label */}
                <div className="px-4 py-3 bg-cream/50 border-b border-black/5">
                  <span className="text-text-dark text-sm font-medium">{item.label}</span>
                </div>

                {/* Three columns */}
                <div className="grid grid-cols-3 divide-x divide-black/5">
                  {/* We Grow Brands */}
                  <div className="p-3 bg-lila-light/30">
                    <p className="text-green-dark text-[10px] font-medium mb-1">We Grow Brands</p>
                    <div className="flex items-start gap-1">
                      <span className="text-green-dark text-xs flex-shrink-0">✓</span>
                      <span className="text-green-dark text-[11px] leading-tight">{item.wgb}</span>
                    </div>
                  </div>

                  {/* Web developers */}
                  <div className="p-3">
                    <p className="text-text-muted text-[10px] font-medium mb-1">Webdesigners</p>
                    <div className="flex items-start gap-1">
                      <span className={`text-xs flex-shrink-0 ${item.agenciesIcon === '✓' ? 'text-green-dark' : 'text-text-muted'}`}>
                        {item.agenciesIcon}
                      </span>
                      <span className="text-text-muted text-[11px] leading-tight">{item.agencies}</span>
                    </div>
                  </div>

                  {/* Website lease */}
                  <div className="p-3">
                    <p className="text-text-muted text-[10px] font-medium mb-1">Lease</p>
                    <div className="flex items-start gap-1">
                      <span className={`text-xs flex-shrink-0 ${item.leaseIcon === '✓' ? 'text-green-dark' : 'text-text-muted'}`}>
                        {item.leaseIcon}
                      </span>
                      <span className="text-text-muted text-[11px] leading-tight">{item.lease}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Unified Comparison Table */}
          <div className="hidden lg:block bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b border-black/10">
              <div className="px-4 py-3 bg-white"></div>
              <div className="px-4 py-3 bg-lila-light border-x-2 border-t-2 border-lila rounded-t-xl">
                <p className="text-green-dark font-serif text-lg text-left">We Grow Brands</p>
              </div>
              <div className="px-4 py-3 bg-white">
                <p className="text-text-muted font-serif text-lg text-left">Webdesigners</p>
              </div>
              <div className="px-4 py-3 bg-white">
                <p className="text-text-muted font-serif text-lg text-left">Website lease</p>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 ${index !== comparisonData.length - 1 ? 'border-b border-black/5' : ''}`}
              >
                {/* Label Column */}
                <div className="px-4 py-2.5 bg-white flex items-center">
                  <span className="text-text-dark text-xs font-medium">{item.label}</span>
                </div>

                {/* We Grow Brands Column - Highlighted */}
                <div className={`px-4 py-2.5 bg-lila-light border-x-2 border-lila flex items-start gap-2 ${index === comparisonData.length - 1 ? 'border-b-2 rounded-b-xl' : ''}`}>
                  <span className="text-green-dark mt-0.5 flex-shrink-0 text-xs">✓</span>
                  <span className="text-green-dark text-xs">{item.wgb}</span>
                </div>

                {/* Web developers Column */}
                <div className="px-4 py-2.5 bg-white flex items-start gap-2">
                  <span className={`mt-0.5 flex-shrink-0 text-xs ${item.agenciesIcon === '✓' ? 'text-green-dark' : 'text-text-muted'}`}>
                    {item.agenciesIcon}
                  </span>
                  <span className="text-text-muted text-xs">{item.agencies}</span>
                </div>

                {/* Website lease Column */}
                <div className="px-4 py-2.5 bg-white flex items-start gap-2">
                  <span className={`mt-0.5 flex-shrink-0 text-xs ${item.leaseIcon === '✓' ? 'text-green-dark' : 'text-text-muted'}`}>{item.leaseIcon}</span>
                  <span className="text-text-muted text-xs">{item.lease}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-3 md:gap-4 justify-center">
          <Link
            href="/contact"
            className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark flex items-center justify-center gap-2 hover:bg-[#D6BCFF] hover:text-green-dark transition-all"
          >
            <WavyText text="Vraag website aan" />
          </Link>
          <Link
            href="/contact"
            className="btn-spring btn-uniform btn-no-lila link-wave bg-cream text-green-dark flex items-center justify-center gap-2 hover:bg-white hover:shadow-xl transition-all"
          >
            <WavyText text="Plan een gesprek" />
          </Link>
        </div>
      </div>
    </section>
  )
}
