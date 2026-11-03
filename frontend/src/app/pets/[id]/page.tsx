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

import { pets } from "@/data/pets";

interface PetDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PetDetailPage({
  params,
}: PetDetailPageProps) {
  const { id } = await params;

  // Find the selected pet from the shared pets data
  const pet = pets.find((item) => item.id === Number(id));

  // Pet not found
  if (!pet) {
    return (
      <main className="bg-[#FFF9F5]">
        <section className="py-24">
          <Container>
            <div className="mx-auto max-w-md text-center">
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F7F5]">
                <PawPrint
                  className="h-8 w-8 text-[#20B8AD]"
                  strokeWidth={1.4}
                />
              </div>

              {/* Heading */}
              <h1 className="mt-5 text-2xl font-bold text-[#1D3557]">
                Pet not found
              </h1>

              {/* Description */}
              <p className="mt-2 text-sm text-[#718096]">
                The pet you&apos;re looking for is not available.
              </p>

              {/* Back */}
              <Link
                href="/pets"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1D3557] transition-colors hover:text-[#FF7043]"
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
    <main className="bg-[#FFF9F5]">
      {/* ========================================
          BREADCRUMB
      ======================================== */}
      <section className="border-b border-[#F3DDD5] bg-[#FFF4EE]">
        <Container>
          <div className="flex h-14 items-center">
            <Link
              href="/pets"
              className="flex items-center gap-2 text-sm font-medium text-[#718096] transition-colors hover:text-[#FF7043]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Pets
            </Link>
          </div>
        </Container>
      </section>

      {/* ========================================
          PET DETAILS
      ======================================== */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Decorative Background Circles */}
        <div
          aria-hidden="true"
          className="absolute -left-28 top-20 h-64 w-64 rounded-full bg-[#FCE4EC]/60"
        />

        <div
          aria-hidden="true"
          className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-[#E3F6F3]/70"
        />

        <Container className="relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ========================================
                LEFT - IMAGE GALLERY
            ======================================== */}
            <div className="relative">
              {/* Decorative Circle */}
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#F6C445]/25"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 h-16 w-16 rounded-full bg-[#20B8AD]/20"
              />

              <div className="relative z-10 overflow-hidden rounded-[32px] border border-[#F1DED7] bg-[#FFF4EE] p-3 shadow-sm">
                <div className="overflow-hidden rounded-[26px] bg-[#FCEFE8]">
                  <ImageGallery
                    images={[]}
                    alt={pet.name}
                  />
                </div>
              </div>
            </div>

            {/* ========================================
                RIGHT - PET INFORMATION
            ======================================== */}
            <div>
              {/* Category + Favorite */}
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#E3F6F3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#168E86]">
                  {pet.category}
                </span>

                <button
                  type="button"
                  aria-label={`Favorite ${pet.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F1D8D0] bg-white text-[#718096] shadow-sm transition-all duration-200 hover:border-[#FF7043] hover:bg-[#FF7043] hover:text-white"
                >
                  <Heart
                    className="h-5 w-5"
                    strokeWidth={1.6}
                  />
                </button>
              </div>

              {/* Pet Name */}
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#1D3557] sm:text-5xl">
                {pet.name}
              </h1>

              {/* Breed */}
              <p className="mt-2 text-lg text-[#718096]">
                {pet.breed}
              </p>

              {/* ========================================
                  RATING
              ======================================== */}
              <div className="mt-5 flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-[#FFF4D6] px-3 py-1.5">
                  <Star
                    className="h-4 w-4 fill-[#F6C445] text-[#F6C445]"
                    strokeWidth={1.5}
                  />

                  <span className="text-sm font-semibold text-[#8A6A00]">
                    {pet.rating}
                  </span>
                </div>

                <span className="text-sm text-[#9AA5B1]">
                  Loved by pet families
                </span>
              </div>

              {/* ========================================
                  PRICE
              ======================================== */}
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9AA5B1]">
                  Adoption Price
                </p>

                <p className="mt-1 text-3xl font-bold text-[#FF7043]">
                  {pet.price}
                </p>
              </div>

              {/* ========================================
                  QUICK DETAILS
              ======================================== */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <DetailItem
                  label="Age"
                  value={pet.age}
                  accent="teal"
                />

                <DetailItem
                  label="Gender"
                  value={pet.gender}
                  accent="coral"
                />

                <DetailItem
                  label="Location"
                  value={pet.location}
                  accent="yellow"
                />
              </div>

              {/* ========================================
                  DESCRIPTION
              ======================================== */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-[#1D3557]">
                  About {pet.name}
                </h2>

                <p className="mt-3 text-base leading-7 text-[#667085]">
                  {pet.description}
                </p>
              </div>

              {/* ========================================
                  ACTIONS
              ======================================== */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* Contact About Pet */}
                <Link
                  href="/contact#contact-form"
                  className="flex-1"
                >
                  <Button
                    className="w-full border-[#FF7043] bg-[#FF7043] text-white hover:bg-[#F45F32]"
                  >
                    Contact About {pet.name}
                  </Button>
                </Link>

                {/* Add to Favorites */}
                <Button
                  variant="outline"
                  className="flex-1 border-[#20B8AD] bg-white text-[#168E86] hover:bg-[#E3F6F3]"
                >
                  <Heart
                    className="mr-2 h-4 w-4"
                    strokeWidth={1.7}
                  />
                  Add to Favorites
                </Button>
              </div>

              {/* ========================================
                  TRUST CARD
              ======================================== */}
              <Card className="mt-8 rounded-[24px] border border-[#D9EEEB] bg-[#EAF8F6] p-5 shadow-none">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#20B8AD] text-white">
                    <ShieldCheck
                      className="h-5 w-5"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-[#1D3557]">
                      Pet Care & Support
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#667085]">
                      We&apos;re here to help you make a smooth and
                      comfortable transition when bringing your new
                      companion home.
                    </p>
                  </div>
                </div>
              </Card>

              {/* ========================================
                  LOCATION
              ======================================== */}
              <div className="mt-6 flex items-center gap-2 text-sm text-[#718096]">
                <MapPin
                  className="h-4 w-4 text-[#FF7043]"
                  strokeWidth={1.7}
                />

                <span>
                  Currently located in {pet.location}
                </span>
              </div>
            </div>
          </div>

          {/* ========================================
              BOTTOM DECORATION
          ======================================== */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#F1D8D0] sm:w-20" />

            <PawPrint
              className="h-5 w-5 text-[#20B8AD]"
              strokeWidth={1.5}
            />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#9AA5B1]">
              Love • Care • Companionship
            </span>

            <div className="h-px w-12 bg-[#F1D8D0] sm:w-20" />
          </div>
        </Container>
      </section>
    </main>
  );
}

/* ========================================
   DETAIL ITEM COMPONENT
======================================== */

function DetailItem({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "teal" | "coral" | "yellow";
}) {
  const styles = {
    teal: {
      background: "bg-[#EAF8F6]",
      label: "text-[#20A69E]",
      dot: "bg-[#20B8AD]",
    },
    coral: {
      background: "bg-[#FFF0EA]",
      label: "text-[#F06A45]",
      dot: "bg-[#FF7043]",
    },
    yellow: {
      background: "bg-[#FFF8DF]",
      label: "text-[#B38A00]",
      dot: "bg-[#F6C445]",
    },
  };

  const currentStyle = styles[accent];

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] ${currentStyle.background} p-4`}
    >
      {/* Accent Dot */}
      <div
        aria-hidden="true"
        className={`absolute right-3 top-3 h-2 w-2 rounded-full ${currentStyle.dot}`}
      />

      <p
        className={`text-xs font-semibold uppercase tracking-[0.12em] ${currentStyle.label}`}
      >
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-[#1D3557]">
        {value}
      </p>
    </div>
  );
}