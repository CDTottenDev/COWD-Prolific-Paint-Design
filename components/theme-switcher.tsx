"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-8 w-20 rounded-full bg-neutral-400 transition-colors duration-200 cursor-pointer"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 left-0.5 h-7 w-7 rounded-full bg-[rgb(var(--color-background))] transition-transform duration-200 flex items-center justify-center ${
          theme === "dark" ? "translate-x-12" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-gray-100" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-400" />
        )}
      </div>
      <span className={`absolute text-md text-gray-100 transition-transform duration-200 top-1 ${
        theme === "dark" ? "left-2" : "right-2"
      }`}>
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  )
}
