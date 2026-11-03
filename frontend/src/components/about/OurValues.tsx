import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Love & Care",
    description:
      "Every pet deserves kindness, patience, and genuine care in every interaction.",
    iconColor: "text-[#FF7043]",
    iconBackground: "bg-[#FFF0EA]",
    iconBorder: "border-[#FFD5C8]",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    description:
      "We focus on creating a safe and dependable experience for pets and their families.",
    iconColor: "text-[#26AFA1]",
    iconBackground: "bg-[#E8FAF7]",
    iconBorder: "border-[#BFEFE8]",
  },
  {
    icon: Sparkles,
    title: "Happy Companions",
    description:
      "We want every product and service to help pets live happier, healthier lives.",
    iconColor: "text-[#E65D89]",
    iconBackground: "bg-[#FFF0F5]",
    iconBorder: "border-[#FFD5E1]",
  },
];

export default function OurValues() {
  return (
    <section
      className={`
        bg-[#FFFDFB]
        py-20
        sm:py-24
      `}
    >
      <Container>
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p
            className={`
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#26AFA1]
            `}
          >
            What We Believe
          </p>

          <h2
            className={`
              mt-4
              text-3xl
              font-bold
              tracking-tight
              text-[#263238]
              sm:text-4xl
            `}
          >
            Our Values
          </h2>

          <p
            className={`
              mt-4
              text-base
              leading-7
              text-[#667278]
            `}
          >
            The simple principles that guide how we care for pets and
            support the people who love them.
          </p>

          {/* Decorative Accent */}
          <div
            className={`
              mt-6
              flex
              items-center
              gap-1.5
            `}
          >
            <span
              className={`
                h-1.5
                w-8
                rounded-full
                bg-[#FF7043]
              `}
            />

            <span
              className={`
                h-1.5
                w-2
                rounded-full
                bg-[#FFD54F]
              `}
            />

            <span
              className={`
                h-1.5
                w-2
                rounded-full
                bg-[#FF80AB]
              `}
            />
          </div>
        </div>

        {/* Values */}
        <div
          className={`
            mt-12
            grid
            gap-5
            md:grid-cols-3
          `}
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card
                key={value.title}
                className={`
                  border-[#F3DCE4]
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#F0B9C9]
                  hover:shadow-md
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    ${value.iconBorder}
                    ${value.iconBackground}
                  `}
                >
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className={value.iconColor}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`
                    mt-6
                    text-xl
                    font-semibold
                    tracking-tight
                    text-[#263238]
                  `}
                >
                  {value.title}
                </h3>

                <p
                  className={`
                    mt-3
                    text-sm
                    leading-6
                    text-[#667278]
                  `}
                >
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