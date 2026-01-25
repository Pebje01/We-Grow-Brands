'use client'

import Image from 'next/image'

const testimonials = [
  {
    quote: '"Warme, aardse tinten en een luxe uitstraling. Perfect passend bij ons merk."',
    author: 'Bleijenberg',
    company: 'Tuinpotten & interieur',
    logo: '/afbeeldingen/Bleijenberg-logo.png',
    bgColor: 'bg-lila',
    textColor: 'text-text-dark',
    mutedColor: 'text-text-muted',
  },
  {
    quote: '"Een sportieve website die past bij kickboxen en personal training."',
    author: 'Murthel Groenhart',
    company: 'Groenhart Gym',
    logo: '/afbeeldingen/Groenhart-Gym-logo_wit.png',
    bgColor: 'bg-green-dark',
    textColor: 'text-white',
    mutedColor: 'text-white/70',
  },
  {
    quote: '"Strak, luxe en perfect passend bij onze huisstijl."',
    author: 'Frida de Koning',
    company: 'Systemischverbinden.nl',
    logo: '/afbeeldingen/logo-systemischverbinden.png',
    bgColor: 'bg-[#D6BCFF]',
    textColor: 'text-text-dark',
    mutedColor: 'text-text-muted',
  },
  {
    quote: '"Een website met een avontuurlijke uitstraling voor een reisblog."',
    author: 'Meet the Locals',
    company: 'Reisblog',
    logo: '/afbeeldingen/meetthelocals-logo.webp',
    bgColor: 'bg-cream',
    textColor: 'text-text-dark',
    mutedColor: 'text-text-muted',
  },
  {
    quote: '"Professioneel, snel en betaalbaar. Precies wat we zochten."',
    author: 'The Daley Edit',
    company: 'Branddesigner & fotograaf',
    logo: '/afbeeldingen/thedaleyedit-logo.png',
    bgColor: 'bg-green-dark',
    textColor: 'text-white',
    mutedColor: 'text-white/70',
  },
]

// Triplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#1a1a1a] min-h-screen py-12 md:py-16 lg:py-24 rounded-[20px] md:rounded-[30px] overflow-hidden relative flex flex-col justify-center mb-6 md:mb-0">
      {/* Hand-drawn hearts - 10 hearts spread across entire section, z-0 behind content */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Heart 1 - linksboven */}
        <svg className="absolute w-[160px] lg:w-[240px] h-[160px] lg:h-[240px] top-[2%] left-[1%] rotate-[-12deg] animate-heart-loop-1" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="2" strokeLinecap="round" fill="none" className="heart-path-1" />
        </svg>
        {/* Heart 2 - links boven */}
        <svg className="absolute w-[240px] lg:w-[360px] h-[240px] lg:h-[360px] top-[5%] left-[15%] rotate-[8deg] animate-heart-loop-2" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" fill="none" className="heart-path-2" />
        </svg>
        {/* Heart 3 - midden boven */}
        <svg className="absolute w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] top-[0%] left-[42%] rotate-[-5deg] animate-heart-loop-3" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="2" strokeLinecap="round" fill="none" className="heart-path-3" />
        </svg>
        {/* Heart 4 - rechts boven */}
        <svg className="absolute w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] top-[3%] right-[2%] rotate-[15deg] animate-heart-loop-4" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="1.8" strokeLinecap="round" fill="none" className="heart-path-4" />
        </svg>
        {/* Heart 5 - GROOT centrum */}
        <svg className="absolute w-[320px] lg:w-[550px] h-[320px] lg:h-[550px] top-[10%] left-1/2 -translate-x-1/2 rotate-[3deg] animate-heart-loop-5" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="1.2" strokeLinecap="round" fill="none" className="heart-path-5" />
        </svg>
        {/* Heart 6 - links midden */}
        <svg className="absolute w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] top-[40%] left-[1%] rotate-[-18deg] animate-heart-loop-6" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="1.8" strokeLinecap="round" fill="none" className="heart-path-6" />
        </svg>
        {/* Heart 7 - rechts midden */}
        <svg className="absolute w-[240px] lg:w-[340px] h-[240px] lg:h-[340px] top-[35%] right-[2%] rotate-[22deg] animate-heart-loop-7" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" fill="none" className="heart-path-7" />
        </svg>
        {/* Heart 8 - linksonder */}
        <svg className="absolute w-[170px] lg:w-[260px] h-[170px] lg:h-[260px] bottom-[5%] left-[5%] rotate-[10deg] animate-heart-loop-8" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="2" strokeLinecap="round" fill="none" className="heart-path-8" />
        </svg>
        {/* Heart 9 - midden onder */}
        <svg className="absolute w-[190px] lg:w-[280px] h-[190px] lg:h-[280px] bottom-[3%] left-[35%] rotate-[-8deg] animate-heart-loop-9" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="1.8" strokeLinecap="round" fill="none" className="heart-path-9" />
        </svg>
        {/* Heart 10 - rechtsonder */}
        <svg className="absolute w-[150px] lg:w-[220px] h-[150px] lg:h-[220px] bottom-[8%] right-[8%] rotate-[25deg] animate-heart-loop-10" viewBox="0 0 100 100" fill="none">
          <path d="M50 88 C20 60, 5 40, 15 25 C25 10, 45 15, 50 30 C55 15, 75 10, 85 25 C95 40, 80 60, 50 88" stroke="#E53935" strokeWidth="2" strokeLinecap="round" fill="none" className="heart-path-10" />
        </svg>
      </div>

      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto text-center px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12 relative z-10">
        <h2 className="text-white font-serif">
          Dit zeggen onze klanten over ons
        </h2>
      </div>

      {/* Sliding testimonials */}
      <div className="relative overflow-hidden z-10">
        {/* Scrolling track */}
        <div className="flex items-end animate-testimonial-scroll-fast">
          {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] md:w-[260px] lg:w-[280px] mx-2 md:mx-3"
              >
                <div className={`${testimonial.bgColor} rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 text-center flex flex-col items-center`}>
                  {/* Logo bovenaan */}
                  <div className="h-[80px] mb-2 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      width={160}
                      height={80}
                      className="h-[80px] w-auto object-contain"
                    />
                  </div>
                  <p className={`${testimonial.mutedColor} text-[10px] italic mb-3`}>Deze klanttestimonial wordt nog opgevraagd</p>

                  {/* Quote in het midden */}
                  <p className={`${testimonial.textColor} text-sm leading-relaxed mb-3`}>{testimonial.quote}</p>

                  {/* Naam en bedrijf onderaan */}
                  <div className="flex-shrink-0">
                    <p className={`${testimonial.textColor} text-sm font-medium`}>{testimonial.author}</p>
                    <p className={`${testimonial.mutedColor} text-xs`}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>

    </section>
  )
}
