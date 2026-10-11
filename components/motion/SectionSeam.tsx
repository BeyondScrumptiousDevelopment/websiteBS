'use client'

import { motion } from 'framer-motion'

/**
 * A thin accent line that draws itself once, as it scrolls into view —
 * marks the seam between two sections with a different background colour.
 * Animates only `scaleX`/`opacity`, so it's cheap on mobile.
 */
export default function SectionSeam({
  color = '#c9973f',
}: {
  color?: string
}) {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <motion.div
        className="h-px w-32 mx-auto"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      />
    </div>
  )
}
