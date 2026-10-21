// Cookiekeuze voor Google Analytics (Consent Mode v2).
// De keuze staat in localStorage en geldt 12 maanden, daarna vraagt de banner het opnieuw.

export type ConsentChoice = 'granted' | 'denied'

export const CONSENT_KEY = 'wgb_consent'
export const CONSENT_EVENT = 'wgb:cookievoorkeuren'
export const CONSENT_MAX_AGE = 365 * 24 * 60 * 60 * 1000

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Draait in de head, voordat gtag.js laadt. Alles staat standaard op denied;
// een eerder gegeven akkoord wordt meteen doorgezet zodat de eerste hit al klopt.
export function consentBootstrapScript(measurementId: string) {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });
    try {
      var c = JSON.parse(localStorage.getItem('${CONSENT_KEY}'));
      if (c && c.analytics === 'granted' && Date.now() - c.date < ${CONSENT_MAX_AGE}) {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
    } catch (e) {}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `
}

export function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const stored = JSON.parse(raw)
    if (Date.now() - stored.date > CONSENT_MAX_AGE) return null
    return stored.analytics === 'granted' || stored.analytics === 'denied' ? stored.analytics : null
  } catch {
    return null
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: choice, date: Date.now() }))
  } catch {
    // Geen opslag beschikbaar (privévenster), de keuze geldt dan alleen voor dit bezoek
  }
  window.gtag?.('consent', 'update', { analytics_storage: choice })
  if (choice === 'denied') removeAnalyticsCookies()
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

// gtag ruimt bij intrekken zelf geen cookies op, dus dat doen we hier
function removeAnalyticsCookies() {
  const names = document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
  const parts = window.location.hostname.split('.')
  const domains = ['']
  for (let i = 0; i < parts.length - 1; i++) domains.push(`.${parts.slice(i).join('.')}`)
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}
