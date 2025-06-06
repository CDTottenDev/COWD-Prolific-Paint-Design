"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_3_FORMS_KEY || "")
    formData.append("redirect", window.location.href)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to submit form. Please try again."
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle className="h-16 w-16 text-gold mb-4" />
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Your message has been sent successfully. We'll get back to you as soon as possible.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-gold text-gold hover:bg-gold hover:text-black"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="Your email address" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-[rgb(var(--color-button))] hover:bg-[rgb(var(--color-button-hover))] text-[rgb(var(--color-button-text))]">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
