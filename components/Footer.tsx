'use client'

import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events', href: '#events' },
  { name: 'Book a Table', href: '#booking' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t-4 border-[#F5A623]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/AXUM_logo_transparent.png"
              alt="AXUM Bar & Restaurant"
              width={180}
              height={70}
              className="w-[140px] md:w-[160px] h-auto mb-3 md:mb-4"
            />
            <p className="text-gray-400 text-xs md:text-sm">
              Authentic Ethiopian, Eritrean & Tigray Cuisine
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#F5A623] transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Contact</h4>
            <div className="space-y-2 text-xs md:text-sm">
              <a href="tel:07954042211" className="block text-gray-400 hover:text-[#F5A623] transition-colors">
                07954 042 211
              </a>
              <a href="mailto:axumleeds@gmail.com" className="block text-gray-400 hover:text-[#F5A623] transition-colors">
                axumleeds@gmail.com
              </a>
              <p className="text-gray-400">34 Regent Street</p>
              <p className="text-gray-400">Leeds LS7 1DL</p>
            </div>
            <div className="flex gap-3 md:gap-4 mt-3 md:mt-4">
              <a
                href="#"
                className="text-[#F5A623] hover:text-[#FFD700] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#F5A623] hover:text-[#FFD700] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-[#F5A623] hover:text-[#FFD700] transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.83 2.89 2.89 0 01-2.88-2.89 2.89 2.89 0 012.88-2.88c.3 0 .58.06.84.14V10.3a6.33 6.33 0 00-.84-.06A6.34 6.34 0 005.3 16.6a6.34 6.34 0 006.34-6.34V8.15a7.97 7.97 0 004.55 1.45V6.69z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2025 AXUM Bar & Restaurant. All rights reserved.
            </p>
            <p className="text-gray-500 text-[10px] md:text-xs">
              Food Allergy Notice: Please speak to staff before ordering.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
