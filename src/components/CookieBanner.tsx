'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import WavyText from './WavyText'
import { CONSENT_EVENT, readConsent, saveConsent, type ConsentChoice } from '@/lib/consent'

export default function CookieBanner() {
  const t = useTranslations('cookieBanner')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!readConsent()) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(CONSENT_EVENT, reopen)
    return () => window.removeEventListener(CONSENT_EVENT, reopen)
  }, [])

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice)
    setOpen(false)
  }

  if (!open) return null

  // Akkoord en Weigeren krijgen bewust exact dezelfde stijl
  const buttonClass =
    'btn-spring btn-uniform btn-no-lila link-wave flex-1 inline-flex justify-center bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all'

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
      className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-[60] bg-green-dark text-white rounded-[30px] p-6 shadow-2xl border border-lila/40"
    >
      <h2 id="cookie-banner-title" className="text-white text-xl mb-2 font-serif italic">
        {t('title')}
      </h2>
      <p id="cookie-banner-text" className="text-white/75 text-sm leading-relaxed mb-5">
        {t('text')}{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-lila transition-colors">
          {t('moreInfo')}
        </Link>
      </p>
      <div className="flex gap-3">
        <button type="button" onClick={() => choose('denied')} className={buttonClass}>
          <WavyText text={t('decline')} />
        </button>
        <button type="button" onClick={() => choose('granted')} className={buttonClass}>
          <WavyText text={t('accept')} />
        </button>
      </div>
    </div>
  )
}
