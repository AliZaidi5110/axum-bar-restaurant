'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (name: string) => {
    setActiveLink(name)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-hidden ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b-2 border-primary shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 z-50">
              <Image
                src="/AXUM_logo_transparent.png"
                alt="AXUM Bar & Restaurant"
                width={160}
                height={65}
                className="w-[100px] md:w-[120px] lg:w-[140px] h-[42px] md:h-[50px] lg:h-[58px] object-contain"
                priority
              />
              <AnimatePresence>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`font-serif font-bold text-lg md:text-xl lg:text-2xl hidden sm:block ${scrolled ? 'text-dark' : 'text-white'}`}
                >
                  AXUM Bar & Restaurant
                </motion.span>
              </AnimatePresence>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleClick(link.name)}
                  className={`text-sm md:text-base font-semibold transition-colors duration-200 whitespace-nowrap ${
                    activeLink === link.name
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : scrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="bg-primary text-black font-bold px-5 md:px-6 py-2.5 rounded-full hover:bg-accent transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Book a Table
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-50 ${scrolled ? 'text-dark' : 'text-white hover:bg-white/20'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center space-y-8 md:hidden overflow-hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#F5A623] transition-colors"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleClick(link.name)}
                className={`text-2xl font-medium text-center ${
                  activeLink === link.name ? 'text-[#F5A623]' : 'text-white'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#booking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => handleClick('Booking')}
              className="bg-[#F5A623] text-black font-bold px-8 py-4 rounded-full text-lg w-full max-w-xs text-center"
            >
              Book a Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
