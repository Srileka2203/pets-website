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
    iconColor: "text-[#26AFA1]",
    iconBackground: "bg-[#E8FAF7]",
    iconBorder: "border-[#BFEFE8]",
  },
  {
    icon: ShoppingBag,
    title: "Quality Essentials",
    description:
      "Find everyday products carefully selected for your companion.",
    iconColor: "text-[#FF7043]",
    iconBackground: "bg-[#FFF0EA]",
    iconBorder: "border-[#FFD5C8]",
  },
  {
    icon: HeartHandshake,
    title: "Thoughtful Care",
    description:
      "Our services are designed to give pets the attention and care they deserve.",
    iconColor: "text-[#E65D89]",
    iconBackground: "bg-[#FFF0F5]",
    iconBorder: "border-[#FFD5E1]",
  },
  {
    icon: Users,
    title: "For Pet Families",
    description:
      "We make it easier for pet parents to discover everything they need in one place.",
    iconColor: "text-[#D9A900]",
    iconBackground: "bg-[#FFF8D9]",
    iconBorder: "border-[#F5E6A3]",
  },
];

export default function WhyUs() {
  return (
    <section
      className={`
        bg-[#F8FAF9]
        py-20
        sm:py-24
      `}
    >
      <Container>
        <div
          className={`
            grid
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
          `}
        >
          {/* Left Content */}
          <div className="max-w-md">
            <p
              className={`
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#26AFA1]
              `}
            >
              Why Choose Us
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
              Made for the Bond You Share
            </h2>

            <p
              className={`
                mt-5
                text-base
                leading-7
                text-[#667278]
              `}
            >
              From the products you choose to the care you provide, we are
              here to support every part of life with your companion.
            </p>

            {/* Decorative Accent */}
            <div
              className={`
                mt-7
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
                  bg-[#26AFA1]
                `}
              />

              <span
                className={`
                  h-1.5
                  w-2
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
            </div>
          </div>

          {/* Reasons */}
          <div
            className={`
              grid
              gap-4
              sm:grid-cols-2
            `}
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <Card
                  key={reason.title}
                  className={`
                    border-[#F3DCE4]
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#E8C5D1]
                    hover:shadow-md
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      ${reason.iconBorder}
                      ${reason.iconBackground}
                    `}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className={reason.iconColor}
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className={`
                      mt-5
                      text-lg
                      font-semibold
                      tracking-tight
                      text-[#263238]
                    `}
                  >
                    {reason.title}
                  </h3>

                  <p
                    className={`
                      mt-2
                      text-sm
                      leading-6
                      text-[#667278]
                    `}
                  >
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