import Container from "@/components/ui/Container";

export default function AboutIntro() {
  return (
    <section
      id="our-story"
      className={`
        bg-[#FFFDFB]
        py-20
        sm:py-24
      `}
    >
      <Container>
        <div
          className={`
            grid
            gap-12
            lg:grid-cols-2
            lg:items-center
          `}
        >
          {/* Left Content */}
          <div>
            <p
              className={`
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#26AFA1]
              `}
            >
              Our Story
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
              More Than a Pet Shop
            </h2>

            <p
              className={`
                mt-5
                text-base
                leading-7
                text-[#667278]
              `}
            >
              We created this space with one simple belief: every pet
              deserves love, comfort, and thoughtful care. Our goal is to
              make it easier for people to find the right pets, products,
              and services for their companions.
            </p>

            <p
              className={`
                mt-4
                text-base
                leading-7
                text-[#667278]
              `}
            >
              From everyday essentials to professional services, everything
              we offer is chosen with the special bond between people and
              their pets in mind.
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

          {/* Right Visual */}
          <div
            className={`
              flex
              justify-center
              lg:justify-end
            `}
          >
            <div
              className={`
                relative
                flex
                h-[320px]
                w-full
                max-w-md
                items-center
                justify-center
                overflow-hidden
                rounded-[32px]
                border
                border-[#F3DCE4]
                bg-[#E8FAF7]
                shadow-sm
              `}
            >
              {/* Decorative Circle */}
              <div
                className={`
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#FFDDE8]
                `}
              />

              {/* Decorative Circle */}
              <div
                className={`
                  absolute
                  -bottom-10
                  -left-10
                  h-28
                  w-28
                  rounded-full
                  bg-[#FFF8D9]
                `}
              />

              {/* Decorative Dot */}
              <div
                className={`
                  absolute
                  right-10
                  bottom-10
                  h-3
                  w-3
                  rounded-full
                  bg-[#FF7043]
                `}
              />

              <div className="relative z-10 text-center">
                <div
                  className={`
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-sm
                  `}
                >
                  <span className="text-3xl">🐾</span>
                </div>

                <p
                  className={`
                    mt-5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#26AFA1]
                  `}
                >
                  Our Story
                </p>

                <p
                  className={`
                    mt-2
                    text-sm
                    text-[#667278]
                  `}
                >
                  Image coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}