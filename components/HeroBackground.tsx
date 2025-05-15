"use client"
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";

// Preload images at build time
const images = {
  mobile: {
    light: "/paint-splash-mobile-optimized-360x640.webp",
    dark: "/paint-splash-mobile-dark-optimized-360x640.webp",
    blur: "/paint-splash-mobile-blur.webp"
  },
  desktop: {
    light: "/paint-splash-full-optimized.jpeg",
    dark: "/paint-splash-full-optimized-dark.jpeg",
    blur: "/paint-splash-blur.webp"
  }
};

// Tiny placeholder images for immediate loading
const blurDataURLs = {
  mobile: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoQABAABUB8JbwAA3AA/v3yAAA=",
  desktop: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoQABAABUB8JbwAA3AA/v3yAAA="
};

export default function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const device = isMobile ? "mobile" : "desktop";
      const theme = resolvedTheme === "dark" ? "dark" : "light";
      const mainImage = new window.Image();
      mainImage.src = images[device][theme];
    };
    preloadImages();
  }, [isMobile, resolvedTheme]);

  if (!mounted) {
    return (
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-gray-100 dark:bg-gray-900"
        aria-hidden="true"
      />
    );
  }

  const getImageSrc = () => {
    const device = isMobile ? "mobile" : "desktop";
    const theme = resolvedTheme === "dark" ? "dark" : "light";
    return images[device][theme];
  };

  const getBlurDataURL = () => {
    return isMobile ? blurDataURLs.mobile : blurDataURLs.desktop;
  };

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <Image
        src={getImageSrc()}
        alt=""
        fill
        priority
        quality={60}
        sizes="(max-width: 768px) 360px, 100vw"
        className="object-cover object-center transition-opacity duration-300"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={getBlurDataURL()}
        aria-hidden="true"
      />
    </div>
  );
} 