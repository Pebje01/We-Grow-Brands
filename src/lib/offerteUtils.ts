import bcryptjs from 'bcryptjs'

/**
 * Genereer offerte nummer: OF-YYMMDD-NN
 */
export function generateOfferteNumber(todayCount: number): string {
  const now = new Date()
  const yy = String(now.getFullYear()).slice(2)
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const seq = String(todayCount + 1).padStart(2, '0')
  return `OF-${yy}${mm}${dd}-${seq}`
}

/**
 * Genereer URL-friendly slug van offerte nummer + bedrijfsnaam
 * Bijv: "wgb-of-260223-01-acme-corp"
 */
export function generateSlug(offerteNumber: string, clientName: string): string {
  const clean = clientName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return `${offerteNumber.toLowerCase()}-${clean}`
}

/**
 * Genereer random wachtwoord (12 tekens, mixed case + cijfers)
 */
export function generatePassword(): string {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
  const lower = 'abcdefghjkmnpqrstuvwxyz'
  const digits = '23456789'
  const all = upper + lower + digits
  let pass = ''
  pass += upper[Math.floor(Math.random() * upper.length)]
  pass += lower[Math.floor(Math.random() * lower.length)]
  pass += digits[Math.floor(Math.random() * digits.length)]
  for (let i = 3; i < 12; i++) {
    pass += all[Math.floor(Math.random() * all.length)]
  }
  return pass.split('').sort(() => Math.random() - 0.5).join('')
}

/**
 * Hash wachtwoord met bcryptjs
 */
export async function hashPassword(password: string): Promise<string> {
  return bcryptjs.hash(password, 10)
}

/**
 * Verifieer wachtwoord tegen bcrypt hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcryptjs.compare(password, hash)
}

/**
 * Bereken geldigheidsdatum (14 dagen)
 */
export function calculateValidUntil(): string {
  const date = new Date()
  date.setDate(date.getDate() + 14)
  return date.toISOString().split('T')[0]
}
