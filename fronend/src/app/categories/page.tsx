import Link from "next/link";
import {
  ArrowRight,
  Bird,
  Cat,
  Dog,
  Fish,
  Mouse,
  PawPrint,
  Rabbit,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";

const categories = [
  {
    name: "Dogs",
    description: "Loyal friends for a happier you.",
    count: "50+ pets",
    href: "/categories/dogs",
    icon: Dog,
  },
  {
    name: "Cats",
    description: "Playful, independent and full of love.",
    count: "40+ pets",
    href: "/categories/cats",
    icon: Cat,
  },
  {
    name: "Birds",
    description: "Colorful companions to brighten your home.",
    count: "25+ pets",
    href: "/categories/birds",
    icon: Bird,
  },
  {
    name: "Rabbits",
    description: "Gentle, adorable and fun to be around.",
    count: "20+ pets",
    href: "/categories/rabbits",
    icon: Rabbit,
  },
  {
    name: "Fish",
    description: "Peaceful beauty for a calming space.",
    count: "30+ pets",
    href: "/categories/fish",
    icon: Fish,
  },
  {
    name: "Hamsters",
    description: "Small pets with big personalities.",
    count: "15+ pets",
    href: "/categories/hamsters",
    icon: Mouse,
  },
];

export default function CategoriesPage() {
  return (
    <main className="bg-white">
      {/* =========================================
          HERO
      ========================================== */}
      <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-24">
        {/* Decorative Circles */}
        <div
          aria-hidden="true"
          className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-gray-200/70"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gray-200/70"
        />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            {/* Icon */}
            <PawPrint
              className="mb-5 h-9 w-9 text-gray-400"
              strokeWidth={1.4}
            />

            {/* Small Heading */}
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Explore Our Pets
            </p>

            {/* Main Heading */}
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Find Your
              <span className="block text-gray-500">
                Perfect Companion
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore our different pet categories and discover a
              loving companion that fits your lifestyle.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================
          CATEGORIES
      ========================================== */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group"
                >
                  <Card className="relative h-[320px] overflow-hidden rounded-[28px] border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
                    {/* Background Circle */}
                    <div
                      aria-hidden="true"
                      className="absolute bottom-[-45px] right-[-35px] h-[240px] w-[240px] rounded-full bg-gray-100"
                    />

                    {/* Image */}
                    <div className="absolute bottom-0 right-0 z-10 h-[220px] w-[190px]">
                      <ImageGallery
                        variant="card"
                        alt={`${category.name} category`}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 flex h-full flex-col justify-between p-7">
                      <div className="max-w-[190px]">
                        {/* Category Icon */}
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                          <Icon
                            className="h-5 w-5"
                            strokeWidth={1.7}
                          />
                        </div>

                        {/* Category Name */}
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                          {category.name}
                        </h2>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {category.description}
                        </p>

                        {/* Count */}
                        <p className="mt-3 text-sm font-semibold text-gray-500">
                          {category.count}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                        <ArrowRight
                          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* =========================================
              BOTTOM DECORATION
          ========================================== */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gray-200 sm:w-20" />

            <PawPrint
              className="h-5 w-5 text-gray-400"
              strokeWidth={1.5}
            />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-400">
              More Pets. More Love.
            </span>

            <div className="h-px w-12 bg-gray-200 sm:w-20" />
          </div>
        </Container>
      </section>
    </main>
  );
}