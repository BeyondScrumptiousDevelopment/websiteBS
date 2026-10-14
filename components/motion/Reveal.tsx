'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const

/** Fades + slides a single element in once, as it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  /** Render as a different tag (e.g. "section") to preserve landmarks. */
  as?: 'div' | 'section'
}) {
  const MotionTag = as === 'section' ? motion.section : motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    >
      {children}
    </MotionTag>
  )
}

/** Wraps a grid/list; each direct RevealItem child staggers in behind it. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

/** A single card/row inside a RevealGroup. Drop-in replacement for a div. */
export function RevealItem({
  children,
  className,
  y = 24,
  id,
}: {
  children: ReactNode
  className?: string
  y?: number
  id?: string
}) {
  return (
    <motion.div
      id={id}
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
      }}
    >
      {children}
    </motion.div>
  )
}
