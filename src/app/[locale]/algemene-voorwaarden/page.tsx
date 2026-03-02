import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Algemene voorwaarden | We Grow Brands',
  description: 'Algemene voorwaarden van We Grow Brands voor webdesign, ontwikkeling en aanverwante diensten.',
  alternates: {
    canonical: '/algemene-voorwaarden',
  },
}

const sections = [
  {
    title: '1. Definities',
    items: [
      'We Grow Brands: opdrachtnemer.',
      'Klant: de partij die een opdracht verstrekt of diensten afneemt.',
      'Overeenkomst: afspraken tussen We Grow Brands en klant, schriftelijk of digitaal.',
    ],
  },
  {
    title: '2. Toepasselijkheid',
    items: [
      'Deze voorwaarden gelden voor alle offertes, opdrachten en diensten van We Grow Brands.',
      'Afwijkingen zijn alleen geldig als die schriftelijk zijn bevestigd.',
    ],
  },
  {
    title: '3. Offertes en overeenkomst',
    items: [
      'Offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld.',
      'Een overeenkomst komt tot stand na schriftelijke bevestiging of akkoord per email.',
    ],
  },
  {
    title: '4. Diensten en uitvoering',
    items: [
      'We Grow Brands levert webdesign, ontwikkeling en aanverwante diensten zoals afgesproken.',
      'Klant levert tijdig alle benodigde informatie en content aan.',
    ],
  },
  {
    title: '5. Planning en oplevering',
    items: [
      'Planning is indicatief. Oplevering kan wijzigen bij late aanlevering of wijzigingen.',
      'Na oplevering heeft klant een redelijke termijn om feedback te geven.',
    ],
  },
  {
    title: '6. Prijzen en betaling',
    items: [
      'Alle prijzen zijn exclusief btw, tenzij anders vermeld.',
      'Betaling gebeurt volgens de afgesproken termijnen of facturen.',
      'Bij betaling in termijnen geldt een aanbetaling en vaste maandtermijnen.',
    ],
  },
  {
    title: '7. Meerwerk en wijzigingen',
    items: [
      'Wijzigingen buiten de afgesproken scope worden als meerwerk gefactureerd.',
      'Meerwerk wordt vooraf afgestemd op basis van tarief of vaste prijs.',
      'Aanvullende wijzigingen worden tegen een uurtarief van €80,- gedaan of een vast bedrag in overleg met de klant.',
    ],
  },
  {
    title: '8. Hosting en onderhoud',
    items: [
      'Hosting en onderhoud zijn optioneel en worden separaat aangeboden.',
      'Hostingkosten bedragen circa €10-20 per maand en zijn niet inbegrepen in de offerte.',
      'Bij beeindiging van hosting kan We Grow Brands meewerken aan verhuizing.',
    ],
  },
  {
    title: '9. Ondersteuning',
    items: [
      'Doorlopende begeleiding en technische ondersteuning worden via email en WhatsApp geboden.',
      'Ondersteuning is inbegrepen in het eerste jaar na oplevering.',
      'Na het eerste jaar kunnen ondersteuningsafspraken afzonderlijk worden gemaakt.',
    ],
  },
  {
    title: '10. Intellectueel eigendom',
    items: [
      'Na volledige betaling gaan gebruiksrechten over op de klant.',
      'We Grow Brands behoudt het recht om werk te tonen in portfolio en marketing.',
    ],
  },
  {
    title: '11. Aansprakelijkheid',
    items: [
      'We Grow Brands is niet aansprakelijk voor indirecte schade of omzetverlies.',
      'Aansprakelijkheid is beperkt tot het bedrag van de betreffende opdracht.',
    ],
  },
  {
    title: '12. Overmacht',
    items: [
      'Bij overmacht kan de uitvoering worden opgeschort zonder schadeplicht.',
      'Onder overmacht valt onder andere storing, ziekte of externe afhankelijkheden.',
    ],
  },
  {
    title: '13. Klachten en ontbinding',
    items: [
      'Klachten worden zo snel mogelijk en binnen 14 dagen gemeld.',
      'Bij ernstige tekortkoming kan de overeenkomst worden ontbonden na overleg.',
    ],
  },
  {
    title: '14. Privacy en gegevens',
    items: [
      'We Grow Brands verwerkt gegevens volgens de geldende privacyregels.',
      'Gegevens worden alleen gebruikt voor de uitvoering van de opdracht.',
    ],
  },
  {
    title: '15. Toepasselijk recht',
    items: [
      'Op alle overeenkomsten is Nederlands recht van toepassing.',
      'Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.',
    ],
  },
]

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="bg-cream pt-44 pb-24">
      <Breadcrumbs className="mb-4" />
      <div className="px-6 md:px-10">
        <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-text-dark mb-4">Algemene voorwaarden</h1>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            Hieronder vind je de algemene voorwaarden van We Grow Brands. Deze voorwaarden zijn van
            toepassing op offertes, diensten en overeenkomsten.
          </p>
          <p className="text-text-muted text-sm mt-3">Laatst bijgewerkt: 25 januari 2026</p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl p-6 border border-black/5">
              <h2 className="text-text-dark mb-3">{section.title}</h2>
              <ul className="space-y-2 text-text-muted leading-relaxed">
                {section.items.map((item, index) => (
                  <li key={`${section.title}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-green-dark rounded-[30px] p-8 md:p-10 text-white text-center">
          <h2 className="mb-3">Vragen over de voorwaarden?</h2>
          <p className="text-white/70 mb-6">
            Neem gerust contact op als je iets wilt verduidelijken of aanvullen.
          </p>
          <Link
            href="/contact"
            className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all"
          >
            Contact opnemen
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-black/5">
          <h2 className="text-text-dark mb-3">Bedrijfsgegevens</h2>
          <div className="space-y-2 text-text-muted">
            <p>Bedrijfsnaam: We Grow Brands</p>
            <p>KvK: 84818883</p>
            <p>Email: hello@wegrowbrands.online</p>
            <p>Telefoon: 06 36 16 26 39</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
