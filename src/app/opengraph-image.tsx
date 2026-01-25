import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'We Grow Brands - Webdesign Bureau'
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
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#EAD7FF',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
            }}
          >
            <span style={{ fontSize: '48px', color: '#03483A', fontWeight: 'bold' }}>W</span>
          </div>
          <span style={{ fontSize: '48px', color: 'white', fontWeight: 'bold' }}>
            We Grow Brands
          </span>
        </div>

        {/* Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            Website Laten Maken
          </span>
          <span
            style={{
              fontSize: '32px',
              color: '#EAD7FF',
            }}
          >
            Professionele websites vanaf €999
          </span>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            width: '120px',
            height: '120px',
            backgroundColor: '#EAD7FF',
            borderRadius: '50%',
            opacity: 0.2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            width: '80px',
            height: '80px',
            backgroundColor: '#EAD7FF',
            borderRadius: '50%',
            opacity: 0.15,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
