import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Extract client IP from headers
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const clientIP = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || 'unknown'

  // Get admin IPs from environment (comma-separated)
  const ADMIN_IPS = (process.env.ADMIN_IP || '83.82.102.98').split(',').map(ip => ip.trim())

  // Check if client IP matches any admin IP
  const isAdminIP = ADMIN_IPS.includes(clientIP)

  return NextResponse.json({
    isAdminIP,
    clientIP,
  })
}
