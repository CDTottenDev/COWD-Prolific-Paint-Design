"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-black">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/FullLogo-1300x1024 light theme.svg" 
              alt="Prolific Paint & Design Logo" 
              className="h-16 w-auto"
            />
            <span className="text-xl font-bold text-gold">
              Prolific Paint & Design
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
          <div className="flex gap-8">
            <Link href="/" className="text-sm font-medium hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-gold transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-gold transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="container py-4 flex flex-col gap-4 bg-black">
          <Link href="/" className="text-sm font-medium hover:text-gold transition-colors" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-gold transition-colors" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-gold transition-colors" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gold transition-colors" onClick={toggleMenu}>
            Contact
          </Link>
          <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black w-full">
            <Link href="/quote" onClick={toggleMenu}>
              Get a Quote
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
