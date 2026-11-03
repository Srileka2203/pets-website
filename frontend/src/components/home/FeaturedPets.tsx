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
    <section className="relative overflow-hidden bg-[#FFF8F5] py-20 sm:py-24 lg:py-28">
      {/* Decorative Background Shapes */}

      <div
        aria-hidden="true"
        className="absolute -left-24 top-24 h-48 w-48 rounded-full bg-[#FCE4E7]/70"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 top-72 h-56 w-56 rounded-full bg-[#DDF5F2]/70"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-10 left-[8%] h-3 w-3 rounded-full bg-[#F6C744]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[12%] top-20 h-4 w-4 rounded-full bg-[#20BDB3]/70"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#20BDB3]">
            Meet Our Pets
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#1C3155] sm:text-5xl lg:text-6xl">
            Find Your
            <span className="block text-[#FF6B45]">
              New Best Friend
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Discover adorable companions who are ready to become
            part of your family.
          </p>
        </div>

        {/* View All */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/pets"
            className="group flex items-center gap-2 text-sm font-semibold text-[#1C3155] transition-colors hover:text-[#FF6B45]"
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
                {/* IMAGE CARD */}
                <Card
                  className="
                    relative overflow-hidden rounded-[28px]
                    border-[#F1DED8]
                    bg-white
                    shadow-sm
                    transition-all duration-300
                    group-hover:-translate-y-1
                    group-hover:border-[#FFB39D]
                    group-hover:shadow-lg
                  "
                >
                  {/* Image */}
                  <div className="relative h-[330px] overflow-hidden bg-[#F7F1EF]">
                    <ImageGallery />

                    {/* Soft Colored Circle */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFB9A6]/60"
                    />

                    {/* Rating */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[#F3E6E1] bg-white px-3 py-1.5 shadow-sm">
                      <Star
                        className="h-3.5 w-3.5 fill-[#F6C744] text-[#F6C744]"
                        strokeWidth={1.5}
                      />

                      <span className="text-xs font-semibold text-[#1C3155]">
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
                      className="
                        absolute right-4 top-4
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        border border-[#F1DED8]
                        bg-white
                        text-[#64748B]
                        shadow-sm
                        transition-all duration-200
                        hover:border-[#FF6B45]
                        hover:bg-[#FF6B45]
                        hover:text-white
                      "
                    >
                      <Heart
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.6}
                      />
                    </button>

                    {/* Plus */}
                    <div
                      className="
                        absolute bottom-4 right-4
                        flex h-12 w-12 items-center justify-center
                        rounded-full
                        border-4 border-white
                        bg-[#FF6B45]
                        text-white
                        shadow-md
                        transition-all duration-300
                        group-hover:scale-105
                        group-hover:bg-[#20BDB3]
                      "
                    >
                      <Plus
                        className="h-5 w-5"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </Card>

                {/* CONTENT */}
                <div className="px-2 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#1C3155]">
                        {pet.name}
                      </h3>

                      <p className="mt-1 text-sm text-[#718096]">
                        {pet.breed}
                      </p>
                    </div>

                    <p className="whitespace-nowrap text-base font-bold text-[#FF6B45]">
                      {pet.price}
                    </p>
                  </div>

                  {/* Pet Details */}
                  <div className="mt-3 flex items-center gap-2 text-sm text-[#718096]">
                    <span>{pet.age}</span>

                    <span className="text-[#CBD5E1]">
                      •
                    </span>

                    <MapPin
                      className="h-4 w-4 text-[#20BDB3]"
                      strokeWidth={1.7}
                    />

                    <span>{pet.location}</span>
                  </div>

                  {/* Status */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#20BDB3]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#94A3B8]">
                      Ready for a loving home
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Left Fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute left-0 top-0
              hidden h-full w-16
              bg-gradient-to-r
              from-[#FFF8F5]
              to-transparent
              lg:block
            "
          />

          {/* Right Fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute right-0 top-0
              hidden h-full w-16
              bg-gradient-to-l
              from-[#FFF8F5]
              to-transparent
              lg:block
            "
          />
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#EAD9D3] sm:w-20" />

          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#94A3B8]">
            More Pets. More Love.
          </span>

          <div className="h-px w-12 bg-[#EAD9D3] sm:w-20" />
        </div>
      </Container>
    </section>
  );
}