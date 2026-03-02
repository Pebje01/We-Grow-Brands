import { createClient } from '@supabase/supabase-js'

// Publieke client (anon key) — voor offerte-viewer en client-facing pagina's
// Lazy geïnitialiseerd zodat de build niet faalt zonder env vars
let _supabase: ReturnType<typeof createClient> | null = null
export function getSupabase() {
  if (!_supabase) {
    _supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }
  return _supabase
}

// Admin client (service role key) — alleen server-side, bypassed RLS
// Gebruik dit voor admin operaties: offertes aanmaken, lijst ophalen, etc.
export function getAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceRoleKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is niet geconfigureerd')
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    serviceRoleKey
  )
}
