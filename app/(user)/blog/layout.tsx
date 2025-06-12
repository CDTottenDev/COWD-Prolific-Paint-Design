import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/app/(user)/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prolificpaintdesign.com/blog"),
  title: {
    default: "Prolific Paint & Design Blog | Expert Painting Tips & Insights",
    template: "%s | Prolific Paint & Design Blog",
  },
  description:
    "Discover expert house painting tips, trends, and home improvement insights to help you transform your living spaces. Updated weekly with fresh content.",
  keywords: [
    "house painting",
    "interior painting",
    "exterior painting",
    "home improvement",
    "color selection",
    "painting tips",
  ],
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
    url: "https://www.prolificpaintdesign.com/blog",
    siteName: "Prolific Paint & Design Blog",
    title: "Prolific Paint & Design Blog | Expert Painting Tips & Insights",
    description:
      "Discover expert house painting tips, trends, and home improvement insights to help you transform your living spaces.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prolific Paint & Design Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prolific Paint & Design Blog | Expert Painting Tips & Insights",
    description:
      "Discover expert house painting tips, trends, and home improvement insights to help you transform your living spaces.",
    creator: "@prolificpaint",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
}

// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prolific Paint & Design Blog",
  description: "Expert house painting tips, trends, and insights",
  url: "https://www.prolificpaintdesign.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Prolific Paint & Design",
    logo: {
      "@type": "ImageObject",
      url: "https://www.prolificpaintdesign.com/logo.png",
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  )
}
