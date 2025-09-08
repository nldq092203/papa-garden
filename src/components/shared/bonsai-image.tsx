"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";

type BonsaiImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt?: string;
  ratio?: "square" | "portrait" | "landscape" | "auto";
  className?: string;
};

export default function BonsaiImage({
  src,
  alt,
  ratio = "auto",
  className = "",
  ...rest
}: BonsaiImageProps) {
  // Validate and fix image source
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const getValidSrc = (src: string) => {
    // If it's already a valid URL, return it
    if (isValidUrl(src)) {
      return src;
    }
    
    // If it starts with /, it's a relative path - make it absolute
    if (src.startsWith('/')) {
      return src;
    }
    
    // If it doesn't start with /, add it
    if (!src.startsWith('/')) {
      return `/${src}`;
    }
    
    // Fallback to placeholder
    return '/placeholder.svg';
  };

  const validSrc = getValidSrc(src);

  // aspect ratio helper
  const aspectClass =
    ratio === "square"
      ? "aspect-square"
      : ratio === "portrait"
      ? "aspect-[3/4]"
      : ratio === "landscape"
      ? "aspect-[4/3]"
      : "";

  // For auto ratio, use width/height instead of fill
  if (ratio === "auto") {
    return (
      <Image
        src={validSrc}
        alt={alt ?? "Ảnh bonsai"}
        width={900}
        height={1000}
        className={`object-cover ${className}`}
        {...rest}
      />
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${aspectClass} ${className}`}>
      <Image
        src={validSrc}
        alt={alt ?? "Ảnh bonsai"}
        fill
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
        className="object-cover"
        {...rest}
      />
    </div>
  );
}
