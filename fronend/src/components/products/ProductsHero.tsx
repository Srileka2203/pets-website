import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImageGallery from "@/components/ui/ImageGallery";

const productHeroImages: string[] = [];

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Decorative Shapes */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-gray-200/70
        `}
      />

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -bottom-28
          -left-20
          h-60
          w-60
          rounded-full
          bg-gray-200/70
        `}
      />

      <Container className="relative z-10">
        <div
          className={`
            grid
            min-h-[520px]
            items-center
            gap-12
            py-16
            sm:py-20
            lg:grid-cols-2
            lg:gap-16
            lg:py-24
          `}
        >
          {/* =========================================
              LEFT CONTENT
          ========================================== */}
          <div className="max-w-2xl">
            <p
              className={`
                text-sm
                font-semibold
                uppercase
                tracking-[0.22em]
                text-gray-500
              `}
            >
              Everything They Need
            </p>

            <h1
              className={`
                mt-5
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-gray-900
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              `}
            >
              Shop for Your
              <span className="block text-gray-500">
                Perfect Companion
              </span>
            </h1>

            <p
              className={`
                mt-6
                max-w-xl
                text-base
                leading-7
                text-gray-600
                sm:text-lg
              `}
            >
              Discover quality food, playful toys, comfortable
              accessories, and everyday essentials made for your
              beloved pets.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#product-grid">
                <Button>
                  Shop Products
                </Button>
              </Link>

              <Link href="#product-categories">
                <Button variant="outline">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>

          {/* =========================================
              RIGHT IMAGE
          ========================================== */}
          <div className="flex justify-center lg:justify-end">
            <ImageGallery
              images={productHeroImages}
              alt="Pet products"
              variant="hero"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}