"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/types/product";
import { PawPrint } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
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
      <section className="bg-[#FFF9FB] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex min-h-[300px] items-center justify-center rounded-[28px] border border-dashed border-[#F3C4D4] bg-[#FFF1F6]">
            <div className="text-center">
              {/* Empty State Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F9F6]">
                <PawPrint
                  className="h-7 w-7 text-[#26AFA1]"
                  strokeWidth={1.4}
                />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#263238]">
                No products found
              </h3>

              <p className="mt-2 text-sm text-[#737D82]">
                Try changing your search or filters.
              </p>

              {/* Small decorative accent */}
              <div className="mx-auto mt-5 h-1.5 w-8 rounded-full bg-[#FFD54F]" />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-[#FFF9FB] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#26AFA1]">
              Our Collection
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#263238] sm:text-3xl">
              Shop for Your Pets
            </h2>

            {/* Decorative accent */}
            <div className="mt-3 h-1 w-10 rounded-full bg-[#FF7043]" />
          </div>

          <p className="hidden text-sm text-[#737D82] sm:block">
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