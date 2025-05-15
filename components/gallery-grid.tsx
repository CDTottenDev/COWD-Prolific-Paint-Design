"use client"

import { useEffect, useState } from "react"
import GalleryImage from "@/components/gallery-image"

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  category: string
}

interface GalleryGridProps {
  mobileImages: GalleryImage[]
  desktopImages: GalleryImage[]
  selectedCategory: string
}

export default function GalleryGrid({ mobileImages, desktopImages, selectedCategory }: GalleryGridProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const filteredImages = (isMobile ? mobileImages : desktopImages).filter((image) => {
    if (selectedCategory === "all") return true
    const imageCategories = image.category.split(", ").map(cat => cat.trim())
    return imageCategories.includes(selectedCategory)
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredImages.map((image, index) => (
        <GalleryImage
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="aspect-square shadow-lg shadow-[rgb(var(--color-shadow))]"
        />
      ))}
    </div>
  )
} 