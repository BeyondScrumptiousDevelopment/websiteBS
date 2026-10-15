'use client'

import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Props = {
  src: string
  alt: string
  className?: string
  /** Stagger the float/shadow loops so multiple cutouts don't move in lockstep. */
  floatDelay?: number
}

/**
 * A background-removed food cutout that tilts toward the cursor and floats
 * gently in place, with a soft pulsing shadow beneath — gives a flat product
 * photo a "popping off the page" feel. Respects prefers-reduced-motion via
 * the app-wide MotionConfig.
 */
export default function PopDessert({ src, alt, className = '', floatDelay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 150,
    damping: 15,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 150,
    damping: 15,
  })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ perspective: 900 }}
    >
      {/* soft contact shadow, pulsing opposite the float for a sense of lift */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 bottom-[6%] -translate-x-1/2 w-[65%] h-[8%] rounded-full bg-black/40 blur-xl"
        animate={{ scaleX: [1, 0.82, 1], opacity: [0.55, 0.3, 0.55] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
        />
      </motion.div>
    </div>
  )
}
