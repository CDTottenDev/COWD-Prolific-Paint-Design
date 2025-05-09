'use client'

import dynamic from 'next/dynamic'

const GoogleMapComponent = dynamic(() => import("@/components/GoogleMap"), {
  loading: () => <p>Loading map...</p>,
  ssr: false
})

export default function GoogleMapWrapper() {
  return <GoogleMapComponent />
} 