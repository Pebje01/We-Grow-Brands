import bcryptjs from 'bcryptjs'

// Generate slug from bedrijfsnaam + date + counter
export function generateSlug(bedrijfsnaam: string, id?: string): string {
  // If an ID is provided, extract date and counter from it
  let datePrefix = ''
  if (id) {
    // Extract the date+counter part from ID like "OF-260127-02"
    const match = id.match(/^OF-(\d{6})-(\d{2})/)
    if (match) {
      datePrefix = `OF-${match[1]}-${match[2]}`
    }
  }

  // If no ID provided, generate from current date
  if (!datePrefix) {
    const d = new Date()
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = String(d.getFullYear()).slice(-2)
    datePrefix = `OF-${year}${month}${day}-01`
  }

  const cleanName = bedrijfsnaam
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `${datePrefix}-${cleanName}`
}

// Generate random password
export function generatePassword(length: number = 12): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'
  let password = ''
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

// Hash password with bcryptjs
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcryptjs.genSalt(10)
  return bcryptjs.hash(password, salt)
}

// Verify password against hash
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcryptjs.compare(password, hash)
}

// Parse slug to extract info
export function parseSlug(slug: string): { date: Date; number: string; company: string } | null {
  const match = slug.match(/^OF-(\d{2})(\d{2})(\d{2})-(\d{2})-(.*?)$/)
  if (!match) return null

  const year = parseInt('20' + match[1], 10)
  const month = parseInt(match[2], 10) - 1
  const day = parseInt(match[3], 10)
  const number = match[4]
  const company = match[5].replace(/-/g, ' ')

  return {
    date: new Date(year, month, day),
    number,
    company,
  }
}

// Generate next offerte ID based on existing IDs
export function generateOfferteId(existingIds: string[]): string {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = String(today.getFullYear()).slice(-2)
  const datePrefix = `OF-${year}${month}${day}`

  // Find all IDs for today and increment counter
  const todayIds = existingIds.filter((id) => id.startsWith(datePrefix))
  const nextNumber = String(todayIds.length + 1).padStart(2, '0')

  return `${datePrefix}-${nextNumber}`
}
