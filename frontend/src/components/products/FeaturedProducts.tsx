"use client";

import Link from "next/link";
import { ArrowRight, Heart, Plus, Star } from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    category: "Dog Food",
    price: "₹1,299",
    rating: "4.9",
  },
  {
    id: 2,
    name: "Healthy Cat Food",
    category: "Cat Food",
    price: "₹999",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Interactive Pet Toy",
    category: "Toys",
    price: "₹499",
    rating: "4.7",
  },
  {
    id: 4,
    name: "Comfort Pet Bed",
    category: "Accessories",
    price: "₹1,499",
    rating: "4.9",
  },
  {
    id: 5,
    name: "Pet Grooming Kit",
    category: "Pet Care",
    price: "₹799",
    rating: "4.8",
  },
  {
    id: 6,
    name: "Everyday Pet Collar",
    category: "Accessories",
    price: "₹399",
    rating: "4.7",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="featured-products"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Featured Products
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Loved by Pets,
              <span className="block text-gray-500">
                Chosen by You
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Browse some of our popular pet essentials made for
              comfort, care, and everyday happiness.
            </p>
          </div>

          <Link
            href="/products"
            className="group hidden items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 sm:flex"
          >
            View All Products

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* Horizontal Products */}
        <div className="relative mt-12">
          <div className="flex gap-6 overflow-x-auto pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className={`group w-[270px] shrink-0 sm:w-[290px] lg:w-[310px] ${
                  index % 2 === 0
                    ? "translate-y-0"
                    : "translate-y-8"
                }`}
              >
                {/* Image Card */}
                <Card className="overflow-hidden rounded-[28px] border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gray-300 group-hover:shadow-lg">
                  <div className="relative h-[300px] overflow-hidden">
                    <ImageGallery
                      images={[]}
                      alt={product.name}
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
                    <button
                      type="button"
                      aria-label={`Favorite ${product.name}`}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-200 hover:bg-gray-900 hover:text-white"
                    >
                      <Heart
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.6}
                      />
                    </button>

                    {/* Plus */}
                    <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gray-900 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                      <Plus
                        className="h-5 w-5"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </Card>

                {/* Content Outside Card */}
                <div className="px-2 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-gray-900">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {product.category}
                      </p>
                    </div>

                    <p className="whitespace-nowrap text-base font-bold text-gray-900">
                      {product.price}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      Pet Essential
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/products"
            className="group flex items-center gap-2 text-sm font-semibold text-gray-700"
          >
            View All Products

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gray-200 sm:w-20" />

          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-400">
            More Care. More Comfort.
          </span>

          <div className="h-px w-12 bg-gray-200 sm:w-20" />
        </div>
      </Container>
    </section>
  );
}