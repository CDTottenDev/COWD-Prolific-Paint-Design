import type { BlogPost } from "@/app/(user)/blog/types/blog"

export function searchBlogPosts(posts: BlogPost[], query: string): BlogPost[] {
  if (!query) return posts

  const lowercaseQuery = query.toLowerCase()

  return posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery)
    )
  })
}
