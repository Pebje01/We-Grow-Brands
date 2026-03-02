import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Website Pakketten - We Grow Brands'
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
          padding: '40px 60px',
        }}
      >
        {/* Title */}
        <span
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '50px',
          }}
        >
          Website Pakketten
        </span>

        {/* Package cards */}
        <div
          style={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
          }}
        >
          {/* Essentials */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(234, 215, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px 40px',
              border: '2px solid rgba(234, 215, 255, 0.3)',
            }}
          >
            <span style={{ fontSize: '28px', color: '#EAD7FF', marginBottom: '10px' }}>Essentials</span>
            <span style={{ fontSize: '48px', color: 'white', fontWeight: 'bold' }}>€999</span>
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)' }}>tot 3 pagina&apos;s</span>
          </div>

          {/* Groei - highlighted */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#EAD7FF',
              borderRadius: '20px',
              padding: '30px 40px',
              transform: 'scale(1.05)',
            }}
          >
            <span style={{ fontSize: '14px', color: '#03483A', marginBottom: '5px', fontWeight: 'bold' }}>POPULAIR</span>
            <span style={{ fontSize: '28px', color: '#03483A', marginBottom: '10px' }}>Groei</span>
            <span style={{ fontSize: '48px', color: '#03483A', fontWeight: 'bold' }}>€1.450</span>
            <span style={{ fontSize: '18px', color: 'rgba(3,72,58,0.7)' }}>tot 8 pagina&apos;s</span>
          </div>

          {/* Premium */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(234, 215, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px 40px',
              border: '2px solid rgba(234, 215, 255, 0.3)',
            }}
          >
            <span style={{ fontSize: '28px', color: '#EAD7FF', marginBottom: '10px' }}>Premium</span>
            <span style={{ fontSize: '48px', color: 'white', fontWeight: 'bold' }}>€2.650+</span>
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)' }}>maatwerk</span>
          </div>
        </div>

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
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
