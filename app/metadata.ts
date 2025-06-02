import { Metadata } from 'next'

// Replace with your actual domain
const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.season26.com'

// Default metadata for the website
export const defaultMetadata: Metadata = {
  title: {
    default: 'Season26',
    template: '%s | Season26'
  },
  description: 'Season26 - Your premier destination for seasonal products and services',
  keywords: ['season26', 'seasonal', 'products', 'services'],
  authors: [{ name: 'Season26 Team' }],
  creator: 'Season26',
  publisher: 'Season26',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Season26',
    description: 'Your premier destination for seasonal products and services',
    url: baseUrl,
    siteName: 'Season26',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Season26 - Your premier destination for seasonal products and services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Season26',
    description: 'Your premier destination for seasonal products and services',
    images: ['/og-image.jpg'],
    creator: '@season26',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  verification: {
    // Add verification tokens if needed
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

// Helper function to generate metadata for a specific page
export function generateMetadata(
  title: string,
  description: string,
  path: string = '/',
  image: string = '/og-image.jpg',
  type: 'website' | 'article' = 'website'
): Metadata {
  const url = `${baseUrl}${path}`
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Season26',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@season26',
    },
  }
}
