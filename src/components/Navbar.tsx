'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Link, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import WavyText from '@/components/WavyText'

export default function Navbar() {
  const t = useTranslations('nav')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Check if we're on an offerte page
  const isOffertePage = pathname.startsWith('/offerte')

  // Simplified navbar for offerte pages (logo only)
  if (isOffertePage) {
    return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[85%] lg:w-[80%] max-w-6xl 2xl:max-w-[1600px] h-[72px] px-5 md:px-6 lg:px-8 flex items-center bg-green-dark/95 backdrop-blur-md border border-white/15 rounded-[30px] shadow-lg transition-all duration-300">
        {/* Logo - Center */}
        <Link href="/" className="flex items-center gap-3 text-white text-lg flex-shrink-0 mx-auto">
          <Image
            src="/logo/wegrowbrandslogo.webp"
            alt="We Grow Brands"
            width={360}
            height={120}
            className="h-[60px] md:h-[70px] lg:h-[82px] w-auto"
            priority
          />
        </Link>
      </nav>
    )
  }

  // Full navbar for all other pages
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[85%] lg:w-[80%] max-w-6xl 2xl:max-w-[1600px] h-[72px] px-5 md:px-6 lg:px-8 flex items-center bg-green-dark/95 backdrop-blur-md border border-white/15 rounded-[30px] shadow-lg transition-all duration-300">
      {/* Logo - Left */}
      <Link href="/" className="flex items-center gap-3 text-white text-lg flex-shrink-0">
        <Image
          src="/logo/wegrowbrandslogo.webp"
          alt="We Grow Brands"
          width={360}
          height={120}
          className="h-[60px] md:h-[70px] lg:h-[82px] w-auto"
          priority
        />
      </Link>

      {/* Menu Items - Center */}
      <ul className="hidden xl:flex gap-6 2xl:gap-8 absolute left-1/2 -translate-x-1/2 items-center">
        <li><Link href="/" className="text-white/80 hover:text-lila transition-colors text-sm">{t('home')}</Link></li>

        {/* Websites Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link href="/websites" className="text-white/80 hover:text-lila transition-colors text-sm flex items-center gap-1">
            {t('websites')}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </Link>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
              dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}
          >
            {/* Arrow */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 rounded-sm"></div>

            <div className="bg-white rounded-2xl shadow-2xl p-4 min-w-[380px]">
              <div className="space-y-0.5">
                <Link
                  href={"/websites#website-laten-maken" as any}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-lila-light transition-colors group"
                >
                  <div className="w-10 h-10 bg-lila rounded-full flex items-center justify-center text-green-dark flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M3 9h18"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-dark font-medium text-sm flex items-center gap-1">
                      {t('dropdown.websiteLatenMaken')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </p>
                    <p className="text-text-muted text-xs">{t('dropdown.websiteLatenMakenDesc')}</p>
                  </div>
                </Link>

                <Link
                  href={"/websites#onze-aanpak" as any}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-lila-light transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-dark rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20V10M18 20V4M6 20v-4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-dark font-medium text-sm flex items-center gap-1">
                      {t('dropdown.onzeAanpak')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </p>
                    <p className="text-text-muted text-xs">{t('dropdown.onzeAanpakDesc')}</p>
                  </div>
                </Link>

                <Link
                  href={"/websites#waarom-ons" as any}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-lila-light transition-colors group"
                >
                  <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-green-dark flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-dark font-medium text-sm flex items-center gap-1">
                      {t('dropdown.waaromOns')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </p>
                    <p className="text-text-muted text-xs">{t('dropdown.waaromOnsDesc')}</p>
                  </div>
                </Link>

                <Link
                  href={"/websites#trajecten" as any}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-lila-light transition-colors group"
                >
                  <div className="w-10 h-10 bg-lila/30 rounded-full flex items-center justify-center text-green-dark flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-dark font-medium text-sm flex items-center gap-1">
                      {t('dropdown.trajecten')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </p>
                    <p className="text-text-muted text-xs">{t('dropdown.trajectenDesc')}</p>
                  </div>
                </Link>

                <Link
                  href={"/websites#andere-services" as any}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-lila-light transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-dark/10 rounded-full flex items-center justify-center text-green-dark flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                      <line x1="9" y1="9" x2="9.01" y2="9"/>
                      <line x1="15" y1="9" x2="15.01" y2="9"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-dark font-medium text-sm flex items-center gap-1">
                      {t('dropdown.branding')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </p>
                    <p className="text-text-muted text-xs">{t('dropdown.brandingDesc')}</p>
                  </div>
                </Link>
              </div>

              <div className="border-t border-black/5 mt-3 pt-3">
                <Link
                  href={"/websites#plan-traject" as any}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-lila hover:bg-[#D6BCFF] transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-dark rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-dark font-medium text-sm flex items-center gap-1">
                      {t('dropdown.planTraject')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </p>
                    <p className="text-green-dark/70 text-xs">{t('dropdown.planTrajectDesc')}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </li>

        <li><Link href="/pakketten" className="text-white/80 hover:text-lila transition-colors text-sm">{t('packages')}</Link></li>
        <li><Link href="/diensten" className="text-white/80 hover:text-lila transition-colors text-sm">{t('diensten')}</Link></li>
        <li><Link href="/portfolio" className="text-white/80 hover:text-lila transition-colors text-sm">{t('cases')}</Link></li>
        <li><Link href="/contact" className="text-white/80 hover:text-lila transition-colors text-sm">{t('contact')}</Link></li>
      </ul>

      {/* CTA + Mobile Toggle - Right */}
      <div className="flex items-center gap-4 ml-auto">
        <Link
          href="/contact"
          className="hidden xl:inline-flex btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:text-[#02362B] hover:shadow-lg transition-all"
        >
          <WavyText text={`→ ${t('cta')}`} />
        </Link>
        <button
          type="button"
          className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/90 hover:text-lila transition-colors"
          aria-label={t('menuOpen')}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full pt-3">
          <div className="bg-white rounded-2xl shadow-2xl p-5 text-green-dark">
            <nav className="space-y-4 text-sm">
              <Link href="/" className="block font-medium" onClick={() => setMobileOpen(false)}>
                {t('home')}
              </Link>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer font-medium">
                  {t('websites')}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-3 space-y-2 pl-3 border-l border-black/10 text-text-muted">
                  <Link href="/websites" className="block" onClick={() => setMobileOpen(false)}>
                    {t('mobile.overview')}
                  </Link>
                  <Link href={"/websites#website-laten-maken" as any} className="block" onClick={() => setMobileOpen(false)}>
                    {t('mobile.websiteLatenMaken')}
                  </Link>
                  <Link href={"/websites#onze-aanpak" as any} className="block" onClick={() => setMobileOpen(false)}>
                    {t('mobile.onzeAanpak')}
                  </Link>
                  <Link href={"/websites#waarom-ons" as any} className="block" onClick={() => setMobileOpen(false)}>
                    {t('mobile.waaromOns')}
                  </Link>
                  <Link href={"/websites#trajecten" as any} className="block" onClick={() => setMobileOpen(false)}>
                    {t('mobile.trajecten')}
                  </Link>
                  <Link href={"/websites#andere-services" as any} className="block" onClick={() => setMobileOpen(false)}>
                    {t('mobile.branding')}
                  </Link>
                  <Link href={"/websites#plan-traject" as any} className="block" onClick={() => setMobileOpen(false)}>
                    {t('mobile.planTraject')}
                  </Link>
                </div>
              </details>

              <Link href="/pakketten" className="block font-medium" onClick={() => setMobileOpen(false)}>
                {t('packages')}
              </Link>
              <Link href="/diensten" className="block font-medium" onClick={() => setMobileOpen(false)}>
                {t('diensten')}
              </Link>
              <Link href="/portfolio" className="block font-medium" onClick={() => setMobileOpen(false)}>
                {t('cases')}
              </Link>
              <Link href="/contact" className="block font-medium" onClick={() => setMobileOpen(false)}>
                {t('contact')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}
