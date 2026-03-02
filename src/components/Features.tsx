'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import WavyText from '@/components/WavyText'
import ScrollReveal from '@/components/ScrollReveal'

export default function Features() {
  const t = useTranslations('features')
  return (
    <section id="features" className="bg-cream min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
        {/* Feature 1 - Website die je bedrijf uitstraalt */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 md:gap-12 lg:gap-16 items-center" animation="fade-up">
          <div>
            <h2 className="text-text-dark mb-5" style={{ lineHeight: 0.95 }}>
              <span className="font-serif">{t('title1')}</span>
              <br />
              <span className="serif-header italic text-green-dark">{t('titleHighlight')}</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('description1') }} />
            <p className="text-text-muted leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('description2') }} />
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-text-muted">
                <span className="text-green-dark mt-1">✓</span>
                <span>{t('check1')}</span>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <span className="text-green-dark mt-1">✓</span>
                <span>{t('check2')}</span>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <span className="text-green-dark mt-1">✓</span>
                <span>{t('check3')}</span>
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <Link href={"#diensten" as any} className="link-wave text-green-dark text-sm inline-flex items-center gap-2">
                <WavyText text={t('ctaPackages')} />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-green-dark rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 min-h-[400px] md:min-h-[480px] lg:min-h-[520px] flex flex-col justify-center relative overflow-hidden">
            {/* Grote pil rechtsboven - speels effect */}
            <Link
              href={"/pakketten#add-ons" as any}
              className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 bg-cream text-green-dark px-5 py-1 md:px-6 md:py-1.5 rounded-2xl text-sm md:text-base lg:text-lg font-serif border-2 border-green-dark/20 shadow-md hover:bg-lila transition-colors cursor-pointer"
              style={{ transform: 'rotate(3deg)' }}
            >
              {t('addonsTitle')}
            </Link>

            <h3 className="text-white mb-3 mt-12 md:mt-14 lg:mt-16">
              <span className="font-serif text-lila">{t('moreNeeded')}</span>
            </h3>
            <p className="text-white/70 leading-relaxed mb-8 md:mb-10">
              {t('moreNeededDesc')}
            </p>

            {/* Add-ons - lila pills with slight rotation */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-3deg)' }}>{t('addons.extraPages')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(2deg)' }}>{t('addons.complexForms')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-1deg)' }}>{t('addons.reviews')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(3deg)' }}>{t('addons.blog')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-2deg)' }}>{t('addons.webshop')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(1deg)' }}>{t('addons.aiContent')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-4deg)' }}>{t('addons.logoDesign')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(2deg)' }}>{t('addons.branding')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-1deg)' }}>{t('addons.brandFoundation')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(3deg)' }}>{t('addons.photography')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-2deg)' }}>{t('addons.seo')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(1deg)' }}>{t('addons.content')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-3deg)' }}>{t('addons.leadGeneration')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(2deg)' }}>{t('addons.aiAutomation')}</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-1deg)' }}>{t('addons.multilingual')}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
