"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface MessageCTAProps {
  className?: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function MessageCTA({ className, variant = "default", size = "default" }: MessageCTAProps) {
  const phoneNumber = "4582317495"
  const messageLink = `sms:${phoneNumber}`
  
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a href={messageLink} className="flex items-center gap-2">
        <MessageCircle className="h-4 w-4" />
        Send Message
      </a>
    </Button>
  )
} 