import Link from "next/link"
import { Button } from "@/components/ui/button"
import QuoteForm from "@/components/quote-form"

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Hero Section */}
      <div className="h-full flex flex-col justify-center items-center text-center py-16">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Request a <span className="text-gold">Free Quote</span>
          </h1>
          <p className="text-lg">
            Fill out the form below to get a personalized quote for your painting or contracting project.
          </p>
        </div>
      </div>
      {/* Quote Form Section */}
      <section className="py-16 w-full flex justify-center items-center">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tell Us About Your Project</h2>
            <p className="text-muted-foreground">
              Please provide as much detail as possible about your project so we can provide you with an accurate quote.
              The more information you provide, the better we can understand your needs.
            </p>
          </div>

          <div className="bg-[rgb(var(--color-background))] p-6 md:p-8 lg:p-10 rounded-lg border">
            <QuoteForm />
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Prefer to discuss your project over the phone? Give us a call!</p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-yellow-500 text-white bg-gray-500 shadow-lg shadow-white/10"
            >
              <a href="tel:5416103864">Call 541-610-3864</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-36 flex w-full justify-center items-center border-t-2 border-gray-500">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 bg-[rgb(var(--color-background))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Why Choose Prolific Paint & Design</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what sets us apart from other painting and contracting companies in Central Oregon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border text-center">
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                We offer fair, transparent pricing without sacrificing quality. Our efficient processes allow us to
                provide excellent value.
              </p>
            </div>

            <div className="p-6 rounded-lg border text-center">
              <h3 className="text-xl font-bold mb-3">Quality Workmanship</h3>
              <p className="text-muted-foreground">
                We take pride in our attention to detail and commitment to excellence on every project, no matter the
                size.
              </p>
            </div>

            <div className="p-6 rounded-lg border text-center">
              <h3 className="text-xl font-bold mb-3">Excellent Service</h3>
              <p className="text-muted-foreground">
                From the initial consultation to project completion, we provide responsive, professional service every
                step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-36 w-full flex justify-center items-center border-y-2 border-gray-500">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 bg-[rgb(var(--color-background))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <blockquote className="p-6 rounded-lg border">
              <p className="italic text-muted-foreground mb-4">
                "Kevin provided a detailed quote quickly and stuck to it. His team was professional, clean, and the
                quality of work was outstanding. I'll definitely use Prolific Paint again for future projects."
              </p>
              <footer className="font-medium">— Jennifer Wilson, Sisters</footer>
            </blockquote>

            <blockquote className="p-6 rounded-lg border">
              <p className="italic text-muted-foreground mb-4">
                "I was impressed with how thorough Kevin was during the quote process. He took the time to understand
                exactly what we wanted and provided options within our budget. The end result exceeded our
                expectations."
              </p>
              <footer className="font-medium">— Robert Thompson, Bend</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-36 w-full flex justify-center items-center border-b-2 border-gray-500">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 bg-[rgb(var(--color-background))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our quote process and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How long does it take to get a quote?</h3>
              <p className="text-muted-foreground">
                For most projects, we can provide a quote within 24-48 hours after receiving your request or conducting
                an on-site assessment.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Is there a fee for quotes?</h3>
              <p className="text-muted-foreground">
                No, all our quotes are completely free and come with no obligation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do I need to be present for an estimate?</h3>
              <p className="text-muted-foreground">
                While it's helpful for you to be present so we can discuss your specific needs, it's not always
                necessary. We can work with you to find a convenient arrangement.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">How detailed are your quotes?</h3>
              <p className="text-muted-foreground">
                Our quotes are comprehensive and include a breakdown of labor, materials, and any other costs associated
                with your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-black w-full flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Have questions about your project?</h2>
              <p className="text-white/80 mt-2">We're here to help. Contact us today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[rgb(var(--color-button-2nd))] text-white">
                <Link href="/contact">Contact Us</Link>
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
