import Container from "@/components/ui/Container";
import ServiceGrid from "@/components/services/ServiceGrid";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFF9FB]">
        {/* Decorative Circle */}
        <div
          className="
            absolute
            -right-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-[#FFE7EF]
          "
        />

        <Container>
          <div className="grid min-h-[560px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
            {/* Left Content */}
            <div className="max-w-xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#26AFA1]">
                Everything They Need
              </p>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#263238] sm:text-6xl">
                Care for Your
                <br />
                <span className="text-[#FF7043]">Perfect</span>
                <br />
                Companion
              </h1>

              <p className="mt-7 max-w-lg text-base leading-7 text-[#667278] sm:text-lg">
                From grooming and training to everyday care, discover thoughtful
                services designed to keep your beloved pets happy, healthy, and
                comfortable.
              </p>

              {/* Button */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="
                    inline-flex
                    items-center
                    justify-center
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
                  "
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex min-h-[420px] items-center justify-center">
              {/* Main Circle */}
              <div
                className="
                  absolute
                  h-[330px]
                  w-[330px]
                  rounded-full
                  bg-[#E8FAF7]
                  sm:h-[380px]
                  sm:w-[380px]
                "
              />

              {/* Main Image Placeholder */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-[300px]
                  w-[220px]
                  items-center
                  justify-center
                  rounded-[120px]
                  border-4
                  border-white
                  bg-[#FFF0F5]
                  shadow-lg
                  sm:h-[360px]
                  sm:w-[260px]
                "
              >
                <div className="text-center">
                  <div
                    className="
                      mx-auto
                      mb-4
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FF80AB]
                    "
                  >
                    <span className="text-2xl">🐾</span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E65D89]">
                    Service Image
                  </p>

                  <p className="mt-2 text-sm text-[#A87585]">
                    Coming soon
                  </p>
                </div>
              </div>

              {/* Small Circle - Left */}
              <div
                className="
                  absolute
                  bottom-8
                  left-4
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-white
                  bg-[#FFF0EA]
                  shadow-md
                  sm:left-10
                "
              >
                <span className="text-xl">🐾</span>
              </div>

              {/* Small Circle - Right */}
              <div
                className="
                  absolute
                  bottom-12
                  right-4
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-white
                  bg-[#FFF8D9]
                  shadow-md
                  sm:right-8
                "
              >
                <span className="text-lg">🐾</span>
              </div>

              {/* Yellow Decorative Dot */}
              <div
                className="
                  absolute
                  right-16
                  top-24
                  h-3
                  w-3
                  rounded-full
                  bg-[#FFD54F]
                "
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-[#FFFDFB] py-20 sm:py-24"
      >
        <Container>
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#26AFA1]">
              What We Offer
            </p>

            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-[#263238] sm:text-4xl">
                Services Made With Care
              </h2>

              <span className="text-sm font-medium uppercase tracking-[0.15em] text-[#FF80AB]">
                03 Services
              </span>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#737D82] sm:text-base">
              Give your companion the care, attention, and support they deserve
              with our range of pet-friendly services.
            </p>

            {/* Decorative Accent */}
            <div className="mt-5 flex items-center gap-1.5">
              <span className="h-1.5 w-8 rounded-full bg-[#FF7043]" />
              <span className="h-1.5 w-2 rounded-full bg-[#FFD54F]" />
              <span className="h-1.5 w-2 rounded-full bg-[#FF80AB]" />
            </div>
          </div>

          {/* Service Grid */}
          <ServiceGrid />

          {/* Services CTA */}
          <div
            className="
              mt-16
              border-t
              border-[#F3DCE4]
              pt-12
            "
          >
            <div
              className="
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#26AFA1]">
                  Need Help Choosing?
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#263238]">
                  We’re here for you and your companion.
                </h3>
              </div>

              <a
                href="/contact"
                className="
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#26C6B5]
                  bg-[#26C6B5]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:border-[#20AFA0]
                  hover:bg-[#20AFA0]
                  hover:shadow-md
                "
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}