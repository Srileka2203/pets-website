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
    <article className="group">
      {/* Product Image */}
      <Card className="relative overflow-hidden rounded-[28px] border-[#F2D9E1] bg-[#F8FAFA] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#F0B9C9] group-hover:shadow-lg">
        <div className="relative h-[300px] overflow-hidden">
          <ImageGallery
            images={product.images}
            alt={product.name}
            variant="card"
          />

          {/* Rating */}
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm">
            <Star
              className="h-3.5 w-3.5 fill-[#FFD54F] text-[#E5B72D]"
              strokeWidth={1.5}
            />

            <span className="text-xs font-semibold text-[#59656B]">
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
                  ? "border-[#FF80AB] bg-[#FF80AB] text-white"
                  : "border-[#F3CBD8] bg-white text-[#59656B] hover:border-[#FF80AB] hover:bg-[#FFF0F5] hover:text-[#FF5F91]"
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
          <div className="absolute bottom-4 left-4 rounded-full border border-[#CDECE7] bg-[#EAFBF8] px-3 py-1.5 text-xs font-semibold text-[#168F82] shadow-sm">
            {product.category}
          </div>

          {/* Out of Stock */}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#263238]/40">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#263238] shadow-sm">
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
              <h3 className="text-lg font-bold tracking-tight text-[#263238] transition-colors group-hover:text-[#FF7043]">
                {product.name}
              </h3>
            </Link>

            <p className="mt-1 text-sm text-[#737D82]">
              {product.subcategory}
            </p>
          </div>

          <p className="whitespace-nowrap text-base font-bold text-[#FF7043]">
            {product.price}
          </p>
        </div>

        {/* Pet Types */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.petType.map((pet, index) => (
            <span
              key={pet}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                index % 3 === 0
                  ? "bg-[#FFF0EA] text-[#E85D35]"
                  : index % 3 === 1
                    ? "bg-[#EAFBF8] text-[#168F82]"
                    : "bg-[#FFF0F5] text-[#E65D89]"
              }`}
            >
              {pet}
            </span>
          ))}
        </div>

        {/* View Product */}
        <Link
          href={`/products/${product.id}`}
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#26AFA1] transition-colors hover:text-[#FF7043]"
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