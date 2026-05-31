'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const heroVideos = [
  {
    src: '/Axum_bar_video.mp4',
    alt: 'AXUM Bar & Restaurant Leeds - Authentic Ethiopian Cuisine',
  },
  {
    src: '/axum_2.mp4',
    alt: 'AXUM Bar & Restaurant Leeds - Eritrean and Tigray Food',
  },
  {
    src: '/res_video3.mp4',
    alt: 'AXUM Bar & Restaurant Leeds - Dining Experience',
  },
]

const textVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroVideos.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroVideos.length) % heroVideos.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section id="home" className="relative h-[98vh] w-full overflow-hidden">
      {/* Background Images */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
          <video
            src={heroVideos[current].src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => console.error('Video failed to load:', heroVideos[current].src)}
          />
          {!videoLoaded && (
            <div className="absolute inset-0 bg-black" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          key={current}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mb-6"
          >
            <span className="inline-block bg-white/90 border border-[#F5A623] text-[#F5A623] px-4 py-1 rounded-full text-sm font-medium shadow-lg">
              🍽️ Authentic Ethiopian, Eritrean & Tigray Cuisine
            </span>
          </motion.div>

          {/* Restaurant Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg"
          >
            <span className="text-[#F5A623]">AXUM</span>{' '}
            <span className="text-white">Bar & Restaurant</span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-3xl italic font-light text-white/90 mb-6 drop-shadow-md"
          >
            &quot;Where Culture Meets Cuisine&quot;
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto mb-8 drop-shadow-md"
          >
            Experience the rich flavours of Ethiopia, Eritrea & Tigray in the heart of Leeds
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#menu"
              className="bg-[#F5A623] text-black font-bold px-8 py-4 rounded-full hover:bg-[#FFD700] transition-colors duration-200 text-center uppercase tracking-widest w-full sm:w-auto"
            >
              Explore Our Menu
            </a>
            <a
              href="#booking"
              className="border-2 border-[#F5A623] text-white font-bold px-8 py-4 rounded-full hover:bg-[#F5A623] hover:text-black transition-colors duration-200 text-center uppercase tracking-widest w-full sm:w-auto"
            >
              Book a Table
            </a>
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-2 mt-12"
        >
          {heroVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#F5A623] w-8' : 'bg-white/30 w-3'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="text-white hover:text-[#F5A623] transition-colors drop-shadow-lg">
          <ChevronDown size={36} />
        </a>
      </motion.div>
    </section>
  )
}
