'use client'

import { useState } from 'react'
import WavyText from '@/components/WavyText'
import SuccessPopup from '@/components/SuccessPopup'

export default function HeroContactForm() {
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
      <div className="bg-[#F5F5F5] rounded-3xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="access_key" value="8be3f602-ca63-4ef2-a697-2acb45d4a0e4" />
          <input type="hidden" name="subject" value="Nieuwe aanvraag via Contact pagina" />
          <input type="hidden" name="from_name" value="We Grow Brands Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          {/* Volledige naam */}
          <div>
            <label htmlFor="hero-name" className="sr-only">Naam*</label>
            <input
              id="hero-name"
              type="text"
              name="name"
              required
              className="w-full border-b-2 border-green-dark/20 bg-transparent py-3 font-serif italic text-green-dark placeholder:text-green-dark/50 placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none transition-colors"
              placeholder="Naam*"
            />
          </div>

          {/* Email & Telefoon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hero-email" className="sr-only">Email*</label>
              <input
                id="hero-email"
                type="email"
                name="email"
                required
                className="w-full border-b-2 border-green-dark/20 bg-transparent py-3 font-serif italic text-green-dark placeholder:text-green-dark/50 placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none transition-colors"
                placeholder="Email*"
              />
            </div>
            <div>
              <label htmlFor="hero-phone" className="sr-only">Telefoonnummer</label>
              <input
                id="hero-phone"
                type="tel"
                name="phone"
                className="w-full border-b-2 border-green-dark/20 bg-transparent py-3 font-serif italic text-green-dark placeholder:text-green-dark/50 placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none transition-colors"
                placeholder="Telefoonnummer"
              />
            </div>
          </div>

          {/* Bedrijfsnaam */}
          <div>
            <label htmlFor="hero-company" className="sr-only">Bedrijfsnaam</label>
            <input
              id="hero-company"
              type="text"
              name="company"
              className="w-full border-b-2 border-green-dark/20 bg-transparent py-3 font-serif italic text-green-dark placeholder:text-green-dark/50 placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none transition-colors"
              placeholder="Bedrijfsnaam"
            />
          </div>

          {/* Project details */}
          <div>
            <label htmlFor="hero-details" className="sr-only">Projectomschrijving*</label>
            <textarea
              id="hero-details"
              name="message"
              rows={3}
              required
              className="w-full border-b-2 border-green-dark/20 bg-transparent py-3 font-serif italic text-green-dark placeholder:text-green-dark/50 placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none transition-colors resize-none"
              placeholder="Projectomschrijving*"
            />
          </div>

          {/* Submit button + WhatsApp */}
          <div className="pt-2 flex items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-2xl border-2 border-green-dark bg-transparent text-green-dark font-medium hover:bg-green-dark hover:text-white transition-all disabled:opacity-70"
            >
              {isSubmitting ? 'Versturen...' : 'Contact'}
            </button>
            <a
              href="https://wa.me/31636162639"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-2xl border-2 border-[#25D366] bg-transparent text-[#25D366] flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z"/>
              </svg>
            </a>
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
