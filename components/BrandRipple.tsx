export default function BrandRipple({ id = 'bs-ripple' }: { id?: string }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    >
      <defs>
        <pattern id={id} width="80" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10C20 0 20 0 40 10S60 20 80 10" fill="none" stroke="#F3F8FB" strokeOpacity=".12" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
