import { permanentRedirect, notFound } from 'next/navigation'

function getCanonicalOfferteBaseUrl(): string | null {
  const raw =
    process.env.OFFERTE_CANONICAL_BASE_URL ||
    process.env.NEXT_PUBLIC_OFFERTE_CANONICAL_BASE_URL ||
    null

  if (!raw) return null
  return raw.replace(/\/+$/, '')
}

export default function OfferteSlugRedirectPage({
  params,
}: {
  params: { slug: string }
}) {
  if (!params?.slug) notFound()

  const baseUrl = getCanonicalOfferteBaseUrl()
  if (!baseUrl) {
    // Zonder canonical base URL willen we geen legacy template meer tonen.
    notFound()
  }

  permanentRedirect(`${baseUrl}/offerte/${encodeURIComponent(params.slug)}`)
}
