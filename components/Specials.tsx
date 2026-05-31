'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface SpecialDish {
  name: string
  price: string
  description: string
  image: string
  badge: string
  badgeColor: string
  secondaryBadge?: string
  features: string[]
  buttonText: string
  buttonStyle: 'filled' | 'outlined'
  preOrderNote?: string
}

const specials: SpecialDish[] = [
  {
    name: 'Axum Special',
    price: '£55.00',
    description: 'Our signature dish featuring a generous platter of premium meats, vegetarian selections, and traditional sides. Perfect for sharing and experiencing the full range of Ethiopian flavours.',
    image: '/Axum Special.png',
    badge: '👑 CHEF\'S SPECIAL',
    badgeColor: 'bg-[#F5A623]',
    features: ['🍖 Premium Meats', '🌱 Veg Selection', '👥 Sharing Platter'],
    buttonText: 'BOOK TO EXPERIENCE THIS',
    buttonStyle: 'filled',
  },
  {
    name: 'Tihlo',
    price: '£30.00',
    description: 'A traditional Tigray specialty featuring roasted barley balls served with rich, spicy meat stew. A truly unique and authentic experience of Northern Ethiopian cuisine.',
    image: '/Tihlo.png',
    badge: '🌟 PRE-ORDER ONLY',
    badgeColor: 'bg-red-600',
    secondaryBadge: 'Tigray Specialty',
    features: ['🌾 Roasted Barley', '🥩 Spicy Stew', '🇪🇹 Tigray Tradition'],
    buttonText: 'PRE-ORDER THIS DISH',
    buttonStyle: 'outlined',
    preOrderNote: '⚠️ This dish requires advance booking — please call or email to pre-order',
  },
]

export default function Specials() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section id="specials" className="py-12 md:py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Orange geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="#F5A623" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#african-pattern)"/>
        </svg>
      </div>

      {/* Floating sparkle decorations */}
      <div className="absolute top-20 left-10 text-[#F5A623] opacity-10 text-2xl md:text-4xl">✦</div>
      <div className="absolute top-40 right-20 text-[#F5A623] opacity-10 text-xl md:text-3xl">✦</div>
      <div className="absolute bottom-60 left-1/4 text-[#F5A623] opacity-10 text-3xl md:text-5xl">✦</div>
      <div className="absolute bottom-40 right-1/3 text-[#F5A623] opacity-10 text-lg md:text-2xl">✦</div>

      {/* Vertical accent line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#F5A623] to-transparent opacity-30" />

      {/* Watermark */}
      <div className="absolute top-32 right-10 text-[#FFFFFF] opacity-5 font-black text-6xl md:text-9xl font-heading select-none hidden lg:block">
        SPECIALS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          {/* Top decorative line */}
          <div className="flex items-center justify-center mb-4 md:mb-8">
            <div className="h-px w-8 md:w-16 bg-[#F5A623]"></div>
            <span className="mx-2 md:mx-4 text-[#F5A623] text-lg md:text-2xl">✦</span>
            <div className="h-px w-8 md:w-16 bg-[#F5A623]"></div>
          </div>

          {/* Badge */}
          <span className="inline-block border border-[#F5A623] text-[#F5A623] px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wider uppercase mb-4 md:mb-6">
            ⭐ Chef's Selection
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-white mb-2 md:mb-4">
            Our Chef's <span className="text-[#F5A623]">Specials</span>
          </h2>

          {/* Subheading */}
          <p className="text-[#F5A623] italic text-base md:text-xl lg:text-2xl font-serif">
            "Dishes that define the AXUM experience"
          </p>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center mt-4 md:mt-8">
            <div className="h-px w-8 md:w-16 bg-[#F5A623]"></div>
            <span className="mx-2 md:mx-4 text-[#F5A623] text-lg md:text-2xl">✦</span>
            <div className="h-px w-8 md:w-16 bg-[#F5A623]"></div>
          </div>
        </motion.div>

        {/* Main Specials Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {specials.map((special, i) => (
            <motion.div
              key={special.name}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#111111] rounded-lg overflow-hidden border-t-4 border-[#F5A623] hover:translate-y-[-4px] md:hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(245,166,35,0.2)] transition-all duration-500 relative group"
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#F5A623] opacity-50 hidden md:block" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#F5A623] opacity-50 hidden md:block" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#F5A623] opacity-50 hidden md:block" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#F5A623] opacity-50 hidden md:block" />

              {/* Image Section */}
              <div className="relative h-48 md:h-56 lg:h-72 w-full">
                <Image
                  src={special.image}
                  alt={`${special.name} - AXUM Restaurant Leeds`}
                  fill
                  className="object-cover object-center"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                {/* Badge */}
                <div className={`absolute top-3 md:top-4 left-3 md:left-4 ${special.badgeColor} text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 uppercase tracking-widest`}>
                  {special.badge}
                </div>

                {/* Secondary Badge */}
                {special.secondaryBadge && (
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-[#F5A623] text-black text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 uppercase tracking-widest">
                    {special.secondaryBadge}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-6 lg:p-8">
                {/* Dish Name */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  {special.name}
                </h3>

                {/* Price */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-[#F5A623] mb-3 md:mb-4"
                >
                  {special.price}
                </motion.p>

                {/* Divider */}
                <div className="border-t border-[#F5A623]/30 mb-3 md:mb-4"></div>

                {/* Description */}
                <p className="text-gray-400 italic leading-relaxed mb-4 md:mb-6 text-xs md:text-sm">
                  {special.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {special.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="border border-[#F5A623] text-[#F5A623] text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-full uppercase tracking-wider"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#booking"
                  className={`block w-full text-center font-black uppercase tracking-widest py-4 text-lg transition-all duration-300 relative overflow-hidden ${
                    special.buttonStyle === 'filled'
                      ? 'bg-[#F5A623] text-black hover:bg-[#FFD700]'
                      : 'border-2 border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-black'
                  }`}
                >
                  <span className="relative z-10">{special.buttonText}</span>
                </a>

                {/* Pre-order Note */}
                {special.preOrderNote && (
                  <p className="text-red-400 text-sm mt-4 text-center">
                    {special.preOrderNote}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Width Experience Strip */}
        <motion.div
          style={{ y }}
          className="mt-20 relative w-full h-48 md:h-80 overflow-hidden rounded-lg"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/Axum Special.png"
              alt="Axum Special Experience"
              fill
              className="object-cover object-center blur-sm"
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white text-xl md:text-3xl italic font-serif mb-8"
            >
              "The full AXUM experience on one table"
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              href="#booking"
              className="bg-[#F5A623] text-black font-black uppercase tracking-widest py-4 px-8 text-lg hover:bg-[#FFD700] transition-colors duration-300 mb-8"
            >
              Reserve Your Table Now
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-4 text-white text-sm md:text-base"
            >
              <a href="tel:07954042211" className="flex items-center gap-2 hover:text-[#F5A623] transition-colors">
                📞 07954042211
              </a>
              <span className="hidden md:block">|</span>
              <a href="mailto:axumleeds@gmail.com" className="flex items-center gap-2 hover:text-[#F5A623] transition-colors">
                ✉️ axumleeds@gmail.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
