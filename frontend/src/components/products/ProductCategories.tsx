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
    description:
      "Nutritious meals and tasty treats for your companion.",
    icon: Bone,
    href: "/products/category/food",

    // Coral
    iconBg: "bg-[#FFF0EA]",
    iconColor: "text-[#FF7043]",
    borderColor: "border-[#FFD5C7]",
    hoverBorder: "group-hover:border-[#FFB9A5]",
    buttonHover: "group-hover:bg-[#FF7043]",
    buttonBorder: "group-hover:border-[#FF7043]",
  },
  {
    id: "accessories",
    name: "Accessories",
    description:
      "Comfortable and practical essentials for everyday care.",
    icon: ShoppingBag,
    href: "/products/category/accessories",

    // Teal
    iconBg: "bg-[#E8FAF7]",
    iconColor: "text-[#26AFA1]",
    borderColor: "border-[#C9ECE7]",
    hoverBorder: "group-hover:border-[#8EDDD3]",
    buttonHover: "group-hover:bg-[#26C6B5]",
    buttonBorder: "group-hover:border-[#26C6B5]",
  },
  {
    id: "toys",
    name: "Toys",
    description:
      "Fun and engaging toys for active, happy pets.",
    icon: CircleDot,
    href: "/products/category/toys",

    // Pink
    iconBg: "bg-[#FFF0F5]",
    iconColor: "text-[#FF80AB]",
    borderColor: "border-[#F6D1DE]",
    hoverBorder: "group-hover:border-[#F0A9C1]",
    buttonHover: "group-hover:bg-[#FF80AB]",
    buttonBorder: "group-hover:border-[#FF80AB]",
  },
];

export default function ProductCategories() {
  return (
    <section
      id="product-categories"
      className="bg-[#FFF9FB] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#26AFA1]">
            Shop by Category
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#263238] sm:text-5xl">
            Everything Your
            <span className="block text-[#FF7043]">
              Pet Needs
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#667278] sm:text-lg">
            Explore our collection of essentials carefully selected
            for happy, healthy, and playful pets.
          </p>

          {/* Decorative dots */}
          <div className="mt-6 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFD54F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF80AB]" />
          </div>
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
                    border
                    ${category.borderColor}
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    ${category.hoverBorder}
                    hover:shadow-lg
                  `}
                >
                  {/* Image Area */}
                  <div className="relative h-[240px] shrink-0 overflow-hidden bg-[#F8FAFA]">
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
                        ${category.borderColor}
                        ${category.iconBg}
                        ${category.iconColor}
                        shadow-sm
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Small yellow accent */}
                    <span className="absolute right-5 top-5 z-10 h-2.5 w-2.5 rounded-full bg-[#FFD54F]" />
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col bg-white p-6">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-[#263238]">
                        {category.name}
                      </h3>

                      <p className="mt-2 max-w-[250px] text-sm leading-6 text-[#737D82]">
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
                          ${category.iconColor}
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
                          border-[#E4E9EA]
                          bg-white
                          text-[#667278]
                          transition-all
                          duration-200
                          ${category.buttonBorder}
                          ${category.buttonHover}
                          group-hover:text-white
                        `}
                      >
                        <ArrowRight
                          className="
                            h-4
                            w-4
                            transition-transform
                            duration-200
                            group-hover:translate-x-0.5
                          "
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