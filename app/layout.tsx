import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://www.axumbar.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AXUM Bar & Restaurant Leeds | Authentic Ethiopian & Eritrean Cuisine',
    template: '%s | AXUM Bar & Restaurant Leeds',
  },
  description:
    'AXUM Bar & Restaurant — the home of authentic Ethiopian, Eritrean & Tigray cuisine in Leeds. Traditional injera, tibs, kitfo, shiro & Ethiopian coffee ceremony. Book a table: 34 Regent Street, Leeds LS7 1DL.',
  keywords: [
    'AXUM Restaurant Leeds',
    'AXUM Bar Leeds',
    'Ethiopian restaurant Leeds',
    'Eritrean restaurant Leeds',
    'Tigray cuisine Leeds',
    'African restaurant Leeds',
    'Habesha restaurant Leeds',
    'injera Leeds',
    'tibs Leeds',
    'kitfo Leeds',
    'Ethiopian food near me',
    'Ethiopian coffee ceremony Leeds',
    'restaurant Regent Street Leeds',
    'restaurants Leeds LS7',
    'best Ethiopian food Leeds',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'AXUM Bar & Restaurant',
    title: 'AXUM Bar & Restaurant Leeds | Authentic Ethiopian & Eritrean Cuisine',
    description:
      'Authentic Ethiopian, Eritrean & Tigray cuisine in the heart of Leeds. Traditional injera, tibs, kitfo & Ethiopian coffee ceremony. Book your table today.',
    images: [
      {
        url: '/Axum Special.webp',
        width: 1200,
        height: 630,
        alt: 'Axum Special platter at AXUM Bar & Restaurant Leeds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AXUM Bar & Restaurant Leeds | Authentic Ethiopian & Eritrean Cuisine',
    description:
      'Authentic Ethiopian, Eritrean & Tigray cuisine in the heart of Leeds. Book your table today.',
    images: ['/Axum Special.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'GB-LDS',
    'geo.placename': 'Leeds',
    'geo.position': '53.813;-1.537',
    ICBM: '53.813, -1.537',
  },
}

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE_URL}/#restaurant`,
  name: 'AXUM Bar & Restaurant',
  alternateName: 'Axum Restaurant Leeds',
  description:
    'Authentic Ethiopian, Eritrean and Tigray cuisine in the heart of Leeds. Traditional dishes including injera, tibs, kitfo, shiro and the Ethiopian coffee ceremony.',
  url: SITE_URL,
  image: [
    `${SITE_URL}/Axum Special.webp`,
    `${SITE_URL}/gallery_img5.jpeg`,
    `${SITE_URL}/Tihlo.webp`,
  ],
  logo: `${SITE_URL}/AXUM_logo_transparent.png`,
  telephone: '+447954042211',
  email: 'axumleeds@gmail.com',
  servesCuisine: ['Ethiopian', 'Eritrean', 'African'],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  acceptsReservations: 'True',
  menu: `${SITE_URL}/#menu`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '34 Regent Street',
    addressLocality: 'Leeds',
    addressRegion: 'West Yorkshire',
    postalCode: 'LS7 1DL',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.813,
    longitude: -1.537,
  },
  // TODO: replace with the restaurant's real opening/closing times
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '12:00',
      closes: '23:00',
    },
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/#booking`,
      inLanguage: 'en-GB',
    },
    result: {
      '@type': 'FoodEstablishmentReservation',
      name: 'Table reservation at AXUM Bar & Restaurant',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className="bg-secondary text-white font-body">
        {children}
      </body>
    </html>
  )
}
