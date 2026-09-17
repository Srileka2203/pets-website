"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bird,
  Cat,
  Dog,
  Fish,
  Grid2X2,
  Heart,
  Mouse,
  PawPrint,
  Rabbit,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";

type CategoryType =
  | "All"
  | "Dogs"
  | "Cats"
  | "Birds"
  | "Rabbits"
  | "Fish"
  | "Hamsters";

interface Category {
  name: Exclude<CategoryType, "All">;
  description: string;
  count: string;
  href: string;
}

const categories: Category[] = [
  {
    name: "Dogs",
    description: "Loyal friends for a happier you.",
    count: "50+ pets",
    href: "/categories/dogs",
  },
  {
    name: "Cats",
    description: "Playful, independent and full of love.",
    count: "40+ pets",
    href: "/categories/cats",
  },
  {
    name: "Birds",
    description: "Colorful companions to brighten your home.",
    count: "25+ pets",
    href: "/categories/birds",
  },
  {
    name: "Rabbits",
    description: "Gentle, adorable and fun to be around.",
    count: "20+ pets",
    href: "/categories/rabbits",
  },
  {
    name: "Fish",
    description: "Peaceful beauty for a calming space.",
    count: "30+ pets",
    href: "/categories/fish",
  },
  {
    name: "Hamsters",
    description: "Small pets with big personalities.",
    count: "15+ pets",
    href: "/categories/hamsters",
  },
];

const filters: {
  name: CategoryType;
  icon: React.ElementType;
}[] = [
  {
    name: "All",
    icon: Grid2X2,
  },
  {
    name: "Dogs",
    icon: Dog,
  },
  {
    name: "Cats",
    icon: Cat,
  },
  {
    name: "Birds",
    icon: Bird,
  },
  {
    name: "Rabbits",
    icon: Rabbit,
  },
  {
    name: "Fish",
    icon: Fish,
  },
  {
    name: "Hamsters",
    icon: Mouse,
  },
];

const categoryIcons = {
  Dogs: Dog,
  Cats: Cat,
  Birds: Bird,
  Rabbits: Rabbit,
  Fish: Fish,
  Hamsters: Mouse,
};

export default function Categories() {
  const [activeFilter, setActiveFilter] =
    useState<CategoryType>("All");

  const filteredCategories =
    activeFilter === "All"
      ? categories
      : categories.filter(
          (category) => category.name === activeFilter
        );

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Background Circles */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-28 h-48 w-48 rounded-full bg-gray-100"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 top-72 h-52 w-52 rounded-full bg-gray-100"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
            Explore Our Pets
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Choose Your
            <span className="block text-gray-500">
              Perfect Companion
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            From playful puppies to curious kittens, explore our pet
            categories and find a loving companion that fits your
            lifestyle.
          </p>
        </div>

        {/* Decorative Paw */}
        <div
          aria-hidden="true"
          className="absolute right-8 top-16 hidden rotate-12 text-gray-300 lg:block"
        >
          <PawPrint
            className="h-12 w-12"
            strokeWidth={1.5}
          />
        </div>

        {/* Decorative Text */}
        <div
          aria-hidden="true"
          className="absolute right-2 top-28 hidden max-w-32 rotate-[-8deg] lg:block"
        >
          <p className="text-sm italic leading-5 text-gray-400">
            Small pets.
            <br />
            Big happiness
          </p>

          <Heart
            className="ml-8 mt-2 h-5 w-5 text-gray-400"
            strokeWidth={1.5}
          />
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.name;

            return (
              <button
                key={filter.name}
                type="button"
                onClick={() => setActiveFilter(filter.name)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                <Icon
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />

                <span>{filter.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCategories.map((category, index) => {
            const CategoryIcon =
              categoryIcons[category.name];

            return (
              <Link
                key={category.name}
                href={category.href}
                className="group"
              >
                <Card className="relative h-[270px] overflow-hidden rounded-[26px] border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
                  
                  {/* Background Circle */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-[-35px] right-[-25px] h-[210px] w-[210px] rounded-full bg-gray-100"
                  />

                  {/* Category Image */}
                  <div className="absolute bottom-0 right-0 z-10 h-[205px] w-[175px]">
                    <ImageGallery
                      variant="card"
                      alt={`${category.name} category`}
                    />
                  </div>

                  {/* Decorative Dot */}
                  <div
                    aria-hidden="true"
                    className="absolute right-[170px] top-8 z-20 h-2 w-2 rounded-full bg-gray-300"
                  />

                  {/* Sparkles */}
                  {index % 3 === 0 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-[210px] top-8 z-20 hidden rotate-[-20deg] text-gray-400 sm:block"
                    >
                      <Sparkles
                        className="h-6 w-6"
                        strokeWidth={1.4}
                      />
                    </div>
                  )}

                  {/* Heart */}
                  {index % 3 === 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute right-7 top-7 z-20 text-gray-400"
                    >
                      <Heart
                        className="h-5 w-5"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}

                  {/* Paw */}
                  {index % 3 === 2 && (
                    <div
                      aria-hidden="true"
                      className="absolute right-8 top-7 z-20 rotate-12 text-gray-400"
                    >
                      <PawPrint
                        className="h-5 w-5"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="relative z-20 flex h-full flex-col justify-between p-7">
                    <div className="max-w-[175px]">
                      
                      {/* Category Icon */}
                      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                        <CategoryIcon
                          className="h-5 w-5"
                          strokeWidth={1.7}
                        />
                      </div>

                      {/* Category Name */}
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {category.description}
                      </p>

                      {/* Count */}
                      <p className="mt-3 text-sm font-medium text-gray-500">
                        {category.count}
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                      <ArrowRight
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gray-300 sm:w-20" />

          <PawPrint
            className="h-5 w-5 text-gray-400"
            strokeWidth={1.6}
          />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            More Pets. More Love.
          </span>

          <div className="h-px w-16 bg-gray-300 sm:w-20" />
        </div>
      </Container>
    </section>
  );
}