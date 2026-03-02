import { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import nlMessages from '../../../messages/nl.json'
import '../globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const polysansSlim = localFont({
  src: '../../../public/fonts/polysanstrial-slim.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-polysans',
  display: 'swap',
})

const polysansNeutralWide = localFont({
  src: '../../../public/fonts/polysanstrial-neutralwide.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-polysans-wide',
  display: 'swap',
})

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function OfferteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${instrumentSerif.variable} ${polysansSlim.variable} ${polysansNeutralWide.variable}`}>
      <body className={`${polysansSlim.className} text-text-dark bg-cream overflow-x-hidden`}>
        <NextIntlClientProvider locale="nl" messages={nlMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
