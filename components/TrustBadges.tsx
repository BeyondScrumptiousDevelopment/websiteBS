import { FaStar } from 'react-icons/fa'

const badges = [
  'Handmade To Order',
  'Gelatine-Free',
  'Pure Vegetarian & Eggless',
  'Custom Designs',
  'Based In Harrow, London',
]

export default function TrustBadges() {
  const track = [...badges, ...badges]

  return (
    <div className="bg-[#cfd7e2] text-[#202b45] overflow-hidden py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0">
            {track.map((badge, i) => {
              const isFeatured = badge === 'Pure Vegetarian & Eggless'
              return (
                <div
                  key={`${copy}-${i}`}
                  className="flex items-center gap-3 px-8 whitespace-nowrap"
                >
                  <FaStar
                    className={isFeatured ? 'text-[#202b45]' : 'text-[#202b45]/60'}
                    size={isFeatured ? 16 : 12}
                  />
                  <span
                    className={`uppercase tracking-[0.15em] ${
                      isFeatured
                        ? 'text-base font-bold'
                        : 'text-sm font-semibold text-[#202b45]/80'
                    }`}
                  >
                    {badge}
                  </span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
