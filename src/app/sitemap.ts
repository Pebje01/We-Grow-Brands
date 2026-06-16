import type { MetadataRoute } from 'next'

const BASE_URL = 'https://wegrowbrands.online'

// Publieke routes, /offerte, /factuur en /api zijn bewust uitgesloten
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/websites/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pakketten/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/portfolio/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact/', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/diensten/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/faq/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/hosting/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/marketing/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/website-in-termijnen/', priority: 0.7, changeFrequency: 'monthly' },
  // /korting/ en /actie/ zijn verlopen promoties met noindex — bewust niet in sitemap
  { path: '/algemene-voorwaarden/', priority: 0.3, changeFrequency: 'yearly' },
]

// Houd deze lijst gelijk aan de caseStudies in portfolio/[slug]/page.tsx
const caseSlugs = [
  'bleijenberg',
  'systemisch-verbinden',
  'murthel-groenhart',
  'van-rijn-works',
  'meet-the-locals',
  'sales-spark',
  'montung',
  'dokter-richard',
  'we-grow-brands',
]

for (const slug of caseSlugs) {
  routes.push({ path: `/portfolio/${slug}/`, priority: 0.6, changeFrequency: 'monthly' })
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
