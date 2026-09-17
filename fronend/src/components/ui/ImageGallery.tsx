"use client";

import Image from "next/image";
import { useState } from "react";
import { PawPrint } from "lucide-react";

interface ImageGalleryProps {
  images?: string[];
  alt?: string;
  variant?: "default" | "hero" | "card";
  className?: string;
}

export default function ImageGallery({
  images = [],
  alt = "Pet image",
  variant = "default",
  className = "",
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const hasImages = images.length > 0;

  /*
   * --------------------------------------------------
   * CARD IMAGE
   * Used for:
   * Featured Pets
   * Products
   * Services
   * Categories
   * --------------------------------------------------
   */
  if (variant === "card") {
    return (
      <div
        className={`relative h-full w-full overflow-hidden bg-gray-100 ${className}`}
      >
        {hasImages ? (
          <Image
            src={images[selectedImage]}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
    );
  }

  /*
   * --------------------------------------------------
   * HERO IMAGE
   * Large decorative image layout
   * --------------------------------------------------
   */
  if (variant === "hero") {
    return (
      <div
        className={`relative mx-auto h-[460px] w-full max-w-[500px] ${className}`}
      >
        {/* Decorative Circle */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200"
        />

        {/* Main Image */}
        <div className="absolute left-1/2 top-1/2 z-10 h-[330px] w-[260px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[45%] border-4 border-white bg-gray-100 shadow-lg">
          {hasImages ? (
            <Image
              src={images[0]}
              alt={alt}
              fill
              className="object-cover"
              sizes="260px"
              priority
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>

        {/* Left Image */}
        <div className="absolute bottom-10 left-2 z-20 h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
          {images[1] ? (
            <Image
              src={images[1]}
              alt={`${alt} 2`}
              fill
              className="object-cover"
              sizes="112px"
            />
          ) : (
            <ImagePlaceholder small />
          )}
        </div>

        {/* Right Image */}
        <div className="absolute bottom-16 right-2 z-20 h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
          {images[2] ? (
            <Image
              src={images[2]}
              alt={`${alt} 3`}
              fill
              className="object-cover"
              sizes="112px"
            />
          ) : (
            <ImagePlaceholder small />
          )}
        </div>

        {/* Image Indicators */}
        <div className="absolute right-1/2 top-8 z-20 flex translate-x-1/2 gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-900" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        </div>
      </div>
    );
  }

  /*
   * --------------------------------------------------
   * DEFAULT GALLERY
   * Used on detail pages
   * --------------------------------------------------
   */
  return (
    <div className={`w-full ${className}`}>
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-[24px] border border-gray-200 bg-gray-100">
        {hasImages ? (
          <Image
            src={images[selectedImage]}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-[16px] border-2 bg-gray-100 ${
                selectedImage === index
                  ? "border-gray-900"
                  : "border-gray-200 hover:border-gray-400"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${alt} ${index + 1}`}
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/*
 * --------------------------------------------------
 * COMMON PLACEHOLDER
 * --------------------------------------------------
 */
function ImagePlaceholder({
  small = false,
}: {
  small?: boolean;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center text-center">
        <div
          className={`flex items-center justify-center rounded-full bg-gray-200 ${
            small ? "h-10 w-10" : "h-16 w-16"
          }`}
        >
          <PawPrint
            className={`text-gray-400 ${
              small ? "h-5 w-5" : "h-8 w-8"
            }`}
            strokeWidth={1.4}
          />
        </div>

        {!small && (
          <>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Pet Image
            </p>

            <p className="mt-1 text-[11px] text-gray-400">
              Coming soon
            </p>
          </>
        )}
      </div>
    </div>
  );
}