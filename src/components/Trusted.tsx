export default function Trusted() {
  const logos = ['TuinTrend', 'GreenGrow', 'FlowerPower', 'PlantPlaza', 'NatuurWerkt']
  const logoItems = [...logos, ...logos]

  return (
    <section className="bg-cream py-12 px-8 border-t border-black/5">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-green-dark mb-6">
          Voor deze bedrijven hebben we al mooie websites gemaakt
        </h3>
        <div className="logo-marquee">
          <div className="logo-track" aria-hidden="true">
            {logoItems.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="logo-item"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
