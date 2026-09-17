import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  MapPin,
  PawPrint,
  ShieldCheck,
  Star,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ImageGallery from "@/components/ui/ImageGallery";

const pets = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    category: "Dogs",
    age: "2 years",
    gender: "Male",
    location: "Chennai",
    price: "₹25,000",
    rating: "4.9",
    description:
      "Max is a friendly and playful Golden Retriever who loves spending time with people. He is looking for a caring family and a loving forever home.",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Persian Cat",
    category: "Cats",
    age: "1 year",
    gender: "Female",
    location: "Chennai",
    price: "₹18,000",
    rating: "4.8",
    description:
      "Luna is a gentle and affectionate Persian cat who enjoys quiet spaces, cuddles and playful moments.",
  },
  {
    id: 3,
    name: "Coco",
    breed: "Cockatiel",
    category: "Birds",
    age: "8 months",
    gender: "Female",
    location: "Coimbatore",
    price: "₹8,000",
    rating: "4.7",
    description:
      "Coco is a cheerful Cockatiel with a playful personality and a curious nature.",
  },
  {
    id: 4,
    name: "Bunny",
    breed: "Holland Lop",
    category: "Rabbits",
    age: "10 months",
    gender: "Male",
    location: "Bangalore",
    price: "₹6,500",
    rating: "4.9",
    description:
      "Bunny is a gentle Holland Lop who loves exploring, playing and spending time with caring families.",
  },
  {
    id: 5,
    name: "Nemo",
    breed: "Goldfish",
    category: "Fish",
    age: "6 months",
    gender: "Male",
    location: "Chennai",
    price: "₹1,500",
    rating: "4.8",
    description:
      "Nemo is a beautiful and peaceful Goldfish that can bring a calming touch to your home.",
  },
  {
    id: 6,
    name: "Milo",
    breed: "Syrian Hamster",
    category: "Hamsters",
    age: "7 months",
    gender: "Male",
    location: "Coimbatore",
    price: "₹2,500",
    rating: "4.9",
    description:
      "Milo is a small and energetic Syrian Hamster with a curious and lovable personality.",
  },
];

interface PetDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PetDetailPage({
  params,
}: PetDetailPageProps) {
  const { id } = await params;

  const pet = pets.find(
    (item) => item.id === Number(id)
  );

  if (!pet) {
    return (
      <main className="bg-white">
        <section className="py-24">
          <Container>
            <div className="mx-auto max-w-md text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <PawPrint
                  className="h-8 w-8 text-gray-400"
                  strokeWidth={1.4}
                />
              </div>

              <h1 className="mt-5 text-2xl font-bold text-gray-900">
                Pet not found
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                The pet you're looking for is not available.
              </p>

              <Link
                href="/pets"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Pets
              </Link>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50">
        <Container>
          <div className="flex h-14 items-center">
            <Link
              href="/pets"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Pets
            </Link>
          </div>
        </Container>
      </section>

      {/* Pet Details */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            
            {/* Image */}
            <div>
              <ImageGallery
                images={[]}
                alt={pet.name}
              />
            </div>

            {/* Information */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                  {pet.category}
                </span>

                <button
                  type="button"
                  aria-label={`Favorite ${pet.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-gray-900 hover:text-white"
                >
                  <Heart
                    className="h-5 w-5"
                    strokeWidth={1.6}
                  />
                </button>
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {pet.name}
              </h1>

              <p className="mt-2 text-lg text-gray-500">
                {pet.breed}
              </p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5">
                  <Star
                    className="h-4 w-4 fill-gray-700 text-gray-700"
                    strokeWidth={1.5}
                  />

                  <span className="text-sm font-semibold text-gray-700">
                    {pet.rating}
                  </span>
                </div>

                <span className="text-sm text-gray-400">
                  Loved by pet families
                </span>
              </div>

              {/* Price */}
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Adoption Price
                </p>

                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {pet.price}
                </p>
              </div>

              {/* Quick Details */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <DetailItem
                  label="Age"
                  value={pet.age}
                />

                <DetailItem
                  label="Gender"
                  value={pet.gender}
                />

                <DetailItem
                  label="Location"
                  value={pet.location}
                />
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">
                  About {pet.name}
                </h2>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  {pet.description}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="flex-1">
                  Contact About {pet.name}
                </Button>

                <Button
                  variant="outline"
                  className="flex-1"
                >
                  Add to Favorites
                </Button>
              </div>

              {/* Trust Card */}
              <Card className="mt-8 rounded-[24px] bg-gray-50 p-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white">
                    <ShieldCheck
                      className="h-5 w-5"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Pet Care & Support
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      We're here to help you make a smooth and
                      comfortable transition when bringing your
                      new companion home.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <MapPin
                  className="h-4 w-4"
                  strokeWidth={1.7}
                />

                <span>
                  Currently located in {pet.location}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

/* Detail Item */

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] bg-gray-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-gray-900">
        {value}
      </p>
    </div>
  );
}