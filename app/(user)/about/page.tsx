import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxSection
        imageUrl="/placeholder.svg?height=1080&width=1920&query=professional painter with tools, high quality"
        height="h-[50vh]"
        overlayOpacity={0.6}
      >
        <div className="container h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-gold">Prolific Paint</span> @ Design
            </h1>
            <p className="text-lg text-white/90">
              Learn more about our company, our values, and what makes us the preferred choice for residential painting
              and contracting in Central Oregon.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* About Us Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=800&width=800&query=professional painter in white uniform smiling at camera, high quality portrait"
                alt="Kevin, Owner of Prolific Paint @ Design"
                width={800}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Prolific Paint @ Design was founded by Kevin with a simple mission: to provide high-quality painting and
                contracting services at competitive prices while delivering exceptional customer service.
              </p>
              <p className="text-muted-foreground">
                With years of experience in the industry, Kevin noticed that many homeowners in Central Oregon were
                frustrated with contractors who either charged too much, delivered poor quality work, or were difficult
                to communicate with. He established Prolific Paint @ Design to address these issues and provide a better
                alternative.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be one of the most trusted painting and contracting companies in Bend and
                throughout Central Oregon, known for our attention to detail, reliability, and customer-focused
                approach.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and help us deliver exceptional results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-gold/10 p-3 w-16 h-16 mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. From the materials we use to our application techniques, we ensure
                everything meets our high standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-gold/10 p-3 w-16 h-16 mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We believe in honest pricing, transparent communication, and always doing what we say we'll do.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-gold/10 p-3 w-16 h-16 mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We listen to your needs and work hard to exceed your expectations on
                every project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="rounded-full bg-gold/10 p-3 w-16 h-16 mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                We respect your time and property. Our team shows up when promised and completes work on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's why homeowners, contractors, and realtors throughout Central Oregon choose Prolific Paint @ Design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    We offer fair, transparent pricing without sacrificing quality. Our efficient processes allow us to
                    provide excellent value for your investment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Extensive Experience</h3>
                  <p className="text-muted-foreground">
                    With years of experience in residential painting and contracting, we have the knowledge and skills
                    to handle projects of any size or complexity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strong References</h3>
                  <p className="text-muted-foreground">
                    Our reputation speaks for itself. We're proud of our many satisfied customers who are happy to
                    recommend our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personal Touch</h3>
                  <p className="text-muted-foreground">
                    Kevin's friendly, approachable personality and hands-on involvement ensure clear communication and
                    attention to detail on every project.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground">
                    We're fully licensed (CCB: 256200) and insured, giving you peace of mind that your project is in
                    professional, qualified hands.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    As Central Oregon residents, we understand the local climate and conditions, allowing us to
                    recommend the best products and techniques for your specific needs.
                  </p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to work with us?</h2>
              <p className="text-white/80 mt-2">Contact us today to discuss your project and get a free quote.</p>
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
