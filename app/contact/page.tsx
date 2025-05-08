import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"
import ContactForm from "@/components/contact-form"
import LeafletMap from "@/components/Leafletmap"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxSection
        imageUrl="/placeholder.svg?height=1080&width=1920&query=person on phone talking to contractor, high quality"
        height="h-[50vh]"
        overlayOpacity={0.6}
      >
        <div className="container h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              <span className="text-gold">Contact</span> Us
            </h1>
            <p className="text-lg text-white/90">
              Ready to start your project? Get in touch with us today for a free consultation and quote.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to answer any questions you may have about our painting and contracting services. Reach out
                to us using any of the methods below, or fill out the contact form and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone (Preferred)</h3>
                    <p className="text-muted-foreground mb-1">Call us directly for immediate assistance</p>
                    <a href="tel:5416103864" className="text-gold hover:underline">
                      541-610-3864
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-muted-foreground mb-1">Send us an email anytime</p>
                    <a href="mailto:prolificpaint.@gmail.com" className="text-gold hover:underline">
                      prolificpaint.@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Service Area</h3>
                    <p className="text-muted-foreground mb-1">We serve clients throughout Central Oregon</p>
                    <p>Bend and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Business Hours</h3>
                    <p className="text-muted-foreground mb-1">When you can reach us</p>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: By appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Area</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We proudly serve Bend, Central Oregon, and throughout the state of Oregon.
            </p>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden">
            <LeafletMap />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer free estimates?</h3>
              <p className="text-muted-foreground">
                Yes, we provide free, no-obligation estimates for all our painting and contracting services.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">How far in advance should I book?</h3>
              <p className="text-muted-foreground">
                We recommend booking 2-4 weeks in advance, especially during our busy season (spring and summer).
                However, we can sometimes accommodate last-minute projects.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Are you licensed and insured?</h3>
              <p className="text-muted-foreground">
                Yes, we are fully licensed (CCB: 256200) and insured for your peace of mind.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">What areas do you serve?</h3>
              <p className="text-muted-foreground">
                We primarily serve Bend and Central Oregon, but we also take on projects throughout the state of Oregon.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer warranties?</h3>
              <p className="text-muted-foreground">
                Yes, we stand behind our work and offer warranties on our services. The specific warranty terms depend
                on the type of project.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">What types of payment do you accept?</h3>
              <p className="text-muted-foreground">
                We accept cash, checks, and all major credit cards for your convenience.
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
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to get started?</h2>
              <p className="text-white/80 mt-2">Request a quote or call us today to discuss your project.</p>
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
