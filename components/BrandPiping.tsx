export default function BrandPiping({
  tone = 'onLight',
}: {
  /** 'onLight' (default) for the surface/mist pages — a slate line.
   *  'onNavy' for the navy bands — a mist line. */
  tone?: 'onLight' | 'onNavy'
}) {
  const stroke = tone === 'onNavy' ? '#F3F8FB' : '#3F5478'
  const strokeOpacity = tone === 'onNavy' ? '.3' : '.5'

  return (
    <svg aria-hidden="true" className="w-full h-6" viewBox="0 0 48 24" preserveAspectRatio="none">
      <defs>
        <pattern id="bs-piping" width="48" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 24A12 12 0 0 1 24 24A12 12 0 0 1 48 24"
            fill="none"
            stroke={stroke}
            strokeOpacity={strokeOpacity}
            strokeWidth="1.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bs-piping)" />
    </svg>
  )
}
