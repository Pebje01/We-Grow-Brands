export default function Trusted() {
  const logos = ['TuinTrend', 'GreenGrow', 'FlowerPower', 'PlantPlaza', 'NatuurWerkt']

  return (
    <section className="bg-cream py-12 px-8 border-t border-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-text-muted text-xs uppercase tracking-[0.15em] mb-6">
          Vertrouwd door groeiende bedrijven
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap opacity-50">
          {logos.map((logo, index) => (
            <span key={index} className="font-sans text-lg font-bold text-text-dark">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
