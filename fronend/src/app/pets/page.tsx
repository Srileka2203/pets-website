"use client";

import Link from "next/link";
import {
  Bird,
  Cat,
  Dog,
  Fish,
  Heart,
  PawPrint,
  Rabbit,
  Search,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";
import Button from "@/components/ui/Button";

type PetCategory =
  | "All"
  | "Dogs"
  | "Cats"
  | "Birds"
  | "Rabbits"
  | "Fish"
  | "Hamsters";

interface Pet {
  id: number;
  name: string;
  breed: string;
  category: Exclude<PetCategory, "All">;
  age: string;
  location: string;
  price: string;
  rating: string;
}

const pets: Pet[] = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    category: "Dogs",
    age: "2 years",
    location: "Chennai",
    price: "₹25,000",
    rating: "4.9",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Persian Cat",
    category: "Cats",
    age: "1 year",
    location: "Chennai",
    price: "₹18,000",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Coco",
    breed: "Cockatiel",
    category: "Birds",
    age: "8 months",
    location: "Coimbatore",
    price: "₹8,000",
    rating: "4.7",
  },
  {
    id: 4,
    name: "Bunny",
    breed: "Holland Lop",
    category: "Rabbits",
    age: "10 months",
    location: "Bangalore",
    price: "₹6,500",
    rating: "4.9",
  },
  {
    id: 5,
    name: "Nemo",
    breed: "Goldfish",
    category: "Fish",
    age: "6 months",
    location: "Chennai",
    price: "₹1,500",
    rating: "4.8",
  },
  {
    id: 6,
    name: "Milo",
    breed: "Syrian Hamster",
    category: "Hamsters",
    age: "7 months",
    location: "Coimbatore",
    price: "₹2,500",
    rating: "4.9",
  },
  {
    id: 7,
    name: "Bruno",
    breed: "Labrador Retriever",
    category: "Dogs",
    age: "1.5 years",
    location: "Chennai",
    price: "₹22,000",
    rating: "4.8",
  },
  {
    id: 8,
    name: "Misty",
    breed: "British Shorthair",
    category: "Cats",
    age: "11 months",
    location: "Bangalore",
    price: "₹20,000",
    rating: "4.9",
  },
  {
    id: 9,
    name: "Kiwi",
    breed: "Lovebird",
    category: "Birds",
    age: "9 months",
    location: "Coimbatore",
    price: "₹4,500",
    rating: "4.7",
  },
];

const filters: {
  name: PetCategory;
  icon: React.ElementType;
}[] = [
  {
    name: "All",
    icon: PawPrint,
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
    icon: PawPrint,
  },
];

