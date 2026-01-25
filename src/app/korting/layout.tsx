import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '50% Korting op Premium Website | We Grow Brands',
  description: 'Alleen januari: ontvang 50% korting op je maatwerk website. Nu €725 voor Groei pakket, €1.325 voor Premium. Limited time offer!',
  openGraph: {
    title: '50% Korting op Premium Website | We Grow Brands',
    description: 'Alleen januari: 50% korting op maatwerk websites. Groei €725 | Premium €1.325. Claim je korting nu!',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'We Grow Brands',
    url: 'https://wegrowbrands.online/korting/',
    images: [
      {
        url: '/og-korting.jpg',
        width: 1200,
        height: 630,
        alt: 'We Grow Brands - 50% Korting op Website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '50% Korting op Premium Website | We Grow Brands',
    description: 'Alleen januari: 50% korting op maatwerk websites. Limited time!',
  },
}

export default function KortingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
