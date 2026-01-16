import Link from 'next/link'

export default function CTA() {
  return (
 <section id="contact" className="bg-cream py-24 px-8 text-center">  <div className="max-w-2xl mx-auto">  <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-dark mb-6">  <span className="font-serif ">Begin uw</span>{' '}  <span className="serif-header">digitale transformatie</span>         </h2>
 <p className="text-text-muted text-lg leading-relaxed mb-10">           Plan een persoonlijk strategiegesprek en ontdek hoe wij uw merk naar een hoger niveau tillen.
        </p>

 <div className="flex gap-4 justify-center mb-8">           <Link
            href="mailto:hello@wegrowbrands.nl"
 className="btn-spring bg-green-dark text-white px-7 py-3 rounded-full hover:bg-lila hover:text-green-dark transition-all"           >
            <span className="btn-text inline-block">🚀 Plan Gratis Gesprek</span>
          </Link>
          <Link
            href="#diensten"
 className="btn-spring bg-white text-text-dark px-7 py-3 rounded-full border border-gray-200 hover:bg-lila hover:text-green-dark transition-all"           >
            <span className="btn-text inline-block">📋 Bekijk Pakketten</span>
          </Link>
        </div>

 <div className="bg-green-dark rounded-2xl px-8 py-6 inline-flex items-center gap-4">  <span className="text-white/80 text-sm">💬 Nog niet zeker? Stel een snelle vraag via WhatsApp</span>           <Link
            href="#"
 className="btn-spring bg-lila text-green-dark px-5 py-2 rounded-full text-sm hover:shadow-lg transition-all"           >
            <span className="btn-text inline-block">Open Chat</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
