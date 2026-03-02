import { redirect } from 'next/navigation'

function getCanonicalBaseUrl(): string | null {
  const raw =
    process.env.OFFERTE_CANONICAL_BASE_URL ||
    process.env.NEXT_PUBLIC_OFFERTE_CANONICAL_BASE_URL ||
    null

  if (!raw) return null
  return raw.replace(/\/+$/, '')
}

export default function OfferteAdminRedirectPage() {
  const baseUrl = getCanonicalBaseUrl()

  if (!baseUrl) {
    redirect('/')
  }

  redirect(`${baseUrl}/offertes/nieuw?bedrijf=wgb`)
}

