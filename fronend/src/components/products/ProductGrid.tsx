"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/types/product";
import { PawPrint } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  };

  if (products.length === 0) {
    return (
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex min-h-[300px] items-center justify-center rounded-[28px] border border-dashed border-gray-200 bg-gray-50">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
                <PawPrint
                  className="h-7 w-7 text-gray-400"
                  strokeWidth={1.4}
                />
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No products found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or filters.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
              Our Collection
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Shop for Your Pets
            </h2>
          </div>

          <p className="hidden text-sm text-gray-500 sm:block">
            {products.length}{" "}
            {products.length === 1 ? "product" : "products"} available
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}