"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  MapPin,
  Plus,
  Star,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";

const pets = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    age: "2 years",
    location: "Chennai",
    price: "₹25,000",
    rating: "4.9",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Persian Cat",
    age: "1 year",
    location: "Chennai",
    price: "₹18,000",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Coco",
    breed: "Cockatiel",
    age: "8 months",
    location: "Coimbatore",
    price: "₹8,000",
    rating: "4.7",
  },
  {
    id: 4,
    name: "Bunny",
    breed: "Holland Lop",
    age: "10 months",
    location: "Bangalore",
    price: "₹6,500",
    rating: "4.9",
  },
  {
    id: 5,
    name: "Nemo",
    breed: "Goldfish",
    age: "6 months",
    location: "Chennai",
    price: "₹1,500",
    rating: "4.8",
  },
  {
    id: 6,
    name: "Milo",
    breed: "Syrian Hamster",
    age: "7 months",
    location: "Coimbatore",
    price: "₹2,500",
    rating: "4.9",
  },
];

export default function FeaturedPets() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
            Meet Our Pets
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Find Your
            <span className="block text-gray-500">
              New Best Friend
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover adorable companions who are ready to become
            part of your family.
          </p>
        </div>

        {/* View All */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/pets"
            className="group flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900"
          >
            View All Pets
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* Pet Slider */}
        <div className="relative mt-14">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {pets.map((pet, index) => (
              <Link
                key={pet.id}
                href={`/pets/${pet.id}`}
                className={`group w-[270px] shrink-0 snap-start sm:w-[290px] lg:w-[310px] ${
                  index % 2 === 0
                    ? "translate-y-0"
                    : "translate-y-10"
                }`}
              >
                {/* IMAGE CARD ONLY */}
                <Card className="relative overflow-hidden rounded-[28px] border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gray-300 group-hover:shadow-lg">
                  
                  {/* Image */}
                  <div className="relative h-[330px] overflow-hidden">
                    <ImageGallery />

                    {/* Soft overlay circle */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60"
                    />

                    {/* Rating */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm">
                      <Star
                        className="h-3.5 w-3.5 fill-gray-700 text-gray-700"
                        strokeWidth={1.5}
                      />

                      <span className="text-xs font-semibold text-gray-700">
                        {pet.rating}
                      </span>
                    </div>

                    {/* Favorite */}
                    <button
                      type="button"
                      aria-label={`Favorite ${pet.name}`}
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

                {/* CONTENT OUTSIDE CARD */}
                <div className="px-2 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-gray-900">
                        {pet.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {pet.breed}
                      </p>
                    </div>

                    <p className="whitespace-nowrap text-base font-bold text-gray-900">
                      {pet.price}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                    <span>{pet.age}</span>

                    <span className="text-gray-300">•</span>

                    <MapPin
                      className="h-4 w-4"
                      strokeWidth={1.7}
                    />

                    <span>{pet.location}</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      Ready for a loving home
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Left fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 bg-gradient-to-r from-white to-transparent lg:block"
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-16 bg-gradient-to-l from-white to-transparent lg:block"
          />
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gray-200 sm:w-20" />

          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-400">
            More Pets. More Love.
          </span>

          <div className="h-px w-12 bg-gray-200 sm:w-20" />
        </div>
      </Container>
    </section>
  );
}