import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFF9FB]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Decorative Circles */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-[#FFE7EF]
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          -bottom-32
          -left-24
          h-72
          w-72
          rounded-full
          bg-[#E8FAF7]
        `}
      />

      <Container>
        <div
          className={`
            relative
            z-10
            grid
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
          `}
        >
          {/* Left Content */}
          <div className="max-w-xl">
            <p
              className={`
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#26AFA1]
              `}
            >
              About Us
            </p>

            <h1
              className={`
                mt-5
                text-5xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-[#263238]
                sm:text-6xl
                lg:text-7xl
              `}
            >
              Where Every
              <br />
              <span className="text-[#FF7043]">Pet</span> Feels
              <br />
              at Home
            </h1>

            <p
              className={`
                mt-7
                max-w-lg
                text-base
                leading-7
                text-[#667278]
                sm:text-lg
              `}
            >
              We are here to make life with your pet happier, healthier,
              and easier. From everyday essentials to thoughtful services,
              everything we offer is built around the special bond between
              people and their companions.
            </p>

            <div className="mt-8">
              <a
                href="#our-story"
                className={`
                  inline-flex
                  items-center
                  rounded-lg
                  border
                  border-[#FF7043]
                  bg-[#FF7043]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:border-[#E85D35]
                  hover:bg-[#E85D35]
                  hover:shadow-md
                `}
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Right Visual Area */}
          <div
            className={`
              relative
              grid
              gap-6
              sm:grid-cols-[1.15fr_0.85fr]
              sm:items-end
            `}
          >
            {/* Large Image Placeholder */}
            <div
              className={`
                relative
                flex
                h-[420px]
                items-center
                justify-center
                overflow-hidden
                rounded-[32px]
                bg-[#E8FAF7]
                sm:h-[500px]
              `}
            >
              {/* Inner Decorative Shape */}
              <div
                className={`
                  absolute
                  -bottom-16
                  -left-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#BFEFE8]
                `}
              />

              {/* Yellow Accent */}
              <div
                className={`
                  absolute
                  right-8
                  top-8
                  h-4
                  w-4
                  rounded-full
                  bg-[#FFD54F]
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
                  Pet Image
                </p>

                <p className="mt-2 text-sm text-[#738084]">
                  Coming soon
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative flex flex-col gap-6">
              {/* Small Image Placeholder */}
              <div
                className={`
                  relative
                  flex
                  h-[230px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[30px]
                  bg-[#FFF0F5]
                `}
              >
                {/* Small Decorative Circle */}
                <div
                  className={`
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-[#FFDDE8]
                  `}
                />

                {/* Yellow Accent */}
                <div
                  className={`
                    absolute
                    bottom-6
                    left-6
                    h-3
                    w-3
                    rounded-full
                    bg-[#FFD54F]
                  `}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={`
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-sm
                    `}
                  >
                    <span className="text-2xl">🐾</span>
                  </div>

                  <p
                    className={`
                      mt-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#E65D89]
                    `}
                  >
                    Companion
                  </p>

                  <p className="mt-2 text-sm text-[#A87585]">
                    Image coming soon
                  </p>
                </div>
              </div>

              {/* Supporting Text */}
              {/* 
              <div className="max-w-sm">
                <h2
                  className={`
                    text-2xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-[#263238]
                    sm:text-3xl
                  `}
                >
                  Your Pet's
                  <br />
                  Happy Place
                </h2>

                <p
                  className={`
                    mt-4
                    text-sm
                    leading-6
                    text-[#667278]
                  `}
                >
                  Because every wag, purr, chirp, and little moment of
                  companionship deserves to be celebrated.
                </p>
              </div>
              */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}