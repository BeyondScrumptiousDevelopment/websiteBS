'use client'

import { MotionConfig } from 'framer-motion'

// Honors the OS "reduce motion" accessibility setting for every
// framer-motion animation in the app, without each component needing to
// check it individually.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
