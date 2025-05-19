"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Upload } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  // Painting Services
  { id: "residential-interior", label: "Residential Interior Painting" },
  { id: "residential-exterior", label: "Residential Exterior Painting" },
  { id: "commercial-interior", label: "Commercial Interior Painting" },
  { id: "commercial-exterior", label: "Commercial Exterior Painting" },
  { id: "cabinet-painting", label: "Cabinet Painting" },
  { id: "deck-staining", label: "Deck Staining" },
  { id: "faux-finishes", label: "Faux Finishes" },
  { id: "wood-finishes", label: "Interior/Exterior Wood Finishes" },
  
  // Carpentry Services
  { id: "trim-work", label: "Trim Work" },
  { id: "flooring", label: "Flooring" },
  { id: "wood-accents", label: "Wood Wall Accents" },
  { id: "siding", label: "Siding" },
  
  // Other Services
  { id: "power-washing", label: "Power Washing" },
  { id: "junk-removal", label: "Junk Removal" },
  { id: "snow-removal", label: "Snow Removal" },
  { id: "drywall-repair", label: "Drywall Repair" },
  { id: "other", label: "Other Services" },
]

export default function QuoteForm() {
  const [serviceTypes, setServiceTypes] = useState<{ [key: string]: boolean }>({
    residential: true,
    commercial: false,
    contracting: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleServiceTypeChange = (type: string) => {
    setServiceTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_3_FORMS_KEY || "")
    formData.append("redirect", window.location.href)

    // Add service types to form data
    Object.entries(serviceTypes).forEach(([type, checked]) => {
      formData.append(`service_type_${type}`, checked.toString())
    })

    // Add files if any
    files.forEach((file) => {
      formData.append("files", file)
    })

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
    } catch (err) {
      setError("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle className="h-16 w-16 text-gold mb-4" />
        <h3 className="text-xl font-bold mb-2">Quote Request Received!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for your quote request. We'll review your project details and get back to you with a personalized
          quote as soon as possible.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-gold text-gold hover:bg-gold hover:text-black"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Contact Information</h3>
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
          <Label htmlFor="address">Project Address</Label>
          <Input id="address" name="address" placeholder="Address of the project" required />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Service Type</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="residential" 
              checked={serviceTypes.residential}
              onCheckedChange={() => handleServiceTypeChange('residential')}
            />
            <Label htmlFor="residential">Residential Painting</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="commercial" 
              checked={serviceTypes.commercial}
              onCheckedChange={() => handleServiceTypeChange('commercial')}
            />
            <Label htmlFor="commercial">Commercial Painting</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="contracting" 
              checked={serviceTypes.contracting}
              onCheckedChange={() => handleServiceTypeChange('contracting')}
            />
            <Label htmlFor="contracting">Other Contracting Services</Label>
          </div>
        </div>
      </div>

      {(serviceTypes.residential || serviceTypes.commercial) && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Painting Details</h3>
          <div className="space-y-2">
            <Label htmlFor="sqft">Approximate Square Footage</Label>
            <Input id="sqft" type="number" placeholder="Square footage of the area to be painted" />
          </div>
          <div className="space-y-2">
            <Label>Services Needed (Select all that apply)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.slice(0, 8).map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox id={service.id} />
                  <Label htmlFor={service.id}>{service.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {serviceTypes.contracting && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contracting Details</h3>
          <div className="space-y-2">
            <Label>Services Needed (Select all that apply)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.slice(8).map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox id={service.id} />
                  <Label htmlFor={service.id}>{service.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Project Details</h3>
        <div className="space-y-2">
          <Label htmlFor="timeline">Desired Timeline</Label>
          <RadioGroup defaultValue="flexible">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asap" id="asap" />
              <Label htmlFor="asap">As soon as possible</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1month" id="1month" />
              <Label htmlFor="1month">Within 1 month</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="flexible" id="flexible" />
              <Label htmlFor="flexible">Flexible / Not urgent</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Project Description</Label>
          <Textarea id="description" placeholder="Please describe your project in detail" rows={5} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="photos">Upload Photos (Optional)</Label>
          <div
            className={cn(
              "border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gold/50 transition-colors",
              files.length > 0 ? "border-gold/70" : "border-gray-300",
            )}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <input
              id="file-upload"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <Upload className="h-10 w-10 text-black mb-2" />
            <p className="text-sm text-center">
              {files.length > 0
                ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                : "Drag and drop files here or click to browse"}
            </p>
            <p className="text-xs text-center mt-1">
              Upload photos of the area to help us provide a more accurate quote
            </p>
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-[rgb(var(--color-button-2nd))] text-white cursor-pointer shadow-lg shadow-white/30 hover:shadow-white/50">
        {isSubmitting ? "Submitting..." : "Click Here to Send Request Quote"}
      </Button>
    </form>
  )
}
