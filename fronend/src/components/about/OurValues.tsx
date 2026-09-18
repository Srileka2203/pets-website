import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Love & Care",
    description:
      "Every pet deserves kindness, patience, and genuine care in every interaction.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    description:
      "We focus on creating a safe and dependable experience for pets and their families.",
  },
  {
    icon: Sparkles,
    title: "Happy Companions",
    description:
      "We want every product and service to help pets live happier, healthier lives.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            What We Believe
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Values
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-500">
            The simple principles that guide how we care for pets and
            support the people who love them.
          </p>
        </div>

        {/* Values */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card
                key={value.title}
                className="p-7 transition-shadow hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
                  <Icon size={21} strokeWidth={1.8} className="text-gray-700" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}