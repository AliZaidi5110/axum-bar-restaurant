'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
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
  const [videosLoaded, setVideosLoaded] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

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

  // Preload all videos on mount
  useEffect(() => {
    let loadedCount = 0
    const totalVideos = heroVideos.length

    heroVideos.forEach((_, index) => {
      const video = videoRefs.current[index]
      if (video) {
        video.load()
        const handleCanPlay = () => {
          loadedCount++
          if (loadedCount === totalVideos) {
            setVideosLoaded(true)
          }
        }
        video.addEventListener('canplay', handleCanPlay)
        return () => {
          video.removeEventListener('canplay', handleCanPlay)
        }
      }
    })
  }, [])

  // Play/pause videos based on current slide
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === current) {
          video.currentTime = 0
          video.play().catch(err => console.error('Video play error:', err))
        } else {
          video.pause()
        }
      }
    })
  }, [current])

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      {/* Background Videos */}
      <div className="absolute inset-0">
        {heroVideos.map((video, index) => (
          <video
            key={video.src}
            ref={el => videoRefs.current[index] = el}
            src={video.src}
            autoPlay={index === current}
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-800 ${
              index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onError={() => console.error('Video failed to load:', video.src)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center w-full">
        <motion.div
          key={current}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-5xl mx-auto w-full px-4 sm:px-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-block bg-white/90 border border-[#F5A623] text-[#F5A623] px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium shadow-lg">
              🍽️ Authentic Ethiopian, Eritrean & Tigray Cuisine
            </span>
          </motion.div>

          {/* Restaurant Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-3 md:mb-4 drop-shadow-lg"
          >
            <span className="text-[#F5A623]">AXUM</span>{' '}
            <span className="text-white">Bar & Restaurant</span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl italic font-light text-white/90 mb-4 md:mb-6 drop-shadow-md"
          >
            &quot;Where Culture Meets Cuisine&quot;
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-8 px-2 drop-shadow-md"
          >
            Experience the rich flavours of Ethiopia, Eritrea & Tigray in the heart of Leeds
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto"
          >
            <a
              href="#menu"
              className="bg-[#F5A623] text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#FFD700] transition-colors duration-200 text-center uppercase tracking-widest text-xs md:text-sm w-full sm:w-auto"
            >
              Explore Our Menu
            </a>
            <a
              href="#booking"
              className="border-2 border-[#F5A623] text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#F5A623] hover:text-black transition-colors duration-200 text-center uppercase tracking-widest text-xs md:text-sm w-full sm:w-auto"
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
