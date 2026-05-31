'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Bell, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

interface Event {
  name: string
  frequency: string
  frequencyBadge: string
  date: string
  time: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  comingSoon?: boolean
  featured?: boolean
}

const events: Event[] = [
  {
    name: 'Live African Music Night',
    frequency: 'Every Friday',
    frequencyBadge: 'EVERY FRIDAY',
    date: 'Every Friday',
    time: '8:00 PM - 11:00 PM',
    description: 'Experience the rhythm of Africa with live traditional music performances every Friday evening.',
    image: '/Live African Music Night.jpg',
    imageAlt: 'Live African Music Night at AXUM Restaurant Leeds',
    tags: ['🎵 Live Performance', '🪘 Traditional Music', '🍽️ Dining'],
    comingSoon: false,
    featured: false,
  },
  {
    name: 'Ethiopian Coffee Ceremony',
    frequency: 'Every Sunday',
    frequencyBadge: 'EVERY SUNDAY',
    date: 'Every Sunday',
    time: '3:00 PM - 5:00 PM',
    description: 'Join us for an authentic Ethiopian coffee ceremony — a cultural tradition of hospitality.',
    image: '/Ethiopian Coffee Ceremony.jpg',
    imageAlt: 'Ethiopian Coffee Ceremony at AXUM Restaurant Leeds',
    tags: ['☕ Cultural Tradition', '🌿 Authentic', '👥 Group Activity'],
    comingSoon: true,
    featured: false,
  },
  {
    name: 'Taste of Eritrea Festival',
    frequency: 'Monthly Special',
    frequencyBadge: 'MONTHLY SPECIAL',
    date: 'Monthly Special',
    time: '6:00 PM - 10:00 PM',
    description: 'A special evening featuring exclusive Eritrean dishes and cultural performances.',
    image: '/Taste of Eritrea Festival.jpg',
    imageAlt: 'Taste of Eritrea Festival at AXUM Bar Restaurant Leeds',
    tags: ['🇪🇷 Eritrean Culture', '🍽️ Exclusive Menu', '🎭 Performances'],
    comingSoon: false,
    featured: true,
  },
]

