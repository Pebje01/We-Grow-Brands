'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Offerte {
  id: string
  slug: string
  bedrijfsnaam: string
  contactpersoon: string
  email: string
  telefoon: string
  type: string
  createdAt: string
  updatedAt: string
  isActive: boolean
  offerteType?: string
}

export default function OfferteAdminPage() {
  const [isAdminIP, setIsAdminIP] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [offertes, setOffertes] = useState<Offerte[]>([])
  const [loading, setLoading] = useState(false)
  const [clientIP, setClientIP] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [createError, setCreateError] = useState('')
  const [createdOfferte, setCreatedOfferte] = useState<any>(null)
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    contactpersoon: '',
    email: '',
    telefoon: '',
    type: 'groei',
    offerteType: 'without-photo',
  })

  // Check IP on mount
  useEffect(() => {
    const initIP = async () => {
      try {
        const res = await fetch('/api/auth/check-ip')
        const data = await res.json()
        setClientIP(data.clientIP)
        console.log('IP Check:', { clientIP: data.clientIP, isAdminIP: data.isAdminIP })

        if (data.isAdminIP) {
          setIsAdminIP(true)
          setIsAuthenticated(true)
          await loadOffertes()
        } else {
          setIsAdminIP(false)
        }
      } catch (err) {
        console.error('IP check failed:', err)
      }
    }
    initIP()
  }, [])

  const loadOffertes = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/offerte/list/', {
        headers: {
          Authorization: `Bearer ${password || 'Oosterschelde_01'}`,
        },
      })
      const data = await res.json()
      setOffertes(data.offertes || [])
    } catch (err) {
      console.error('Failed to load offertes:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'Oosterschelde_01'

    if (password === adminPassword) {
      setIsAuthenticated(true)
      setError('')
      await loadOffertes()
    } else {
      setError('Wachtwoord onjuist')
      setPassword('')
    }
  }

  const copyToClipboard = (slug: string) => {
    const domain = typeof window !== 'undefined' ? window.location.origin : ''
    const url = `${domain}/offerte/${slug}`
    navigator.clipboard.writeText(url)
    alert('Link gekopieerd naar clipboard!')
  }

  const handleCreateOfferte = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreateError('')
    setCreatedOfferte(null)

    try {
      const res = await fetch('/api/offerte/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setCreateError(data.error || 'Failed to create offerte')
        return
      }

      // Success - show created offerte with password
      setCreatedOfferte(data.offerte)
      setFormData({
        bedrijfsnaam: '',
        contactpersoon: '',
        email: '',
        telefoon: '',
        type: 'groei',
        offerteType: 'without-photo',
      })

      // Reload offertes list
      await loadOffertes()
    } catch (err) {
      setCreateError('Error creating offerte')
      console.error(err)
    }
  }

  const copyPassword = (pwd: string) => {
    navigator.clipboard.writeText(pwd)
    alert('Wachtwoord gekopieerd naar clipboard!')
  }

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-cream pt-44 pb-24 flex items-center justify-center px-4">
          <div className="bg-white rounded-[20px] shadow-lg p-12 max-w-md w-full">
            <h1 className="serif-header text-center text-green-dark mb-2">Admin Panel</h1>
            {!isAdminIP && (
              <>
                <p className="text-center text-text-muted mb-8">Voer het admin wachtwoord in</p>
                <form onSubmit={handleLogin}>
                  {error && <div className="text-red-600 text-sm mb-4 text-center">{error}</div>}
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Admin wachtwoord"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-[10px] mb-6 focus:outline-none focus:border-green-dark font-serif"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-dark text-white py-3 rounded-[10px] font-semibold hover:bg-opacity-90 transition"
                  >
                    Inloggen
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-44 pb-24">
        <section className="px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex justify-between items-start">
              <div>
                <h1 className="serif-header text-4xl text-green-dark mb-2">Offerte Admin</h1>
                <p className="text-text-muted">Beheer je offertes hier</p>
              </div>
              <button
                onClick={() => {
                  setShowCreateForm(!showCreateForm)
                  setCreatedOfferte(null)
                }}
                className="bg-green-dark text-white px-6 py-3 rounded-[10px] font-semibold hover:bg-opacity-90 transition"
              >
                {showCreateForm ? 'Annuleren' : 'Nieuw Offerte'}
              </button>
            </div>

            {showCreateForm && (
              <div className="bg-white rounded-[20px] shadow-lg p-8 mb-12">
                <h2 className="text-2xl font-semibold text-green-dark mb-6">Nieuw Offerte</h2>

                {createdOfferte && (
                  <div className="bg-green-50 border border-green-200 rounded-[10px] p-6 mb-6">
                    <h3 className="font-semibold text-green-dark mb-4">Offerte aangemaakt!</h3>
                    <div className="space-y-2 text-sm mb-4">
                      <p>
                        <span className="font-semibold">ID:</span> {createdOfferte.id}
                      </p>
                      <p>
                        <span className="font-semibold">Link:</span> /offerte/{createdOfferte.slug}
                      </p>
                      <p>
                        <span className="font-semibold">Wachtwoord:</span> {createdOfferte.wachtwoord}
                        <button
                          onClick={() => copyPassword(createdOfferte.wachtwoord)}
                          className="ml-2 text-green-dark hover:text-green-dark/70 font-semibold underline"
                        >
                          Kopieren
                        </button>
                      </p>
                    </div>
                    <p className="text-xs text-text-muted">
                      Dit wachtwoord wordt niet opgeslagen. Zorg dat de klant dit ontvangt!
                    </p>
                  </div>
                )}

                {createError && (
                  <div className="bg-red-50 border border-red-200 rounded-[10px] p-4 mb-6 text-red-700 text-sm">
                    {createError}
                  </div>
                )}

                <form onSubmit={handleCreateOfferte} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Bedrijfsnaam *
                    </label>
                    <input
                      type="text"
                      value={formData.bedrijfsnaam}
                      onChange={(e) =>
                        setFormData({ ...formData, bedrijfsnaam: e.target.value.toLowerCase() })
                      }
                      placeholder="bedrijfsnaam"
                      required
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Contactpersoon *
                    </label>
                    <input
                      type="text"
                      value={formData.contactpersoon}
                      onChange={(e) =>
                        setFormData({ ...formData, contactpersoon: e.target.value })
                      }
                      placeholder="Naam contactpersoon"
                      required
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email adres"
                      required
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      value={formData.telefoon}
                      onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
                      placeholder="Telefoonnummer"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-2">
                        Type *
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                      >
                        <option value="essentials">Essentials (€999)</option>
                        <option value="groei">Groei (€1.450)</option>
                        <option value="premium">Premium (€2.650)</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-2">
                        Fotografie
                      </label>
                      <select
                        value={formData.offerteType}
                        onChange={(e) =>
                          setFormData({ ...formData, offerteType: e.target.value })
                        }
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-[10px] focus:outline-none focus:border-green-dark"
                      >
                        <option value="without-photo">Zonder foto</option>
                        <option value="with-photo">Met foto</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-dark text-white py-3 rounded-[10px] font-semibold hover:bg-opacity-90 transition mt-6"
                  >
                    Offerte Aanmaken
                  </button>
                </form>
              </div>
            )}

            {loading ? (
              <div className="text-center py-12">
                <p className="text-text-muted">Offertes laden...</p>
              </div>
            ) : offertes.length === 0 ? (
              <div className="bg-white rounded-[20px] p-12 text-center">
                <p className="text-text-muted">Nog geen offertes aangemaakt</p>
              </div>
            ) : (
              <div className="bg-white rounded-[20px] shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase">ID</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Bedrijf</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Contactpersoon</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Datum</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Acties</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offertes.map((offerte) => (
                      <tr key={offerte.slug} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-text-dark font-medium">
                          <Link
                            href={`/offerte/${offerte.slug}`}
                            className="text-green-dark hover:text-green-dark/70 hover:underline"
                          >
                            {offerte.id}
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-text-dark">{offerte.bedrijfsnaam}</td>
                        <td className="px-6 py-4 text-sm text-text-muted">{offerte.contactpersoon}</td>
                        <td className="px-6 py-4 text-sm text-text-muted">{offerte.email}</td>
                        <td className="px-6 py-4 text-sm text-text-dark capitalize">{offerte.type}</td>
                        <td className="px-6 py-4 text-sm text-text-muted">
                          {new Date(offerte.createdAt).toLocaleDateString('nl-NL')}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button
                            onClick={() => copyToClipboard(offerte.slug)}
                            className="text-green-dark hover:text-green-dark/70 font-semibold"
                          >
                            Link kopieren
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
