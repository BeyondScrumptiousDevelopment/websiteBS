import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Live Mini Pancake & Croffle Stations — Beyond Scrumptious'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

export default async function Image() {
  const bgData = await fetch(new URL('./opengraph-bg.jpg', import.meta.url)).then((res) =>
    res.arrayBuffer()
  )
  const bgSrc = `data:image/jpeg;base64,${arrayBufferToBase64(bgData)}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative' }}>
        <img
          src={bgSrc}
          width={1200}
          height={630}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '64px',
            background:
              'linear-gradient(0deg, rgba(32,43,69,0.95) 15%, rgba(32,43,69,0.55) 55%, rgba(32,43,69,0.15) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#cfd7e2',
              marginBottom: 20,
            }}
          >
            Beyond Scrumptious
          </div>
          <div style={{ display: 'flex', fontSize: 62, fontWeight: 700, color: '#f8f8f8', lineHeight: 1.15 }}>
            Live Mini Pancake &amp; Croffle Stations
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
