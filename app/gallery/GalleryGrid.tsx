'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { urlFor, altTextFor } from '../../sanity/lib/image'
import { RevealGroup, RevealItem } from '../../components/motion/Reveal'
import { TapButton } from '../../components/motion/TapLink'

type Product = {
  _id: string
  caption?: string
  category?: string
  image: any
}

const tags = [
  { label: 'All', value: 'all' },
  { label: 'Cakes', value: 'cakes' },
  { label: 'Cupcakes', value: 'cupcakes' },
  { label: 'Desserts', value: 'desserts' },
  { label: 'Dessert Tables', value: 'dessert-tables' },
  { label: 'Live Desserts', value: 'live-desserts' },
  { label: 'Croffle Station', value: 'croffle' },
  { label: 'Events', value: 'events' },
]

export default function GalleryGrid({ products }: { products: Product[] }) {
  const [activeTag, setActiveTag] = useState('all')
  const [lightbox, setLightbox] = useState<Product | null>(null)

  const filtered =
    activeTag === 'all'
      ? products
      : products.filter((p) => p.category === activeTag)

  return (
    <>
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <TapButton
              key={tag.value}
              onClick={() => setActiveTag(tag.value)}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-[0.15em] transition border ${
                activeTag === tag.value
                  ? 'bg-[#f8f8f8] text-[#202b45] border-[#f8f8f8]'
                  : 'border-[#f8f8f8]/30 text-[#f8f8f8]/70 hover:bg-[#f8f8f8]/10'
              }`}
            >
              {tag.label}
            </TapButton>
          ))}
        </div>
      </section>

      <section className="pb-32 px-6">
        <RevealGroup
          className="max-w-7xl mx-auto columns-1 md:columns-3 gap-6 space-y-6"
          stagger={0.04}
        >
          {filtered.map((product) => (
            <RevealItem key={product._id} className="w-full break-inside-avoid" y={16}>
              <motion.button
                onClick={() => setLightbox(product)}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="w-full overflow-hidden rounded-[2rem] shadow-2xl bg-[#f8f8f8] text-left"
              >
                <img
                  src={urlFor(product.image).width(900).url()}
                  alt={altTextFor(product)}
                  loading="lazy"
                  className="w-full hover:scale-[1.02] transition duration-300"
                />

                {product.caption && (
                  <div className="p-6 text-[#202b45]">
                    <p className="text-sm">{product.caption}</p>
                  </div>
                )}
              </motion.button>
            </RevealItem>
          ))}
        </RevealGroup>

        {filtered.length === 0 && (
          <p className="text-center text-[#f8f8f8]/50 mt-16">
            No images in this category yet.
          </p>
        )}
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-3xl text-white"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={urlFor(lightbox.image).width(1600).url()}
              alt={altTextFor(lightbox)}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
