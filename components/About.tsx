'use client'

import { motion } from 'framer-motion'
import { Utensils, Globe, MapPin, Star } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: Utensils, label: 'Authentic', desc: 'Traditional Recipes' },
  { icon: Globe, label: 'Cultural', desc: 'Ethiopian & Eritrean Heritage' },
  { icon: MapPin, label: 'Leeds', desc: 'City Centre LS7 1DL' },
  { icon: Star, label: 'Premium', desc: 'Quality Ingredients' },
]

const features = [
  {
    icon: '🔥',
    title: 'Authentic Flavours',
    desc: 'Traditional recipes passed down through generations',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Chefs',
    desc: 'Passionate about authentic Ethiopian cooking',
  },
  {
    icon: '🌿',
    title: 'Fresh Ingredients',
    desc: 'Only the finest spices and freshest produce',
  },
]

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          {/* Left - Image with frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              {/* Orange corner brackets */}
              <div className="absolute -top-2 md:-top-3 -left-2 md:-left-3 w-12 md:w-20 h-12 md:h-20 border-t-4 border-l-4 border-primary z-10" />
              <div className="absolute -bottom-2 md:-bottom-3 -right-2 md:-right-3 w-12 md:w-20 h-12 md:h-20 border-b-4 border-r-4 border-primary z-10" />
              <Image
                src="/gallery_img5.jpeg"
                alt="AXUM Restaurant Interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-xs md:text-sm tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mt-2 mb-4 md:mb-6">
              More Than a Restaurant — A Cultural Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              AXUM Bar & Restaurant is named after the ancient city of Axum — the heart of Ethiopian civilization. 
              We bring the rich, aromatic flavours of authentic Ethiopian, Eritrean, and Tigray cuisine to the heart of Leeds. 
              Every dish is crafted with traditional recipes, the finest spices, and a deep love for our culture. 
              From our handmade Injera to our slow-cooked Tibs, every plate tells a story of heritage and hospitality.
            </p>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-accent mb-6 md:mb-8" />

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
                  <div className="text-dark font-bold text-xs md:text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-[10px] md:text-xs">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card border border-gray-200 rounded-xl p-4 md:p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
