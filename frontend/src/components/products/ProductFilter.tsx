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
    <section className="border-b border-[#F7D9E3] bg-[#FFFCFD]">
      <Container>
        <div className="py-6">
          {/* Product Categories */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#26AFA1]">
              Categories
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {categoryFilters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeCategory === filter.name;

                return (
                  <button
                    key={filter.name}
                    type="button"
                    onClick={() => onCategoryChange(filter.name)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-[#FF7043] bg-[#FF7043] text-white shadow-sm shadow-[#FF7043]/15"
                        : "border-[#F3CBD8] bg-white text-[#59656B] hover:border-[#FFB5C9] hover:bg-[#FFF3F7] hover:text-[#E85D35]"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        isActive ? "text-white" : "text-[#26AFA1]"
                      }`}
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#26AFA1]">
              Pet Type
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {petFilters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activePetType === filter.name;

                return (
                  <button
                    key={filter.name}
                    type="button"
                    onClick={() => onPetTypeChange(filter.name)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-[#26C6B5] bg-[#26C6B5] text-white shadow-sm shadow-[#26C6B5]/15"
                        : "border-[#D5EEE9] bg-white text-[#59656B] hover:border-[#8EDDD3] hover:bg-[#F0FCFA] hover:text-[#168F82]"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        isActive ? "text-white" : "text-[#26AFA1]"
                      }`}
                      strokeWidth={1.7}
                    />

                    {filter.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Small decorative accent */}
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFD54F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF80AB]" />
          </div>
        </div>
      </Container>
    </section>
  );
}