"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1200}
            height={800}
            className="object-contain w-full h-full"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
