import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AXUM Bar & Restaurant Leeds | Authentic Ethiopian & Eritrean Cuisine',
  description: 'Visit AXUM Bar & Restaurant in Leeds for authentic Ethiopian, Eritrean and Tigray cuisine. Dine in, book a table or explore our menu. 34 Regent Street Leeds LS7 1DL',
  keywords: 'AXUM Restaurant Leeds, Ethiopian restaurant Leeds, Eritrean food Leeds, Tigray cuisine Leeds, African restaurant Leeds LS7, Ethiopian food Leeds city centre',
  openGraph: {
    title: 'AXUM Bar & Restaurant Leeds',
    description: 'Authentic Ethiopian, Eritrean & Tigray Cuisine in the Heart of Leeds',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-secondary text-white font-body">
        {children}
      </body>
    </html>
  )
}