export default function PetsPage() {
  const [activeFilter, setActiveFilter] =
    useState<PetCategory>("All");

  const [search, setSearch] = useState("");

  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesCategory =
        activeFilter === "All" ||
        pet.category === activeFilter;

      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        pet.name.toLowerCase().includes(searchValue) ||
        pet.breed.toLowerCase().includes(searchValue) ||
        pet.category.toLowerCase().includes(searchValue) ||
        pet.location.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, search]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  };

  return (
    <main className="bg-white">

      {/* =========================================
          PAGE HERO
      ========================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-24">

        {/* Decorative Circles */}

        <div
          aria-hidden="true"
          className="absolute -left-24 top-10 h-52 w-52 rounded-full bg-gray-200/70"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gray-200/70"
        />

        <Container className="relative z-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* =========================================
                LEFT — HERO CONTENT
            ========================================== */}

            <div className="max-w-2xl">

              <PawPrint
                className="mb-5 h-9 w-9 text-gray-400"
                strokeWidth={1.4}
              />

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                Find Your Companion
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Meet Our
                <span className="block text-gray-500">
                  Lovely Pets
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                Browse our adorable pets and discover a companion
                who is ready to become part of your family.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {/* <Link href="/pets">
                  <Button>
                    Browse Pets
                  </Button>
                </Link> */}

                <Link href="/categories">
                  <Button>
                    Explore Categories
                  </Button>
                </Link>

              </div>

            </div>

            {/* =========================================
                RIGHT — PET VISUAL
            ========================================== */}

            <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[430px]">

              {/* Large Background Circle */}

              <div
                aria-hidden="true"
                className="absolute h-[280px] w-[280px] rounded-full bg-gray-200 sm:h-[340px] sm:w-[340px]"
              />

              {/* Outer Circle */}

              <div
                aria-hidden="true"
                className="absolute h-[310px] w-[310px] rounded-full border border-gray-300 sm:h-[380px] sm:w-[380px]"
              />

              {/* Pet Image Placeholder */}

              <div className="relative z-10 flex h-[300px] w-[230px] items-center justify-center overflow-hidden rounded-[45%_45%_12%_12%] border-4 border-white bg-gray-100 shadow-lg sm:h-[360px] sm:w-[275px]">

                <div className="flex flex-col items-center justify-center text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                    <PawPrint
                      className="h-10 w-10 text-gray-400"
                      strokeWidth={1.3}
                    />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Pet Image
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Coming soon
                  </p>

                </div>

              </div>

              {/* Decorative Paw */}

              <PawPrint
                aria-hidden="true"
                className="absolute bottom-5 left-[10%] h-8 w-8 rotate-[-15deg] text-gray-300"
                strokeWidth={1.3}
              />

              <PawPrint
                aria-hidden="true"
                className="absolute right-[8%] top-8 h-6 w-6 rotate-12 text-gray-300"
                strokeWidth={1.3}
              />

            </div>

          </div>

        </Container>

      </section>


      {/* =========================================
          SEARCH + FILTERS
      ========================================== */}

      <section className="border-b border-gray-100 bg-white py-8">

        <Container>

          <div className="flex flex-col gap-5">

            {/* Search */}

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div className="relative w-full lg:max-w-md">

                <Search
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                  strokeWidth={1.7}
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search pets..."
                  className="h-12 w-full rounded-full border border-gray-200 bg-gray-50 pl-12 pr-5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-400 focus:bg-white"
                />

              </div>

              <Button variant="outline">

                <SlidersHorizontal
                  className="mr-2 h-4 w-4"
                  strokeWidth={1.7}
                />

                Filters

              </Button>

            </div>


            {/* Category Filters */}

            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

              {filters.map((filter) => {

                const Icon = filter.icon;

                const isActive =
                  activeFilter === filter.name;

                return (
                  <button
                    key={filter.name}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter.name)
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

        </Container>

      </section>


      {/* =========================================
          PET GRID
      ========================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <Container>

          {/* Grid Header */}

          <div className="flex items-end justify-between gap-4">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Available Companions
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Find Your New Best Friend
              </h2>

            </div>

            <p className="hidden text-sm text-gray-500 sm:block">
              {filteredPets.length}{" "}
              {filteredPets.length === 1
                ? "pet"
                : "pets"}{" "}
              available
            </p>

          </div>


          {/* Pet Cards */}

          {filteredPets.length > 0 ? (

            <div className="mt-10 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

              {filteredPets.map((pet, index) => {

                const isFavorite =
                  favorites.includes(pet.id);

                return (

                  <article
                    key={pet.id}
                    className={`group ${
                      index % 3 === 1
                        ? "lg:translate-y-8"
                        : ""
                    }`}
                  >

                    {/* Image Card */}

                    <Card className="relative overflow-hidden rounded-[28px] border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gray-300 group-hover:shadow-lg">

                      <div className="relative h-[330px] overflow-hidden">

                        <ImageGallery
                          variant="card"
                          alt={pet.name}
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
                          aria-label={
                            isFavorite
                              ? `Remove ${pet.name} from favorites`
                              : `Add ${pet.name} to favorites`
                          }
                          onClick={() =>
                            toggleFavorite(pet.id)
                          }
                          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all duration-200 ${
                            isFavorite
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-900 hover:text-white"
                          }`}
                        >

                          <Heart
                            className="h-[18px] w-[18px]"
                            fill={
                              isFavorite
                                ? "currentColor"
                                : "none"
                            }
                            strokeWidth={1.6}
                          />

                        </button>


                        {/* Pet Category */}

                        <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm">
                          {pet.category}
                        </div>

                      </div>

                    </Card>


                    {/* Pet Information Outside Card */}

                    <div className="px-2 pt-5">

                      <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                          <Link
                            href={`/pets/${pet.id}`}
                            className="block"
                          >

                            <h3 className="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-gray-600">
                              {pet.name}
                            </h3>

                          </Link>

                          <p className="mt-1 text-sm text-gray-500">
                            {pet.breed}
                          </p>

                        </div>

                        <p className="whitespace-nowrap text-base font-bold text-gray-900">
                          {pet.price}
                        </p>

                      </div>


                      {/* Age + Location */}

                      <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                        <span>
                          {pet.age}
                        </span>

                        <span className="text-gray-300">
                          •
                        </span>

                        <span>
                          {pet.location}
                        </span>

                      </div>


                      {/* View Pet */}

                      <Link
                        href={`/pets/${pet.id}`}
                        className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 transition-colors hover:text-gray-900"
                      >

                        View Pet

                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>

                      </Link>

                    </div>

                  </article>

                );

              })}

            </div>

          ) : (

            /* Empty State */

            <div className="mt-10 flex min-h-[320px] items-center justify-center rounded-[28px] border border-dashed border-gray-200 bg-gray-50">

              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">

                  <PawPrint
                    className="h-7 w-7 text-gray-400"
                    strokeWidth={1.4}
                  />

                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  No pets found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try another search or choose a different
                  category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("All");
                  }}
                  className="mt-5 text-sm font-semibold text-gray-700 underline underline-offset-4 hover:text-gray-900"
                >
                  Clear filters
                </button>

              </div>

            </div>

          )}


          {/* Bottom Decoration */}

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