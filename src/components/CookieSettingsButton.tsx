'use client'

import { openConsentSettings } from '@/lib/consent'

export default function CookieSettingsButton({ label, className }: { label: React.ReactNode; className?: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {label}
    </button>
  )
}
