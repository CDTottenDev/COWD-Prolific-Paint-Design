import type React from "react"
import type { Metadata } from "next"
import "../globals.css"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL('https://prolificpaintdesign.com'),
  title: {
    default: "Prolific Paint & Design | Professional Painting Services in Bend, Oregon",
    template: "%s | Prolific Paint & Design"
  },
  description: "Professional residential and commercial painting services in Bend, Oregon. Expert interior and exterior painting, cabinet refinishing, and contracting services. Free estimates available.",
  keywords: ["painting services", "Bend Oregon", "interior painting", "exterior painting", "cabinet refinishing", "contracting services", "professional painters"],
  authors: [{ name: "Prolific Paint & Design" }],
  creator: "Prolific Paint & Design",
  publisher: "Prolific Paint & Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prolificpaintdesign.com",
    siteName: "Prolific Paint & Design",
    title: "Prolific Paint & Design | Professional Painting Services in Bend, Oregon",
    description: "Professional residential and commercial painting services in Bend, Oregon. Expert interior and exterior painting, cabinet refinishing, and contracting services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prolific Paint & Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prolific Paint & Design | Professional Painting Services",
    description: "Professional residential and commercial painting services in Bend, Oregon. Expert interior and exterior painting, cabinet refinishing, and contracting services.",
    images: ["/og-image.jpg"],
    creator: "@prolificpaint",
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
  verification: {
    google: "your-google-site-verification",
  },
}

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Prolific Paint & Design",
            "image": "https://prolificpaintdesign.com/logo.png",
            "url": "https://prolificpaintdesign.com",
            "telephone": "+15416103864",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "Bend",
              "addressRegion": "OR",
              "postalCode": "97701",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 44.0582,
              "longitude": -121.3153
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://www.facebook.com/prolificpaintdesign",
              "https://www.instagram.com/prolificpaintdesign"
            ],
            "priceRange": "$$",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 44.0582,
                "longitude": -121.3153
              },
              "geoRadius": "50000"
            }
          })
        }}
      />
      {children}
    </>
  )
}
