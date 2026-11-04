export default function BrandCurve({ side = 'left' }: { side?: 'left' | 'right' }) {
  if (side === 'left') {
    return (
      <svg
        width="220"
        height="320"
        viewBox="0 0 300 400"
        className="absolute left-0 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <path d="M0 120C80 140 150 220 190 330C205 370 215 390 225 400L0 400Z" fill="#C5D7EC" />
        <path d="M0 180C70 190 120 260 155 340C170 375 185 392 195 400L0 400Z" fill="#9BB3D3" />
      </svg>
    )
  }
  return (
    <svg
      width="190"
      height="360"
      viewBox="0 0 260 500"
      className="absolute right-0 bottom-0 pointer-events-none"
      aria-hidden="true"
    >
      <path d="M260 0C200 80 230 200 180 300C150 360 90 430 60 500L260 500Z" fill="#C5D7EC" />
      <path d="M260 120C230 220 240 300 200 370C175 420 140 470 120 500L260 500Z" fill="#9BB3D3" />
    </svg>
  )
}
