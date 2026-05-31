'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Send, AlertTriangle } from 'lucide-react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    requests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Table Booking Enquiry from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nSpecial Requests: ${formData.requests}`
    window.location.href = `mailto:axumleeds@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="booking" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/20 border border-primary text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            📅 Reservations
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-4">
            Reserve Your <span className="text-primary">Table</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Call Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border-t-4 border-primary"
          >
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-dark">Call Us</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Book instantly by calling us directly. Our team is ready to take your reservation.
            </p>
            <div className="space-y-4 mb-8">
              <a
                href="tel:07954042211"
                className="block text-2xl font-bold text-primary hover:text-accent transition-colors"
              >
                07954 042 211
              </a>
              <a
                href="tel:01132432336"
                className="block text-2xl font-bold text-primary hover:text-accent transition-colors"
              >
                0113 243 2336
              </a>
            </div>
            <a
              href="tel:01132432336"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-3 rounded-full hover:bg-accent transition-colors duration-200"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>

          {/* Right Panel - Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-dark">Email Us</h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <div className="text-primary text-5xl mb-4">✓</div>
                <h4 className="text-xl font-bold text-dark mb-2">Enquiry Sent!</h4>
                <p className="text-gray-500">We&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    required
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    type="time"
                    name="time"
                    required
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <select
                  name="guests"
                  required
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-dark focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Number of Guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <textarea
                  name="requests"
                  placeholder="Special Requests (optional)"
                  rows={3}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-dark placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold px-6 py-3 rounded-full hover:bg-accent transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Allergy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-start gap-3"
        >
          <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600">
            <span className="font-bold text-primary">Please note</span> — Allergy information available on request. Please speak to staff before ordering.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
