import Link from 'next/link'
import ActieForm from '@/components/ActieForm'

export const metadata = {
  title: 'Droomwebsite Actie - Stuur je Inspiratie | We Grow Brands',
  description: 'Zie je een website waar je van opspringt? Stuur ons de URL en wij vertalen die stijl naar jouw merk. Tijdelijke actie t/m 28 februari 2025.',
}

export default function ActiePage() {
  return (
    <main className="min-h-screen bg-green-dark">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
        {/* Decoratieve elementen */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-lila/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-lila/10 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <span className="inline-block bg-lila text-green-dark px-4 py-2 rounded-full text-sm font-medium">
              Tijdelijke actie
            </span>
            <span className="inline-block bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm">
              t/m 28 feb 2025
            </span>
          </div>

          <h1 className="text-white leading-tight mb-6">
            <span className="font-serif">&ldquo;Zo&apos;n website</span>{' '}
            <span className="serif-header text-lila">wil ik ook!&rdquo;</span>
          </h1>

          <p className="text-white/80 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Website gezien waarvan je meteen opsprong omdat het perfect bij jouw bedrijf past?
          </p>

          <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Stuur een URL of screenshot van waar jij denkt: <strong className="text-lila">&ldquo;DIT IS HET HELEMAAL!&rdquo;</strong>
          </p>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Uitleg sectie */}
      <section className="bg-cream py-24 px-6 rounded-t-[40px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-text-dark mb-6">
              <span className="font-serif">Hoe werkt</span>{' '}
              <span className="serif-header text-green-dark">het?</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Natuurlijk gaan we niet copy + paste doen. We gaan de stijl en feeling toepassen op jouw merk.
              Alles is al een keer uitgevonden, maar nog niet voor jouw bedrijf!
            </p>
          </div>

          {/* Stappen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 text-center border border-black/5">
              <div className="w-12 h-12 bg-lila rounded-full flex items-center justify-center text-green-dark text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-green-dark mb-2">Vind je droomwebsite</h4>
              <p className="text-text-muted text-sm">
                Scroll door het internet en vind een website waar je denkt: &ldquo;Dit is het!&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-black/5">
              <div className="w-12 h-12 bg-lila rounded-full flex items-center justify-center text-green-dark text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-green-dark mb-2">Stuur de URL of screenshot</h4>
              <p className="text-text-muted text-sm">
                Deel de link of maak een screenshot en stuur het naar ons via het formulier.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-black/5">
              <div className="w-12 h-12 bg-lila rounded-full flex items-center justify-center text-green-dark text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-green-dark mb-2">Wij maken het voor jou</h4>
              <p className="text-text-muted text-sm">
                We vertalen die stijl naar jouw merk. Uniek, passend en helemaal jij.
              </p>
            </div>
          </div>

          {/* Formulier */}
          <ActieForm />

          {/* Extra info */}
          <div className="mt-16 text-center">
            <p className="text-text-muted mb-4">
              Liever even bellen of appen?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/31636162639"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[#25D366] hover:text-[#1FAF57] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
                </svg>
                WhatsApp
              </Link>
              <span className="text-text-muted hidden sm:inline">of</span>
              <Link
                href="tel:+31636162639"
                className="inline-flex items-center justify-center gap-2 text-green-dark hover:text-green-dark/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel ons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
