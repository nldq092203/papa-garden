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
        src={src}
        alt={alt ?? "Ảnh bonsai"}
        width={900}
        height={1000}
        className={`object-contain ${className}`}
        {...rest}
      />
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${aspectClass} ${className}`}>
      <Image
        src={src}
        alt={alt ?? "Ảnh bonsai"}
        fill
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
        className="object-contain"
        {...rest}
      />
    </div>
  );
}
