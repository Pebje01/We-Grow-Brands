#!/usr/bin/env node
/**
 * Eenmalig migratiescript: JSON offertes → Supabase
 *
 * Gebruik:
 *   node scripts/migrate-json-to-supabase.mjs
 *
 * Vereist: SUPABASE_SERVICE_ROLE_KEY in .env.local
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const PACKAGE_ITEMS = {
  premium: [
    { description: 'Premium Website Design', details: 'Volledig maatwerk website met uitgebreide branding', quantity: 1, unitPrice: 2650, sectionTitle: 'Website & Design' },
    { description: "Onbeperkt aantal pagina's", details: 'Volledig op maat gebouwd', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
    { description: 'Responsive design', details: 'Desktop, tablet & mobiel', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
    { description: 'CMS integratie', details: 'Zelf content beheren', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
    { description: 'Uitgebreide animaties & interacties', details: 'Premium feel en gebruikerservaring', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
    { description: 'Uitgebreide SEO-optimalisatie', details: 'Keyword research, meta tags, sitemap, technische SEO', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
    { description: 'Google Analytics & Search Console', details: 'Inzicht in bezoekers en prestaties', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
    { description: 'Performance optimalisatie', details: 'Snelle laadtijden en Core Web Vitals', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
    { description: 'Onbeperkt feedback rondes', details: 'Tot je 100% tevreden bent', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
    { description: 'Training & documentatie', details: 'Leer je website zelf beheren', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
  ],
  groei: [
    { description: 'Professioneel Website Design', details: 'Custom gebouwde website met uitgebreide branding', quantity: 1, unitPrice: 1450, sectionTitle: 'Website & Design' },
    { description: "Tot 8 pagina's", details: 'Home, Over ons, Diensten, Portfolio, Contact, etc.', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
    { description: 'Responsive design', details: 'Desktop, tablet & mobiel', quantity: 1, unitPrice: 0, sectionTitle: 'Website & Design' },
    { description: 'Uitgebreide SEO-optimalisatie', details: 'Keyword research, meta tags, sitemap', quantity: 1, unitPrice: 0, sectionTitle: 'SEO & Technisch' },
    { description: 'Drie feedback rondes', details: 'Voor de website', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
    { description: 'Begeleiding & technische ondersteuning', details: 'Via email en WhatsApp', quantity: 1, unitPrice: 0, sectionTitle: 'Support' },
  ],
}

async function migrate() {
  console.log('Lees JSON offertes...')
  const jsonData = JSON.parse(readFileSync('src/data/offertes.json', 'utf-8'))

  for (const entry of jsonData) {
    const items = PACKAGE_ITEMS[entry.type] || []
    const subtotal = items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0)
    const btwPercentage = 21
    const btwAmount = Math.round(subtotal * (btwPercentage / 100) * 100) / 100
    const total = subtotal + btwAmount

    const validUntil = new Date(entry.createdAt)
    validUntil.setDate(validUntil.getDate() + 14)

    console.log(`\nMigreer: ${entry.id} (${entry.bedrijfsnaam})`)

    // Check of slug al bestaat
    const { data: existing } = await supabase
      .from('offertes')
      .select('id')
      .eq('slug', entry.slug)
      .single()

    if (existing) {
      console.log(`  → Overgeslagen (slug "${entry.slug}" bestaat al)`)
      continue
    }

    // Insert offerte
    const { data: row, error } = await supabase
      .from('offertes')
      .insert({
        number: entry.id,
        company_id: 'wgb',
        client_name: entry.bedrijfsnaam,
        client_contact_person: entry.contactpersoon,
        client_email: entry.email,
        client_phone: entry.telefoon,
        date: entry.createdAt.split('T')[0],
        valid_until: validUntil.toISOString().split('T')[0],
        status: 'verzonden',
        subtotal,
        btw_percentage: btwPercentage,
        btw_amount: btwAmount,
        total,
        notes: `Pakket: ${entry.type}${entry.offerteType ? ` | Fotografie: ${entry.offerteType}` : ''}`,
        intro_text: `Beste ${entry.contactpersoon}, bedankt voor je aanvraag! Hieronder vind je onze offerte met alle details.`,
        terms_text: 'Betaling: 50% aanbetaling bij akkoord, 50% bij oplevering\nTimeline: 2-4 weken na kickoff en content briefing\nGeldigheid: Deze offerte is geldig voor 14 dagen na datum\nRevisions: 2 feedback ronden voor webdesign',
        slug: entry.slug,
        password_hash: entry.wachtwoord || null,
        is_public: true,
        created_at: entry.createdAt,
        updated_at: entry.updatedAt,
      })
      .select()
      .single()

    if (error) {
      console.error(`  ✗ Fout: ${error.message}`)
      continue
    }

    console.log(`  ✓ Offerte aangemaakt (id: ${row.id})`)

    // Insert line items
    if (items.length > 0) {
      const { error: itemError } = await supabase
        .from('line_items')
        .insert(
          items.map((item, idx) => ({
            offerte_id: row.id,
            sort_order: idx,
            description: item.description,
            details: item.details ?? null,
            quantity: item.quantity,
            unit_price: item.unitPrice,
            section_title: item.sectionTitle ?? null,
          }))
        )

      if (itemError) {
        console.error(`  ✗ Line items fout: ${itemError.message}`)
      } else {
        console.log(`  ✓ ${items.length} line items toegevoegd`)
      }
    }
  }

  console.log('\n✓ Migratie voltooid!')
  console.log('Je kunt src/data/offertes.json nu verwijderen of hernoemen naar .backup')
}

migrate().catch(console.error)
