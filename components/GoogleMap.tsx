"use client"

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api"
import { useMemo } from "react"

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function GoogleMapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY || "",
  })

  const center = useMemo(() => ({ lat: 44.0582, lng: -121.3153 }), []) // Bend, Oregon coordinates

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="w-full h-full rounded-lg"
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7c93a3" }, { lightness: "-10" }],
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{ color: "#a0a0a0" }],
          },
          {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [{ color: "#a0a0a0" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#e9e9e9" }],
          },
        ],
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  )
} 