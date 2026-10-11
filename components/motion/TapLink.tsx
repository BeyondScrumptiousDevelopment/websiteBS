'use client'

import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'

/** A drop-in <a> replacement that gives a tactile press effect on tap. */
export function TapLink({ children, ...props }: ComponentProps<typeof motion.a>) {
  return (
    <motion.a whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }} {...props}>
      {children}
    </motion.a>
  )
}

/** Same, for native <button> elements (e.g. form submit buttons). */
export function TapButton({
  children,
  ...props
}: ComponentProps<typeof motion.button>) {
  return (
    <motion.button whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }} {...props}>
      {children}
    </motion.button>
  )
}
