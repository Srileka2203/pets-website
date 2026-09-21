"use client";

import { useMemo, useState } from "react";

import ProductsHero from "@/components/products/ProductsHero";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCategories from "@/components/products/ProductCategories";
import ProductSearch from "@/components/products/ProductSearch";
import Container from "@/components/ui/Container";
import ProductFilter, {
  type ProductCategory,
  type ProductPetType,
} from "@/components/products/ProductFilter";

import { products } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("All");

  const [activePetType, setActivePetType] =
    useState<ProductPetType>("All");

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return products.filter((product) => {
      /* Category filter */
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      /* Pet type filter */
      const matchesPetType =
        activePetType === "All" ||
        product.petType.includes(activePetType);

      /* Search */
      const matchesSearch =
        !searchValue ||
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.subcategory.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue) ||
        product.petType.some((pet) =>
          pet.toLowerCase().includes(searchValue)
        );

      return (
        matchesCategory &&
        matchesPetType &&
        matchesSearch
      );
    });
  }, [activeCategory, activePetType, search]);

  return (
    <main className="bg-white">

      {/* Hero */}
      <ProductsHero />

      {/* Search */}
      <ProductSearch
        value={search}
        onChange={setSearch}
      />

      {/* Filters */}
      <ProductFilter
        activeCategory={activeCategory}
        activePetType={activePetType}
        onCategoryChange={setActiveCategory}
        onPetTypeChange={setActivePetType}
      />

      {/* Product Grid */}
      <section id="product-grid" className="py-16 sm:py-20">
        <Container>
          <ProductGrid products={filteredProducts} />
        </Container>
      </section>

      {/* Product Categories */}
      <ProductCategories />

    </main>
  );
}