export default function BrandRipple({
  id = 'bs-ripple',
  tone = 'onLight',
}: {
  id?: string
  /** 'onLight' (default) for the surface/mist pages — a slate line.
   *  'onNavy' for the navy bands — a mist line. */
  tone?: 'onLight' | 'onNavy'
}) {
  const stroke = tone === 'onNavy' ? '#F3F8FB' : '#3F5478'
  const strokeOpacity = tone === 'onNavy' ? '.3' : '.5'

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <defs>
        <pattern id={id} width="80" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10C20 0 20 0 40 10S60 20 80 10" fill="none" stroke={stroke} strokeOpacity={strokeOpacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
