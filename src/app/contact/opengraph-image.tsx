import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Contact - We Grow Brands'
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
          backgroundColor: '#1a1a1a',
          padding: '40px 80px',
        }}
      >
        {/* Title */}
        <span
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '30px',
          }}
        >
          Neem Contact Op
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
          Vrijblijvend gesprek over jouw nieuwe website
        </span>

        {/* Contact info */}
        <div
          style={{
            display: 'flex',
            gap: '60px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>📧</span>
            <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.8)' }}>hello@wegrowbrands.online</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>📞</span>
            <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.8)' }}>06 36 16 26 39</span>
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
              backgroundColor: '#EAD7FF',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
            }}
          >
            <span style={{ fontSize: '24px', color: '#03483A', fontWeight: 'bold' }}>W</span>
          </div>
          <span style={{ fontSize: '22px', color: 'white', opacity: 0.7 }}>
            We Grow Brands
          </span>
        </div>

        {/* Decorative */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            width: '100px',
            height: '100px',
            backgroundColor: '#EAD7FF',
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
