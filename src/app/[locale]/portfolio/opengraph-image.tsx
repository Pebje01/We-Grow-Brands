import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Portfolio - We Grow Brands'
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
          backgroundColor: '#03483A',
          padding: '40px 80px',
        }}
      >
        {/* Title */}
        <span
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          Portfolio
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: '32px',
            color: '#EAD7FF',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          Bekijk onze website projecten
        </span>

        {/* Mock project cards */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: '280px',
                height: '180px',
                backgroundColor: 'rgba(234, 215, 255, 0.15)',
                borderRadius: '16px',
                border: '2px solid rgba(234, 215, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#EAD7FF',
                  borderRadius: '12px',
                  opacity: 0.5,
                }}
              />
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
          <span style={{ fontSize: '22px', color: 'white', opacity: 0.6 }}>
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
