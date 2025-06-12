"use client"

import * as React from "react"
import { Menu, Paintbrush } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { BlogSidebar } from "@/app/(user)/blog/components/blog-sidebar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/app/(user)/blog/components/ui/sheet"
import { searchBlogPosts } from "@/app/(user)/blog/utils/search"
import { getAllBlogPosts, getCategories } from "@/app/(user)/blog/utils/blog-data"
import type { BlogPost } from "@/app/(user)/blog/types/blog"

// Get data from our utility functions
const samplePosts = getAllBlogPosts()
const sampleCategories = getCategories()

// Custom Blog Post Card with paint-themed styling
const PaintBlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="border-2 border-black paint-shadow bg-[rgb(var(--color-card))] hover:translate-y-[-5px] transition-transform duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 -rotate-45 translate-x-8 -translate-y-10 bg-gradient-to-b from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-dark))] z-0"></div>
      <div className="relative">
        <div className="absolute -top-3 -right-3 bg-[rgb(var(--color-warning))] px-3 py-1 z-10 rotate-3 border-2 border-black">
          <span className="text-xs font-bold text-[rgb(var(--color-text))]">{post.category}</span>
        </div>
      </div>
      <div className="p-4 relative z-10">
        <h3 className="text-xl font-bold mb-2 text-[rgb(var(--color-text))]">{post.title}</h3>
        <p className="text-sm mb-4 text-[rgb(var(--color-muted))]">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-[rgb(var(--color-muted))]">{post.date}</span>
          <Link href={`/blog/${post.slug}`}>
            <div className="bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-2))] px-3 py-1 text-xs font-bold border-2 border-black paint-btn">
              Read More
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-button))] to-[rgb(var(--color-warning))]"></div>
    </div>
  )
}

export default function BlogPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const filteredPosts = searchBlogPosts(samplePosts, searchQuery)

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="bg-gradient-to-b pt-[15vh] from-[rgb(var(--color-background-3))] to-[rgb(var(--color-background))] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Sidebar with Title */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden mb-4 bg-[rgb(var(--color-card))] border-2 border-black paint-btn">
                <Menu className="h-5 w-5 mr-2" />
                <span>Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 bg-[rgb(var(--color-card))] border-r-2 border-black">
              <SheetTitle className="px-4 py-2 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-2))] border-b-2 border-black">
                Blog Navigation
              </SheetTitle>
              <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} />
            </SheetContent>
          </Sheet>

          {/* Desktop Sidebar */}
          <div className="hidden md:block md:w-1/4 border-2 border-black bg-[rgb(var(--color-card))] paint-shadow">
            <div className="bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-2))] px-4 py-2 border-b-2 border-black">
              <h2 className="font-bold">Blog Navigation</h2>
            </div>
            <div className="p-4">
              <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} className="" />
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            <div className="inline-block bg-[rgb(var(--color-warning))] px-3 py-1 mb-6 border-2 border-black paint-shadow">
              <span className="text-sm text-[rgb(var(--color-text))]">Fresh painting tips weekly</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 flex items-center text-[rgb(var(--color-text))]">
              Painting Blog
              <Paintbrush className="ml-2 text-[rgb(var(--color-primary))]" />
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <PaintBlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12 border-2 border-black bg-[rgb(var(--color-card))] paint-shadow p-8">
                <div className="bg-[rgb(var(--color-button))] text-[rgb(var(--color-text-2))] p-2 inline-block rotate-3 border-2 border-black mb-4">
                  <span className="font-bold">No Results!</span>
                </div>
                <p className="text-[rgb(var(--color-text))]">No posts found matching your search.</p>
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleBack}
                className="bg-[rgb(var(--color-card))] px-8 py-3 font-bold paint-btn border-2 border-black inline-block text-center text-[rgb(var(--color-text))]"
              >
                Go Back
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
