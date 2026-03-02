import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    {
      error: 'Deze endpoint is verwijderd. Gebruik de canonieke offertepagina.',
    },
    {
      status: 410,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow, noarchive',
        'Cache-Control': 'no-store',
      },
    }
  )
}
