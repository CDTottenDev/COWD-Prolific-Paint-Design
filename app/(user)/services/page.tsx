import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[rgb(var(--color-background))]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 h-full flex w-full items-center justify-center text-center py-24">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[rgb(var(--color-text-emphasized))]">Services</span>
          </h1>
          <p className="text-lg">
            Comprehensive painting and contracting services for homeowners, contractors, and realtors throughout
            Central Oregon.
          </p>
        </div>
      </div>
      {/* Services Introduction */}
      <section className="py-12 bg-[rgb(var(--color-background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Painting & Contracting</h2>
            <p className="text-muted-foreground">
              At <span className="text-[rgb(var(--color-text-emphasized))]">Prolific Paint & Design</span>, we offer comprehensive residential and small commercial painting and contracting services.
              From interior and exterior painting to carpentry and power washing, our experienced team delivers quality results
              that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Interior Painting */}
      <section className="py-16 bg-[rgb(var(--color-background-2))] border-y border-gray-200 border-solid">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/projects/desktop/job-4/4-1.jpeg"
                alt="Interior Painting Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Interior Painting</h2>
              <p className="text-muted-foreground">
                Transform your space with our professional interior painting services for both residential and small commercial properties.
                We use premium paints and expert techniques to deliver beautiful, long-lasting results.
              </p>
              <div className="space-y-3 flex flex-col items-center">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Wall painting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Trim and baseboards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Doors and cabinets</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Faux finishes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Color consultation</span>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-[rgb(var(--color-button-2nd))] hover:bg-[rgb(var(--color-button-2nd-hover))] text-black hover:border-white hover:border-1 text-lg shadow-lg shadow-[rgb(var(--color-shadow))]">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Painting */}
      <section className="py-16 bg-[rgb(var(--color-background))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6 text-right">
              <h2 className="text-3xl font-bold">Exterior Painting</h2>
              <p className="text-muted-foreground">
                Enhance your property's curb appeal and protect it from the elements with our professional exterior painting
                services. We use high-quality, weather-resistant paints that stand up to Central Oregon's diverse climate.
              </p>
              <div className="space-y-3 flex flex-col items-center">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>House painting (all siding types)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Stucco and brick surfaces</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Decks and fences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Trim and fascia</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Garages and outbuildings</span>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-[rgb(var(--color-button-2nd))] hover:bg-[rgb(var(--color-button-2nd-hover))] text-black hover:border-white hover:border-1 text-lg shadow-lg shadow-[rgb(var(--color-shadow))]">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/assets/projects/desktop/job-2/2-af-2.jpg"
                alt="Exterior Painting Services"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* carpentry */}
      <section className="py-16 bg-[rgb(var(--color-background-2))] border-y border-gray-200 border-solid">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/projects/desktop/job-5/5-6-af.jpeg"
                alt="Interior Painting & Carpentry"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Carpentry</h2>
              <p className="text-muted-foreground">
                Professional carpentry services for all your home improvement needs.
              </p>
              <div className="space-y-3 flex flex-col items-center">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Custom baseboard and crown molding installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Door and window trim customization</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Hardwood and laminate flooring solutions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Exterior siding and cladding installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Decorative wood paneling and feature walls</span>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-[rgb(var(--color-button-2nd))] hover:bg-[rgb(var(--color-button-2nd-hover))] text-black hover:border-white hover:border-1 text-lg shadow-lg shadow-[rgb(var(--color-shadow))]">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-48 bg-[rgb(var(--color-background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond painting, we offer a variety of other residential contracting services to help with all your home
              improvement needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-[rgb(var(--color-background-3))] p-6 rounded-lg border text-black/80 shadow-md shadow-[rgb(var(--color-shadow))]">
              <h3 className="text-xl font-bold mb-3 text-center">General Contracting</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Professional general contracting services for all your home or business improvement needs.
              </p>
              <div className="flex flex-col-2 justify-center gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Custom trim and molding installation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Door and window frame installation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Floor installation and repair</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Siding installation and repair</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Custom wood wall accents and features</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(var(--color-background-3))] p-6 rounded-lg border text-black/80 shadow-md shadow-[rgb(var(--color-shadow))]">
              <h3 className="text-xl font-bold mb-3 text-center">Power Washing</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Professional power washing services for all types of surfaces.
              </p>
              <div className="flex flex-col-2 justify-center gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>All substrate types</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>House siding</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Decks and patios</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Driveways and walkways</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(var(--color-background-3))] p-6 rounded-lg border text-black/80 shadow-md shadow-[rgb(var(--color-shadow))]">
              <h3 className="text-xl font-bold mb-3 text-center">Junk & Snow Removal</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Keep your property clean and safe with our junk and snow removal services.
              </p>
              <div className="flex flex-col-2 justify-center gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Residential junk removal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Construction debris removal</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Snow removal services</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Property cleanup</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(var(--color-background-3))] p-6 rounded-lg border text-black/80 shadow-md shadow-[rgb(var(--color-shadow))]">
              <h3 className="text-xl font-bold mb-3 text-center">Wood Finishing</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Professional wood finishing services for both interior and exterior surfaces. We use high-quality stains,
                lacquers, and varnishes to protect and enhance the natural beauty of wood.
              </p>
              <div className="flex flex-col-2 justify-center gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Interior wood staining</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Exterior wood protection</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Lacquer and varnish application</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>All substrate types</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-36 bg-[rgb(var(--color-background-2))] border-y border-gray-200 border-solid">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure every project is completed to the highest standards and your complete
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="border-black/50 border-2 backdrop-blur-sm flex-1 h-full relative">
              <div className="absolute -top-1 -left-1 w-10 h-10 text-[rgb(var(--color-text-2))] rounded-full bg-[rgb(var(--color-text-emphasized))] flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="p-4 sm:p-6 text-black text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 pt-2">Initial Contact</h3>
                  <p className="text-muted-foreground">
                    Reach out via phone call, text, or email to request a free estimate. We'll respond within 24 hours to schedule a time that works for you.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-black/50 border-2 backdrop-blur-sm flex-1 h-full relative">
              <div className="absolute -top-1 -left-1 w-10 h-10 text-[rgb(var(--color-text-2))] rounded-full bg-[rgb(var(--color-text-emphasized))] flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="p-4 sm:p-6 text-black text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 pt-2">Project Walkthrough</h3>
                  <p className="text-muted-foreground">
                    We'll visit at the scheduled time to walk the project with you, listen to your vision, make product recommendations, and address any problem areas. We'll gather all necessary information for your estimate.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-black/50 border-2 backdrop-blur-sm flex-1 h-full relative">
              <div className="absolute -top-1 -left-1 w-10 h-10 text-[rgb(var(--color-text-2))] rounded-full bg-[rgb(var(--color-text-emphasized))] flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="p-4 sm:p-6 text-black text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 pt-2">Project Confirmation</h3>
                  <p className="text-muted-foreground">
                    Once the estimate is agreed upon, a 30-50% deposit secures your materials and guarantees your start date.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-black/50 border-2 backdrop-blur-sm flex-1 h-full relative">
              <div className="absolute -top-1 -left-1 w-10 h-10 text-[rgb(var(--color-text-2))] rounded-full bg-[rgb(var(--color-text-emphasized))] flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="p-4 sm:p-6 text-black text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 pt-2">Transformation</h3>
                  <p className="text-muted-foreground">
                    Watch as we transform your space with power washing, proper prep work, and 2 coats of paint (sprayed, brushed, or rolled). We'll clean up thoroughly, leaving everything as if we were never there.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-black/50 border-2 backdrop-blur-sm flex-1 h-full relative">
              <div className="absolute -top-1 -left-1 w-10 h-10 text-[rgb(var(--color-text-2))] rounded-full bg-[rgb(var(--color-text-emphasized))] flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div className="p-4 sm:p-6 text-black text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 pt-2">Final Walkthrough</h3>
                  <p className="text-muted-foreground">
                    We'll walk through the completed project to discuss the results, your satisfaction level, and any maintenance recommendations. Final invoice will be provided.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to start your project?</h2>
              <p className="text-white/80 mt-2">Contact us today for a free, no-obligation quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[rgb(var(--color-button-2nd))] hover:bg-[rgb(var(--color-button-2nd-hover))] text-black hover:border-white hover:border-1 text-lg">
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
