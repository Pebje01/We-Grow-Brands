import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Website Laten Maken - We Grow Brands'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFBF5',
          padding: '40px 80px',
        }}
      >
        {/* Title */}
        <span
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#03483A',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Professionele Website
        </span>
        <span
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#03483A',
            marginBottom: '40px',
          }}
        >
          Laten Maken
        </span>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>✓</span>
            <span style={{ fontSize: '24px', color: '#1a1a1a' }}>99.9% Uptime</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>✓</span>
            <span style={{ fontSize: '24px', color: '#1a1a1a' }}>Snelle laadtijden</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>✓</span>
            <span style={{ fontSize: '24px', color: '#1a1a1a' }}>SEO-geoptimaliseerd</span>
          </div>
        </div>

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#03483A',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
            }}
          >
            <span style={{ fontSize: '24px', color: '#EAD7FF', fontWeight: 'bold' }}>W</span>
          </div>
          <span style={{ fontSize: '22px', color: '#03483A' }}>
            We Grow Brands
          </span>
        </div>

        {/* Decorative */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '200px',
            height: '200px',
            backgroundColor: '#EAD7FF',
            borderRadius: '50%',
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '150px',
            height: '150px',
            backgroundColor: '#03483A',
            borderRadius: '50%',
            opacity: 0.1,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
