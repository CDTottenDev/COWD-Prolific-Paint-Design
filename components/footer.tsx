import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex justify-center bg-black text-white border-t border-gray-400">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-1/3 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-gold mb-3">Prolific Paint & Design</h3>
            <p className="text-sm text-gray-300 mb-2">
              Professional residential painting and contracting services in Bend, Oregon and surrounding areas.
            </p>
            <p className="text-sm text-gray-300 font-semibold">CCB: 256200</p>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:5416103864" className="text-sm hover:text-gold transition-colors">
                  541-610-3864
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:prolificpaint.@gmail.com" className="text-sm hover:text-gold transition-colors">
                  prolificpaint.@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-sm">Bend and surrounding areas</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <div className="flex flex-col items-center gap-2">
              <Link href="/" className="text-sm hover:text-gold transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-sm hover:text-gold transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="text-sm hover:text-gold transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-sm hover:text-gold transition-colors">
                Contact
              </Link>
              <Link href="/quote" className="text-sm hover:text-gold transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Prolific Paint @ Design. All rights reserved.</p>
          <p className="mt-1">Serving Bend, Central Oregon, and the entire state of Oregon.</p>
        </div>
      </div>
    </footer>
  )
}
