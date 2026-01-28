import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Check if request is from admin IP
  const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

  const envVars = {
    RESEND_API_KEY: process.env.RESEND_API_KEY ? `${process.env.RESEND_API_KEY.substring(0, 10)}...` : 'NOT_SET',
    OFFERTE_NOTIFICATION_EMAIL: process.env.OFFERTE_NOTIFICATION_EMAIL || 'NOT_SET',
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? '***SET***' : 'NOT_SET',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    clientIp,
    environment: envVars,
    allKeys: Object.keys(process.env)
      .filter((k) => k.includes('RESEND') || k.includes('EMAIL') || k.includes('OFFERTE') || k.includes('ADMIN'))
      .reduce(
        (acc, key) => {
          acc[key] = process.env[key] ? `${process.env[key].substring(0, 10)}...` : 'NOT_SET'
          return acc
        },
        {} as Record<string, string>
      ),
  })
}
