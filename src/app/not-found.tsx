import Link from 'next/link'
import WavyText from '@/components/WavyText'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-24">
      {/* Illustratie - abstracte vorm met ogen zoals in de referentie */}
      <div className="relative w-[320px] h-[280px] md:w-[420px] md:h-[360px] mb-8">
        <svg
          viewBox="0 0 420 360"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Organische blob vorm */}
          <path
            d="M50 280
               C 20 240, 10 180, 30 130
               C 50 80, 90 40, 150 30
               C 210 20, 270 25, 320 50
               C 370 75, 400 120, 405 170
               C 410 220, 395 270, 360 300
               C 325 330, 270 345, 210 340
               C 150 335, 90 320, 50 280
               Z"
            fill="#03483A"
          />

          {/* Decoratieve lijnen/takken links */}
          <path
            d="M70 260 C 60 230, 55 200, 65 170"
            stroke="#EAD7FF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M85 250 C 80 220, 78 190, 85 160"
            stroke="#EAD7FF"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Decoratieve lijnen/druppels boven */}
          <path
            d="M150 55 C 155 70, 150 85, 145 70"
            stroke="#EAD7FF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M200 40 C 205 55, 200 70, 195 55"
            stroke="#EAD7FF"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M260 50 C 265 65, 260 80, 255 65"
            stroke="#EAD7FF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M310 70 C 315 85, 310 100, 305 85"
            stroke="#EAD7FF"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Decoratieve lijnen rechts */}
          <path
            d="M370 140 C 385 150, 390 170, 380 185"
            stroke="#EAD7FF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M375 200 C 388 210, 390 230, 378 245"
            stroke="#EAD7FF"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Decoratieve stippen onderaan */}
          <ellipse cx="100" cy="310" rx="8" ry="4" fill="#EAD7FF" opacity="0.7" />
          <ellipse cx="130" cy="320" rx="5" ry="3" fill="#EAD7FF" opacity="0.5" />
          <ellipse cx="170" cy="325" rx="6" ry="3" fill="#EAD7FF" opacity="0.6" />
          <ellipse cx="220" cy="330" rx="7" ry="4" fill="#EAD7FF" opacity="0.7" />
          <ellipse cx="270" cy="328" rx="5" ry="3" fill="#EAD7FF" opacity="0.5" />
          <ellipse cx="310" cy="320" rx="8" ry="4" fill="#EAD7FF" opacity="0.6" />
          <ellipse cx="340" cy="305" rx="6" ry="3" fill="#EAD7FF" opacity="0.7" />

          {/* 404 met ogen - eerste 4 */}
          <g transform="translate(115, 150)">
            {/* Oog links boven */}
            <circle cx="12" cy="10" r="10" fill="#EAD7FF" />
            <circle cx="12" cy="10" r="4" fill="#03483A" />
            {/* Oog rechts boven */}
            <circle cx="35" cy="8" r="8" fill="#EAD7FF" />
            <circle cx="35" cy="8" r="3" fill="#03483A" />
            {/* Oog midden */}
            <circle cx="20" cy="30" r="9" fill="#EAD7FF" />
            <circle cx="20" cy="30" r="4" fill="#03483A" />
            {/* Oog links onder */}
            <circle cx="8" cy="50" r="7" fill="#EAD7FF" />
            <circle cx="8" cy="50" r="3" fill="#03483A" />
            {/* Oog rechts onder */}
            <circle cx="30" cy="55" r="11" fill="#EAD7FF" />
            <circle cx="30" cy="55" r="5" fill="#03483A" />
            {/* Extra ogen */}
            <circle cx="45" cy="35" r="6" fill="#EAD7FF" />
            <circle cx="45" cy="35" r="2.5" fill="#03483A" />
          </g>

          {/* 0 met ogen */}
          <g transform="translate(175, 145)">
            {/* Oog boven */}
            <circle cx="20" cy="5" r="9" fill="#EAD7FF" />
            <circle cx="20" cy="5" r="4" fill="#03483A" />
            {/* Oog links */}
            <circle cx="5" cy="30" r="10" fill="#EAD7FF" />
            <circle cx="5" cy="30" r="4" fill="#03483A" />
            {/* Oog rechts */}
            <circle cx="38" cy="28" r="8" fill="#EAD7FF" />
            <circle cx="38" cy="28" r="3" fill="#03483A" />
            {/* Oog onder */}
            <circle cx="18" cy="55" r="11" fill="#EAD7FF" />
            <circle cx="18" cy="55" r="5" fill="#03483A" />
            {/* Extra ogen */}
            <circle cx="35" cy="50" r="7" fill="#EAD7FF" />
            <circle cx="35" cy="50" r="3" fill="#03483A" />
            <circle cx="12" cy="35" r="6" fill="#EAD7FF" />
            <circle cx="12" cy="35" r="2.5" fill="#03483A" />
          </g>

          {/* Tweede 4 met ogen */}
          <g transform="translate(240, 150)">
            {/* Oog links boven */}
            <circle cx="10" cy="8" r="9" fill="#EAD7FF" />
            <circle cx="10" cy="8" r="4" fill="#03483A" />
            {/* Oog rechts boven */}
            <circle cx="38" cy="10" r="10" fill="#EAD7FF" />
            <circle cx="38" cy="10" r="4" fill="#03483A" />
            {/* Oog midden */}
            <circle cx="25" cy="32" r="8" fill="#EAD7FF" />
            <circle cx="25" cy="32" r="3" fill="#03483A" />
            {/* Oog links onder */}
            <circle cx="12" cy="52" r="7" fill="#EAD7FF" />
            <circle cx="12" cy="52" r="3" fill="#03483A" />
            {/* Oog rechts onder */}
            <circle cx="35" cy="58" r="11" fill="#EAD7FF" />
            <circle cx="35" cy="58" r="5" fill="#03483A" />
            {/* Extra ogen */}
            <circle cx="48" cy="38" r="6" fill="#EAD7FF" />
            <circle cx="48" cy="38" r="2.5" fill="#03483A" />
          </g>
        </svg>
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
