export default function BrandPiping({
  tone = 'onLight',
  shape = 'scallop',
}: {
  /** 'onLight' (default) for the surface/mist pages — a slate line.
   *  'onNavy' for the navy bands — a mist line. */
  tone?: 'onLight' | 'onNavy'
  /** 'scallop' (default) — buttercream piping, for borders/edges.
   *  'wave' — the ripple curve as a thin divider line. */
  shape?: 'scallop' | 'wave'
}) {
  const stroke = tone === 'onNavy' ? '#F3F8FB' : '#3F5478'
  const strokeOpacity = tone === 'onNavy' ? '.3' : '.5'
  const patternId = shape === 'wave' ? 'bs-piping-wave' : 'bs-piping'

  return (
    <svg aria-hidden="true" className="w-full h-6">
      <defs>
        <pattern id={patternId} width={shape === 'wave' ? 80 : 48} height="24" patternUnits="userSpaceOnUse">
          {shape === 'wave' ? (
            <path
              d="M0 12C20 2 20 2 40 12S60 22 80 12"
              fill="none"
              stroke={stroke}
              strokeOpacity={strokeOpacity}
              strokeWidth="1.2"
            />
          ) : (
            <path
              d="M0 24A12 12 0 0 1 24 24A12 12 0 0 1 48 24"
              fill="none"
              stroke={stroke}
              strokeOpacity={strokeOpacity}
              strokeWidth="1.2"
            />
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
