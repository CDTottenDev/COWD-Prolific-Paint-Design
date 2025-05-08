import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  rating: number
  className?: string
}

export default function TestimonialCard({ name, location, quote, rating = 5, className }: TestimonialCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-6 shadow-sm", className)}>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn("h-5 w-5", i < rating ? "fill-gold text-gold" : "fill-muted text-muted")} />
        ))}
      </div>
      <blockquote className="mb-4 italic text-muted-foreground">"{quote}"</blockquote>
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{location}</div>
    </div>
  )
}
