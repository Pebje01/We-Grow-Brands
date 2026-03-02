import { supabase, getAdminClient } from './supabase'

// ── Types (compatible met daley-admin schema) ───────────────────────

export interface DbOfferte {
  id: string
  number: string
  company_id: string
  client_name: string
  client_contact_person: string | null
  client_email: string | null
  client_phone: string | null
  client_address: string | null
  client_kvk: string | null
  client_btw: string | null
  date: string
  valid_until: string
  status: string
  subtotal: number
  btw_percentage: number
  btw_amount: number
  total: number
  notes: string | null
  intro_text: string | null
  terms_text: string | null
  slug: string | null
  password_hash: string | null
  is_public: boolean
  approved_at: string | null
  approved_by_name: string | null
  approved_by_email: string | null
  created_at: string
  updated_at: string
}

export interface DbLineItem {
  id: string
  offerte_id: string
  sort_order: number
  description: string
  details: string | null
  quantity: number
  unit_price: number
  section_title: string | null
}

// ── WGB Offerte type (vereenvoudigd voor de WGB frontend) ───────────

export interface WgbOfferte {
  id: string
  number: string
  slug: string
  clientName: string
  clientContactPerson: string | null
  clientEmail: string | null
  clientPhone: string | null
  date: string
  validUntil: string
  status: string
  subtotal: number
  btwPercentage: number
  btwAmount: number
  total: number
  introText: string | null
  termsText: string | null
  notes: string | null
  isPublic: boolean
  approvedAt: string | null
  approvedByName: string | null
  approvedByEmail: string | null
  items: WgbLineItem[]
  createdAt: string
}

export interface WgbLineItem {
  id: string
  description: string
  details: string | null
  quantity: number
  unitPrice: number
  sortOrder: number
  sectionTitle: string | null
}

// ── Mapper ──────────────────────────────────────────────────────────

function mapToWgbOfferte(row: DbOfferte, items: DbLineItem[] = []): WgbOfferte {
  return {
    id: row.id,
    number: row.number,
    slug: row.slug || '',
    clientName: row.client_name,
    clientContactPerson: row.client_contact_person,
    clientEmail: row.client_email,
    clientPhone: row.client_phone,
    date: row.date,
    validUntil: row.valid_until,
    status: row.status,
    subtotal: row.subtotal,
    btwPercentage: row.btw_percentage,
    btwAmount: row.btw_amount,
    total: row.total,
    introText: row.intro_text,
    termsText: row.terms_text,
    notes: row.notes,
    isPublic: row.is_public,
    approvedAt: row.approved_at,
    approvedByName: row.approved_by_name,
    approvedByEmail: row.approved_by_email,
    items: items
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((i) => ({
        id: i.id,
        description: i.description,
        details: i.details,
        quantity: i.quantity,
        unitPrice: i.unit_price,
        sortOrder: i.sort_order,
        sectionTitle: i.section_title,
      })),
    createdAt: row.created_at,
  }
}

// ── Admin queries (service role, server-side only) ──────────────────

/**
 * Lijst alle WGB offertes (voor de admin)
 */
export async function listWgbOffertes(): Promise<WgbOfferte[]> {
  const admin = getAdminClient()

  const { data, error } = await admin
    .from('offertes')
    .select('*')
    .eq('company_id', 'wgb')
    .order('created_at', { ascending: false })

  if (error) throw error
  if (!data || data.length === 0) return []

  const ids = (data as DbOfferte[]).map((o) => o.id)
  const { data: items, error: itemError } = await admin
    .from('line_items')
    .select('*')
    .in('offerte_id', ids)

  if (itemError) throw itemError

  return (data as DbOfferte[]).map((row) =>
    mapToWgbOfferte(row, ((items ?? []) as DbLineItem[]).filter((i) => i.offerte_id === row.id))
  )
}

/**
 * Tel vandaag aangemaakte offertes (globale dag-sequentie voor gedeelde nummering)
 */
export async function getTodayWgbOfferteCount(): Promise<number> {
  const admin = getAdminClient()
  const today = new Date().toISOString().split('T')[0]

  const { count, error } = await admin
    .from('offertes')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', `${today}T00:00:00`)
    .lte('created_at', `${today}T23:59:59`)

  if (error) throw error
  return count ?? 0
}

/**
 * Maak een nieuwe WGB offerte aan
 */
