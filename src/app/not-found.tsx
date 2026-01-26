import Image from 'next/image'
import Link from 'next/link'
import WavyText from '@/components/WavyText'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-24">
      {/* 404 Error Image */}
      <div className="relative w-[320px] h-[280px] md:w-[420px] md:h-[360px] mb-8">
        <Image
          src="/afbeeldingen/404errorpic.webp"
          alt="404 Not Found"
          fill
          className="object-contain"
        />
      </div>

      {/* Tekst */}
      <p className="text-text-dark text-lg md:text-xl font-serif text-center mb-6 max-w-md">
        Het lijkt erop dat je verdwaald bent.
      </p>

      {/* Link terug naar home */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-green-dark hover:text-green-dark/80 transition-colors font-medium link-wave"
      >
        <WavyText text="Terug naar home" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </main>
  )
}
