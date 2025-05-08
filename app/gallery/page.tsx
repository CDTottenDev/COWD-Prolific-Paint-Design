import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"
import GalleryImage from "@/components/gallery-image"

export default function GalleryPage() {
  // Gallery categories and images
  const categories = [
    { id: "interior", name: "Interior Painting" },
    { id: "exterior", name: "Exterior Painting" },
    { id: "cabinets", name: "Cabinet Refinishing" },
    { id: "decks", name: "Deck Staining" },
    { id: "other", name: "Other Projects" },
  ]

  // Sample gallery images
  const galleryImages = [
    {
      category: "interior",
      src: "/placeholder.svg?height=800&width=800&query=modern living room with white walls and wood floors",
      alt: "Modern living room with fresh paint",
      width: 800,
      height: 800,
    },
    {
      category: "interior",
      src: "/placeholder.svg?height=800&width=800&query=bedroom with light blue walls and white trim",
      alt: "Bedroom with accent wall",
      width: 800,
      height: 800,
    },
    {
      category: "interior",
      src: "/placeholder.svg?height=800&width=800&query=dining room with dark accent wall and chandelier",
      alt: "Dining room with accent wall",
      width: 800,
      height: 800,
    },
    {
      category: "exterior",
      src: "/placeholder.svg?height=800&width=800&query=exterior of a blue house with white trim",
      alt: "Blue house exterior",
      width: 800,
      height: 800,
    },
    {
      category: "exterior",
      src: "/placeholder.svg?height=800&width=800&query=craftsman style house with fresh paint",
      alt: "Craftsman style house",
      width: 800,
      height: 800,
    },
    {
      category: "exterior",
      src: "/placeholder.svg?height=800&width=800&query=modern house exterior with dark paint",
      alt: "Modern house exterior",
      width: 800,
      height: 800,
    },
    {
      category: "cabinets",
      src: "/placeholder.svg?height=800&width=800&query=kitchen with white cabinets and dark countertops",
      alt: "White kitchen cabinets",
      width: 800,
      height: 800,
    },
    {
      category: "cabinets",
      src: "/placeholder.svg?height=800&width=800&query=kitchen with dark blue cabinets and gold hardware",
      alt: "Blue kitchen cabinets",
      width: 800,
      height: 800,
    },
    {
      category: "cabinets",
      src: "/placeholder.svg?height=800&width=800&query=bathroom vanity with gray cabinets",
      alt: "Bathroom vanity",
      width: 800,
      height: 800,
    },
    {
      category: "decks",
      src: "/placeholder.svg?height=800&width=800&query=wooden deck with fresh stain",
      alt: "Freshly stained deck",
      width: 800,
      height: 800,
    },
    {
      category: "decks",
      src: "/placeholder.svg?height=800&width=800&query=backyard patio with wooden pergola",
      alt: "Backyard patio",
      width: 800,
      height: 800,
    },
    {
      category: "other",
      src: "/placeholder.svg?height=800&width=800&query=custom built shelving in living room",
      alt: "Custom shelving",
      width: 800,
      height: 800,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxSection
        imageUrl="/placeholder.svg?height=1080&width=1920&query=collection of painting tools and paint cans, high quality"
        height="h-[50vh]"
        overlayOpacity={0.6}
      >
        <div className="container h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-gold">Portfolio</span>
            </h1>
            <p className="text-lg text-white/90">
              Browse our gallery of completed projects to see the quality of our work and get inspiration for your own
              home.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Gallery Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground">
              At Prolific Paint @ Design, we take pride in our craftsmanship and attention to detail. Browse through our
              gallery to see examples of our work across various projects throughout Central Oregon.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
              All Projects
            </Button>
            {categories.map((category) => (
              <Button key={category.id} variant="outline">
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="aspect-square"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the dramatic transformations we've achieved for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Kitchen Cabinet Refinishing</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">Before</p>
                  <Image
                    src="/placeholder.svg?height=600&width=600&query=outdated oak kitchen cabinets"
                    alt="Before: Outdated oak cabinets"
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">After</p>
                  <Image
                    src="/placeholder.svg?height=600&width=600&query=modern white kitchen cabinets with new hardware"
                    alt="After: Modern white cabinets"
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Exterior Transformation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">Before</p>
                  <Image
                    src="/placeholder.svg?height=600&width=600&query=faded exterior house paint with peeling"
                    alt="Before: Faded exterior paint"
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">After</p>
                  <Image
                    src="/placeholder.svg?height=600&width=600&query=freshly painted house exterior with modern colors"
                    alt="After: Fresh exterior paint"
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="border-l-4 border-gold pl-4 italic">
              <p className="text-muted-foreground mb-4">
                "Kevin and his team did an amazing job painting our entire home interior. They were professional, clean,
                and finished ahead of schedule. The quality of work is outstanding!"
              </p>
              <footer className="font-medium">— Sarah Johnson, Bend</footer>
            </blockquote>

            <blockquote className="border-l-4 border-gold pl-4 italic">
              <p className="text-muted-foreground mb-4">
                "We hired Prolific Paint to refinish our kitchen cabinets and couldn't be happier with the results. The
                transformation is incredible and the price was very reasonable."
              </p>
              <footer className="font-medium">— Michael Davis, Redmond</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-black">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to transform your space?</h2>
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
