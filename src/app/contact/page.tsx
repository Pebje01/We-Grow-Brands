import WavyText from '@/components/WavyText'

export const metadata = {
  title: 'Contact | We Grow Brands',
  description: 'Plan een gesprek en ontdek wat we voor je merk kunnen betekenen.',
}

export default function ContactPage() {
  return (
    <section className="bg-green-dark px-6 md:px-10 pt-32 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-[0_30px_90px_rgba(2,46,38,0.18)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10">
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-green-dark/70 text-xs uppercase tracking-[0.2em]">
                  Contact
                </span>
                <h1 className="text-green-dark mt-4 mb-4">Laten we jouw website plannen</h1>
                <p className="text-text-muted max-w-md">
                  Vertel kort wat je nodig hebt. We reageren snel met een voorstel dat past bij
                  jouw fase en budget.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-text-muted">
                <div>
                  <p className="text-text-dark">Email</p>
                  <p>hello@wegrowbrands.online</p>
                </div>
                <div>
                  <p className="text-text-dark">Telefoon</p>
                  <p>06 36 16 26 39</p>
                </div>
                <div>
                  <p className="text-text-dark">Reactietijd</p>
                  <p>Binnen 24 uur op werkdagen</p>
                </div>
                <div>
                  <p className="text-text-dark">Locatie</p>
                  <p>Nederland · Remote</p>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-3xl p-6 md:p-8 border border-black/5">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-1">
                  <label htmlFor="contact-name" className="sr-only">Naam*</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="mt-2 w-full border-b border-black/20 bg-transparent pb-2 font-serif italic text-green-dark placeholder:text-green-dark placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none"
                    placeholder="Naam*"
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="contact-email" className="sr-only">Email*</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="mt-2 w-full border-b border-black/20 bg-transparent pb-2 font-serif italic text-green-dark placeholder:text-green-dark placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none"
                    placeholder="Email*"
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="contact-phone" className="sr-only">Telefoon</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    className="mt-2 w-full border-b border-black/20 bg-transparent pb-2 font-serif italic text-green-dark placeholder:text-green-dark placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none"
                    placeholder="Telefoon"
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="contact-company" className="sr-only">Bedrijf</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    className="mt-2 w-full border-b border-black/20 bg-transparent pb-2 font-serif italic text-green-dark placeholder:text-green-dark placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none"
                    placeholder="Bedrijf"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="contact-message" className="sr-only">Waar ben je naar op zoek?*</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full border-b border-black/20 bg-transparent pb-2 font-serif italic text-green-dark placeholder:text-green-dark placeholder:font-serif placeholder:italic focus:border-green-dark focus:outline-none"
                    placeholder="Waar ben je naar op zoek?*"
                  />
                </div>
                <div className="md:col-span-2 flex items-center justify-between pt-2">
                  <p className="text-xs text-text-muted">Velden met * zijn verplicht.</p>
                  <button
                    type="submit"
                    className="btn-spring btn-uniform link-wave bg-white text-green-dark hover:bg-lila hover:text-green-dark hover:shadow-lg transition-all"
                  >
                    <WavyText text="Vraag website aan" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
