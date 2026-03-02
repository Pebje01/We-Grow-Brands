import ScrollReveal from '@/components/ScrollReveal'
import { getTranslations } from 'next-intl/server'

export default async function Recognition() {
  const t = await getTranslations('recognition')

  const painPoints = [
    { icon: '😕', title: t('painPoints.1.title'), quote: t('painPoints.1.quote') },
    { icon: '🤯', title: t('painPoints.2.title'), quote: t('painPoints.2.quote') },
    { icon: '🎨', title: t('painPoints.3.title'), quote: t('painPoints.3.quote') },
    { icon: '📦', title: t('painPoints.4.title'), quote: t('painPoints.4.quote') },
    { icon: '🐢', title: t('painPoints.5.title'), quote: t('painPoints.5.quote') },
    { icon: '💸', title: t('painPoints.6.title'), quote: t('painPoints.6.quote') },
  ]

  return (
    <section className="bg-cream min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-text-dark leading-tight mb-6">
            <span className="font-serif">{t('title1')}</span>{' '}
            <span className="serif-header italic text-green-dark">{t('titleHighlight')}</span>
          </h2>
        </div>

        {/* Pain Point Cards - Mobile/Tablet: stacked layout, Desktop: flip on hover */}
        <ScrollReveal
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-5"
          animation="fade-up"
          stagger={0.1}
        >
          {painPoints.map((point, index) => (
            <div key={index} className="h-full">
              {/* Mobile/Tablet: Compact card */}
              <div className="lg:hidden bg-white border border-black/5 rounded-xl p-3 sm:p-4 h-full min-h-[180px] sm:min-h-[200px]">
                <span className="text-2xl mb-2 block">{point.icon}</span>
                <h4 className="text-green-dark font-medium leading-snug mb-2">{point.title}</h4>
                <p className="text-text-muted leading-relaxed">{point.quote}</p>
              </div>

              {/* Desktop: Flip card with hover effect */}
              <div className="hidden lg:block flip-card h-[220px]">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-white border border-black/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl mb-4">{point.icon}</span>
                    <h4 className="text-green-dark leading-snug">{point.title}</h4>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-green-dark rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-cream/90 leading-relaxed">
                      {point.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
