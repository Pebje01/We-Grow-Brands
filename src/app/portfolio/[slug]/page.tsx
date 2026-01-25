import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WavyText from '@/components/WavyText'
import WavyLink from '@/components/WavyLink'
import Breadcrumbs from '@/components/Breadcrumbs'

type CaseStudy = {
  slug: string
  name: string
  label: string
  intro: string
  summary: string
  story?: string
  heroImage: string
  featureImage: string
  resultImage?: string
  showcaseImage?: string
  showcaseImage2?: string
  hideShowcase?: boolean
  tags: string[]
  skills: string[]
  sector: string
  pakket: string
  website?: string
  challenge: string
  solution: string
  results: string[]
  highlights?: { value: string; label: string }[]
  process: { title: string; text: string }[]
  quote: string
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'bleijenberg',
    name: 'Bleijenberg',
    label: 'Website en webshop voor authentieke natuurstenen tuinpotten bedrijf',
    intro: 'Een premium webshop die vertrouwen uitstraalt en conversie versnelt.',
    summary:
      'Bleijenberg is een tuinpottenbedrijf met authentieke, handgemaakte natuurstenen potten voor binnen en buiten. De potten worden ingekocht in Zuidoost-Azië en zijn stuk voor stuk bijzonder. Een bijzonder product verdient een bijzondere website. Er moest een site komen die persoonlijk aanvoelt, met authentieke, warme kleuren die passen bij de natuur en het aardse. High-end en luxueus, net als de potten zelf. Daarnaast wilde Bleijenberg een webshop met een selectie van de potten – niet alles, om te beginnen. Met ruimte om later uit te breiden naar een volledige webshop, en in de toekomst ook een B2B-onderdeel toe te voegen.',
    heroImage: '/mock-ups/bleijenberg-mockup-laptop.webp',
    featureImage: '/mock-ups/bleijenberg-mockup-laptop.webp',
    resultImage: '/Bleijenberg/bleijenberg-screenshot-2.png',
    showcaseImage: '/mock-ups/bleijenberg-tablet-mockup.webp',
    showcaseImage2: '/mock-ups/bleijenberg-mockup-iphone.webp',
    tags: [],
    skills: ['WordPress', 'Branding', 'Huisstijl', 'Logo', 'Webteksten'],
    sector: 'Retail & tuin',
    pakket: 'Premium Website + Webshop',
    website: 'https://bleijenberg.eu',
    challenge:
      'Een volledig nieuwe website inclusief webshop die past bij de huisstijl en de luxe uitstraling van het product. De site moest persoonlijk aanvoelen, met warme aardse kleuren die passen bij de authentieke natuurstenen potten.',
    solution:
      'We ontwierpen een premium website met warme, aardse tinten die de authenticiteit van de potten weerspiegelen. Een persoonlijke uitstraling met high-end feel, gecombineerd met een overzichtelijke webshop. De site is gebouwd met ruimte om later uit te breiden naar een volledige webshop en B2B-functionaliteit.',
    results: [
      'Premium website die past bij de luxe uitstraling van het product',
      'Webshop met selectie van authentieke potten',
      'Warme, aardse kleuren die passen bij de natuur',
      'Basis voor toekomstige uitbreiding naar B2B',
    ],
    process: [
      { title: 'Richting bepalen', text: 'Merkverhaal en doelgroep scherp gezet.' },
      { title: 'Design op maat', text: 'Premium look & feel in lijn met de huisstijl.' },
      { title: 'Bouw & content', text: 'Snel, overzichtelijk en klaar voor groei.' },
    ],
    quote: '"We zijn heel blij met de website. Eindelijk een uitstraling die echt past bij ons authentieke product." — Frank van Bleijenberg',
  },
  {
    slug: 'systemisch-verbinden',
    name: 'Systemisch Verbinden',
    label: 'Coaching voor trainers en ondernemers',
    intro: 'Website over systemische intervisie voor ondernemerscoach Frida de Koning.',
    summary:
      'Systemisch verbinden helpt coaches, trainers, docenten en ondernemers om hun plek in te nemen binnen hun werkveld en organisatie. Door systemisch bewustzijn te ontwikkelen, verbind je je op een nieuwe manier met jezelf, je werk en de mensen om je heen. Systemisch Verbinden is het coachingsconcept van Frida de Koning.',
    heroImage: '/mock-ups/systemisch-verbinden-mockup-laptop.webp',
    featureImage: '/mock-ups/systemisch-verbinden-mockup-laptop.webp',
    resultImage: '/mock-ups/systemisch-verbinden-mockup-tablet.webp',
    hideShowcase: true,
    tags: [],
    skills: ['WordPress', 'Huisstijlkleuren', 'Logo'],
    sector: 'Coaching & intervisie',
    pakket: 'Essentials',
    website: 'https://systemischverbinden.nl',
    challenge:
      'Frida zocht een website die past bij het concept van systemische intervisie, bij wie zij is als persoon, én bij de fase waarin ze zit. De ijsvogel – in het Engels kingfisher – is het symbool voor wie ze is en hoe zij werkt. Niet toevallig, want Frida heet De Koning van haar achternaam. Als startend concept was het belangrijk om niet te complex te beginnen: vooral de juiste informatie overbrengen, met simpele contactmogelijkheden en duidelijke CTA\'s. Een stevige basis met ruimte om later door te ontwikkelen.',
    solution:
      'We ontwierpen een website in de kleuren van de ijsvogel: oranje en blauw. Een rustige site met natuurelementen, waarbij de ijsvogel doorlopend terugkomt in het design. De website is nu bewust informatief gehouden, met simpele contactformulieren. Een kwalitatieve startwebsite die meegroeit: gebouwd om in een latere fase van de onderneming door te ontwikkelen naar complexere elementen.',
    results: [
      'Website in de huisstijlkleuren die perfect past bij de coach',
      'Informatieve site die het concept van systemische intervisie helder overbrengt',
      'Duidelijke structuur voor coaching, workshops en trainingen',
      'Laagdrempelige contactmogelijkheden via mail en formulier',
    ],
    process: [
      { title: 'Fundament leggen', text: 'Eerst de kern van Systemisch Verbinden helder gemaakt: wat moest er op de website komen en wat niet? Daarna een passende huisstijl bepaald, met de ijsvogel als uitgangspunt.' },
      { title: 'Content, structuur & logo', text: 'Content aangeleverd en bepaald welke paginas nodig waren. Omdat er ook nog geen logo was, hebben we ad hoc een logo ontwikkeld.' },
      { title: 'Livegang', text: 'Live gegaan met het oog op doorontwikkeling in een latere fase.' },
    ],
    quote: '"Dit voelt eindelijk als het niveau dat we leveren." — Frida de Koning',
  },
  {
    slug: 'murthel-groenhart',
    name: 'Murthel Groenhart',
    label: 'Website voor kickboxlessen, groepstrainingen en personal training',
    intro: 'Nieuwe website voor voormalig kickbokskampioen Murthel Groenhart.',
    summary:
      'Murthel Groenhart wilde een heldere, rustige website die zijn aanpak direct voelbaar maakt. We maakten de uitstraling warm en professioneel. Dit project paste niet in het standaard Essentials pakket en is daarom uitgebreid met een extra pagina.',
    story:
      'Voormalig kickbokskampioen Murthel Groenhart heeft successen behaald en een glansrijke carrière gehad. Helaas paste zijn website daar helemaal niet meer bij. De website was outdated, niet in lijn met zijn ambities en sportiviteit en miste belangrijke informatie zoals een lesrooster. Bovendien stond de site vol met oude blogs die niet meer relevant waren voor het doel: nieuwe klanten aantrekken en zijn sportschool promoten. We hebben de website opgeschoond, irrelevante pagina’s verwijderd en het geheel opnieuw opgebouwd met een heldere, schone lijn.',
    heroImage: '/iphone-screenshot.webp',
    featureImage: '/mock-ups/murthel-mockup.webp',
    resultImage: '/mock-ups/murthel-screens.webp',
    showcaseImage: '/mock-ups/murthel-phone-mockups.webp',
    tags: [],
    skills: ['WordPress', 'Webteksten'],
    sector: 'Sportschool',
    pakket: 'Essentials + extra pagina',
    website: 'https://murthelgroenhart.nl',
    challenge:
      'Een nieuwe website met duidelijke informatie, die beter past bij de huisstijl en branche, de sportschool promoot en nieuwe leden aantrekt.',
    solution:
      'Een sportieve website in de huisstijlkleuren van TGT (The Groenhart Team). Een stoere look die past bij kickboksen, grenzen opzoeken, kickbokslessen en personal training, volledig opnieuw opgebouwd met een schone structuur.',
    results: [
      'Nieuwe leads die interesse hebben in training',
      'Nieuwe klanten',
      'Een website die voelt als een visitekaartje',
    ],
    highlights: [
      { value: '+60%', label: 'nieuwe bezoekers in 3 maanden' },
      { value: '+[X]', label: 'contactmomenten' },
      { value: '+[X]', label: 'aanvragen via contactformulier per week' },
    ],
    process: [
      {
        title: 'Kern scherpstellen',
        text: 'Bepalen wat echt relevant is om te plaatsen op de website, met een schone lijn en focus.',
      },
      {
        title: 'Content vernieuwen',
        text: 'Webteksten herschreven en beeldgebruik verbeterd, plus lesrooster en alle belangrijke info toegevoegd.',
      },
      {
        title: 'Livegang',
        text: 'Online gezet na één correctieronde.',
      },
    ],
    quote: '“Ik ben echt heel erg blij met mijn nieuwe website. Het voelt nu echt als een website die bij me past.”',
  },
  {
    slug: 'van-rijn-works',
    name: 'Van Rijn Works',
    label: 'Essentials website voor schoonmaakbedrijf',
    intro: 'Een strak visitekaartje voor een schoonmaakbedrijf met grote ambities.',
    summary:
      'Van Rijn Works is een schoonmaakbedrijf dat niet blij was met de huidige website. De site paste niet bij de professionele uitstraling die ze wilden uitdragen. Er moest een vernieuwde website komen: strak, niet te veel informatie, en een echt sterk visitekaartje van het merk. Belangrijk: Van Rijn Works heeft ambities om te groeien naar een groter, professioneler bedrijf. De website moest qua design en uitstraling een huisstijl hebben die al klaar is voor die ambities – een fundament waarop in de toekomst verder gebouwd kan worden met branding, uitbreiding of zelfs nieuwe websites.',
    heroImage: '/mock-ups/vanrijnworksmockup-top.jpg',
    featureImage: '/mock-ups/vanrijnworksmockup-top.jpg',
    resultImage: '/mock-ups/vanrijnworksmockup-tablet.jpg',
    showcaseImage: '/mock-ups/vanrijnworksmockup-schermen.jpg',
    tags: [],
    skills: ['WordPress', 'Webteksten'],
    sector: 'Schoonmaakdiensten',
    pakket: 'Essentials',
    website: 'https://vanrijnworks.nl',
    challenge:
      'De oude website paste niet bij de professionele uitstraling en ambities van het bedrijf. Er was behoefte aan een strakke, moderne website die fungeert als visitekaartje en klaar is voor toekomstige groei.',
    solution:
      'We ontwierpen een strakke, overzichtelijke website zonder overbodige informatie. Een premium uitstraling die past bij de ambities van het bedrijf. Het design vormt een solide basis voor toekomstige uitbreidingen en verdere branding.',
    results: [
      'Strak visitekaartje dat vertrouwen uitstraalt',
      'Professionele uitstraling passend bij groeiambities',
      'Huisstijl klaar voor toekomstige uitbreiding',
      'Solide fundament voor verdere branding',
    ],
    process: [
      { title: 'Visie scherp', text: 'Ambities en gewenste uitstraling helder gemaakt.' },
      { title: 'Strak design', text: 'Minimalistisch en professioneel, klaar voor groei.' },
      { title: 'Livegang', text: 'Een website die staat als fundament voor de toekomst.' },
    ],
    quote: '"Eindelijk een website die past bij onze ambities. Strak, professioneel en klaar voor de toekomst."',
  },
  {
    slug: 'meet-the-locals',
    name: 'Meet the Locals',
    label: 'Premium blog over lokale ervaringen',
    intro: 'Een sfeervolle blog die lokale verhalen en ervaringen tot leven brengt.',
    summary:
      'Meet the Locals is een platform dat authentieke lokale ervaringen deelt. De website moest rust uitstralen, vertrouwen wekken en de verhalen centraal zetten. Met een warm, uitnodigend design dat past bij de persoonlijke aanpak van het merk.',
    heroImage: '/mock-ups/Meetthelocals-mockup-top.webp',
    featureImage: '/mock-ups/Meetthelocals-mockup-top.webp',
    resultImage: '/mock-ups/meetthelocals-tablet-mockup.webp',
    showcaseImage: '/mock-ups/meetthelocals-tablet-mockup.webp',
    showcaseImage2: '/mock-ups/meetthelocals-mockup-mobiel.webp',
    tags: [],
    skills: ['WordPress', 'Huisstijl', 'Logo', 'Blog', 'Webteksten'],
    sector: 'Lifestyle & reizen',
    pakket: 'Premium',
    website: 'https://meetthelocals.nl',
    challenge:
      'Een platform creëren dat lokale verhalen op een persoonlijke en toegankelijke manier presenteert, met een uitstraling die rust en vertrouwen uitstraalt.',
    solution:
      'We ontwierpen een warme, uitnodigende website met focus op storytelling. De blog is overzichtelijk opgezet zodat bezoekers makkelijk door de verhalen kunnen navigeren. Het design straalt authenticiteit uit en past perfect bij de persoonlijke aanpak.',
    results: [
      'Een sfeervolle website die het merkverhaal versterkt',
      'Overzichtelijke blogstructuur voor optimale leeservaring',
      'Warme uitstraling die past bij de lokale verhalen',
      'Responsive design voor alle apparaten',
    ],
    process: [
      { title: 'Verhaal bepalen', text: 'De kern van Meet the Locals scherp gedefinieerd.' },
      { title: 'Design & sfeer', text: 'Warme kleuren en rustige lay-out voor optimale leeservaring.' },
      { title: 'Bouw & lancering', text: 'Blog opgezet met ruimte voor groei en nieuwe verhalen.' },
    ],
    quote: '"Een website met een avontuurlijke uitstraling voor een reisblog."',
  },
]

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug)

  if (!study) {
    return {
      title: 'Case niet gevonden | We Grow Brands',
      description: 'Deze case study kon niet worden gevonden.',
    }
  }

  return {
    title: `${study.name} - ${study.label} | We Grow Brands`,
    description: `Case study: ${study.name}. ${study.intro} Bekijk hoe we dit project hebben aangepakt en welke resultaten we hebben behaald.`,
  }
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <section className="bg-[#1a1a1a] pt-44 pb-24">
      <Breadcrumbs
        variant="dark"
        className="mb-8"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Cases', href: '/portfolio' },
          { label: study.name },
        ]}
      />
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center text-white">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-cream-dark/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-cream-dark">
              CASE
            </span>
          </div>
          <h1 className="mb-4">{study.name}</h1>
          <h3 className="text-white/70 max-w-3xl mx-auto">{study.intro}</h3>
          <Link href="/portfolio" className="link-wave text-lila text-sm inline-flex items-center gap-2 mt-6">
            <WavyText text="← Terug naar cases" />
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-cream text-text-dark rounded-[40px] px-6 md:px-12 py-10 md:py-14 w-full">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
          <div className={`grid grid-cols-1 ${study.skills.length ? 'lg:grid-cols-2' : ''} gap-10 lg:gap-16 items-start mb-16`}>
            {/* Links: Info */}
            <div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-light w-24">Opdrachtgever</span>
                  <span className="text-text-dark">{study.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-light w-24">Website</span>
                  {study.website ? (
                    <WavyLink
                      href={study.website}
                      external
                      className="link-light underline"
                    >
                      {study.website.replace('https://', '')}
                    </WavyLink>
                  ) : (
                    <span className="text-text-light">-</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-light w-24">Branche</span>
                  <span className="text-text-dark">{study.sector}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-light w-24">Pakket</span>
                  <span className="text-text-dark">{study.pakket}</span>
                </div>
              </div>
            </div>

            {/* Rechts: Skill pills */}
            {study.skills.length ? (
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {study.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm text-text-light h-fit cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className={`relative ${study.highlights ? 'mb-24' : 'mb-12'}`}>
            <div className="rounded-[32px] overflow-hidden border-2 border-cream-dark bg-cream-dark">
              <Image
                src={study.featureImage}
                alt={`${study.name} feature`}
                width={1200}
                height={720}
                className="w-full h-auto"
                priority
              />
            </div>
            {study.highlights ? (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 flex justify-center gap-4">
                {study.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="bg-white/95 rounded-2xl border border-black/10 px-4 py-5 text-center shadow-lg w-28 md:w-32"
                  >
                    <p className="text-green-dark text-xl md:text-2xl font-serif">{highlight.value}</p>
                    <p className="text-text-muted text-[10px] md:text-xs mt-2 leading-tight">{highlight.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mb-12">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-3">{study.label}</p>
            <h2 className="text-text-dark mb-4">Over de case</h2>
            <p className="text-text-muted leading-relaxed max-w-3xl">{study.story ?? study.summary}</p>
            {study.tags.length ? (
              <div className="flex flex-wrap gap-2 mt-6">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider border border-black/10 rounded-full px-3 py-1 text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-cream-dark/60 rounded-[28px] p-8 border border-black/10">
              <h3 className="text-green-dark mb-3">Uitdaging</h3>
              <p className="text-text-muted leading-relaxed">{study.challenge}</p>
            </div>
            <div className="bg-lila-light rounded-[28px] p-8 border border-black/10">
              <h3 className="text-green-dark mb-3">Oplossing</h3>
              <p className="text-text-muted leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-[32px] border border-cream-dark p-8 md:p-10">
              <h2 className="text-text-dark mb-6">Resultaten</h2>
              <ul className="space-y-4">
                {study.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <span className="text-green-dark mt-1">✓</span>
                    <span className="text-text-muted">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[32px] overflow-hidden border-2 border-cream-dark bg-cream-dark flex items-center">
              <Image
                src={study.resultImage || study.heroImage}
                alt={`${study.name} resultaat`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-[32px] p-8 md:p-10 text-white mb-12">
            <h2 className="mb-6">Zo hebben we het aangepakt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
              {study.process.map((step, index) => (
                <div key={step.title} className="border border-white/10 rounded-2xl p-5">
                  <p className="text-lila text-xs uppercase tracking-wider mb-3">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {!study.hideShowcase ? (
            study.showcaseImage2 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="rounded-[32px] overflow-hidden border-2 border-cream-dark bg-cream-dark flex items-center">
                  <Image
                    src={study.showcaseImage || study.featureImage}
                    alt={`${study.name} showcase`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-[32px] overflow-hidden border-2 border-cream-dark bg-cream-dark flex items-center">
                  <Image
                    src={study.showcaseImage2}
                    alt={`${study.name} showcase 2`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-[32px] overflow-hidden border-2 border-cream-dark bg-cream-dark mb-12">
                <Image
                  src={study.showcaseImage || study.featureImage}
                  alt={`${study.name} showcase`}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            )
          ) : null}

          <div className="text-center mb-12">
            <p className="font-serif text-2xl text-text-dark italic max-w-3xl mx-auto">
              {study.quote}
            </p>
          </div>

          <div className="bg-green-dark rounded-[32px] p-8 md:p-10 text-white text-center">
            <h2 className="mb-3">Ook zo&apos;n website?</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Plan een gesprek om je mogelijkheden te bespreken.
            </p>
            <Link
              href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all inline-block"
            >
              <WavyText text="Plan een gesprek" />
            </Link>
            <p className="text-white/60 text-sm mt-4">
              Liever eerst appen?{' '}
              <Link
                href="https://wa.me/31636162639"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center relative top-[3px] text-[#25D366] hover:text-[#1FAF57] transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="block h-5 w-5 fill-current"
                >
                  <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </Link>
            </p>
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio" className="link-wave text-text-muted hover:text-green-dark text-sm inline-flex items-center gap-2 transition-colors">
              <WavyText text="← Terug naar cases" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
