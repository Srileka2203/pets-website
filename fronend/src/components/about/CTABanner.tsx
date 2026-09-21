import Link from "next/link";
import { ArrowRight, PawPrint } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section
      className={`
        relative
        overflow-hidden
        bg-gray-900
        py-20
        sm:py-24
      `}
    >
      {/* Decorative Shape - Top Right */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-gray-800
        `}
      />

      {/* Decorative Shape - Bottom Left */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -bottom-24
          -left-16
          h-52
          w-52
          rounded-full
          bg-gray-800
        `}
      />

      <Container
        className={`
          relative
          z-10
        `}
      >
        <div
          className={`
            mx-auto
            max-w-3xl
            text-center
          `}
        >
          {/* Icon */}
          <div
            className={`
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-gray-800
              text-gray-200
            `}
          >
            <PawPrint
              className="h-7 w-7"
              strokeWidth={1.5}
            />
          </div>

          {/* Label */}
          <p
            className={`
              mt-6
              text-sm
              font-semibold
              uppercase
              tracking-[0.22em]
              text-gray-400
            `}
          >
            We're Here for You
          </p>

          {/* Heading */}
          <h2
            className={`
              mt-4
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            `}
          >
            Everything Your
            <span className="block text-gray-400">
              Pet Deserves
            </span>
          </h2>

          {/* Description */}
          <p
            className={`
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-gray-300
              sm:text-lg
            `}
          >
            From everyday essentials to loving care, we're here
            to help you give your companion a happy and
            comfortable life.
          </p>

          {/* Actions */}
          <div
            className={`
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            `}
          >
            <Link href="/products">
              <Button>
                Explore Products
                <ArrowRight
                  className="ml-2 h-4 w-4"
                  strokeWidth={1.7}
                />
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}