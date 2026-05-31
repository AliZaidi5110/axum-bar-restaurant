'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from 'lucide-react'
import Image from 'next/image'

const filters = ['All', 'Restaurant', 'Food', 'Atmosphere']

interface GalleryImage {
  src: string
  alt: string
  category: string
  type?: 'image' | 'video'
}

const galleryImages: GalleryImage[] = [
  { src: '/gallery_img1.jpeg', alt: 'AXUM Restaurant Interior', category: 'Restaurant' },
  { src: '/gallery_img2.jpeg', alt: 'Delicious Ethiopian Dish', category: 'Food' },
  { src: '/gallery_img3.jpeg', alt: 'Restaurant Atmosphere', category: 'Atmosphere' },
  { src: '/gallery_img4.jpeg', alt: 'AXUM Dining Area', category: 'Restaurant' },
  { src: '/gallery_img5.jpeg', alt: 'Traditional Ethiopian Food', category: 'Food' },
  { src: '/gallery_img6.jpeg', alt: 'Cultural Evening at AXUM', category: 'Atmosphere' },
  { src: '/gallery_img7.jpg', alt: 'AXUM Restaurant Experience', category: 'Restaurant' },
  { src: '/customer_review_video.mp4', alt: 'Customer Reviews', category: 'Atmosphere', type: 'video' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length)
  }, [filteredImages.length])

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }, [filteredImages.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, nextImage, prevImage])

  return (
    <section id="gallery" className="py-12 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-block bg-primary/20 border border-primary text-primary px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            📸 Our Gallery
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-dark">
            A Glimpse Inside <span className="text-primary">AXUM</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8 md:mb-10">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide sm:justify-center sm:flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap flex-shrink-0 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary text-black'
                    : 'bg-card text-gray-600 hover:text-dark border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {filteredImages.map((image, i) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              onClick={() => openLightbox(i)}
            >
              <div className="relative w-full h-full bg-gray-100">
                {image.type === 'video' ? (
                  <>
                    <video
                      src={image.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onClick={(e) => {
                        e.stopPropagation()
                        const video = e.currentTarget
                        if (video.paused) {
                          video.play()
                        } else {
                          video.pause()
                        }
                      }}
                    />
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 25vw"
                  />
                )}
              </div>
              {/* Orange Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-4">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-dark hover:text-primary transition-colors z-10 w-10 h-10 flex items-center justify-center"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-dark hover:text-primary transition-colors z-10 w-12 h-12 flex items-center justify-center"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-dark hover:text-primary transition-colors z-10 w-12 h-12 flex items-center justify-center"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl px-4 md:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages[currentImage].type === 'video' ? (
                <video
                  src={filteredImages[currentImage].src}
                  className="w-full max-h-[85vh] object-contain rounded-lg"
                  controls
                  playsInline
                />
              ) : (
                <Image
                  src={filteredImages[currentImage].src}
                  alt={filteredImages[currentImage].alt}
                  width={1200}
                  height={900}
                  className="w-full max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium text-dark">{filteredImages[currentImage].alt}</p>
              <p className="text-sm text-gray-500">
                {currentImage + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
