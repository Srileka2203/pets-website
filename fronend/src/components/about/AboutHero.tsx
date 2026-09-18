import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative Circle */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gray-100" />

      <Container>
        <div className="grid min-h-[500px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              About Our Pet Shop
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
              A Little More
              <br />
              <span className="text-gray-500">Love</span> for Every
              <br />
              Companion
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
              We believe pets are more than animals. They are companions,
              family, and an important part of our everyday lives.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative flex min-h-[360px] items-center justify-center">
            {/* Main Circle */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-gray-100 sm:h-[360px] sm:w-[360px]" />

            {/* Image Placeholder */}
            <div className="relative z-10 flex h-[300px] w-[230px] items-center justify-center rounded-[120px] border-4 border-white bg-gray-50 shadow-lg sm:h-[340px] sm:w-[250px]">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                  <span className="text-2xl">🐾</span>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  About Image
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Coming soon
                </p>
              </div>
            </div>

            {/* Small Circle */}
            <div className="absolute bottom-4 left-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gray-100 shadow-md sm:left-10">
              <span className="text-lg">🐾</span>
            </div>

            {/* Small Circle */}
            <div className="absolute bottom-8 right-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-100 shadow-md sm:right-8">
              <span className="text-base">🐾</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}