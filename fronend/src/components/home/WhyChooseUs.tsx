import { Heart, PawPrint } from "lucide-react";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Why Choose Us
            </p>

            <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-[58px]">
              We are Dedicated
              <br />
              to the Well-Being of
              <br />
              <span className="text-gray-500">Your Beloved Pets</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Pet Shop is more than just a pet store — we're a family of
              passionate animal lovers. With years of experience, our team is
              committed to providing the highest quality care and services to
              your furry, feathered, or scaled companions.
            </p>

            <p className="mt-4 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Your pet's happiness and health are our top priorities, and we
              treat every companion with the same love and care as they were
              our own.
            </p>

            {/* Small trust statement */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white">
                <Heart className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <p className="text-sm font-medium text-gray-700">
                Love, care and trust in everything we do.
              </p>
            </div>
          </div>

          {/* RIGHT CIRCULAR VISUAL */}
          <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[520px]">
            
            {/* Outer decorative circle */}
            <div
              aria-hidden="true"
              className="absolute h-[330px] w-[330px] rounded-full border border-gray-300 sm:h-[410px] sm:w-[410px] lg:h-[440px] lg:w-[440px]"
            />

            {/* Main gray circle */}
            <div
              aria-hidden="true"
              className="absolute h-[290px] w-[290px] rounded-full bg-gray-200 sm:h-[360px] sm:w-[360px] lg:h-[390px] lg:w-[390px]"
            />

            {/* Pet image placeholder */}
            <div className="relative z-10 flex h-[260px] w-[210px] items-center justify-center overflow-hidden rounded-[48%_48%_8%_8%] bg-gray-100 shadow-md sm:h-[330px] sm:w-[265px] lg:h-[355px] lg:w-[285px]">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                  <PawPrint
                    className="h-10 w-10 text-gray-500"
                    strokeWidth={1.3}
                  />
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Pet Image
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Coming soon
                </p>
              </div>
            </div>

            {/* CURVED TEXT */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <svg
                viewBox="0 0 500 500"
                className="h-[390px] w-[390px] sm:h-[480px] sm:w-[480px] lg:h-[520px] lg:w-[520px]"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="whyChooseCircle"
                    d="M 250,250 m -205,0 a 205,205 0 1,1 410,0 a 205,205 0 1,1 -410,0"
                  />
                </defs>

                <text
                  fill="currentColor"
                  className="fill-gray-700 text-[17px] font-bold uppercase tracking-[8px]"
                >
                  <textPath href="#whyChooseCircle" startOffset="4%">
                    WELCOME • BUDDIES • LOVE • CARE •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Decorative dots */}
            <span
              aria-hidden="true"
              className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-gray-400"
            />

            <span
              aria-hidden="true"
              className="absolute right-[12%] bottom-[20%] h-2 w-2 rounded-full bg-gray-300"
            />

            <span
              aria-hidden="true"
              className="absolute right-[18%] top-[17%] h-1.5 w-1.5 rounded-full bg-gray-500"
            />
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="mt-10 flex items-center justify-center gap-4 sm:mt-16">
          <div className="h-px w-12 bg-gray-300 sm:w-20" />

          <PawPrint
            className="h-5 w-5 text-gray-400"
            strokeWidth={1.5}
          />

          <span className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
            Care • Trust • Companionship
          </span>

          <div className="h-px w-12 bg-gray-300 sm:w-20" />
        </div>
      </Container>
    </section>
  );
}