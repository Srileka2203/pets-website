"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
    ArrowLeft,
    Heart,
    PawPrint,
    Star,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";

import { pets } from "@/data/pets";

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

const categoryStyles: Record<
    string,
    {
        heroBg: string;
        circleOne: string;
        circleTwo: string;
        accent: string;
        accentSoft: string;
        accentBorder: string;
        accentHover: string;
    }
> = {
    dogs: {
        heroBg: "bg-orange-50",
        circleOne: "bg-orange-100/70",
        circleTwo: "bg-orange-100/50",
        accent: "text-orange-500",
        accentSoft: "bg-orange-100",
        accentBorder: "border-orange-200",
        accentHover: "hover:text-orange-600",
    },

    cats: {
        heroBg: "bg-teal-50",
        circleOne: "bg-teal-100/70",
        circleTwo: "bg-teal-100/50",
        accent: "text-teal-500",
        accentSoft: "bg-teal-100",
        accentBorder: "border-teal-200",
        accentHover: "hover:text-teal-600",
    },

    birds: {
        heroBg: "bg-yellow-50",
        circleOne: "bg-yellow-100/70",
        circleTwo: "bg-yellow-100/50",
        accent: "text-yellow-600",
        accentSoft: "bg-yellow-100",
        accentBorder: "border-yellow-200",
        accentHover: "hover:text-yellow-700",
    },

    rabbits: {
        heroBg: "bg-pink-50",
        circleOne: "bg-pink-100/70",
        circleTwo: "bg-pink-100/50",
        accent: "text-pink-500",
        accentSoft: "bg-pink-100",
        accentBorder: "border-pink-200",
        accentHover: "hover:text-pink-600",
    },

    fish: {
        heroBg: "bg-sky-50",
        circleOne: "bg-sky-100/70",
        circleTwo: "bg-sky-100/50",
        accent: "text-sky-500",
        accentSoft: "bg-sky-100",
        accentBorder: "border-sky-200",
        accentHover: "hover:text-sky-600",
    },

    hamsters: {
        heroBg: "bg-amber-50",
        circleOne: "bg-amber-100/70",
        circleTwo: "bg-amber-100/50",
        accent: "text-amber-600",
        accentSoft: "bg-amber-100",
        accentBorder: "border-amber-200",
        accentHover: "hover:text-amber-700",
    },
};

