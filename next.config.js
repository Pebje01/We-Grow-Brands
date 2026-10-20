const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // www en zonder www gaven allebei de site, met de canonical naar het adres
  // zonder www. Google ziet dan twee hosts met dezelfde pagina's. Een vaste
  // doorverwijzing maakt er één adres van, ook voor robots.txt en de sitemap.
  async redirects() {
    return [
      {
        source: '/:path(.*)',
        has: [{ type: 'host', value: 'www.wegrowbrands.online' }],
        destination: 'https://wegrowbrands.online/:path',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
