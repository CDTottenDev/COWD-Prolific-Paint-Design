"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import GalleryGrid from "@/components/gallery-grid"
import GalleryImage from "@/components/gallery-image"
import { useState } from "react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Gallery categories and images
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "interior", name: "Interior Painting" },
    { id: "exterior", name: "Exterior Painting" },
    { id: "cabinets", name: "Cabinet Refinishing" },
    { id: "carpentry", name: "Carpentry Services" },
    { id: "power-washing", name: "Power Washing" },
    { id: "wood-finishing", name: "Wood Finishing" },
    { id: "other", name: "Other Projects" },
  ]

  // Placeholders for your image arrays
  const mobileImages = [
    {
      src: "/assets/projects/mobile/job-1/1-af-1.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/mobile/job-1/1-af-2.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/mobile/job-1/1-af-3.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/mobile/job-1/1-b4-1.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/mobile/job-1/1-b4-2.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/mobile/job-2/2-b4-1.jpeg",
      alt: "Exterior painting project",
      width: 800,
      height: 800,
      category: "exterior",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/mobile/job-2/2-b4-2.jpeg",
      alt: "Exterior painting project",
      width: 800,
      height: 800,
      category: "exterior, power-washing",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/mobile/job-2/2-b4-3.jpeg",
      alt: "Exterior painting project",
      width: 800,
      height: 800,
      category: "exterior",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/mobile/job-2/2-b4-4.jpeg",
      alt: "Exterior painting project",
      width: 800,
      height: 800,
      category: "exterior",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/mobile/job-2/2-b4-5.jpeg",
      alt: "Exterior painting project",
      width: 800,
      height: 800,
      category: "exterior",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/mobile/job-3/3-bf-1.jpeg",
      alt: "Exterior painting project",
      width: 800,
      height: 800,
      category: "exterior",
      jobId: "job-3"
    },
    {
      src: "/assets/projects/mobile/job-3/3-bf-2.jpeg",
      alt: "Exterior painting project",
      width: 800,
      height: 800,
      category: "exterior",
      jobId: "job-3"
    },
    {
      src: "/assets/projects/mobile/job-3/3-af-3.jpeg",
      alt: "Exterior painting project",
      width: 800,
      height: 800,
      category: "exterior",
      jobId: "job-3"
    },
    {
      src: "/assets/projects/mobile/job-4/4-1.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/mobile/job-4/4-2.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/mobile/job-4/4-3.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/mobile/job-4/4-4.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior, cabinets",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/mobile/job-4/4-5.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/mobile/job-4/4-6.jpeg",
      alt: "Interior painting project",
      width: 800,
      height: 800,
      category: "interior",
      jobId: "job-4"
    }
  ]

  const desktopImages = [
    {
      src: "/assets/projects/desktop/job-1/1-af-1.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/desktop/job-1/1-af-2.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/desktop/job-1/1-af-3.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/desktop/job-1/1-b4-1.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/desktop/job-1/1-b4-2.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior, carpentry, wood-finishing",
      jobId: "job-1"
    },
    {
      src: "/assets/projects/desktop/job-2/2-b4-1.jpg",
      alt: "Exterior painting project",
      width: 1200,
      height: 800,
      category: "exterior",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/desktop/job-2/2-b4-2.jpeg",
      alt: "Exterior painting project",
      width: 1200,
      height: 800,
      category: "exterior, power-washing",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/desktop/job-2/2-b4-3.jpg",
      alt: "Exterior painting project",
      width: 1200,
      height: 800,
      category: "exterior",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/desktop/job-2/2-b4-4.jpg",
      alt: "Exterior painting project",
      width: 1200,
      height: 800,
      category: "exterior",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/desktop/job-2/2-b4-5.jpeg",
      alt: "Exterior painting project",
      width: 1200,
      height: 800,
      category: "exterior",
      jobId: "job-2"
    },
    {
      src: "/assets/projects/desktop/job-3/3-b4-1.jpeg",
      alt: "Exterior painting project",
      width: 1200,
      height: 800,
      category: "exterior",
      jobId: "job-3"
    },
    {
      src: "/assets/projects/desktop/job-3/3-b4-2.jpeg",
      alt: "Exterior painting project",
      width: 1200,
      height: 800,
      category: "exterior",
      jobId: "job-3"
    },
    { 
      src: "/assets/projects/desktop/job-3/3-af-3.jpeg",
      alt: "Exterior painting project",
      width: 1200,
      height: 800,
      category: "exterior",
      jobId: "job-3"
    },
    {
      src: "/assets/projects/desktop/job-4/4-1.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/desktop/job-4/4-2.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/desktop/job-4/4-3.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/desktop/job-4/4-4.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior, cabinets",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/desktop/job-4/4-5.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior",
      jobId: "job-4"
    },
    {
      src: "/assets/projects/desktop/job-4/4-6.jpeg",
      alt: "Interior painting project",
      width: 1200,
      height: 800,
      category: "interior",
      jobId: "job-4"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--color-background))]">
      {/* Hero Section */}
      <div className="mx-auto px-4 h-full flex items-center justify-center text-center py-8 sm:py-16 w-full">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <span className="text-[rgb(var(--color-text-emphasized))]">Portfolio</span>
          </h1>
          <p className="text-base sm:text-lg">
            Browse our gallery of completed projects to see the quality of our work and get inspiration for your own
            home.
          </p>
        </div>
      </div>
      {/* Gallery Introduction */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 py-8 sm:py-16 rounded-xl border-2 border-gray-500 bg-[rgb(var(--color-background-2))]">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <h2 className="max-w-3xl mx-auto text-center mb-4 sm:mb-12 bg-[rgb(var(--color-background))] rounded-full p-2 sm:p-4 border-x border-gray-500 border-solid shadow-lg text-2xl sm:text-3xl font-bold">Our Work</h2>
            <p className="text-[rgb(var(--color-text))] bg-[rgb(var(--color-background))] rounded-xl p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg shadow-white/20 mx-auto w-full text-sm sm:text-base">
              At <span className="text-[rgb(var(--color-text-emphasized))]">Prolific Paint @ Design</span>, we take pride in our craftsmanship and attention to detail. Browse through our
              gallery to see examples of our work across various projects throughout Central Oregon.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 text-black mx-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className={`text-sm sm:text-base ${selectedCategory === category.id ? "bg-white hover:bg-blue-300 cursor-pointer" : "bg-white hover:bg-black/5 hover:text-[rgb(var(--color-text-emphasized))] cursor-pointer"}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <GalleryGrid
            mobileImages={mobileImages}
            desktopImages={desktopImages}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      {/* Before and After Showcase */}
      <section className="py-16 sm:py-36 border-y-2 border-gray-500 border-solid bg-[rgb(var(--color-background-2))]">
        <div className="mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="max-w-3xl mx-auto text-center mb-4 sm:mb-12 bg-[rgb(var(--color-background))] rounded-full p-2 sm:p-4 border-x border-gray-500 border-solid shadow-lg text-2xl sm:text-3xl font-bold">Before & After</h2>
            <p className="text-[rgb(var(--color-text))] bg-[rgb(var(--color-background))] rounded-xl p-3 sm:p-4 border-x border-gray-500 border-solid shadow-lg shadow-white/20 mx-auto w-full text-sm sm:text-base">
              See the dramatic transformations we've achieved for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            <div className="space-y-4 sm:space-y-6 bg-[rgb(var(--color-background))] rounded-xl p-4 sm:p-6 border-2 border-gray-500 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-center text-[rgb(var(--color-text-emphasized))]">Exterior Painting</h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-center bg-[rgb(var(--color-background-2))] py-1 sm:py-2 px-2 sm:px-4 rounded-lg border border-gray-500">Before</p>
                  <div className="h-[200px] sm:h-[300px]">
                    <GalleryImage
                      src="/assets/projects/desktop/job-3/3-b4-2.jpeg"
                      alt="Before: Outdated exterior paint"
                      width={800}
                      height={600}
                      className="h-full"
                    />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-center bg-[rgb(var(--color-background-2))] py-1 sm:py-2 px-2 sm:px-4 rounded-lg border border-gray-500">After</p>
                  <div className="h-[200px] sm:h-[300px]">
                    <GalleryImage
                      src="/assets/projects/desktop/job-3/3-af-3.jpeg"
                      alt="After: Fresh exterior paint"
                      width={800}
                      height={600}
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 bg-[rgb(var(--color-background))] rounded-xl p-4 sm:p-6 border-2 border-gray-500 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-center text-[rgb(var(--color-text-emphasized))]">Interior Painting</h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-center bg-[rgb(var(--color-background-2))] py-1 sm:py-2 px-2 sm:px-4 rounded-lg border border-gray-500">Before</p>
                  <div className="h-[200px] sm:h-[300px]">
                    <GalleryImage
                      src="/assets/projects/desktop/job-1/1-b4-2.jpeg"
                      alt="Before: Faded interior paint"
                      width={800}
                      height={600}
                      className="h-full"
                    />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-center bg-[rgb(var(--color-background-2))] py-1 sm:py-2 px-2 sm:px-4 rounded-lg border border-gray-500">After</p>
                  <div className="h-[200px] sm:h-[300px]">
                    <GalleryImage
                      src="/assets/projects/desktop/job-1/1-af-3.jpeg"
                      alt="After: Fresh interior paint"
                      width={800}
                      height={600}
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <blockquote className="border-l-4 border-gold pl-3 sm:pl-4 italic">
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                "Kevin and his team did an amazing job painting our entire home interior. They were professional, clean,
                and finished ahead of schedule. The quality of work is outstanding!"
              </p>
              <footer className="font-medium text-sm sm:text-base">— Sarah Johnson, Bend</footer>
            </blockquote>

            <blockquote className="border-l-4 border-gold pl-3 sm:pl-4 italic">
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                "We hired Prolific Paint to refinish our kitchen cabinets and couldn't be happier with the results. The
                transformation is incredible and the price was very reasonable."
              </p>
              <footer className="font-medium text-sm sm:text-base">— Michael Davis, Redmond</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 bg-black border-t-2 border-gray-500 border-solid">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Ready to transform your space?</h2>
              <p className="mt-2 text-sm sm:text-base">Contact us today for a free, no-obligation quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="bg-[rgb(var(--color-button-2nd))] hover:bg-[rgb(var(--color-button-2nd-hover))] w-full sm:w-auto">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <a href="tel:5416103864">Call 541-610-3864</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
