'use client'

import { useEffect, useState } from 'react'
import { client } from '../sanity/lib/client'
import { urlFor } from '../sanity/lib/image'

type Props = {
  category: string | string[]
  title?: string
  eyebrow?: string
}

export default function GallerySlideshow({ category, title, eyebrow }: Props) {
  const [images, setImages] = useState<any[]>([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let active = true
    const categories = Array.isArray(category) ? category : [category]

    client
      .fetch(
        `*[_type == "product" && category in $categories] | order(order asc, _createdAt desc){
          _id, caption, image
        }`,
        { categories }
      )
      .then((data) => {
        if (active) setImages(data)
      })
      .catch(() => {
        if (active) setImages([])
      })

    return () => {
      active = false
    }
  }, [JSON.stringify(category)])

  useEffect(() => {
    if (images.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [images.length])

  if (images.length === 0) return null

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {(eyebrow || title) && (
          <div className="text-center mb-10">
            {eyebrow && (
              <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-4">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="heading-font text-4xl md:text-5xl">{title}</h2>
            )}
          </div>
        )}

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/9] bg-black">
          {images.map((img, i) => (
            <img
              key={img._id}
              src={urlFor(img.image).width(1400).url()}
              alt={img.caption || title || 'Beyond Scrumptious'}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {images.length > 1 && (
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-white' : 'w-2.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
