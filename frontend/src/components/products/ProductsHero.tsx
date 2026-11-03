import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImageGallery from "@/components/ui/ImageGallery";

const productHeroImages: string[] = [];

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F2]">
      {/* =========================================
          SMALL BACKGROUND DECORATION
      ========================================== */}

      {/* Soft peach corner circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-[#F6DDCD]
          lg:h-64
          lg:w-64
        "
      />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-[520px]
            items-center
            gap-12
            py-16
            sm:py-20
            lg:grid-cols-2
            lg:gap-16
            lg:py-24
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================== */}

          <div className="relative z-20 max-w-2xl">
            {/* Eyebrow */}
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#B96F4A]
              "
            >
              Everything They Need
            </p>

            {/* Heading */}
            <h1
              className="
                mt-5
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-[#263331]
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Shop for Your

              <span className="block text-[#3F8177]">
                Perfect Companion
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-[#68736F]
                sm:text-lg
              "
            >
              Discover quality food, playful toys, comfortable
              accessories, and everyday essentials made for your
              beloved pets.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#product-grid">
                <Button
                  className="
                    border-[#FF7043]
                    bg-[#FF7043]
                    text-white
                    hover:border-[#E85F36]
                    hover:bg-[#E85F36]
                  "
                >
                  Shop Products
                </Button>
              </Link>

              <Link href="#product-categories">
                <Button
                  variant="outline"
                  className="
                    border-[#D97856]
                    bg-white/70
                    text-[#D97856]
                    hover:border-[#C76545]
                    hover:bg-[#FFF1E9]
                  "
                >
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>

          {/* =========================================
              RIGHT PRODUCT VISUAL
          ========================================== */}

          <div
            className="
              relative
              flex
              min-h-[380px]
              items-center
              justify-center
              lg:min-h-[500px]
              lg:justify-end
            "
          >
            {/* Product Image */}
            <div className="relative z-10">
              <ImageGallery
                images={productHeroImages}
                alt="Pet products"
                variant="hero"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}