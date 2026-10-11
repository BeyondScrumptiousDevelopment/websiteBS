'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/447933903000"
      target="_blank"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[100] bg-[#202b45] hover:bg-[#8992a3] transition-colors p-5 rounded-full shadow-2xl"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#202b45]"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: 'easeOut' }}
      />
      <FaWhatsapp className="relative text-3xl text-white" />
    </motion.a>
  )
}
