import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  className?: string
}

export default function ServiceCard({ title, description, image, className }: ServiceCardProps) {
  return (
    <div className="relative">
      <div className="absolute inset-2 -right-[8px] -bottom-[8px] bg-[rgb(var(--color-card-2))] rounded-lg" />
      <div
        className={cn(
          "group relative overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md h-[200px] w-full",
          className,
        )}
      >
        <div className="flex h-full">
          <div className="flex-1 p-4 pr-2 relative z-10 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-black mb-1">{title}</h3>
              <p className="text-sm text-black">{description}</p>
            </div>
            <Button asChild variant="link" className="p-0 h-auto text-black">
              <Link href="/services" className="flex items-center gap-1 text-sm">
                Learn more <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </div>
          <div className="w-[200px] relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[rgb(var(--color-card))]/10" />
          </div>
        </div>
      </div>
    </div>
  )
}
