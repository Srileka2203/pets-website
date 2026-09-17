import Link from "next/link";
import { ArrowRight, Heart, MapPin, Plus, Star } from "lucide-react";

import Container from "@/components/ui/Container";

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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Meet Our Pets
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Find Your
              <span className="block text-gray-500">
                New Best Friend
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Discover adorable companions who are ready to become
              part of your family.
            </p>
          </div>

          <Link
            href="/pets"
            className="group hidden items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 sm:flex"
          >
            View All Pets
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* Horizontal Pet Cards */}
        <div className="relative mt-12">
          <div
            className="
              flex
              gap-5
              overflow-x-auto
              pb-6
              snap-x
              snap-mandatory
              scrollbar-hide
            "
          >
            {pets.map((pet) => (
              <Link
                key={pet.id}
                href={`/pets/${pet.id}`}
                className="group block w-[280px] shrink-0 snap-start sm:w-[300px] lg:w-[320px]"
              >
                <article
                  className="
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-gray-200
                    bg-gray-50
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-gray-300
                    hover:shadow-lg
                  "
                >
                  {/* Image Area */}
                  <div className="relative h-[245px] overflow-hidden bg-gray-200">
                    {/* Decorative Circle */}
                    <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300" />

                    {/* Image Placeholder */}
                    <div className="absolute bottom-0 left-1/2 flex h-[175px] w-[210px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-[45%_45%_10%_10%] bg-gray-100 shadow-sm">
                      <span className="text-sm font-medium text-gray-400">
                        Pet Image
                      </span>
                    </div>

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
                      onClick={(event) => event.preventDefault()}
                      className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-200
                        bg-white
                        text-gray-600
                        shadow-sm
                        transition-all
                        duration-200
                        hover:bg-gray-900
                        hover:text-white
                      "
                    >
                      <Heart
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.6}
                      />
                    </button>

                    {/* Plus Button */}
                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-white
                        bg-gray-900
                        text-white
                        shadow-md
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <Plus
                        className="h-5 w-5"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Pet Information */}
                  <div className="bg-white p-5">
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

                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                      <span>{pet.age}</span>

                      <span className="text-gray-300">•</span>

                      <MapPin
                        className="h-4 w-4"
                        strokeWidth={1.7}
                      />

                      <span>{pet.location}</span>
                    </div>

                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                        Ready for a loving home
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Right Fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-20 bg-gradient-to-l from-white to-transparent lg:block"
          />
        </div>

        {/* Mobile View All */}
        <div className="mt-5 flex justify-center sm:hidden">
          <Link
            href="/pets"
            className="group flex items-center gap-2 text-sm font-semibold text-gray-700"
          >
            View All Pets
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 flex items-center justify-center gap-4">
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