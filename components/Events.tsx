'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import Image from 'next/image'

interface Event {
  name: string
  date: string
  time: string
  description: string
  image: string
  comingSoon?: boolean
}

const events: Event[] = [
  {
    name: 'Live African Music Night',
    date: 'Every Friday',
    time: '8:00 PM - 11:00 PM',
    description: 'Experience the rhythm of Africa with live traditional music performances every Friday evening.',
    image: '/event_img_1.jpg',
    comingSoon: true,
  },
  {
    name: 'Ethiopian Coffee Ceremony',
    date: 'Every Sunday',
    time: '3:00 PM - 5:00 PM',
    description: 'Join us for an authentic Ethiopian coffee ceremony — a cultural tradition of hospitality.',
    image: '/event_img_1.jpg',
    comingSoon: true,
  },
  {
    name: 'Taste of Eritrea Festival',
    date: 'Monthly Special',
    time: '6:00 PM - 10:00 PM',
    description: 'A special evening featuring exclusive Eritrean dishes and cultural performances.',
    image: '/event_img_1.jpg',
    comingSoon: true,
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/20 border border-primary text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            🎉 What&apos;s On
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark">
            Events & <span className="text-primary">Special Evenings</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card border border-gray-200 rounded-xl overflow-hidden border-t-4 border-primary hover:border-accent transition-colors duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
                {event.comingSoon && (
                  <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{event.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-primary" />
                    {event.time}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <button className="w-full border-2 border-primary text-primary font-bold px-4 py-2 rounded-full hover:bg-primary hover:text-black transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
