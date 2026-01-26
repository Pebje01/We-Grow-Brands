import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const logos = [
  { name: 'Bleijenberg', src: '/afbeeldingen/Bleijenberg-logo.webp' },
  { name: 'Groenhart Gym', src: '/afbeeldingen/Groenhart-Gym-logo_wit.webp' },
  { name: 'Systemisch Verbinden', src: '/afbeeldingen/logo-systemischverbinden.webp' },
  { name: 'Meet the Locals', src: '/afbeeldingen/meetthelocals-logo.webp' },
  { name: 'The Daley Edit', src: '/afbeeldingen/thedaleyedit-logo.webp' },
  { name: 'Van Rijn Works', src: '/afbeeldingen/vanrijnworks-logo.webp' },
]

export default function Trusted() {
  const logoItems = [...logos, ...logos]

  return (
    <section className="bg-[#1a1a1a] min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-[70px]">
      <ScrollReveal className="max-w-5xl mx-auto text-center w-full" animation="fade-up">
        <h3 className="text-white/90 text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-8 lg:mb-12">
          Voor deze bedrijven hebben we al mooie websites gemaakt
        </h3>
        <div className="logo-marquee">
          <div className="logo-track" aria-hidden="true">
            {logoItems.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="logo-item flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={60}
                  className="h-[50px] w-auto object-contain brightness-0 invert opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
