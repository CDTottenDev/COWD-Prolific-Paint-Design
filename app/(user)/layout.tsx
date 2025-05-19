import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prolific Paint & Design | Professional Painting & Contracting Services",
  description:
    "Professional residential painting and contracting services in Bend, Oregon and surrounding areas. Quality work, competitive prices, and excellent customer service.",
  keywords: "painting services, residential painting, commercial painting, Bend Oregon, painting contractors, interior painting, exterior painting",
  authors: [{ name: "Prolific Paint & Design" }],
  creator: "Prolific Paint & Design",
  publisher: "Prolific Paint & Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://prolificpaintdesign.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prolific Paint & Design | Professional Painting & Contracting Services",
    description: "Professional residential painting and contracting services in Bend, Oregon and surrounding areas. Quality work, competitive prices, and excellent customer service.",
    url: "https://prolificpaintdesign.com",
    siteName: "Prolific Paint & Design",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/paint-splash-mobile-optimized-360x640.webp",
        width: 360,
        height: 640,
        alt: "Prolific Paint & Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prolific Paint & Design | Professional Painting & Contracting Services",
    description: "Professional residential painting and contracting services in Bend, Oregon and surrounding areas. Quality work, competitive prices, and excellent customer service.",
    creator: "@prolificpaint",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/webp" href="/FullLogo-v-2-light.svg" />
        <link rel="apple-touch-icon" href="/FullLogo-v-2-light.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Prolific Paint & Design",
              "image": "https://prolificpaintdesign.com/logo.png",
              "description": "Professional residential painting and contracting services in Bend, Oregon and surrounding areas.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Bend",
                "addressRegion": "OR",
                "postalCode": "Your Postal Code",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "Your Latitude",
                "longitude": "Your Longitude"
              },
              "url": "https://prolificpaintdesign.com",
              "telephone": "Your Phone Number",
              "priceRange": "$$",
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
              }
            })
          }}
        />
      </body>
    </html>
  )
}
