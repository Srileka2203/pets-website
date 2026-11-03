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
import { pets } from "@/data/pets";

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
        ? current.filter(
            (favoriteId) => favoriteId !== id
          )
        : [...current, id]
    );
  };

  return (
    <main className="bg-[#FFF8F5]">

      {/* =========================================
          PAGE HERO
      ========================================== */}

      <section className="relative overflow-hidden bg-[#FFF8F5] py-16 sm:py-20 lg:py-24">

        {/* Decorative Background Circles */}

        <div
          aria-hidden="true"
          className="absolute -left-24 top-10 h-52 w-52 rounded-full bg-[#FCE4E7]/70"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#DDF5F2]/80"
        />

        <div
          aria-hidden="true"
          className="absolute right-[20%] top-20 h-3 w-3 rounded-full bg-[#F6C744]"
        />

        <div
          aria-hidden="true"
          className="absolute left-[45%] bottom-16 h-4 w-4 rounded-full bg-[#20BDB3]/60"
        />

        <Container className="relative z-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* =========================================
                LEFT — HERO CONTENT
            ========================================== */}

            <div className="max-w-2xl">

              <PawPrint
                className="mb-5 h-9 w-9 text-[#20BDB3]"
                strokeWidth={1.4}
              />

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B45]">
                Find Your Companion
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-[#1C3155] sm:text-5xl lg:text-6xl">
                Meet Our
                <span className="block text-[#FF6B45]">
                  Lovely Pets
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg">
                Browse our adorable pets and discover a companion
                who is ready to become part of your family.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Link href="/categories">
                  <Button
                    className={`
                      border-[#FF6B45]
                      bg-[#FF6B45]
                      text-white
                      hover:bg-[#F45D3A]
                    `}
                  >
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
                className="absolute h-[280px] w-[280px] rounded-full bg-[#DDF5F2] sm:h-[340px] sm:w-[340px]"
              />

              {/* Outer Circle */}

              <div
                aria-hidden="true"
                className="absolute h-[310px] w-[310px] rounded-full border border-[#B8E7E2] sm:h-[380px] sm:w-[380px]"
              />

              {/* Pet Image Placeholder */}

              <div
                className={`
                  relative z-10
                  flex h-[300px] w-[230px]
                  items-center justify-center
                  overflow-hidden
                  rounded-[45%_45%_12%_12%]
                  border-4 border-white
                  bg-[#F7F1EF]
                  shadow-lg
                `}
              >

                <div className="flex flex-col items-center justify-center text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FCE4E7]">
                    <PawPrint
                      className="h-10 w-10 text-[#FF6B45]"
                      strokeWidth={1.3}
                    />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                    Pet Image
                  </p>

                  <p className="mt-1 text-xs text-[#94A3B8]">
                    Coming soon
                  </p>

                </div>

              </div>

              {/* Decorative Paws */}

              <PawPrint
                aria-hidden="true"
                className="absolute bottom-5 left-[10%] h-8 w-8 rotate-[-15deg] text-[#F58BAA]"
                strokeWidth={1.3}
              />

              <PawPrint
                aria-hidden="true"
                className="absolute right-[8%] top-8 h-6 w-6 rotate-12 text-[#20BDB3]"
                strokeWidth={1.3}
              />

              <span
                aria-hidden="true"
                className="absolute right-[18%] bottom-[12%] h-3 w-3 rounded-full bg-[#F6C744]"
              />

            </div>

          </div>

        </Container>

      </section>


      {/* =========================================
          SEARCH + FILTERS
      ========================================== */}

      <section className="border-b border-[#F1DED8] bg-white py-8">

        <Container>

          <div className="flex flex-col gap-5">

            {/* Search */}

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div className="relative w-full lg:max-w-md">

                <Search
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#94A3B8]"
                  strokeWidth={1.7}
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search pets..."
                  className={`
                    h-12 w-full rounded-full
                    border border-[#EAD9D3]
                    bg-[#FFF8F5]
                    pl-12 pr-5
                    text-sm text-[#1C3155]
                    outline-none
                    transition-all
                    placeholder:text-[#94A3B8]
                    focus:border-[#20BDB3]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#DDF5F2]
                  `}
                />

              </div>

              <Button
                variant="outline"
                className={`
                  border-[#EAD9D3]
                  bg-white
                  text-[#1C3155]
                  hover:border-[#20BDB3]
                  hover:bg-[#DDF5F2]
                `}
              >

                <SlidersHorizontal
                  className="mr-2 h-4 w-4 text-[#20BDB3]"
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
                        ? "border-[#FF6B45] bg-[#FF6B45] text-white shadow-sm"
                        : "border-[#EAD9D3] bg-white text-[#64748B] hover:border-[#20BDB3] hover:bg-[#DDF5F2] hover:text-[#1C3155]"
                    }`}
                  >

                    <Icon
                      className={`h-4 w-4 ${
                        isActive
                          ? "text-white"
                          : "text-[#20BDB3]"
                      }`}
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

      <section className="bg-[#FFF8F5] py-16 sm:py-20 lg:py-24">

        <Container>

          {/* Grid Header */}

          <div className="flex items-end justify-between gap-4">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#20BDB3]">
                Available Companions
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1C3155] sm:text-3xl">
                Find Your New Best Friend
              </h2>

            </div>

            <p className="hidden text-sm text-[#64748B] sm:block">
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

                    <Card
                      className={`
                        relative overflow-hidden
                        rounded-[28px]
                        border-[#F1DED8]
                        bg-white
                        shadow-sm
                        transition-all duration-300
                        group-hover:-translate-y-1
                        group-hover:border-[#FFB39D]
                        group-hover:shadow-lg
                      `}
                    >

                      <div className="relative h-[330px] overflow-hidden bg-[#F7F1EF]">

                        <ImageGallery
                          variant="card"
                          alt={pet.name}
                        />

                        {/* Rating */}

                        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[#F1DED8] bg-white px-3 py-1.5 shadow-sm">

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
                              ? "border-[#FF6B45] bg-[#FF6B45] text-white"
                              : "border-[#F1DED8] bg-white text-[#64748B] hover:border-[#FF6B45] hover:bg-[#FF6B45] hover:text-white"
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

                        <div className="absolute bottom-4 left-4 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#1C3155] shadow-sm">
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

                            <h3 className="text-xl font-bold tracking-tight text-[#1C3155] transition-colors group-hover:text-[#FF6B45]">
                              {pet.name}
                            </h3>

                          </Link>

                          <p className="mt-1 text-sm text-[#718096]">
                            {pet.breed}
                          </p>

                        </div>

                        <p className="whitespace-nowrap text-base font-bold text-[#FF6B45]">
                          {pet.price}
                        </p>

                      </div>


                      {/* Age + Location */}

                      <div className="mt-3 flex items-center gap-2 text-sm text-[#718096]">

                        <span>
                          {pet.age}
                        </span>

                        <span className="text-[#CBD5E1]">
                          •
                        </span>

                        <span>
                          {pet.location}
                        </span>

                      </div>


                      {/* View Pet */}

                      <Link
                        href={`/pets/${pet.id}`}
                        className={`
                          mt-4 inline-flex items-center gap-2
                          text-xs font-bold uppercase
                          tracking-[0.15em]
                          text-[#20BDB3]
                          transition-colors
                          hover:text-[#FF6B45]
                        `}
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

            <div className="mt-10 flex min-h-[320px] items-center justify-center rounded-[28px] border border-dashed border-[#EAD9D3] bg-white">

              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DDF5F2]">

                  <PawPrint
                    className="h-7 w-7 text-[#20BDB3]"
                    strokeWidth={1.4}
                  />

                </div>

                <h3 className="mt-4 text-lg font-bold text-[#1C3155]">
                  No pets found
                </h3>

                <p className="mt-2 text-sm text-[#718096]">
                  Try another search or choose a different
                  category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("All");
                  }}
                  className={`
                    mt-5 text-sm font-semibold
                    text-[#FF6B45]
                    underline underline-offset-4
                    hover:text-[#1C3155]
                  `}
                >
                  Clear filters
                </button>

              </div>

            </div>

          )}


          {/* Bottom Decoration */}

          <div className="mt-16 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#EAD9D3] sm:w-20" />

            <PawPrint
              className="h-5 w-5 text-[#20BDB3]"
              strokeWidth={1.5}
            />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#94A3B8]">
              More Pets. More Love.
            </span>

            <div className="h-px w-12 bg-[#EAD9D3] sm:w-20" />

          </div>

        </Container>

      </section>

    </main>
  );
}