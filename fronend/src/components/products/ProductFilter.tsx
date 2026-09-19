"use client";

import {
  Bone,
  Cat,
  Dog,
  Fish,
  PawPrint,
  Rabbit,
  Bird,
} from "lucide-react";

import Container from "@/components/ui/Container";

export type ProductCategory =
  | "All"
  | "Food"
  | "Accessories"
  | "Toys";

export type ProductPetType =
  | "All"
  | "Dogs"
  | "Cats"
  | "Birds"
  | "Rabbits"
  | "Fish"
  | "Hamsters";

interface ProductFilterProps {
  activeCategory: ProductCategory;
  activePetType: ProductPetType;
  onCategoryChange: (category: ProductCategory) => void;
  onPetTypeChange: (petType: ProductPetType) => void;
}

const categoryFilters = [
  {
    name: "All" as ProductCategory,
    icon: PawPrint,
  },
  {
    name: "Food" as ProductCategory,
    icon: Bone,
  },
  {
    name: "Accessories" as ProductCategory,
    icon: PawPrint,
  },
  {
    name: "Toys" as ProductCategory,
    icon: PawPrint,
  },
];

const petFilters = [
  {
    name: "All" as ProductPetType,
    icon: PawPrint,
  },
  {
    name: "Dogs" as ProductPetType,
    icon: Dog,
  },
  {
    name: "Cats" as ProductPetType,
    icon: Cat,
  },
  {
    name: "Birds" as ProductPetType,
    icon: Bird,
  },
  {
    name: "Rabbits" as ProductPetType,
    icon: Rabbit,
  },
  {
    name: "Fish" as ProductPetType,
    icon: Fish,
  },
  {
    name: "Hamsters" as ProductPetType,
    icon: PawPrint,
  },
];

export default function ProductFilter({
  activeCategory,
  activePetType,
  onCategoryChange,
  onPetTypeChange,
}: ProductFilterProps) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <Container>
        <div className="py-6">
          {/* Product Categories */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Categories
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {categoryFilters.map((filter) => {
                const Icon = filter.icon;
                const isActive =
                  activeCategory === filter.name;

                return (
                  <button
                    key={filter.name}
                    type="button"
                    onClick={() =>
                      onCategoryChange(filter.name)
                    }
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className="h-4 w-4"
                      strokeWidth={1.7}
                    />

                    {filter.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pet Type */}
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Pet Type
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {petFilters.map((filter) => {
                const Icon = filter.icon;
                const isActive =
                  activePetType === filter.name;

                return (
                  <button
                    key={filter.name}
                    type="button"
                    onClick={() =>
                      onPetTypeChange(filter.name)
                    }
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className="h-4 w-4"
                      strokeWidth={1.7}
                    />

                    {filter.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}