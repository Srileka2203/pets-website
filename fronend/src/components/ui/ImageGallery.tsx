"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  alt?: string;
}

export default function ImageGallery({
  images,
  alt = "Gallery image",
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-100">
        <p className="text-sm text-gray-500">No image available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <Image
          src={images[selectedImage]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
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