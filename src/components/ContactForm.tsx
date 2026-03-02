'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import WavyText from '@/components/WavyText'
import SuccessPopup from '@/components/SuccessPopup'

export default function ContactForm() {
  const t = useTranslations('contactForm')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()
      } else {
        setShowError(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="bg-[#1a1a1a] rounded-3xl p-6 md:p-8 border border-white/10">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value={t('subject')} />
          <input type="hidden" name="from_name" value="We Grow Brands Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="md:col-span-1">
            <label htmlFor="contact-name" className="sr-only">{t('namePlaceholder')}</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              className="mt-2 w-full border-b border-white/25 bg-transparent pb-2 font-serif italic text-cream placeholder:text-white/50 placeholder:font-serif placeholder:italic focus:border-lila focus:outline-none"
              placeholder={t('namePlaceholder')}
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="contact-email" className="sr-only">{t('emailPlaceholder')}</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              className="mt-2 w-full border-b border-white/25 bg-transparent pb-2 font-serif italic text-cream placeholder:text-white/50 placeholder:font-serif placeholder:italic focus:border-lila focus:outline-none"
              placeholder={t('emailPlaceholder')}
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="contact-phone" className="sr-only">{t('phonePlaceholder')}</label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              className="mt-2 w-full border-b border-white/25 bg-transparent pb-2 font-serif italic text-cream placeholder:text-white/50 placeholder:font-serif placeholder:italic focus:border-lila focus:outline-none"
              placeholder={t('phonePlaceholder')}
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="contact-company" className="sr-only">{t('companyPlaceholder')}</label>
            <input
              id="contact-company"
              type="text"
              name="company"
              className="mt-2 w-full border-b border-white/25 bg-transparent pb-2 font-serif italic text-cream placeholder:text-white/50 placeholder:font-serif placeholder:italic focus:border-lila focus:outline-none"
              placeholder={t('companyPlaceholder')}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="contact-message" className="sr-only">{t('messagePlaceholder')}</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="mt-2 w-full border-b border-white/25 bg-transparent pb-2 font-serif italic text-cream placeholder:text-white/50 placeholder:font-serif placeholder:italic focus:border-lila focus:outline-none"
              placeholder={t('messagePlaceholder')}
            />
          </div>
          <div className="md:col-span-2 flex items-center justify-between pt-2">
            <p className="text-xs text-white/60">{t('requiredFields')}</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all disabled:opacity-70"
            >
              <WavyText text={isSubmitting ? t('submitting') : t('submit')} />
            </button>
          </div>
        </form>
      </div>

      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      <SuccessPopup
        isOpen={showError}
        onClose={() => setShowError(false)}
        variant="error"
        title="Er ging iets mis"
        message="Het versturen is niet gelukt. Probeer het opnieuw of stuur ons een berichtje via WhatsApp."
      />
    </>
  )
}
