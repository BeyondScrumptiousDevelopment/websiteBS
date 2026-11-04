export default function BrandRipple({
  id = 'bs-ripple',
  tone = 'onDark',
}: {
  id?: string
  /** 'onDark' (default) for the navy bands — a light stroke. 'onLight' for
   *  the light Surface pages — a navy stroke, so the swirl still shows up. */
  tone?: 'onDark' | 'onLight'
}) {
  const stroke = tone === 'onLight' ? '#19253F' : '#F3F8FB'
  const strokeOpacity = tone === 'onLight' ? '.1' : '.12'

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
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
