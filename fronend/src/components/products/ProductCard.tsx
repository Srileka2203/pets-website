import Link from "next/link";
import { Heart, Star } from "lucide-react";

import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
}

export default function ProductCard({
  product,
  isFavorite = false,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <article  className="group">
      {/* Product Image */}
      <Card className="relative overflow-hidden rounded-[28px] border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gray-300 group-hover:shadow-lg">
        <div className="relative h-[300px] overflow-hidden">
          <ImageGallery
            images={product.images}
            alt={product.name}
            variant="card"
          />

          {/* Rating */}
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm">
            <Star
              className="h-3.5 w-3.5 fill-gray-700 text-gray-700"
              strokeWidth={1.5}
            />

            <span className="text-xs font-semibold text-gray-700">
              {product.rating}
            </span>
          </div>

          {/* Favorite */}
          {onToggleFavorite && (
            <button
              type="button"
              aria-label={
                isFavorite
                  ? `Remove ${product.name} from favorites`
                  : `Add ${product.name} to favorites`
              }
              onClick={() => onToggleFavorite(product.id)}
              className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all duration-200 ${
                isFavorite
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:bg-gray-900 hover:text-white"
              }`}
            >
              <Heart
                className="h-[18px] w-[18px]"
                fill={isFavorite ? "currentColor" : "none"}
                strokeWidth={1.6}
              />
            </button>
          )}

          {/* Category */}
          <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm">
            {product.category}
          </div>

          {/* Out of Stock */}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-900">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Card>

      {/* Product Information */}
      <div className="px-2 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={`/products/${product.id}`}
              className="block"
            >
              <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors group-hover:text-gray-600">
                {product.name}
              </h3>
            </Link>

            <p className="mt-1 text-sm text-gray-500">
              {product.subcategory}
            </p>
          </div>

          <p className="whitespace-nowrap text-base font-bold text-gray-900">
            {product.price}
          </p>
        </div>

        {/* Pet Types */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.petType.map((pet) => (
            <span
              key={pet}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500"
            >
              {pet}
            </span>
          ))}
        </div>

        {/* View Product */}
        <Link
          href={`/products/${product.id}`}
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 transition-colors hover:text-gray-900"
        >
          View Product

          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}