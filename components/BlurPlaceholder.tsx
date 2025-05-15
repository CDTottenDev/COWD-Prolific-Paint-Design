import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BlurPlaceholderProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function BlurPlaceholder({ src, alt = '', className = '' }: BlurPlaceholderProps) {
  const [blurDataURL, setBlurDataURL] = useState<string>('');

  useEffect(() => {
    const generateBlurDataURL = async () => {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setBlurDataURL(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error generating blur data URL:', error);
      }
    };

    generateBlurDataURL();
  }, [src]);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      quality={60}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={className}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  );
} 