'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// Default slider images
const defaultHeroImages = [
  {
    src: '/padbooth-hero.png',
    alt: 'Friends laughing inside a Padbooth photobooth',
  },
  {
    src: '/padbooth-gallery.png',
    alt: 'Padbooth photobooth moment collage',
  },
]

export function Hero({ images = defaultHeroImages }: { images?: Array<{ src: string; alt: string }> }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto slide setiap 4 detik
  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] sm:min-h-screen w-full overflow-hidden flex flex-col justify-end pb-8 sm:pb-12 px-4 sm:px-12 md:px-16 text-white"
    >
      {/* 1. Fullscreen Background Photo Slider */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={images[currentIndex]?.src || '/padbooth-hero.png'}
              alt={images[currentIndex]?.alt || 'Padbooth moment'}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.9] contrast-[1.02]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay halus di bagian paling bawah untuk navigasi slider */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* 2. Controls Slider & Navigasi */}
      <div className="relative z-10 flex items-center justify-end mb-2 sm:mb-0">
        {images.length > 1 && (
          <div className="flex items-center gap-1.5 sm:gap-2 bg-black/20 backdrop-blur-sm sm:bg-transparent px-3 py-1.5 rounded-full sm:p-0">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="p-1 -m-1 focus:outline-none"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 sm:w-7 bg-white'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