export async function createWgbOfferte(data: {
  number: string
  slug: string
  clientName: string
  clientContactPerson?: string
  clientEmail?: string
  clientPhone?: string
  items: { description: string; details?: string; quantity: number; unitPrice: number; sectionTitle?: string }[]
  subtotal: number
  btwPercentage: number
  btwAmount: number
  total: number
  introText?: string
  termsText?: string
  notes?: string
  passwordHash?: string
  validUntil: string
}): Promise<WgbOfferte> {
  const admin = getAdminClient()
  const now = new Date().toISOString()
  const today = now.split('T')[0]

  const { data: row, error } = await admin
    .from('offertes')
    .insert({
      number: data.number,
      company_id: 'wgb',
      client_name: data.clientName,
      client_contact_person: data.clientContactPerson ?? null,
      client_email: data.clientEmail ?? null,
      client_phone: data.clientPhone ?? null,
      client_address: null,
      client_kvk: null,
      client_btw: null,
      date: today,
      valid_until: data.validUntil,
      status: 'verzonden',
      subtotal: data.subtotal,
      btw_percentage: data.btwPercentage,
      btw_amount: data.btwAmount,
      total: data.total,
      notes: data.notes ?? null,
      intro_text: data.introText ?? null,
      terms_text: data.termsText ?? null,
      slug: data.slug,
      password_hash: data.passwordHash ?? null,
      is_public: true,
      created_at: now,
      updated_at: now,
    })
    .select()
    .single()

  if (error) throw error

  // Insert line items
  if (data.items.length > 0) {
    const { error: itemError } = await admin
      .from('line_items')
      .insert(
        data.items.map((item, idx) => ({
          offerte_id: (row as DbOfferte).id,
          sort_order: idx,
          description: item.description,
          details: item.details ?? null,
          quantity: item.quantity,
          unit_price: item.unitPrice,
          section_title: item.sectionTitle ?? null,
        }))
      )
    if (itemError) throw itemError
  }

  // Haal complete offerte op met items
  return (await getOfferteById((row as DbOfferte).id))!
}

/**
 * Haal offerte op via ID (admin)
 */
async function getOfferteById(id: string): Promise<WgbOfferte | null> {
  const admin = getAdminClient()

  const { data, error } = await admin
    .from('offertes')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return null

  const { data: items } = await admin
    .from('line_items')
    .select('*')
    .eq('offerte_id', id)

  return mapToWgbOfferte(data as DbOfferte, (items ?? []) as DbLineItem[])
}

// ── Public queries (anon key, voor offerte-viewer) ──────────────────

/**
 * Haal publieke offerte op via slug (voor de viewer pagina)
 */
export async function getPublicOfferteBySlug(slug: string): Promise<WgbOfferte | null> {
  const { data, error } = await supabase
    .from('offertes')
    .select('*')
    .eq('company_id', 'wgb')
    .eq('slug', slug)
    .eq('is_public', true)
    .single()

  if (error) return null

  const { data: items } = await supabase
    .from('line_items')
    .select('*')
    .eq('offerte_id', (data as DbOfferte).id)

  return mapToWgbOfferte(data as DbOfferte, (items ?? []) as DbLineItem[])
}

/**
 * Registreer goedkeuring door klant
 */
export async function approveOfferte(
  slug: string,
  clientName: string,
  clientEmail: string,
  clientIp: string,
  userAgent: string
): Promise<boolean> {
  const admin = getAdminClient()

  // Zoek offerte
  const { data: offerte, error: findError } = await admin
    .from('offertes')
    .select('id')
    .eq('slug', slug)
    .single()

  if (findError || !offerte) return false

  const now = new Date().toISOString()

  // Update offerte status
  const { error: updateError } = await admin
    .from('offertes')
    .update({
      status: 'geaccepteerd',
      approved_at: now,
      approved_by_name: clientName,
      approved_by_email: clientEmail,
      updated_at: now,
    })
    .eq('id', offerte.id)

  if (updateError) throw updateError

  // Insert approval record
  const { error: approvalError } = await admin
    .from('offerte_approvals')
    .insert({
      offerte_id: offerte.id,
      client_name: clientName,
      client_email: clientEmail,
      client_ip: clientIp,
      user_agent: userAgent,
      agreed_to_terms: true,
    })

  if (approvalError) {
    console.error('Approval record insert error:', approvalError)
    // Niet fataal - de offerte is al geupdate
  }

  return true
}
