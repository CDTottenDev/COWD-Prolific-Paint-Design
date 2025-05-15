"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface GalleryImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function GalleryImage({ src, alt, width, height, className }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={cn("overflow-hidden rounded-lg cursor-pointer group relative", className)}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred background overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-white/70 transition-colors"
            aria-label="Close image"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image container */}
          <div className="relative z-10 w-full max-w-[90vw] h-[80vh]">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1920}
              height={1080}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
