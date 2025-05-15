import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import {
  Star,
  Phone,
  ArrowRight,
  Hammer,
  Ruler,
  Mail,
  MapPin,
} from "lucide-react"
import GoogleMapWrapper from "@/app/(user)/components/GoogleMapWrapper"
import React from 'react'
import HeroBackground from "@/components/HeroBackground"
import ThemeLogo from "@/components/ThemeLogo"
import { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Prolific Paint & Design - Professional Painting & Contracting Services",
  description: "Transform your home with Bend's premier painting and contracting service. Quality work, competitive prices, and excellent customer service.",
  openGraph: {
    images: [
      {
        url: "/paint-splash-full-optimized.jpeg",
        width: 1920,
        height: 1080,
        alt: "Prolific Paint & Design Hero Image"
      }
    ]
  }
}

export default function HomePage() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/paint-splash-mobile-optimized-360x640.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          href="/paint-splash-full-optimized.jpeg"
          as="image"
          type="image/jpeg"
          media="(min-width: 769px)"
        />
      </Head>
      <div className="flex flex-col">
        {/* Hero Section */}
        <div className="w-full h-[100dvh] flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
          <HeroBackground />
          <div className="w-full md:w-1/2 h-full flex items-center justify-center px-4 sm:px-8 order-2 md:order-1">
            <div className="max-w-2xl bg-white/40 backdrop-blur-sm p-2 md:p-6 rounded-lg space-y-2 md:space-y-4">
              <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[rgb(var(--color-text-emphasized))]">Pro</span>fessional <span className="text-[rgb(var(--color-text-emphasized))]">Painting</span> & Contracting Services
              </h1>
              <p className="text-xs sm:text-lg md:text-xl text-left">
                Transform your home with Bend's premier painting and contracting service.<span className="text-[rgb(var(--color-text-emphasized))]"> Quality </span>work, competitive
                <span className="text-[rgb(var(--color-text-emphasized))]"> prices</span>, and excellent<span className="text-[rgb(var(--color-text-emphasized))]"> customer service</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 pt-1 sm:pt-4">
                <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-sm sm:text-lg hover:text-black w-full sm:w-auto">
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-black hover:bg-black/10 bg-[rgb(var(--color-button-2nd))] text-sm sm:text-lg w-full sm:w-auto">
                  <Link href="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[50vh] md:h-full relative order-1 md:order-2">
            <ThemeLogo />
          </div>
        </div>

        {/* Services Overview */}
        <section className="py-24 sm:py-48 bg-[rgb(var(--color-background))] border-y border-gray-200 border-solid min-h-screen">
          <div className="flex flex-col items-center px-2 sm:px-4">
            <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Our Services</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4">
                From interior and exterior painting to general contracting, we provide a wide range of services to meet
                your residential needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              <ServiceCard
                title="Interior/Exterior Painting"
                description="From homes to small commercial spaces, we offer professional painting services using premium paints and expert application techniques."
                image="/interior-painting.svg"
              />
              <ServiceCard
                title="Carpentry"
                description="Enhance your home's curb appeal and protect it from the elements with our durable exterior painting solutions."
                image="/carpentry.svg"
              />
              <ServiceCard
                title="Junk/Snow Removal"
                description="Give your kitchen a fresh look with our cabinet painting and refinishing services, at a fraction of replacement cost."
                image="/junk.svg"
              />
              <ServiceCard
                title="Wood-Finishes"
                description="Protect and beautify your outdoor living spaces with our professional deck staining and sealing services."
                image="/wood-finishes.svg"
              />
              <ServiceCard
                title="Power Washing"
                description="From small holes to major damage, our drywall repair services will make your walls look like new again."
                image="/power-washing.svg"
              />
              <ServiceCard
                title="General Contracting"
                description="Beyond painting, we offer a variety of residential contracting services to help with all your home improvement needs."
                image="/general-contracting.svg"
              />
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-[rgb(var(--color-button-2nd))] hover:bg-[rgb(var(--color-button-2nd-hover))] text-black hover:border-white hover:border-1 text-lg">
                <Link href="/services"><span className="text-[rgb(var(--color-text-emphasized-2))] hover:text-[rgb(var(--color-text-emphasized-hover))]">CLICK HERE</span> TO VIEW ALL SERVICES</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div className="flex flex-col items-center py-32 sm:py-48 px-2 sm:px-4 bg-[rgb(var(--color-background))] border-y border-gray-200 border-solid gap-8">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Why Choose Prolific Paint @ Design</h2>
            <p className="text-sm sm:text-lg">
              What sets us apart from the competition is our commitment to quality, competitive pricing, and exceptional
              customer service.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 sm:gap-8 max-w-7xl mx-auto">
            {/* Left side cards - horizontal on mobile */}
            <div className="flex flex-row lg:flex-col gap-4 sm:gap-6 w-full lg:w-[300px]">
              <Card className="text-black border-black/50 border-2 backdrop-blur-sm flex-1 h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <Star className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Experience</h3>
                    <p className="text-sm sm:text-base">
                      Years of professional experience in residential painting and contracting.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-black border-black/50 border-2 backdrop-blur-sm flex-1 h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <Ruler className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Quality</h3>
                    <p className="text-sm sm:text-base">Premium materials and meticulous attention to detail on every project.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Middle content */}
            <div className="flex-1 max-w-2xl mx-auto text-center my-auto">
              <div className="bg-black/20 border border-gold/20 backdrop-blur-sm rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Commitment to Excellence</h3>
                <p className="mb-6 text-sm sm:text-base">
                  At <span className="text-[rgb(var(--color-text-emphasized))]">Prolific Paint @ Design</span>, we believe in delivering exceptional results through our dedication to quality craftsmanship and customer satisfaction. Our team of experienced professionals ensures that every project receives the attention to detail it deserves.
                </p>
                <Button asChild variant="outline" className="border-white bg-[rgb(var(--color-button-2nd))] hover:bg-[rgb(var(--color-button-2nd-hover))] text-lg w-full sm:w-auto">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            {/* Right side cards - horizontal on mobile */}
            <div className="flex flex-row lg:flex-col gap-4 sm:gap-6 w-full lg:w-[300px]">
              <Card className="text-black border-black/50 border-2 backdrop-blur-sm flex-1 h-full">
                <CardContent className="p-4 sm:p-6  text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Service</h3>
                    <p className="text-sm sm:text-base">
                      Responsive communication and exceptional customer service from start to finish.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-black border-black/50 border-2 backdrop-blur-sm flex-1 h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <Hammer className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Licensed</h3>
                    <p className="text-sm sm:text-base">Fully licensed (CCB: 256200) and insured for your peace of mind.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Recent Projects Gallery Preview */}
        <section className="flex items-center justify-center py-24 sm:py-36 bg-[rgb(var(--color-background))] border-y border-gray-200 border-solid px-4">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-4 border-x border-gray-500 border-solid shadow-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto px-4">
                Take a look at some of our recent painting and contracting projects in Bend and throughout Central Oregon.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-square overflow-hidden rounded-lg border-4 border-gray-500 border-solid shadow-lg shadow-[rgb(var(--color-shadow))]">
                <Image
                  src="/assets/projects/desktop/job-4/4-6.jpeg"
                  alt="Interior Painting Project"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg border-4 border-gray-500 border-solid shadow-lg shadow-[rgb(var(--color-shadow))]">
                <Image
                  src="/assets/projects/desktop/job-3/3-af-3.jpeg"
                  alt="Exterior Painting Project"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg border-4 border-gray-500 border-solid shadow-lg shadow-[rgb(var(--color-shadow))]">
                <Image
                  src="/assets/projects/desktop/job-4/4-4.jpeg"
                  alt="Cabinet Painting Project"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-[rgb(var(--color-button-2nd))] hover:bg-[rgb(var(--color-button-2nd-hover))] text-white/80 hover:border-white hover:border-1 text-lg">
                <Link href="/gallery" className="flex items-center">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="flex items-center justify-center py-24 sm:py-36 bg-[rgb(var(--color-background))] border-y border-gray-200 border-solid px-4">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-4 border-x border-gray-500 border-solid shadow-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto px-4">
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
        <section className="flex items-center justify-center py-24 sm:py-36 bg-[rgb(var(--color-background))] border-y border-gray-200 border-solid px-2 sm:px-4">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Contact Us</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4">
                Ready to start your project? Contact us today for a free consultation and quote.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
              <div className="border-black/50 border-2 backdrop-blur-sm rounded-lg p-4 sm:p-8 bg-white/10">
                <h3 className="flex justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>

              <div>
                <h3 className="flex justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Service Area</h3>
                <div className="h-[300px] sm:h-[400px] mb-4 sm:mb-6">
                  <GoogleMapWrapper />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gold mt-1" />
                    <div>
                      <h4 className="text-sm sm:text-base font-medium">Phone (Preferred Contact Method)</h4>
                      <a href="tel:5416103864" className="text-sm sm:text-base text-muted-foreground hover:text-gold transition-colors">
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
        <section className="py-8 sm:py-12 bg-black px-4">
          <div className="container mx-auto flex items-center justify-center">
            <div className="max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left flex-shrink-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to transform your space?</h2>
                <p className="text-white/80 mt-1">Free, no-obligation quote today.</p>
              </div>
              <div className="flex gap-4 items-center">
                <Button asChild size="lg" className="text-white bg-[rgb(var(--color-button-2nd))] whitespace-nowrap">
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 whitespace-nowrap">
                  <a href="tel:5416103864">Call 541-610-3864</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
