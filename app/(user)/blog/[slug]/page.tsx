"use client"

import type React from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Paintbrush } from "lucide-react"

// Import the function to get blog posts
import { getBlogPostBySlug } from "@/app/(user)/blog/utils/blog-data"

const BlogPost: React.FC = () => {
  const params = useParams()
  const slug = params.slug as string

  // Get the blog post data
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <div className="bg-gradient-to-b from-[rgb(var(--color-background-3))] to-[rgb(var(--color-background))] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center mb-8 bg-[rgb(var(--color-card))] px-4 py-2 font-bold paint-btn border-2 border-black text-[rgb(var(--color-text))]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="text-center py-12 border-2 border-black bg-[rgb(var(--color-card))] paint-shadow p-8">
            <div className="bg-[rgb(var(--color-button))] text-[rgb(var(--color-text-2))] p-2 inline-block rotate-3 border-2 border-black mb-4">
              <span className="font-bold">Post Not Found!</span>
            </div>
            <p className="text-[rgb(var(--color-text))]">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-[rgb(var(--color-background-3))] to-[rgb(var(--color-background))] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center mb-8 bg-[rgb(var(--color-card))] px-4 py-2 font-bold paint-btn border-2 border-black text-[rgb(var(--color-text))]"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <article className="container mx-auto px-4 py-8 max-w-4xl bg-[rgb(var(--color-card))] border-2 border-black paint-shadow">
          <div className="mb-12 text-center">
            <div className="inline-block bg-[rgb(var(--color-warning))] px-3 py-1 mb-4 border-2 border-black paint-shadow">
              <span className="text-sm text-[rgb(var(--color-text))]">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 flex items-center justify-center text-[rgb(var(--color-text))]">
              {post.title}
              <Paintbrush className="ml-2 text-[rgb(var(--color-primary))]" />
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-[rgb(var(--color-text))]">{post.excerpt}</p>
          </div>

          {/* Display the blog post content */}
          <div className="blog-content prose max-w-none text-[rgb(var(--color-text))]">
            {/* For HTML content, use dangerouslySetInnerHTML or a Markdown renderer */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost
