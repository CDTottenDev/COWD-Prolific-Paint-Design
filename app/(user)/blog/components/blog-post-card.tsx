import Link from "next/link"
import { Clock } from "lucide-react"

import type { BlogPost } from "@/app/(user)/blog/types/blog"
import { Card, CardContent } from "@/app/(user)/blog/components/ui/card"
import { Badge } from "@/app/(user)/blog/components/ui/badge"
interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href="/blog/web-design-trends-2025" prefetch={false}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-[rgb(var(--color-border))]">
        <CardContent className="p-4 space-y-3">
          <Badge variant="secondary" className="bg-[rgb(var(--color-background-2))] text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-background-3))]">
            {post.category}
          </Badge>
          <h2 className="text-xl font-semibold text-[rgb(var(--color-text))] line-clamp-2">{post.title}</h2>
          <p className="text-[rgb(var(--color-muted))] line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center text-[rgb(var(--color-primary))] text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {post.readingTime}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

