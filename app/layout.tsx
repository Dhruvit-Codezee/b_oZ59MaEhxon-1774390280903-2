import type { Metadata, Viewport } from 'next'
import { DM_Sans, Space_Mono } from 'next/font/google'
import { CookieConsent } from "@/components/cookie-consent"
import { CalendlyScript } from "@/components/calendly-script"
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '600', '700'],
})
const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6D28D9',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.automaly.io'),
  title: {
    default: 'AI & Automation Consultants | Improve Productivity & Growth - Automaly',
    template: '%s | Automaly',
  },
  description: 'At Automaly, we improve business growth and lower costs. Our services include automation consulting, digital transformation, and custom AI development.',
  generator: 'Next.js',
  keywords: ['AI automation', 'business automation', 'CRM automation', 'sales automation', 'marketing automation', 'Airtable partners', 'n8n partners'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Automaly',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Automaly - AI & Automation Consultants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Preload circuit pattern to reduce render blocking */}
        <link
          rel="preload"
          href="/images/circuit-pattern.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-purple focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Automaly",
              url: "https://www.automaly.io",
              logo: "https://www.automaly.io/images/automaly-logo.png",
              image: "https://www.automaly.io/images/og-default.jpg",
              description:
                "AI & Automation consultants helping businesses improve productivity and growth through automation consulting, digital transformation, and custom AI development.",
              priceRange: "££",
              areaServed: [
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "Ireland" },
              ],
              serviceArea: {
                "@type": "GeoShape",
                name: "UK & Ireland",
              },
              knowsAbout: [
                "AI Automation",
                "Business Process Automation",
                "CRM Automation",
                "AI Agent Development",
                "Digital Transformation",
                "Revenue Operations",
              ],
              sameAs: [
                "https://www.linkedin.com/company/automaly",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@automaly.io",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />
        {children}
        <CalendlyScript />
        <CookieConsent />
      </body>
    </html>
  )
}
