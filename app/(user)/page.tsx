import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ParallaxSection from "@/components/parallax-section"
import ContactForm from "@/components/contact-form"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import {
  Brush,
  Home,
  Droplet,
  Wrench,
  Star,
  Phone,
  ArrowRight,
  PaintBucket,
  Hammer,
  Ruler,
  Mail,
  MapPin,
} from "lucide-react"
import GoogleMapWrapper from "@/app/(user)/components/GoogleMapWrapper"
import React from 'react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxSection imageUrl="/house-painter-interior.png" height="h-screen" overlayOpacity={0.6}>
        <div className="container h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Professional <span className="text-gold">Painting</span> & Contracting Services
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Transform your home with Bend's premier painting and contracting service. Quality work, competitive
              prices, and excellent customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-black">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From interior and exterior painting to general contracting, we provide a wide range of services to meet
              your residential needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Interior Painting"
              description="Transform your home's interior with our professional painting services, using premium paints and expert techniques."
              icon={<Home className="h-8 w-8" />}
            />
            <ServiceCard
              title="Exterior Painting"
              description="Enhance your home's curb appeal and protect it from the elements with our durable exterior painting solutions."
              icon={<Brush className="h-8 w-8" />}
            />
            <ServiceCard
              title="Cabinet Refinishing"
              description="Give your kitchen a fresh look with our cabinet painting and refinishing services, at a fraction of replacement cost."
              icon={<PaintBucket className="h-8 w-8" />}
            />
            <ServiceCard
              title="Deck Staining"
              description="Protect and beautify your outdoor living spaces with our professional deck staining and sealing services."
              icon={<Droplet className="h-8 w-8" />}
            />
            <ServiceCard
              title="Drywall Repair"
              description="From small holes to major damage, our drywall repair services will make your walls look like new again."
              icon={<Hammer className="h-8 w-8" />}
            />
            <ServiceCard
              title="General Contracting"
              description="Beyond painting, we offer a variety of residential contracting services to help with all your home improvement needs."
              icon={<Wrench className="h-8 w-8" />}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-gold hover:bg-gold/90 text-black">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Parallax */}
      <ParallaxSection imageUrl="/house-painters.png" height="auto" overlayOpacity={0.7}>
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Prolific Paint @ Design</h2>
            <p className="text-white/90 text-lg">
              What sets us apart from the competition is our commitment to quality, competitive pricing, and exceptional
              customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/50 border-gold/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gold/20 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                <p className="text-white/80">
                  Years of professional experience in residential painting and contracting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gold/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gold/20 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Ruler className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality</h3>
                <p className="text-white/80">Premium materials and meticulous attention to detail on every project.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gold/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gold/20 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Service</h3>
                <p className="text-white/80">
                  Responsive communication and exceptional customer service from start to finish.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gold/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gold/20 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Hammer className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Licensed</h3>
                <p className="text-white/80">Fully licensed (CCB: 256200) and insured for your peace of mind.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </ParallaxSection>

      {/* Recent Projects Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent painting and contracting projects in Bend and throughout Central Oregon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src="/modern-white-living-room.png"
                alt="Interior Painting Project"
                width={600}
                height={600}
                loading="lazy"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src="/house-painting-blue.png"
                alt="Exterior Painting Project"
                width={600}
                height={600}
                loading="lazy"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src="/white-cabinet-kitchen.png"
                alt="Cabinet Painting Project"
                width={600}
                height={600}
                loading="lazy"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-gold hover:bg-gold/90 text-black">
              <Link href="/gallery" className="flex items-center">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah Johnson"
              location="Bend, OR"
              quote="Kevin and his team did an amazing job painting the interior of our home. They were professional, clean, and finished ahead of schedule. Highly recommend!"
              rating={5}
            />
            <TestimonialCard
              name="Michael Davis"
              location="Redmond, OR"
              quote="We hired Prolific Paint to refinish our kitchen cabinets and couldn't be happier with the results. The attention to detail was impressive and the price was very reasonable."
              rating={5}
            />
            <TestimonialCard
              name="Jennifer Wilson"
              location="Sisters, OR"
              quote="Kevin's work on our exterior painting project was exceptional. He provided great advice on colors and the finish has held up beautifully through all seasons."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free consultation and quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Our Service Area</h3>
              <div className="h-[400px] mb-6">
                <GoogleMapWrapper />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <h4 className="font-medium">Phone (Preferred Contact Method)</h4>
                    <a href="tel:5416103864" className="text-muted-foreground hover:text-gold transition-colors">
                      541-610-3864
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:prolificpaint.@gmail.com"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      prolificpaint.@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <h4 className="font-medium">Service Area</h4>
                    <p className="text-muted-foreground">
                      Bend and surrounding areas in Central Oregon, and throughout the state of Oregon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-black">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to transform your space?</h2>
              <p className="text-white/80 mt-2">Get in touch for a free, no-obligation quote today.</p>
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
