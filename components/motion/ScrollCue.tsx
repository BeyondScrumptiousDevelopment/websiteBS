'use client'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

/** A small bouncing chevron hinting that there's more content to scroll to. */
export default function ScrollCue({ targetId }: { targetId: string }) {
  return (
    <a
      href={`#${targetId}`}
      aria-label="Scroll down"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#f8f8f8]/60 hover:text-[#f8f8f8] transition-colors"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaChevronDown className="text-xl" />
      </motion.div>
    </a>
  )
}
