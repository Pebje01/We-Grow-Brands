import Link from 'next/link'
import WavyText from '@/components/WavyText'

export default function CTA() {
  return (
 <section id="contact" className="bg-cream py-24 px-8 text-center">  <div className="max-w-2xl mx-auto">  <h2 className="text-text-dark mb-6">  <span className="font-serif ">Begin uw</span>{' '}  <span className="serif-header">digitale transformatie</span>         </h2>
 <p className="text-text-muted text-lg leading-relaxed mb-10">           Plan een persoonlijk strategiegesprek en ontdek hoe wij uw merk naar een hoger niveau tillen.
        </p>

 <div className="flex gap-4 justify-center mb-8">           <Link
            href="mailto:hello@wegrowbrands.nl"
 className="btn-spring btn-uniform link-wave bg-green-dark text-white hover:bg-lila hover:text-green-dark transition-all"           >
            <WavyText text="🚀 Plan Gratis Gesprek" />
          </Link>
          <Link
            href="#diensten"
 className="btn-spring btn-uniform link-wave bg-white text-text-dark hover:bg-lila hover:text-green-dark transition-all"           >
            <WavyText text="📋 Bekijk Pakketten" />
          </Link>
        </div>

 <div className="bg-green-dark rounded-2xl px-8 py-6 inline-flex items-center gap-4">  <span className="text-white/80 text-sm">💬 Nog niet zeker? Stel een snelle vraag via WhatsApp</span>           <Link
            href="#"
 className="btn-spring btn-uniform link-wave bg-lila text-green-dark hover:shadow-lg transition-all"           >
            <WavyText text="Open Chat" />
          </Link>
        </div>
      </div>
    </section>
  )
}
