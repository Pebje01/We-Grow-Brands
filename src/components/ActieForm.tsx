'use client'

import { useState } from 'react'
import WavyText from '@/components/WavyText'
import SuccessPopup from '@/components/SuccessPopup'

export default function ActieForm() {
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
      <div className="bg-green-dark rounded-3xl p-8 md:p-12">
        <h3 className="text-white text-center mb-8">
          <span className="font-serif">Verstuur je</span>{' '}
          <span className="font-serif text-lila">droomwebsite</span>
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-xl mx-auto"
        >
          <input type="hidden" name="access_key" value="8be3f602-ca63-4ef2-a697-2acb45d4a0e4" />
          <input type="hidden" name="subject" value="Droomwebsite aanvraag via Actie pagina" />
          <input type="hidden" name="from_name" value="We Grow Brands Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-white/60 text-sm mb-2">
                Je naam *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors"
                placeholder="Jan Jansen"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/60 text-sm mb-2">
                E-mailadres *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors"
                placeholder="jan@bedrijf.nl"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-white/60 text-sm mb-2">
              Bedrijfsnaam
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors"
              placeholder="Jouw Bedrijf B.V."
            />
          </div>

          <div>
            <label htmlFor="url" className="block text-white/60 text-sm mb-2">
              URL van je droomwebsite *
            </label>
            <input
              type="url"
              id="url"
              name="droomwebsite_url"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors"
              placeholder="https://..."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white/60 text-sm mb-2">
              Wat spreekt je aan? (optioneel)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors resize-none"
              placeholder="De kleuren, de animaties, de layout..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-spring btn-uniform link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] transition-all py-4 text-base disabled:opacity-70"
          >
            <WavyText text={isSubmitting ? 'Versturen...' : 'Verstuur mijn droomwebsite'} />
          </button>

          <p className="text-white/40 text-xs text-center">
            We nemen binnen 24 uur contact met je op.
          </p>
        </form>
      </div>

      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Droomwebsite ontvangen!"
        message="We bekijken je inspiratie en nemen binnen 24 uur contact met je op."
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
