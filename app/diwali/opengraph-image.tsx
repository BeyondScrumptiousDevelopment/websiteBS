import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Diwali 2026 — Naturally Sweet Cupcakes — Beyond Scrumptious'
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
              'linear-gradient(0deg, rgba(27,23,18,0.95) 20%, rgba(27,23,18,0.6) 55%, rgba(27,23,18,0.1) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#c9973f',
              marginBottom: 20,
            }}
          >
            Diwali 2026
          </div>
          <div style={{ display: 'flex', fontSize: 62, fontWeight: 700, color: '#f3e3c3', lineHeight: 1.15 }}>
            Naturally Sweet Cupcakes
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
