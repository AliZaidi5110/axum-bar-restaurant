'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Find Us',
    lines: ['34 Regent Street', 'Leeds LS7 1DL'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['07954 042 211', '0113 243 2336'],
    links: ['tel:07954042211', 'tel:01132432336'],
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Mon - Sun', 'Open Daily'],
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-block bg-primary/20 border border-primary text-primary px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            📞 Get in Touch
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-dark">
            Visit <span className="text-primary">AXUM</span>
          </h2>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card rounded-xl p-5 md:p-8 text-center border border-gray-200 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <info.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3">{info.title}</h3>
              {info.lines.map((line, j) => (
                info.links ? (
                  <a
                    key={j}
                    href={info.links[j]}
                    className="block text-gray-500 hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={j} className="text-gray-500 text-sm md:text-base">{line}</p>
                )
              ))}
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.5!2d-1.537!3d53.813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2s34%20Regent%20Street%2C%20Leeds%20LS7%201DL!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'hue-rotate(30deg) saturate(1.5)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AXUM Restaurant Location"
          />
          {/* Orange overlay tint */}
          <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="#"
            className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-200"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-200"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-200"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.83 2.89 2.89 0 01-2.88-2.89 2.89 2.89 0 012.88-2.88c.3 0 .58.06.84.14V10.3a6.33 6.33 0 00-.84-.06A6.34 6.34 0 005.3 16.6a6.34 6.34 0 006.34-6.34V8.15a7.97 7.97 0 004.55 1.45V6.69z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
