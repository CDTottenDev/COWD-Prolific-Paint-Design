import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export default function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-300" />
      <div className="mb-4 text-gold">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <Button asChild variant="link" className="p-0 text-gold hover:text-gold/80">
        <Link href="/services" className="flex items-center gap-1">
          Learn more <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  )
}
