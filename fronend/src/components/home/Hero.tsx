import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImageGallery from "@/components/ui/ImageGallery";

const heroImages: string[] = [];

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
              <span className="block text-[#FF7043]">
                Perfect Pet
              </span>
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

          {/* Right Image Gallery */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <ImageGallery
              variant="hero"
              images={heroImages}
              alt="Pet companion"
            />
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