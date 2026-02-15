import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import { BUSINESS_INFO } from '@/lib/constants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kamm In - Friseursalon & Kosmetikstudio | Rheinbach',
  description: 'Ihr Wohlbefinden ist meine Mission. Professioneller Friseursalon und Kosmetikstudio in Rheinbach. Great Lengths Extensions, Haarschnitte, Farben und Kosmetik.',
  keywords: 'Friseur Rheinbach, Great Lengths Rheinbach, Extensions, Haarschnitt, Kosmetikstudio, Nicole Rückel',
  authors: [{ name: 'Nicole Rückel' }],
  openGraph: {
    title: 'Kamm In - Friseursalon & Kosmetikstudio',
    description: 'Ihr Wohlbefinden ist meine Mission',
    url: 'https://kammin.net',
    siteName: 'Kamm In',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data for Local Business
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: BUSINESS_INFO.name,
  description: BUSINESS_INFO.mission,
  image: 'https://kammin.net/images/logo/logo.png',
  '@id': 'https://kammin.net',
  url: 'https://kammin.net',
  telephone: BUSINESS_INFO.contact.phone,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    postalCode: BUSINESS_INFO.address.postalCode,
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_INFO.address.coordinates.lat,
    longitude: BUSINESS_INFO.address.coordinates.lng,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    description: 'Termine nach Vereinbarung',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-secondary-900`}>
        <Header />
        <main className="min-h-screen pt-20 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
