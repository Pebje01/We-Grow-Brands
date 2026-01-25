import Image from 'next/image'

export default function OGPreviewPage() {
  return (
    <div className="min-h-screen bg-green-dark flex items-center justify-center p-8">
      {/* OG Image Container - 1200x630 aspect ratio */}
      <div
        className="w-[1200px] h-[630px] bg-green-dark relative overflow-hidden flex"
        style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
      >
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col justify-start pt-10 pl-20 pr-8 relative z-10">
          {/* Logo */}
          <Image
            src="/logo/wegrowbrandslogo.webp"
            alt="We Grow Brands"
            width={320}
            height={100}
            className="mb-3"
          />

          {/* Headline */}
          <h1 className="text-white text-7xl leading-[0.95] mb-8">
            <span className="font-serif">Nooit meer balen</span>
            <br />
            <span className="italic text-lila">van je website</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-2xl max-w-xl leading-relaxed">
            Volledig maatwerk, geen templates. Een website waar je trots op bent, die uitstraalt waar jouw bedrijf voor staat.
          </p>
        </div>

        {/* Right side - Mockup image */}
        <div className="w-[480px] flex items-end justify-center pr-12 pb-20 relative">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/mock-ups/systemisch-verbinden-mockup-laptop.webp"
              alt="Website mockup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
