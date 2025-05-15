"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeLogo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to light theme logo until mounted
  const logoSrc = !mounted 
    ? "/FullLogo-v-2-light.svg"
    : resolvedTheme === "dark"
      ? "/FullLogo-v-2-dark.svg"
      : "/FullLogo-v-2-light.svg"

  return (
    <Image 
      src={logoSrc}
      alt="Prolific Paint & Design Logo" 
      width={600} 
      height={600} 
      className="w-full h-full object-contain md:object-contain"
      priority
    />
  )
} 