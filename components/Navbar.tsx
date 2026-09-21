'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '/cakes', label: 'Cakes' },
  { href: '/desserts', label: 'Desserts & Dessert Tables' },
  { href: '/live-desserts', label: 'Live Desserts' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-8 backdrop-blur-md bg-[#202b45]/20">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
          className="logo-font text-3xl md:text-4xl"
        >
          Beyond Scrumptious
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-[#f8f8f8]/80">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
          ))}

          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#f8f8f8] text-[#202b45] hover:bg-[#cfd7e2] transition"
          >
            Enquire Now
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden flex flex-col gap-6 mt-8 text-sm uppercase tracking-[0.3em] text-[#f8f8f8]/80 bg-[#202b45] p-6 rounded-3xl">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}

          <a
            href="/contact"
            className="px-6 py-4 rounded-full bg-[#f8f8f8] text-[#202b45] text-center normal-case tracking-normal"
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  )
}