export default function Events() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:axumleeds@gmail.com?subject=Event Notification Signup&body=I would like to be notified about upcoming events. Email: ${email}`
    setSubmitted(true)
  }

  const featuredEvent = events.find(e => e.featured)
  const regularEvents = events.filter(e => !e.featured)

  return (
    <section id="events" className="bg-[#0A0A0A] relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 max-w-[1920px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 w-full"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 md:mb-6"
          >
            <span className="inline-block bg-[#F5A623]/20 border border-[#F5A623] text-[#F5A623] px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
              🎉 Events & Experiences
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-3 md:mb-4 w-full"
          >
            What's On <span className="text-[#F5A623]">at AXUM</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 italic text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4"
          >
            &quot;From live African music to cultural ceremonies — there is always something special happening here&quot;
          </motion.p>

          {/* Decorative Lines */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mt-6 md:mt-8 w-full max-w-2xl mx-auto"
          >
            <div className="h-px bg-[#F5A623]/30 flex-1" />
            <span className="text-[#F5A623] text-lg md:text-xl">✦</span>
            <div className="h-px bg-[#F5A623]/30 flex-1" />
          </motion.div>
        </motion.div>

        {/* Featured Event Banner */}
        {featuredEvent && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[280px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden mb-8 md:mb-12 group"
          >
            <Image
              src={featuredEvent.image}
              alt={featuredEvent.imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="absolute inset-0 p-4 md:p-8 lg:p-12 flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="bg-[#F5A623] text-black font-black uppercase tracking-widest text-[10px] md:text-xs px-2 md:px-3 py-1">
                  ⭐ Featured Event
                </span>
                <span className="bg-red-600 text-white font-black uppercase tracking-widest text-[10px] md:text-xs px-2 md:px-3 py-1">
                  {featuredEvent.frequencyBadge}
                </span>
              </div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-2 md:mb-4"
              >
                {featuredEvent.name}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 italic text-sm md:text-base lg:text-lg mb-3 md:mb-4 max-w-2xl"
              >
                {featuredEvent.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-[#F5A623] font-bold mb-4 md:mb-6"
              >
                <Clock size={16} />
                <span className="text-sm md:text-base">{featuredEvent.time}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
              >
                <a
                  href="#booking"
                  className="bg-[#F5A623] text-black font-black uppercase tracking-widest py-2 md:py-3 px-6 md:px-8 text-center text-sm md:text-base hover:bg-[#FFD700] transition-colors duration-200"
                >
                  Book Your Table
                </a>
                <a
                  href="#contact"
                  className="border-2 border-[#F5A623] text-white font-black uppercase tracking-widest py-2 md:py-3 px-6 md:px-8 text-center text-sm md:text-base hover:bg-[#F5A623] hover:text-black transition-colors duration-200"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Regular Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 w-full">
          {regularEvents.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-[#141414] rounded-xl overflow-hidden border-t-4 border-[#F5A623] hover:translate-y-[-4px] md:hover:translate-y-[-8px] hover:shadow-[0_20px_40px_-15px_rgba(245,166,35,0.2)] transition-all duration-300 w-full"
            >
              {/* Image Section */}
              <div className="relative h-40 md:h-56 lg:h-64 w-full">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                
                {/* Frequency Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`${
                    event.frequencyBadge === 'MONTHLY SPECIAL' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-[#F5A623] text-black'
                  } font-black uppercase tracking-widest text-[10px] md:text-xs px-2 md:px-3 py-1`}>
                    {event.frequencyBadge}
                  </span>
                </div>
                
                {/* Coming Soon Badge */}
                {event.comingSoon && (
                  <div className="absolute top-3 right-3 bg-gray-800 border border-gray-600 text-gray-400 text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 md:p-6 w-full">
                {/* Time Row */}
                <div className="flex items-center gap-2 text-[#F5A623] font-bold mb-3 md:mb-4 pb-3 md:pb-4 border-b border-[#F5A623]/20">
                  <Clock size={14} />
                  <span className="text-xs md:text-sm lg:text-base">{event.time}</span>
                </div>

                {/* Event Name */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white mb-3 md:mb-4 group-hover:text-[#F5A623] transition-colors duration-300">
                  {event.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 italic text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {event.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                  {event.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i * 0.1) + (idx * 0.05) + 0.3 }}
                      className="bg-[#F5A623]/10 border border-[#F5A623]/40 text-[#F5A623] text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  disabled={event.comingSoon}
                  className={`w-full font-black uppercase tracking-widest py-2 md:py-3 text-xs md:text-sm transition-colors duration-200 ${
                    event.comingSoon
                      ? 'border-2 border-[#F5A623]/40 text-[#F5A623]/40 cursor-not-allowed'
                      : 'bg-[#F5A623] text-black hover:bg-[#FFD700]'
                  }`}
                >
                  {event.comingSoon ? 'Coming Soon' : 'Book Your Spot'}
                </button>
              </div>

              {/* Bottom Info Strip */}
              <div className="bg-[#0D0D0D] px-4 md:px-6 py-2 md:py-3 w-full">
                <p className="text-[10px] md:text-xs text-gray-600">
                  📍 AXUM Bar & Restaurant, Leeds
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notification Sign-Up Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] border border-[#F5A623]/30 rounded-xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 w-full"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">
            <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
              <Bell className="text-[#F5A623]" size={20} />
              <div className="flex-1 md:flex-none">
                <h4 className="text-white font-bold text-sm md:text-base">Never miss an event</h4>
                <p className="text-gray-400 text-xs md:text-sm">Sign up to be notified about upcoming events</p>
              </div>
            </div>
            
            {!submitted ? (
              <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full md:w-auto flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-[#0A0A0A] border border-[#F5A623]/30 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:border-[#F5A623] transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#F5A623] text-black font-black uppercase tracking-widest py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-[#FFD700] transition-colors whitespace-nowrap text-xs md:text-sm"
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <p className="text-green-400 font-bold text-sm md:text-base">You'll be the first to know about our events!</p>
            )}
          </div>
        </motion.div>

        {/* Contact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0A0A] rounded-xl p-6 md:p-8 text-center w-full"
        >
          <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base px-4">
            Want to host a private event or enquire about group bookings?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
            <a
              href="tel:07954042211"
              className="flex items-center gap-2 text-[#F5A623] font-bold hover:text-[#FFD700] transition-colors text-sm md:text-base"
            >
              <Phone size={18} />
              07954042211
            </a>
            <a
              href="mailto:axumleeds@gmail.com"
              className="flex items-center gap-2 text-[#F5A623] font-bold hover:text-[#FFD700] transition-colors text-sm md:text-base"
            >
              <Mail size={18} />
              axumleeds@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
