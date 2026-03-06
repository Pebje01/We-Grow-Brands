import { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import '../globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function FactuurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={instrumentSerif.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
