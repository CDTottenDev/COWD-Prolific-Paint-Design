import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="min-h-[30vh] sm:min-h-[40vh] flex items-center justify-center px-4 py-8 sm:py-12 md:py-16 bg-[rgb(var(--color-background))] border-b border-gray-500 border-solid">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-[rgb(var(--color-text-emphasized))]">Prolific Paint</span> & Design
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl">
            Learn more about our company, our values, and what makes us the preferred choice for residential painting
            and contracting in Central Oregon.
          </p>
        </div>
      </div>

      {/* About Us Content */}
      <section className="py-8 sm:py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="w-full">
              <Image
                src="/assets/about/desktop/owner-pic-dsk.jpeg"
                alt="Kevin, Owner of Prolific Paint @ Design"
                width={600}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"
                priority
              />
            </div>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Hey there — I'm the founder of Prolific Paint & Design, and before anything else, I'm just a local guy with deep roots in the Pacific Northwest and a passion for bringing spaces to life.
                </p>
                <p>
                  Growing up, I moved around quite a bit thanks to my mom, who served proudly in the <span className="text-[rgb(var(--color-text-emphasized))]">U.S. Navy</span> (love you, Mom!). That lifestyle instilled some key values in me early on — structure, integrity, and the importance of doing things the right way. After high school, I carried those values into the <span className="text-[rgb(var(--color-text-emphasized))]">United States Marine Corps</span>, serving out of Jacksonville, North Carolina.
                </p>
                <p>
                  After the Marines, I made my way back to Oregon — first in Beaverton, and eventually settling right here in the High Desert. This place is home now, and it's where Prolific Paint & Design was born.
                </p>
                <p>
                  Before launching the company, I spent 12 years in the painting and design field, learning every angle of the trade. For nearly a decade, I worked hands-on with homeowners and contractors alike, managing jobs, building trust, and seeing firsthand what makes a project run smoothly — and what doesn't. Those years shaped the vision I have for this company.
                </p>
                <p>
                  At <span className="text-[rgb(var(--color-text-emphasized))]">Prolific Paint & Design</span>, our goal is simple: bring your vision to life with honesty, clarity, and craftsmanship you can count on. We don't cut corners, and we don't rush past the details that matter to you. Big or small, every project gets the care it deserves. We believe in open communication, showing up with professionalism, and doing the job with heart.
                </p>
                <p>
                  So if you've got an idea — whether it's a full transformation or just a touch of something new — we'd love to help make your day a little more prolific.
                </p>
              </div>
              <div className="pt-3 sm:pt-4">
                <Button asChild className="w-full sm:w-auto bg-[rgb(var(--color-button))] hover:bg-[rgb(var(--color-button-hover))] text-[rgb(var(--color-button-text))] text-shadow-lg text-sm sm:text-base md:text-lg text-shadow-black/75">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-8 sm:py-12 md:py-24 bg-[rgb(var(--color-background))] border-t border-gray-500 border-solid">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Our Values</h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              These core principles guide everything we do and help us deliver exceptional results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[rgb(var(--color-background))] p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Quality</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                We never compromise on quality. From the materials we use to our application techniques, we ensure
                everything meets our high standards.
              </p>
            </div>

            <div className="bg-[rgb(var(--color-background))] p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Integrity</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                We believe in honest pricing, transparent communication, and always doing what we say we'll do.
              </p>
            </div>

            <div className="bg-[rgb(var(--color-background))] p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Your satisfaction is our priority. We listen to your needs and work hard to exceed your expectations on
                every project.
              </p>
            </div>

            <div className="bg-[rgb(var(--color-background))] p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Reliability</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                We respect your time and property. Our team shows up when promised and completes work on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-8 sm:py-12 md:py-24 bg-[rgb(var(--color-background))] border-t border-gray-500 border-solid">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 bg-[rgb(var(--color-background-2))] rounded-full p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">What Sets Us Apart</h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Here's why homeowners, contractors, and realtors throughout Central Oregon choose Prolific Paint @ Design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <div className="flex-shrink-0 hidden sm:block">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:hidden">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Competitive Pricing</h3>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="hidden sm:block text-base sm:text-lg md:text-xl font-bold mb-2">Competitive Pricing</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground bg-[rgb(var(--color-background))] p-3 sm:p-4 rounded-lg shadow-sm border border-r-4 mt-2 sm:mt-0">
                    We offer fair, transparent pricing without sacrificing quality. Our efficient processes allow us to
                    provide excellent value for your investment.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <div className="flex-shrink-0 hidden sm:block">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:hidden">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Extensive Experience</h3>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="hidden sm:block text-base sm:text-lg md:text-xl font-bold mb-2">Extensive Experience</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground bg-[rgb(var(--color-background))] p-3 sm:p-4 rounded-lg shadow-sm border border-r-4 mt-2 sm:mt-0">
                    With years of experience in residential painting and contracting, we have the knowledge and skills
                    to handle projects of any size or complexity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <div className="flex-shrink-0 hidden sm:block">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:hidden">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Strong References</h3>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="hidden sm:block text-base sm:text-lg md:text-xl font-bold mb-2">Strong References</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground bg-[rgb(var(--color-background))] p-3 sm:p-4 rounded-lg shadow-sm border border-r-4 mt-2 sm:mt-0">
                    Our reputation speaks for itself. We're proud of our many satisfied customers who are happy to
                    recommend our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:hidden">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Personal Touch</h3>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="hidden sm:block text-base sm:text-lg md:text-xl font-bold mb-2">Personal Touch</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground bg-[rgb(var(--color-background))] p-3 sm:p-4 rounded-lg shadow-sm border border-l-4 mt-2 sm:mt-0">
                    Kevin's friendly, approachable personality and hands-on involvement ensure clear communication and
                    attention to detail on every project.
                  </p>
                </div>
                <div className="flex-shrink-0 hidden sm:block">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:hidden">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Licensed & Insured</h3>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="hidden sm:block text-base sm:text-lg md:text-xl font-bold mb-2">Licensed & Insured</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground bg-[rgb(var(--color-background))] p-3 sm:p-4 rounded-lg shadow-sm border border-l-4 mt-2 sm:mt-0">
                    We're fully licensed (CCB: 256200) and insured, giving you peace of mind that your project is in
                    professional, qualified hands.
                  </p>
                </div>
                <div className="flex-shrink-0 hidden sm:block">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:hidden">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Local Expertise</h3>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="hidden sm:block text-base sm:text-lg md:text-xl font-bold mb-2">Local Expertise</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground bg-[rgb(var(--color-background))] p-3 sm:p-4 rounded-lg shadow-sm border border-l-4 mt-2 sm:mt-0">
                    As Central Oregon residents, we understand the local climate and conditions, allowing us to
                    recommend the best products and techniques for your specific needs.
                  </p>
                </div>
                <div className="flex-shrink-0 hidden sm:block">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold">Ready to work with us?</h2>
              <p className="text-xs sm:text-sm md:text-base text-white/80 mt-2">
                Contact us today to discuss your project and get a free quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto bg-[rgb(var(--color-button))] hover:bg-[rgb(var(--color-button-hover))] text-[rgb(var(--color-button-text))] text-shadow-lg text-sm sm:text-base md:text-lg text-shadow-black/75">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-sm sm:text-base md:text-lg">
                <a href="tel:5416103864">Call 541-610-3864</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
