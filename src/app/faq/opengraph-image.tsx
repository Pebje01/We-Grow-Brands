import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'FAQ - We Grow Brands'
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
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#03483A',
            marginBottom: '20px',
          }}
        >
          Veelgestelde Vragen
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: '32px',
            color: '#1a1a1a',
            opacity: 0.7,
            marginBottom: '50px',
          }}
        >
          Alles over website laten maken, prijzen en levertijd
        </span>

        {/* Question icons */}
        <div
          style={{
            display: 'flex',
            gap: '30px',
          }}
        >
          {['💰', '⏱️', '🎨', '🔧'].map((emoji, i) => (
            <div
              key={i}
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#03483A',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
              }}
            >
              {emoji}
            </div>
          ))}
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
          <span style={{ fontSize: '22px', color: '#03483A', opacity: 0.6 }}>
            We Grow Brands
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
