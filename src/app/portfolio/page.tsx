import Image from 'next/image'
import Link from 'next/link'
import WavyText from '@/components/WavyText'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Portfolio - Onze Website Projecten | We Grow Brands',
  description: 'Bekijk onze portfolio met premium websites. Van webshops tot zakelijke sites. Ontdek hoe we merken helpen groeien met op maat gemaakte webdesign oplossingen.',
}

const cases = [
  {
    client: 'Systemisch Verbinden',
    slug: 'systemisch-verbinden',
    label: 'Grow website',
    quote: '"Strak, luxe en perfect passend bij onze huisstijl."',
    image: '/mock-ups/systemisch-verbinden-mockup-laptop.webp',
    tone: 'bg-[#7FD1B9]',
  },
  {
    client: 'Meet the Locals',
    slug: 'meet-the-locals',
    label: 'Premium blog',
    quote: '"Een website met een avontuurlijke uitstraling voor een reisblog."',
    image: '/mock-ups/Meetthelocals-mockup-top.webp',
    tone: 'bg-[#B794F6]',
  },
  {
    client: 'Van Rijn Works',
    slug: 'van-rijn-works',
    label: 'Essentials website',
    quote: '"Strak, professioneel en klaar voor de toekomst."',
    image: '/mock-ups/vanrijnworksmockup-top.jpg',
    tone: 'bg-[#FFB75E]',
  },
]

export default function PortfolioPage() {
  return (
    <section className="bg-cream pt-44 pb-24">
      <Breadcrumbs className="mb-8" />
      <div className="px-6 md:px-10">
        <div className="text-center mb-12">
          <h1 className="text-text-dark">Cases</h1>
          <p className="text-text-muted mt-4">
            Een aantal websites waar we trots op zijn.
          </p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-[40px] px-6 md:px-12 py-10 md:py-16 w-full mt-20">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
          <div className="text-center mb-4"></div>

          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mb-10" animation="fade-up">
            <div className="relative rounded-[32px] overflow-hidden border-2 border-cream-dark bg-[#D9D0C3] min-h-[280px] md:min-h-[400px]">
              <Image
                src="/Bleijenberg/bleijenberg-screenshot-1.png"
                alt="Case Bleijenberg"
                fill
                className="object-cover scale-125"
                priority
              />
            </div>

            <div className="relative rounded-[32px] border-2 border-cream-dark bg-lila text-green-dark px-8 pb-8 pt-16 flex flex-col justify-start">
              <span className="absolute top-6 left-6 inline-flex rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-text-dark bg-white/90 border border-black/10">
                Bleijenberg
              </span>
              <p className="text-green-dark/70 text-xs uppercase tracking-wider mt-6">Premium webshop</p>
              <p className="font-serif text-3xl leading-tight mt-3">
                &ldquo;Warme, aardse tinten en een luxe uitstraling. Perfect passend bij ons merk.&rdquo;
              </p>
              <p className="text-text-muted mt-4">
                Een website die echt uitstraalt wat het product is: authentiek en uniek.
              </p>
              <Link
                href="/portfolio/bleijenberg"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-cream text-green-dark hover:bg-white hover:shadow-xl transition-all w-fit mt-6"
              >
                <WavyText text="Bekijk case" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" animation="pull-in">
            {cases.map((item, index) => (
              <div
                key={item.client}
                className={`rounded-[28px] border-2 border-cream-dark ${
                  index === 1 ? 'bg-green-dark' : 'bg-[#1a1a1a]'
                } overflow-hidden`}
              >
                <div className="relative h-48">
                  <span
                    className="absolute top-6 left-6 z-10 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-text-dark bg-white/90 border border-black/10"
                  >
                    {item.client}
                  </span>
                  <Image
                    src={item.image}
                    alt={`Case ${item.client}`}
                    fill
                    className="object-cover scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-white/70 text-xs uppercase tracking-wider mb-3">{item.label}</p>
                  <p className="font-serif text-xl text-white mb-5">{item.quote}</p>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="btn-spring btn-uniform btn-no-lila link-wave bg-cream text-green-dark hover:bg-white hover:shadow-xl transition-all inline-block"
                  >
                    <WavyText text="Bekijk case" />
                  </Link>
                </div>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 mt-10" animation="fade-up">
            <div className="relative rounded-[32px] border-2 border-cream-dark bg-lila text-green-dark px-8 pb-8 pt-16 flex flex-col justify-center">
              <span className="absolute top-6 left-6 inline-flex rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-text-dark bg-white/90 border border-black/10">
                Murthel Groenhart
              </span>
              <p className="text-green-dark/70 text-xs uppercase tracking-wider mt-6">Essentials Plus</p>
              <p className="font-serif text-3xl leading-tight mt-3">
                &ldquo;Een sportieve website die past bij kickboxen en personal training.&rdquo;
              </p>
              <p className="text-text-muted mt-4">
                Schone structuur, duidelijke info en een uitstraling die bij de sportschool past.
              </p>
              <Link
                href="/portfolio/murthel-groenhart"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-cream text-green-dark hover:bg-white hover:shadow-xl transition-all w-fit mt-6"
              >
                <WavyText text="Bekijk case" />
              </Link>
            </div>
            <div className="rounded-[32px] border-2 border-cream-dark overflow-hidden bg-black/40">
              <Image
                src="/mock-ups/murthel-mockup.webp"
                alt="Case Murthel Groenhart"
                width={1000}
                height={800}
                className="h-full w-full object-cover scale-110"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
