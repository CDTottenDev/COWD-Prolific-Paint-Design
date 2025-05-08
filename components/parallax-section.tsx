"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  imageUrl: string
  height?: string
  children?: React.ReactNode
  className?: string
  overlayOpacity?: number
}

export default function ParallaxSection({
  imageUrl,
  height = "h-[50vh]",
  children,
  className,
  overlayOpacity = 0.5,
}: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (top < windowHeight && top + sectionRef.current.offsetHeight > 0) {
        const newOffset = (scrollPosition - (scrollPosition + top - windowHeight)) * 0.15
        setOffset(newOffset)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className={cn("relative overflow-hidden", height, className)}>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offset}px)`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }} />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}
