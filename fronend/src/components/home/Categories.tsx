import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const categories = [
  {
    name: "Dogs",
    description: "Find friendly companions for every family.",
    href: "/categories/dogs",
    image: "/images/pets/dogs/dog-1.jpg",
  },
  {
    name: "Cats",
    description: "Meet playful and loving feline companions.",
    href: "/categories/cats",
    image: "/images/pets/cats/cat-1.jpg",
  },
  {
    name: "Birds",
    description: "Discover beautiful birds ready for a new home.",
    href: "/categories/birds",
    image: "/images/pets/birds/bird-1.jpg",
  },
  {
    name: "Rabbits",
    description: "Find gentle and adorable rabbit companions.",
    href: "/categories/rabbits",
    image: "/images/pets/rabbits/rabbit-1.jpg",
  },
  {
    name: "Fish",
    description: "Explore colorful and peaceful aquatic pets.",
    href: "/categories/fish",
    image: "/images/pets/fish/fish-1.jpg",
  },
  {
    name: "Hamsters",
    description: "Meet small pets with big personalities.",
    href: "/categories/hamsters",
    image: "/images/pets/hamsters/hamster-1.jpg",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Explore Our Pets
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find the right companion
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Explore our pet categories and discover a companion that
            matches your lifestyle and home.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group"
            >
              <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-md">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {category.description}
                  </p>

                  <span className="mt-4 inline-block text-sm font-medium text-gray-900">
                    Explore {category.name}
                    <span className="ml-1 transition-transform duration-200 group-hover:ml-2">
                      →
                    </span>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}