import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import Breadcrumbs from '@/components/Breadcrumbs'
import CookieSettingsButton from '@/components/CookieSettingsButton'
import WavyText from '@/components/WavyText'

type Section = { title: string; items: string[] }
type CookieRow = { name: string; purpose: string; duration: string; when: string }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacyPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: '/privacy/',
    },
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacyPage' })
  const sections = t.raw('sections') as Section[]
  const cookieIntro = t.raw('cookies.intro') as string[]
  const cookieRows = t.raw('cookies.rows') as CookieRow[]

  return (
    <section className="bg-cream pt-44 pb-24">
      <Breadcrumbs className="mb-4" />
      <div className="px-6 md:px-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-text-dark mb-4">{t('title')}</h1>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">{t('intro')}</p>
            <p className="text-text-muted text-sm mt-3">{t('updated')}</p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl p-6 border border-black/5">
                <h2 className="text-text-dark mb-3">{section.title}</h2>
                <ul className="space-y-2 text-text-muted leading-relaxed">
                  {section.items.map((item, index) => (
                    <li key={`${section.title}-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div id="cookies" className="bg-white rounded-2xl p-6 border border-black/5">
              <h2 className="text-text-dark mb-3">{t('cookies.title')}</h2>
              <div className="space-y-2 text-text-muted leading-relaxed mb-6">
                {cookieIntro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 text-text-dark">
                      <th className="py-2 pr-4 font-normal">{t('cookies.columns.name')}</th>
                      <th className="py-2 pr-4 font-normal">{t('cookies.columns.purpose')}</th>
                      <th className="py-2 pr-4 font-normal">{t('cookies.columns.duration')}</th>
                      <th className="py-2 font-normal">{t('cookies.columns.when')}</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-muted">
                    {cookieRows.map((row) => (
                      <tr key={row.name} className="border-b border-black/5 align-top">
                        <td className="py-3 pr-4 font-mono text-xs text-text-dark">{row.name}</td>
                        <td className="py-3 pr-4">{row.purpose}</td>
                        <td className="py-3 pr-4 whitespace-nowrap">{row.duration}</td>
                        <td className="py-3 whitespace-nowrap">{row.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                <CookieSettingsButton
                  label={<WavyText text={t('cookies.settings')} />}
                  className="mt-6 btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all"
                />
              )}
            </div>
          </div>

          <div className="bg-green-dark rounded-[30px] p-8 md:p-10 text-white text-center">
            <h2 className="mb-3">{t('contactTitle')}</h2>
            <p className="text-white/70 mb-6">{t('contactText')}</p>
            <Link
              href="/contact"
              className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all"
            >
              <WavyText text={t('contactButton')} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
