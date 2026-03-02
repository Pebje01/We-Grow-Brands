import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = '15% Korting op je Website - We Grow Brands'
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
          position: 'relative',
        }}
      >
        {/* Confetti/celebration dots */}
        <div style={{ position: 'absolute', top: '60px', left: '100px', fontSize: '40px' }}>🎉</div>
        <div style={{ position: 'absolute', top: '80px', right: '120px', fontSize: '36px' }}>✨</div>
        <div style={{ position: 'absolute', bottom: '100px', left: '150px', fontSize: '32px' }}>🎊</div>
        <div style={{ position: 'absolute', bottom: '80px', right: '100px', fontSize: '38px' }}>🎉</div>

        {/* Korting badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EAD7FF',
            borderRadius: '100px',
            padding: '20px 60px',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#03483A',
            }}
          >
            15% KORTING
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            fontSize: '48px',
            color: 'white',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Op je nieuwe website!
        </span>

        {/* CTA text */}
        <span
          style={{
            fontSize: '28px',
            color: '#EAD7FF',
            opacity: 0.9,
          }}
        >
          Vul het formulier in en ontvang direct je kortingscode
        </span>

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '24px', color: 'white', opacity: 0.7 }}>
            We Grow Brands
          </span>
        </div>

        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '200px',
            height: '200px',
            backgroundColor: '#EAD7FF',
            borderRadius: '50%',
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '180px',
            height: '180px',
            backgroundColor: '#EAD7FF',
            borderRadius: '50%',
            opacity: 0.08,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
