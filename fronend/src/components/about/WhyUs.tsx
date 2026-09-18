import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import {
  HeartHandshake,
  PawPrint,
  ShoppingBag,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: PawPrint,
    title: "Pet First",
    description:
      "Everything we do starts with the comfort, happiness, and needs of pets.",
  },
  {
    icon: ShoppingBag,
    title: "Quality Essentials",
    description:
      "Find everyday products carefully selected for your companion.",
  },
  {
    icon: HeartHandshake,
    title: "Thoughtful Care",
    description:
      "Our services are designed to give pets the attention and care they deserve.",
  },
  {
    icon: Users,
    title: "For Pet Families",
    description:
      "We make it easier for pet parents to discover everything they need in one place.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Left Content */}
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Made for the Bond You Share
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              From the products you choose to the care you provide, we are
              here to support every part of life with your companion.
            </p>
          </div>

          {/* Reasons */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <Card
                  key={reason.title}
                  className="p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-gray-700"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}