/** Diamond lattice — reserved for waffle-iron stations (croffles, Belgian
 *  waffles) only. Never used as the general-purpose background pattern. */
export default function BrandLattice({
  id = 'bs-lattice',
  tone = 'onLight',
}: {
  id?: string
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
        <pattern id={id} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M0 16L16 0L32 16L16 32Z" fill="none" stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth=".8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
