import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F5]">
      <Container>
        <div className="grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* Left Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#26C6B5]">
              Find Your Companion
            </p>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#172B4D] sm:text-6xl lg:text-7xl">
              Find Your
              <span className="block text-[#FF7043]">Perfect Pet</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#68778D] sm:text-lg">
              Discover loving pets looking for their forever homes. Explore
              dogs, cats, birds, rabbits, and more to find a companion that is
              right for you.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pets">
                <Button>Explore Pets</Button>
              </Link>

              <Link href="/categories">
                <Button variant="outline">Browse Categories</Button>
              </Link>
            </div>
          </div>

          {/* Right Pet Images */}
          <div className="relative z-10 flex min-h-[480px] items-center justify-center lg:justify-end">
            {/* Decorative dots */}
            <div
              aria-hidden="true"
              className="absolute right-[42%] top-2 h-5 w-5 rounded-full bg-[#26C6B5]/50"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-4 left-[42%] h-4 w-4 rounded-full bg-[#FF7043]/40"
            />

            {/* Slider dots */}
            <div className="absolute right-[38%] top-16 z-20 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#172B4D]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D5D9E0]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D5D9E0]" />
            </div>

            {/* Dog - NO BACKGROUND CIRCLE */}
            <div className="absolute right-[10%] top-[60px] z-10 h-[390px] w-[300px]">
              <Image
                src="/images/pets/dogs/dogf.png"
                alt="Golden Retriever"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Cat - Circle remains */}
            <div className="absolute bottom-[55px] left-[4%] z-20 flex h-[125px] w-[125px] items-center justify-center rounded-full border-4 border-white bg-[#F1F2F5] shadow-md">
              <Image
                src="/images/pets/cats/cat1.png"
                alt="Cat"
                fill
                className="rounded-full object-contain p-2"
              />
            </div>

            {/* Small Decorative Circle */}
            <div
              aria-hidden="true"
              className="absolute bottom-[80px] right-[2%] z-20 flex h-[115px] w-[115px] items-center justify-center rounded-full border-4 border-white bg-[#F1F2F5] shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7E9EE]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A8AFBC"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <circle cx="8" cy="8" r="1" />
                  <circle cx="14" cy="8" r="1" />
                  <circle cx="8" cy="14" r="1" />
                  <circle cx="14" cy="14" r="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative Brand Shapes */}
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FFD54F]/40"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-[#FF80AB]/20"
      />

      <div
        aria-hidden="true"
        className="absolute right-[42%] top-16 h-5 w-5 rounded-full bg-[#26C6B5]/50"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-20 left-[45%] h-4 w-4 rounded-full bg-[#FF7043]/40"
      />
    </section>
  );
}