export default function CategoryPage({
    params,
}: CategoryPageProps) {
    const [category, setCategory] = useState<string>("");
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        params.then(({ category }) => {
            setCategory(category.toLowerCase());
        });
    }, [params]);

    const categoryPets = useMemo(() => {
        if (!category) {
            return [];
        }

        return pets.filter(
            (pet) => pet.category.toLowerCase() === category
        );
    }, [category]);

    const toggleFavorite = (id: number) => {
        setFavorites((current) =>
            current.includes(id)
                ? current.filter(
                    (favoriteId) => favoriteId !== id
                )
                : [...current, id]
        );
    };

    const categoryName =
        category.charAt(0).toUpperCase() +
        category.slice(1);

    const colors =
        categoryStyles[category] ?? {
            heroBg: "bg-gray-50",
            circleOne: "bg-gray-200/70",
            circleTwo: "bg-gray-200/50",
            accent: "text-gray-500",
            accentSoft: "bg-gray-100",
            accentBorder: "border-gray-200",
            accentHover: "hover:text-gray-700",
        };

    return (
        <main className="bg-white">
            {/* ========================================
                HERO
            ======================================== */}

            <section
                className={`relative overflow-hidden ${colors.heroBg} py-16 sm:py-20 lg:py-24`}
            >
                {/* Decorative circles */}

                <div
                    aria-hidden="true"
                    className={`absolute -left-24 top-10 h-52 w-52 rounded-full ${colors.circleOne}`}
                />

                <div
                    aria-hidden="true"
                    className={`absolute -right-24 bottom-0 h-64 w-64 rounded-full ${colors.circleTwo}`}
                />

                <Container className="relative z-10">
                    <div className="max-w-2xl">
                        {/* Back */}

                        <Link
                            href="/categories"
                            className={`inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors ${colors.accentHover}`}
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Categories
                        </Link>

                        {/* Paw icon */}

                        <div
                            className={`mt-8 flex h-12 w-12 items-center justify-center rounded-full ${colors.accentSoft}`}
                        >
                            <PawPrint
                                className={`h-6 w-6 ${colors.accent}`}
                                strokeWidth={1.4}
                            />
                        </div>

                        {/* Small heading */}

                        <p
                            className={`mt-5 text-sm font-semibold uppercase tracking-[0.22em] ${colors.accent}`}
                        >
                            Explore Our Pets
                        </p>

                        {/* Main heading */}

                        <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Our
                            <span
                                className={`block ${colors.accent}`}
                            >
                                {categoryName}
                            </span>
                        </h1>

                        {/* Description */}

                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                            Discover our adorable{" "}
                            {categoryName.toLowerCase()} and find a
                            loving companion who is ready to become
                            part of your family.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ========================================
                PET LIST
            ======================================== */}

            <section className="py-16 sm:py-20 lg:py-24">
                <Container>
                    {/* Section heading */}

                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p
                                className={`text-sm font-semibold uppercase tracking-[0.18em] ${colors.accent}`}
                            >
                                Available {categoryName}
                            </p>

                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Find Your New Best Friend
                            </h2>
                        </div>

                        <p className="hidden text-sm text-gray-500 sm:block">
                            {categoryPets.length}{" "}
                            {categoryPets.length === 1
                                ? "pet"
                                : "pets"}{" "}
                            available
                        </p>
                    </div>

                    {/* Pet cards */}

                    {categoryPets.length > 0 ? (
                        <div className="mt-10 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                            {categoryPets.map((pet, index) => {
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
                                        {/* Image card */}

                                        <Card className="relative overflow-hidden rounded-[28px] border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gray-300 group-hover:shadow-lg">
                                            <div className="relative h-[330px] overflow-hidden">
                                                <ImageGallery
                                                    variant="card"
                                                    alt={pet.name}
                                                />

                                                {/* Rating */}

                                                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm">
                                                    <Star
                                                        className={`h-3.5 w-3.5 fill-current ${colors.accent}`}
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
                                                        toggleFavorite(
                                                            pet.id
                                                        )
                                                    }
                                                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all duration-200 ${
                                                        isFavorite
                                                            ? `${colors.accentSoft} ${colors.accent} ${colors.accentBorder}`
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

                                                {/* Category */}

                                                <div
                                                    className={`absolute bottom-4 left-4 rounded-full ${colors.accentSoft} px-3 py-1.5 text-xs font-semibold ${colors.accent}`}
                                                >
                                                    {pet.category}
                                                </div>
                                            </div>
                                        </Card>

                                        {/* Pet information */}

                                        <div className="px-2 pt-5">
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="min-w-0">
                                                    <Link
                                                        href={`/pets/${pet.id}`}
                                                        className="block"
                                                    >
                                                        <h3
                                                            className={`text-xl font-bold tracking-tight text-gray-900 transition-colors ${colors.accentHover}`}
                                                        >
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

                                            {/* View pet */}

                                            <Link
                                                href={`/pets/${pet.id}`}
                                                className={`mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 transition-colors ${colors.accentHover}`}
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
                        /* Empty state */

                        <div className="mt-10 flex min-h-[320px] items-center justify-center rounded-[28px] border border-dashed border-gray-200 bg-gray-50">
                            <div className="text-center">
                                <div
                                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${colors.accentSoft}`}
                                >
                                    <PawPrint
                                        className={`h-7 w-7 ${colors.accent}`}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <h3 className="mt-4 text-lg font-bold text-gray-900">
                                    No{" "}
                                    {categoryName.toLowerCase()}{" "}
                                    found
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    There are currently no pets
                                    available in this category.
                                </p>

                                <Link
                                    href="/categories"
                                    className={`mt-5 inline-block text-sm font-semibold underline underline-offset-4 ${colors.accent} ${colors.accentHover}`}
                                >
                                    Back to Categories
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Bottom decoration */}

                    <div className="mt-16 flex items-center justify-center gap-4">
                        <div
                            className={`h-px w-12 ${colors.accentSoft} sm:w-20`}
                        />

                        <PawPrint
                            className={`h-5 w-5 ${colors.accent}`}
                            strokeWidth={1.5}
                        />

                        <span className="text-xs font-medium uppercase tracking-[0.22em] text-gray-400">
                            More Pets. More Love.
                        </span>

                        <div
                            className={`h-px w-12 ${colors.accentSoft} sm:w-20`}
                        />
                    </div>
                </Container>
            </section>
        </main>
    );
}