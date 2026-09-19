import Link from "next/link";
import { ArrowLeft, PawPrint } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProductGrid from "@/components/products/ProductGrid";

import { products } from "@/data/products";

interface ProductCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const categoryMap = {
  food: "Food",
  accessories: "Accessories",
  toys: "Toys",
} as const;

const categoryDescriptions = {
  food: "Nutritious food and tasty meals carefully selected for your beloved companions.",
  accessories:
    "Comfortable and practical essentials designed to make everyday pet care easier.",
  toys: "Fun and engaging toys to keep your pets active, happy, and entertained.",
} as const;

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { category } = await params;

  const categoryKey =
    category.toLowerCase() as keyof typeof categoryMap;

  const productCategory = categoryMap[categoryKey];

  /* Invalid category */
  if (!productCategory) {
    return (
      <main className="bg-white">
        <section className="min-h-[70vh] py-20">
          <Container>
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <PawPrint
                  className="h-8 w-8 text-gray-400"
                  strokeWidth={1.4}
                />
              </div>

              <h1 className="mt-6 text-3xl font-bold text-gray-900">
                Category Not Found
              </h1>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                We couldn't find the product category you're
                looking for.
              </p>

              <Link href="/products" className="mt-7">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  const categoryProducts = products.filter(
    (product) => product.category === productCategory
  );

  const description = categoryDescriptions[categoryKey];

  return (
    <main className="bg-white">

      {/* =========================================
          CATEGORY HERO
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

          {/* Back Link */}

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <ArrowLeft
              className="h-4 w-4"
              strokeWidth={1.7}
            />

            All Products
          </Link>

          <div className="mt-10 max-w-3xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
              <PawPrint
                className="h-7 w-7 text-gray-500"
                strokeWidth={1.4}
              />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Product Category
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {productCategory}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              {description}
            </p>

          </div>

        </Container>
      </section>

      {/* =========================================
          PRODUCTS
      ========================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <Container>

          <div className="flex items-end justify-between gap-4">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                {productCategory} Collection
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Explore {productCategory}
              </h2>
            </div>

            <p className="hidden text-sm text-gray-500 sm:block">
              {categoryProducts.length}{" "}
              {categoryProducts.length === 1
                ? "product"
                : "products"}
            </p>

          </div>

        </Container>

        <ProductGrid products={categoryProducts} />
        

      </section>

    </main>
  );
}