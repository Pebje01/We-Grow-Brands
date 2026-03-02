import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import WavyText from '@/components/WavyText'
import ScrollReveal from '@/components/ScrollReveal'

export default async function Stats() {
  const t = await getTranslations('stats')

  const comparisonData = [
    { key: 'brandIntegration', agenciesIcon: '～', leaseIcon: '✕' },
    { key: 'design', agenciesIcon: '✓', leaseIcon: '✕' },
    { key: 'custom', agenciesIcon: '～', leaseIcon: '✕' },
    { key: 'ownership', agenciesIcon: '✓', leaseIcon: '✕' },
    { key: 'pricing', agenciesIcon: '✕', leaseIcon: '✕' },
    { key: 'payment', agenciesIcon: '～', leaseIcon: '✕' },
    { key: 'support', agenciesIcon: '～', leaseIcon: '✓' },
    { key: 'changes', agenciesIcon: '～', leaseIcon: '✓' },
    { key: 'management', agenciesIcon: '～', leaseIcon: '✕' },
  ].map(({ key, agenciesIcon, leaseIcon }) => ({
    label: t(`comparison.${key}.label`),
    wgb: t(`comparison.${key}.wgb`),
    agencies: t(`comparison.${key}.agencies`),
    lease: t(`comparison.${key}.lease`),
    wgbIcon: '✓',
    agenciesIcon,
    leaseIcon,
  }))

  return (
    <section className="bg-cream min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
        <ScrollReveal
          className="max-w-5xl mx-auto mb-8 md:mb-12"
          animation="fade-up"
        >
          <h2 className="text-text-dark mb-10 md:mb-12 lg:mb-14 text-center">
            <span className="font-serif">{t('title1')}</span>{' '}
            <span className="serif-header italic text-green-dark">{t('titleHighlight')}</span>
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
                    <p className="text-green-dark text-[10px] font-medium mb-1">{t('columns.wgb')}</p>
                    <div className="flex items-start gap-1">
                      <span className="text-green-dark text-xs flex-shrink-0">✓</span>
                      <span className="text-green-dark text-[11px] leading-tight">{item.wgb}</span>
                    </div>
                  </div>

                  {/* Web developers */}
                  <div className="p-3">
                    <p className="text-text-muted text-[10px] font-medium mb-1">{t('columns.agencies')}</p>
                    <div className="flex items-start gap-1">
                      <span className={`text-xs flex-shrink-0 ${item.agenciesIcon === '✓' ? 'text-green-dark' : 'text-text-muted'}`}>
                        {item.agenciesIcon}
                      </span>
                      <span className="text-text-muted text-[11px] leading-tight">{item.agencies}</span>
                    </div>
                  </div>

                  {/* Website lease */}
                  <div className="p-3">
                    <p className="text-text-muted text-[10px] font-medium mb-1">{t('columns.lease')}</p>
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
                <p className="text-green-dark font-serif text-lg text-left">{t('columns.wgb')}</p>
              </div>
              <div className="px-4 py-3 bg-white">
                <p className="text-text-muted font-serif text-lg text-left">{t('columns.agencies')}</p>
              </div>
              <div className="px-4 py-3 bg-white">
                <p className="text-text-muted font-serif text-lg text-left">{t('columns.lease')}</p>
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
            <WavyText text={t('ctaRequest')} />
          </Link>
          <Link
            href="/contact"
            className="btn-spring btn-uniform btn-no-lila link-wave bg-cream text-green-dark flex items-center justify-center gap-2 hover:bg-white hover:shadow-xl transition-all"
          >
            <WavyText text={t('ctaPlan')} />
          </Link>
        </div>
      </div>
    </section>
  )
}
