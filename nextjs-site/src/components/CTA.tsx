import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="bg-cream py-24 px-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-dark font-normal italic mb-6">
          Begin uw digitale transformatie
        </h2>
        <p className="text-text-muted text-lg leading-relaxed mb-10">
          Plan een persoonlijk strategiegesprek en ontdek hoe wij uw merk naar een hoger niveau tillen.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <Link
            href="mailto:hello@wegrowbrands.nl"
            className="bg-green-dark text-white px-7 py-3 rounded-full font-semibold hover:bg-green-darker hover:-translate-y-0.5 transition-all"
          >
            🚀 Plan Gratis Gesprek
          </Link>
          <Link
            href="#diensten"
            className="bg-white text-text-dark px-7 py-3 rounded-full font-semibold border border-gray-200 hover:bg-cream-dark transition-all"
          >
            📋 Bekijk Pakketten
          </Link>
        </div>

        <div className="bg-green-dark rounded-2xl px-8 py-6 inline-flex items-center gap-4">
          <span className="text-white/80 text-sm">💬 Nog niet zeker? Stel een snelle vraag via WhatsApp</span>
          <Link
            href="#"
            className="bg-lila text-green-dark px-5 py-2 rounded-full font-semibold text-sm"
          >
            Open Chat
          </Link>
        </div>
      </div>
    </section>
  )
}
