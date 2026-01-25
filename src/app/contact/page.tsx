import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import HeroContactForm from '@/components/HeroContactForm'

export const metadata = {
  title: 'Contact - Neem Contact Op | We Grow Brands',
  description: 'Neem contact op voor een vrijblijvend gesprek over jouw nieuwe website. We reageren binnen 24 uur met een passend voorstel. Bel, mail of plan direct een afspraak.',
}

export default function ContactPage() {
  return (
    <section className="bg-[#1a1a1a] pt-44 pb-24 min-h-screen">
      <Breadcrumbs variant="dark" className="mb-8" />
      <div className="px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white">Contact</h1>
          <p className="text-white/70 mt-4">
            Vertel ons wat we kunnen doen om jou te helpen met je website.
          </p>
        </div>

        {/* Formulier in beige sectie */}
        <div className="bg-[#FDFDFD] rounded-[40px] px-6 md:px-12 py-10 md:py-16 max-w-5xl 2xl:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Linker kolom: tekst en afbeelding */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6">
                <span className="text-green-dark">Laten we jouw</span><br />
                <span className="serif-header italic text-text-dark">website plannen</span>
              </h2>
              <div className="inline-block">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width={1280}
                  height={1056}
                  className="max-w-full h-auto block"
                >
                  <source src="/afbeeldingen/contactanimatie-cropped.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Rechter kolom: formulier */}
            <HeroContactForm />
          </div>

          {/* Onderaan: contactinfo in 3 gelijke kolommen */}
          <div className="mt-10 pt-6">
            <div className="flex justify-center gap-10 sm:gap-16 text-center text-xs">
              <div>
                <p className="text-text-light mb-0.5">Email</p>
                <Link href="mailto:hello@wegrowbrands.online" className="text-text-dark hover:text-green-dark transition-colors">
                  hello@wegrowbrands.online
                </Link>
              </div>
              <div>
                <p className="text-text-light mb-0.5">Telefoon</p>
                <Link href="tel:+31636162639" className="text-text-dark hover:text-green-dark transition-colors">
                  06 36 16 26 39
                </Link>
              </div>
              <div>
                <p className="text-text-light mb-0.5">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/in/daley-jansen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dark hover:text-green-dark transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
