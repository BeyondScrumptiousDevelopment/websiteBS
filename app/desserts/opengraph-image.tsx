import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Desserts & Dessert Tables — Beyond Scrumptious'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#202b45',
          color: '#f8f8f8',
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          Desserts & Dessert Tables
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            lineHeight: 1,
            marginTop: 32,
            color: '#cfd7e2',
            textTransform: 'uppercase',
            letterSpacing: 8,
          }}
        >
          Beyond Scrumptious · Harrow, London
        </div>
      </div>
    ),
    { ...size }
  )
}
