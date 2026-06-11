'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Search } from 'lucide-react'

interface MenuItem {
  name: string
  price: string
  description?: string
  image?: string
  priceType?: 'single' | 'double' | 'glass-bottle'
  singlePrice?: string
  doublePrice?: string
  glassPrice?: string
  bottlePrice?: string
  badge?: 'pre-order' | 'chefs-special'
}

interface MenuCategory {
  name: string
  emoji: string
  id: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    name: 'Hot Drinks',
    emoji: '☕',
    id: 'hot-drinks',
    items: [
      { name: 'Traditional Tea', price: '£1.50', image: '/traditional_tea.jpg' },
      { name: 'Espresso', price: '£2.00', image: '/Espresso.jpg' },
      { name: 'Cappuccino', price: '£2.50', image: '/Cappuccino.jpg' },
      { name: 'Latte', price: '£2.50', image: '/Latte.jpg' },
      { name: 'Macchiato', price: '£2.00', image: '/Macchiato.jpg' },
      { name: 'Americano', price: '£2.00', image: '/Americano.jpg' },
    ],
  },
  {
    name: 'Drinks',
    emoji: '🥤',
    id: 'drinks',
    items: [
      { name: 'Still Water', price: '£1.00', image: '/Still Water.jpg' },
      { name: 'Sparkling Water', price: '£2.00', image: '/Sparkling Water.jpg' },
      { name: 'Soft Drinks (Bottled)', price: '£2.00', image: '/Soft Drinks.jpg' },
      { name: 'Red Bull', price: '£2.50', image: '/Red Bull.jpg' },
    ],
  },
  {
    name: 'Wine',
    emoji: '🍷',
    id: 'wine',
    items: [
      { name: 'White — Glass', price: '£6.50 / Bottle £25.00', image: '/White - Glass.jpg', priceType: 'glass-bottle', glassPrice: '£6.50', bottlePrice: '£25.00' },
      { name: 'Red — Glass', price: '£6.50 / Bottle £25.00', image: '/Red - Glass.jpg', priceType: 'glass-bottle', glassPrice: '£6.50', bottlePrice: '£25.00' },
      { name: 'Rose — Glass', price: '£6.50 / Bottle £25.00', image: '/Rose - Glass.jpg', priceType: 'glass-bottle', glassPrice: '£6.50', bottlePrice: '£25.00' },
    ],
  },
  {
    name: 'Beers',
    emoji: '🍺',
    id: 'beers',
    items: [
      { name: 'Stella', price: '£3.00', image: '/Stella.jpg' },
      { name: 'Budweiser', price: '£3.00', image: '/Budweiser.jpg' },
      { name: 'Becks', price: '£3.00', image: '/Becks.jpg' },
      { name: 'Heineken', price: '£3.50', image: '/Heineken.jpg' },
    ],
  },
  {
    name: 'Ethiopian & Eritrean Beer',
    emoji: '🇪🇹',
    id: 'ethiopian-beers',
    items: [
      { name: 'Habesha', price: '£4.50', image: '/Habesha.jpg' },
      { name: 'Walia', price: '£4.50', image: '/Walia.jpg' },
      { name: 'Melotti', price: '£4.50', image: '/Melotti.jpg' },
    ],
  },
  {
    name: 'Alcohol',
    emoji: '🥃',
    id: 'alcohol',
    items: [
      { name: 'Black Label', price: 'Single £4.00 / Double £8.00', image: '/Black Label.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Jack Daniels', price: 'Single £4.00 / Double £8.00', image: '/Jack Daniels.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Chivas Regal', price: 'Single £4.00 / Double £8.00', image: '/Chivas Regal.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Absolute Vodka', price: 'Single £4.00 / Double £8.00', image: '/Absolute Vodka.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Ciroc', price: 'Single £4.00 / Double £8.00', image: '/Ciroc.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Malibu', price: 'Single £4.00 / Double £8.00', image: '/Malibu.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Sambuca', price: 'Single £4.00 / Double £8.00', image: '/Sambuca.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Double Black', price: 'Single £4.00 / Double £8.00', image: '/Black Label.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Gordons Gin', price: 'Single £4.00 / Double £8.00', image: '/Ciroc.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Grey Goose', price: 'Single £4.00 / Double £8.00', image: '/Absolute Vodka.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Asmara Liquor', price: 'Single £4.00 / Double £8.00', image: '/Malibu.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Jägermeister', price: 'Single £4.00 / Double £8.00', image: '/Sambuca.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
      { name: 'Tequila', price: 'Single £4.00 / Double £8.00', image: '/Ciroc.jpg', priceType: 'single', singlePrice: '£4.00', doublePrice: '£8.00' },
    ],
  },
  {
    name: 'Vegetarian Dishes',
    emoji: '🌱',
    id: 'vegetarian',
    items: [
      { name: 'Shiro', price: '£13.00', image: '/Shiro.webp', description: 'Powdered chickpea stew cooked with onion and a mixture of exotic traditional spices.' },
      { name: 'Injera Fitfit', price: '£12.00', image: '/Injera Fitfit.webp', description: 'Scrambled injera mixed with cooked tomato sauce, chilli powder and spiced butter.' },
      { name: 'Kicha Fitfit', price: '£10.00', image: '/beans_plantain.jpg', description: 'Scrambled home made pita bread mixed with cooked tomato sauce.' },
      { name: 'Kitcha Fitfit with Meat Sauce', price: '£12.00', image: '/beans_yarn.jpg', description: 'Scrambled home made pita bread mixed with meat sauce.' },
      { name: 'Spaghetti with Tomato Sauce', price: '£10.00', image: '/assorted_pepper_soup.jpg', description: 'Spaghetti served with our home made tomato sauce.' },
      { name: 'Macaroni with Tomato Sauce', price: '£10.00', image: '/assorted_pepper_soup.jpg', description: 'Macaroni served with our home made tomato sauce.' },
      { name: 'Fuul', price: '£9.00', image: '/Semolina.jpg', description: 'Cooked fava beans, green pepper, spices served with fresh home made pita bread.' },
      { name: 'Special Fuul', price: '£10.00', image: '/Semolina.jpg', description: 'Cooked fava beans, yogurt, green pepper, spices served with fresh home made pita bread.' },
      { name: 'Scrambled Eggs', price: '£9.00', image: '/Semolina.jpg', description: 'Scrambled egg cooked with tomato, green chilli garnished with spices.' },
    ],
  },
  {
    name: 'Meat Dishes',
    emoji: '🥩',
    id: 'meat-dishes',
    items: [
      { name: 'Key Tibs', price: '£15.00', image: '/Key Tibs.jpg', description: 'Lamb cubes fried with onion, garlic, rosemary, green chillies, chilli powder and a mixture of traditional spices, served with a salad on the side.' },
      { name: 'Lega Tibs', price: '£14.00', image: '/Lega Tibs.jpg', description: 'Lamb cubes fried with onion, garlic, rosemary, green chillies and a mixture of traditional spices, served with a salad on the side.' },
      { name: 'Zelzel Tibs', price: '£15.00', image: '/Zelzel Tibs.jpg', description: 'Strips of lamb cooked with onions and green chillies in a variety of herbs and spices.' },
      { name: 'Awaze Tibsi', price: '£15.00', image: '/Awaze Tibsi.jpg', description: 'Small tender lamb cubes fried with onion, green chillies, served with awaze (combination of hot spices) on the side.' },
      { name: 'Bozena Shiro', price: '£15.00', image: '/Bozena Shiro.jpg', description: 'Powdered chickpea stew cooked with lamb.' },
      { name: 'Shimet Tibs', price: '£15.00', image: '/Shimet Tibs.jpg', description: 'Chunks of lamb meat and ribs cooked with onion, green chillies, rosemary and spiced butter.' },
      { name: 'Gomen Besiga', price: '£15.00', image: '/Gizzard.jpg', description: 'Seasoned lamb cooked with collard greens.' },
      { name: 'Kitfo', price: '£14.00', image: '/Kitfo.jpg', description: 'Finely chopped lean beef cooked to a medium rare with traditional spiced butter.' },
      { name: 'Dulet Kitfo', price: '£16.00', image: '/Kitfo.jpg', description: 'Minced lean prime beef seasoned with traditional spices and spiced butter cooked to a medium rare.' },
      { name: 'Leb Leb', price: '£12.00', image: '/Isiewu.jpg', description: 'Small beef cubes cooked at low heat with spiced butter served with awaze and mitimita (powdered bird eye chilli pepper).' },
      { name: 'Kuanta Firfir', price: '£16.00', image: '/Nkwobi.jpg', description: 'Dried beef cooked with a mixture of traditional spices, served mixed with injera.' },
      { name: 'Spaghetti Bolognese', price: '£12.00', image: '/Yam_goat.jpg', description: 'Spaghetti served with our rich, slow-cooked meat sauce.' },
      { name: 'Macaroni Bolognese', price: '£12.00', image: '/Yam_goat.jpg', description: 'Macaroni served with our rich, slow-cooked meat sauce.' },
      { name: 'Derek Tibs', price: '£15.00', image: '/Key Tibs.jpg', description: 'Marinated beef cubes and lamb ribs deep fried until dark and crispy, cooked with onion, garnished with green chillies and bell peppers.' },
      { name: 'Dorho', price: '£22.00', image: '/Tilapia.jpg', description: 'Chicken stew slowly cooked in a rich flavour of herbs, spices and chilli powder. Ideal for 2 people.' },
    ],
  },
  {
    name: 'Our Specials',
    emoji: '⭐',
    id: 'specials',
    items: [
      { name: 'Vegan Combo', price: '£15.00', image: '/Shiro.webp', description: 'A combination of chickpea stew, lentil stew, cooked vegetables and salad.' },
      { name: 'Meat Combo', price: '£35.00', image: '/Key Tibs.jpg', description: 'A variety of meat specialities including Lega Tibs, Key Tibs, Gomen Besiga, Leb Leb, and Kitfo.' },
      { name: 'Axum Special', price: '£55.00', image: '/Axum Special.webp', badge: 'chefs-special', description: 'A selection of our signature dishes: Vegetarian, Shiro, Kitfo, Leb Leb, Derek Tibs, and Key Wet. Ideal for 3 people.' },
      { name: 'Tihlo', price: '£30.00', image: '/Tihlo.webp', badge: 'chefs-special', description: 'A dish from the historical Agame province in Tigray made of barley dough balls, eaten with a specially prepared traditional stew. Available pre-order only.' },
    ],
  },
  {
    name: 'Breakfast',
    emoji: '🍳',
    id: 'breakfast',
    items: [
      { name: 'Kicha Fitfit', price: '£10.00', image: '/beans_plantain.jpg', description: 'Scrambled home made pita bread mixed with cooked tomato sauce.' },
      { name: 'Kitcha Fitfit with Meat Sauce', price: '£12.00', image: '/beans_yarn.jpg', description: 'Scrambled home made pita bread mixed with meat sauce.' },
      { name: 'Fuul', price: '£9.00', image: '/Semolina.jpg', description: 'Cooked fava beans, green pepper, spices served with fresh home made pita bread.' },
      { name: 'Special Fuul', price: '£10.00', image: '/Semolina.jpg', description: 'Cooked fava beans, yogurt, green pepper, spices served with fresh home made pita bread.' },
      { name: 'Scrambled Eggs', price: '£9.00', image: '/Semolina.jpg', description: 'Scrambled egg cooked with tomato, green chilli garnished with spices.' },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMenuData = useMemo(() => {
    if (!searchTerm) return menuData
    return menuData.map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.items.length > 0)
  }, [searchTerm])

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index)
    const element = document.getElementById(menuData[index].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="menu" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Orange geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="african-pattern-menu" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="#F5A623" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#african-pattern-menu)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Top decorative line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-[#F5A623]"></div>
            <span className="mx-4 text-[#F5A623] text-2xl">✦</span>
            <div className="h-px w-16 bg-[#F5A623]"></div>
          </div>

          {/* Badge */}
          <span className="inline-block bg-[#F5A623]/20 border border-[#F5A623] text-[#F5A623] px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
            🍽️ Our Menu
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Taste of <span className="text-[#F5A623]">Ethiopia & Eritrea</span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-400 italic text-lg md:text-xl font-serif">
            Authentic Ethiopian, Eritrean & Tigray Cuisine Crafted With Passion
          </p>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-16 bg-[#F5A623]"></div>
            <span className="mx-4 text-[#F5A623] text-2xl">✦</span>
            <div className="h-px w-16 bg-[#F5A623]"></div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-[#F5A623] w-4 h-4 md:w-5 md:h-5" />
            <input
              type="text"
              placeholder="Search our menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#F5A623]/40 rounded-full py-2 md:py-4 pl-9 md:pl-12 pr-3 md:pr-4 text-xs md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* Sticky Category Tabs */}
        <div className="sticky top-[72px] z-40 bg-[#0A0A0A] border-b-2 border-[#F5A623] py-3 md:py-4 mb-6 md:mb-8 -mx-4 px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {menuData.map((category, i) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(i)}
                className={`min-w-fit whitespace-nowrap px-3 md:px-5 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  i === activeCategory
                    ? 'bg-[#F5A623] text-black scale-105 shadow-lg shadow-[#F5A623]/30'
                    : 'bg-[#1A1A1A] text-white border border-[#F5A623]/30 hover:border-[#F5A623] hover:text-[#F5A623]'
                }`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* No results message */}
        {searchTerm && filteredMenuData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[#F5A623] text-xl">No dishes found — call us on 07954042211</p>
          </motion.div>
        )}

        {/* Menu Categories */}
        {(searchTerm ? filteredMenuData : menuData).map((category, categoryIndex) => (
          <div key={category.id} id={category.id} className="mb-10 md:mb-16 scroll-mt-32">
            {/* Category Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-4 md:mb-8"
            >
              {/* Vertical bar */}
              <div className="w-1 h-6 md:h-8 bg-[#F5A623] mr-3 md:mr-4" />
              
              {/* Category name */}
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white uppercase tracking-wider">
                  {category.emoji} {category.name}
                </h3>
              </div>

              {/* Item count */}
              <span className="bg-[#F5A623]/20 text-[#F5A623] text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full">
                {category.items.length} dishes
              </span>
            </motion.div>

            {/* Decorative line */}
            <div className="flex items-center mb-4 md:mb-6">
              <div className="h-px flex-grow bg-[#F5A623]/30"></div>
              <span className="mx-4 text-[#F5A623] text-lg md:text-xl">✦</span>
            </div>

            {/* Menu Items */}
            <div className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                  className="group bg-[#141414] border-b border-[#F5A623]/10 py-3 md:py-4 px-3 sm:px-6 hover:bg-[#1E1E1E] hover:border-l-4 hover:border-l-[#F5A623] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Circular Image */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-[#F5A623] group-hover:ring-4 group-hover:scale-105 transition-all duration-300">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={`${item.name} at AXUM Restaurant Leeds`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center">
                          <span className="text-[#F5A623] font-bold text-xl">
                            {item.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-base sm:text-lg text-white group-hover:text-[#F5A623] transition-colors">
                          {item.name}
                        </span>
                        <span className="flex-grow border-b-2 border-dotted border-[#F5A623]/40 hidden sm:flex" />
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 pr-2">
                          {item.description}
                        </p>
                      )}

                      {/* Price */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {item.priceType === 'single' && item.singlePrice && item.doublePrice ? (
                          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                            <span className="bg-[#F5A623]/10 border border-[#F5A623] text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full">
                              Single {item.singlePrice}
                            </span>
                            <span className="bg-[#F5A623]/10 border border-[#F5A623] text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full">
                              Double {item.doublePrice}
                            </span>
                          </div>
                        ) : item.priceType === 'glass-bottle' && item.glassPrice && item.bottlePrice ? (
                          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                            <span className="bg-[#F5A623]/10 border border-[#F5A623] text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full">
                              🍷 Glass {item.glassPrice}
                            </span>
                            <span className="bg-[#F5A623]/10 border border-[#F5A623] text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full">
                              🍾 Bottle {item.bottlePrice}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[#F5A623] font-black text-base sm:text-xl whitespace-nowrap ml-auto">
                            {item.price}
                          </span>
                        )}
                      </div>

                      {/* Badge */}
                      {item.badge === 'pre-order' && (
                        <span className="inline-block mt-2 bg-red-500/20 border border-red-500 text-red-400 text-xs font-bold px-2 py-1 rounded">
                          ⚠️ Pre-Order Only
                        </span>
                      )}
                      {item.badge === 'chefs-special' && (
                        <span className="inline-block mt-2 bg-[#FFD700]/20 border border-[#FFD700] text-[#FFD700] text-xs font-bold px-2 py-1 rounded">
                          👑 Chef's Special
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Category Divider */}
            {categoryIndex < (searchTerm ? filteredMenuData : menuData).length - 1 && (
              <div className="flex items-center justify-center mt-12 opacity-30">
                <div className="h-px w-16 bg-[#F5A623]"></div>
                <span className="mx-4 text-[#F5A623] text-xl">✦</span>
                <div className="h-px w-16 bg-[#F5A623]"></div>
              </div>
            )}
          </div>
        ))}

        {/* Allergy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 border border-[#F5A623]/50 bg-[#F5A623]/5 rounded-lg p-6"
        >
          <div className="flex items-start gap-4">
            <span className="text-[#F5A623] text-2xl">⚠️</span>
            <div>
              <h4 className="text-white font-bold mb-2">FOOD ALLERGY NOTICE</h4>
              <p className="text-gray-400 text-sm">
                If you have a food allergy please speak to a member of staff before you order
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
