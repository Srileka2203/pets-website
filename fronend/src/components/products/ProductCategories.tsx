import Link from "next/link";
import {
  ArrowRight,
  Bone,
  CircleDot,
  ShoppingBag,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";

const categories = [
  {
    id: "food",
    name: "Pet Food",
    description: "Nutritious meals and tasty treats for your companion.",
    icon: Bone,
    href: "/products/category/food",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Comfortable and practical essentials for everyday care.",
    icon: ShoppingBag,
    href: "/products/category/accessories",
  },
  {
    id: "toys",
    name: "Toys",
    description: "Fun and engaging toys for active, happy pets.",
    icon: CircleDot,
    href: "/products/category/toys",
  },
];

export default function ProductCategories() {
  return (
    <section
      id="product-categories"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
            Shop by Category
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Everything Your
            <span className="block text-gray-500">
              Pet Needs
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore our collection of essentials carefully selected
            for happy, healthy, and playful pets.
          </p>
        </div>

        {/* Category Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group block h-full"
              >
                <Card
                  className={`
                    flex
                    h-full
                    min-h-[420px]
                    flex-col
                    overflow-hidden
                    rounded-[28px]
                    border-gray-200
                    bg-gray-50
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-gray-300
                    hover:shadow-lg
                  `}
                >
                  {/* Image Area */}
                  <div className="relative h-[240px] shrink-0 overflow-hidden">
                    <ImageGallery
                      images={[]}
                      alt={category.name}
                      variant="card"
                    />

                    {/* Category Icon */}
                    <div
                      className={`
                        absolute
                        left-5
                        top-5
                        z-10
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-200
                        bg-white
                        text-gray-700
                        shadow-sm
                      `}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div
                    className={`
                      flex
                      flex-1
                      flex-col
                      bg-white
                      p-6
                    `}
                  >
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-gray-900">
                        {category.name}
                      </h3>

                      <p className="mt-2 max-w-[250px] text-sm leading-6 text-gray-500">
                        {category.description}
                      </p>
                    </div>

                    {/* Bottom Row */}
                    <div className="mt-auto flex items-center justify-between pt-8">
                      <span
                        className={`
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-gray-400
                        `}
                      >
                        Explore
                      </span>

                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-gray-200
                          bg-white
                          text-gray-500
                          transition-all
                          duration-200
                          group-hover:border-gray-900
                          group-hover:bg-gray-900
                          group-hover:text-white
                        `}
                      >
                        <ArrowRight
                          className={`
                            h-4
                            w-4
                            transition-transform
                            duration-200
                            group-hover:translate-x-0.5
                          `}
                          strokeWidth={1.7}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}