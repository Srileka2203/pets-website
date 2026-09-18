import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImageGallery from "@/components/ui/ImageGallery";

const productHeroImages: string[] = [];

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <Container>
        <div className="grid min-h-[560px] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* Left Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Everything They Need
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Shop for Your
              <span className="block text-gray-500">
                Perfect Companion
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Discover quality food, playful toys, comfortable accessories,
              and everyday essentials made for your beloved pets.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#featured-products">
                <Button>Shop Products</Button>
              </Link>

              <Link href="#product-categories">
                <Button variant="outline">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <ImageGallery
              images={productHeroImages}
              alt="Pet products"
              variant="hero"
            />
          </div>
        </div>
      </Container>

      {/* Decorative Shapes */}
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gray-200/70"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-gray-200/70"
      />
    </section>
  );
}