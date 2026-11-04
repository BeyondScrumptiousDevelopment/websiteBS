export default function BrandPiping() {
  return (
    <svg aria-hidden="true" className="w-full h-6" viewBox="0 0 48 24" preserveAspectRatio="none">
      <defs>
        <pattern id="bs-piping" width="48" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 24A12 12 0 0 1 24 24A12 12 0 0 1 48 24"
            fill="none"
            stroke="#3F5478"
            strokeOpacity=".5"
            strokeWidth="1.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bs-piping)" />
    </svg>
  )
}
