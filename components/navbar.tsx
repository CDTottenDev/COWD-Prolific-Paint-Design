"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "@/components/theme-switcher"
import ThemeLogo from "@/components/ThemeLogo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full text-[rgb(var(--color-text))] shadow-lg">
      <div className="w-full bg-[rgb(var(--color-background))] border-b border-yellow-200 mx-auto flex h-16 md:h-20 items-center justify-between px-2 md:px-8">
        <div className="flex items-center w-1/3">
          <div className="h-12 w-18 md:h-18 md:w-24 mr-1 md:mr-2 bg-[rgb(var(--color-background))] rounded-full flex items-center justify-center">
            <Link href="/">
              <ThemeLogo />
            </Link>
          </div>
          <Link href="/" className="flex items-center gap-1 md:gap-3 min-w-0 flex-1 w-1/2">
            <span className="text-sm md:text-2xl font-bold whitespace-nowrap">
              <span className="underline">Prolific</span> <span className="underline">Paint</span> & <span className="underline">Design</span>
            </span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center justify-center w-1/3">
          <div className="flex gap-4">
            <Link href="/" className="text-sm font-medium hover:text-gold transition-colors border-x-2 rounded-md px-2 py-1 whitespace-nowrap hover:border-yellow-200/50">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors border-x-2 rounded-md px-2 py-1 whitespace-nowrap hover:border-yellow-200/50">
              About Us
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-gold transition-colors border-x-2 rounded-md px-2 py-1 whitespace-nowrap hover:border-yellow-200/50">
              Services
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-gold transition-colors border-x-2 rounded-md px-2 py-1 whitespace-nowrap hover:border-yellow-200/50">
              Gallery
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gold transition-colors border-x-2 rounded-md px-2 py-1 whitespace-nowrap hover:border-yellow-200/50">
              Contact
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-gold transition-colors border-x-2 rounded-md px-2 py-1 whitespace-nowrap hover:border-yellow-200/50">
              Blog
            </Link>
          </div>
        </nav>
        <div className="hidden lg:flex items-center justify-end w-1/3 gap-4">
          <ThemeSwitcher />
          <Button className="border-x-4 text-md bg-[rgb(var(--color-button))] text-white hover:bg-[rgb(var(--color-button-hover))] border-[rgb(var(--color-button-border))] relative group shadow-lg shadow-white/30 hover:shadow-white/50">
            <Link href="/quote" className="flex items-center">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-[rgb(var(--color-button))] transform transition-transform group-hover:translate-x-1 mr-2">
                <span className="text-xl font-bold text-black">→</span>
              </span>
              GET A QUOTE
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-[rgb(var(--color-button))] transform transition-transform group-hover:-translate-x-1 ml-2">
                <span className="text-xl font-bold text-black">←</span>
              </span>
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-end gap-2 lg:hidden w-1/3">
          <ThemeSwitcher />
          <div className="relative">
            <button 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className={cn(
              "absolute right-0 mt-2 w-48 bg-[rgb(var(--color-background))] rounded-lg shadow-lg border border-yellow-200 transition-all duration-200 ease-in-out",
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            )}>
              <div className="py-2">
                <Link 
                  href="/" 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold transition-colors" 
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold transition-colors" 
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link 
                  href="/services" 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold transition-colors" 
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link 
                  href="/gallery" 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold transition-colors" 
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold transition-colors" 
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link 
                  href="/blog" 
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold transition-colors" 
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                <div className="px-4 py-2">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold hover:text-black w-full text-sm"
                  >
                    <Link href="/quote" onClick={toggleMenu}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Button className="w-full border-x-4 rounded-none bg-[rgb(var(--color-button))] border-[rgb(var(--color-button-border))] text-white">
          <Link href="/quote" className="flex items-center justify-center py-2">
            Get a Quote
          </Link>
        </Button>
      </div>
    </header>
  )
}
