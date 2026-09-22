'use client'

import { useEffect, useRef } from 'react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Some mobile browsers ignore the declarative autoplay attributes after
    // React hydrates the element, so force it explicitly as a fallback.
    video.muted = true
    video.play().catch(() => {
      // Autoplay blocked (e.g. iOS Low Power Mode) — nothing to do, the
      // poster/first frame still shows.
    })
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  )
}
