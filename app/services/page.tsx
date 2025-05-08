import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxSection
        imageUrl="/placeholder.svg?height=1080&width=1920&query=professional painters working on a house, high quality"
        height="h-[50vh]"
        overlayOpacity={0.6}
      >
        <div className="container h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-lg text-white/90">
              Comprehensive painting and contracting services for homeowners, contractors, and realtors throughout
              Central Oregon.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Painting & Contracting</h2>
            <p className="text-muted-foreground">
              At Prolific Paint @ Design, we offer a wide range of residential painting and contracting services.
              Whether you need interior or exterior painting, cabinet refinishing, or other home improvement services,
              our experienced team delivers quality results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Interior Painting */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=800&width=800&query=interior of a modern living room being painted, high quality"
                alt="Interior Painting Services"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Interior Painting</h2>
              <p className="text-muted-foreground">
                Transform your home's interior with our professional painting services. We use premium paints and expert
                techniques to deliver beautiful, long-lasting results.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Wall painting and touch-ups</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Ceiling painting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Trim and baseboards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Accent walls and special finishes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Color consultation</span>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Painting */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold">Exterior Painting</h2>
              <p className="text-muted-foreground">
                Enhance your home's curb appeal and protect it from the elements with our professional exterior painting
                services. We use high-quality, weather-resistant paints that stand up to Central Oregon's diverse
                climate.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>House painting (all siding types)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Trim and fascia</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Doors and windows</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Decks and fences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Garages and outbuildings</span>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=800&width=800&query=exterior of a house being painted blue, high quality"
                alt="Exterior Painting Services"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Refinishing */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=800&width=800&query=kitchen with white cabinets being painted, high quality"
                alt="Cabinet Refinishing Services"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Cabinet Refinishing</h2>
              <p className="text-muted-foreground">
                Give your kitchen or bathroom a fresh new look without the cost of full replacement. Our cabinet
                refinishing services can transform your space at a fraction of the cost of new cabinets.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Kitchen cabinet painting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Bathroom vanity refinishing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Custom color matching</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Hardware replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Clear coat finishes</span>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond painting, we offer a variety of other residential contracting services to help with all your home
              improvement needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Deck Staining & Sealing</h3>
              <p className="text-muted-foreground mb-4">
                Protect and beautify your outdoor living spaces with our professional deck staining and sealing
                services.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Deck cleaning and preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Staining and sealing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Waterproofing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Drywall Repair</h3>
              <p className="text-muted-foreground mb-4">
                From small holes to major damage, our drywall repair services will make your walls look like new again.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Patch holes and cracks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Water damage repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Texture matching</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Carpentry</h3>
              <p className="text-muted-foreground mb-4">
                Our carpentry services can help with various home improvement projects, from trim work to custom
                shelving.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Trim and molding installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Door installation and repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Custom shelving</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Pressure Washing</h3>
              <p className="text-muted-foreground mb-4">
                Restore the beauty of your home's exterior surfaces with our professional pressure washing services.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>House siding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Decks and patios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Driveways and walkways</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Wallpaper Removal</h3>
              <p className="text-muted-foreground mb-4">
                Say goodbye to outdated wallpaper with our professional removal services that leave your walls ready for
                a fresh coat of paint.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Safe and efficient removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Wall preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Surface repair</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Color Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Not sure which colors will work best in your space? Our color consultation services can help you make
                the perfect choice.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Professional color advice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Sample testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Color scheme development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure every project is completed to the highest standards and your complete
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 pt-2">Consultation</h3>
              <p className="text-muted-foreground">
                We start with a thorough consultation to understand your needs, preferences, and project requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 pt-2">Estimate</h3>
              <p className="text-muted-foreground">
                We provide a detailed, transparent estimate outlining all costs and the scope of work for your project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 pt-2">Preparation</h3>
              <p className="text-muted-foreground">
                We carefully prepare the work area, protecting your furniture, floors, and belongings before starting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 pt-2">Completion</h3>
              <p className="text-muted-foreground">
                We execute the work with precision, clean up thoroughly, and conduct a final walkthrough to ensure your
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-black">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to start your project?</h2>
              <p className="text-white/80 mt-2">Contact us today for a free, no-obligation quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-black">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="tel:5416103864">Call 541-610-3864</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
