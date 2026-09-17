"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  alt?: string;
  variant?: "default" | "hero";
}

export default function ImageGallery({
  images,
  alt = "Gallery image",
  variant = "default",
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-100">
        <p className="text-sm text-gray-500">No image available</p>
      </div>
    );
  }

  /* Hero Gallery */
  if (variant === "hero") {
    return (
      <div className="relative mx-auto h-[460px] w-full max-w-[500px]">
        {/* Decorative Circle */}
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200" />

        {/* Main Image */}
        <button
          type="button"
          onClick={() => setSelectedImage(0)}
          className="absolute left-1/2 top-1/2 z-10 h-[330px] w-[260px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[45%] border-4 border-white bg-gray-100 shadow-lg"
          aria-label="View main image"
        >
          <Image
            src={images[0]}
            alt={alt}
            fill
            className="object-cover"
            sizes="260px"
            priority
          />
        </button>

        {/* Left Image */}
        {images[1] && (
          <button
            type="button"
            onClick={() => setSelectedImage(1)}
            className={`absolute bottom-10 left-2 z-20 h-28 w-28 overflow-hidden rounded-full border-4 bg-gray-100 shadow-md ${
              selectedImage === 1
                ? "border-gray-900"
                : "border-white"
            }`}
            aria-label="View second image"
          >
            <Image
              src={images[1]}
              alt={`${alt} 2`}
              fill
              className="object-cover"
              sizes="112px"
            />
          </button>
        )}

        {/* Right Image */}
        {images[2] && (
          <button
            type="button"
            onClick={() => setSelectedImage(2)}
            className={`absolute bottom-16 right-2 z-20 h-28 w-28 overflow-hidden rounded-full border-4 bg-gray-100 shadow-md ${
              selectedImage === 2
                ? "border-gray-900"
                : "border-white"
            }`}
            aria-label="View third image"
          >
            <Image
              src={images[2]}
              alt={`${alt} 3`}
              fill
              className="object-cover"
              sizes="112px"
            />
          </button>
        )}

        {/* Image Indicators */}
        <div className="absolute right-1/2 top-8 z-20 flex translate-x-1/2 gap-2">
          {images.slice(0, 3).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`Select image ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                selectedImage === index
                  ? "bg-gray-900"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  /* Default Gallery */
  return (
    <div className="w-full">
      <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <Image
          src={images[selectedImage]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-md border-2 bg-gray-100 ${
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