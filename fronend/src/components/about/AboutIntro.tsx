import Container from "@/components/ui/Container";

export default function AboutIntro() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              More Than a Pet Shop
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              We created this space with one simple belief: every pet
              deserves love, comfort, and thoughtful care. Our goal is to
              make it easier for people to find the right pets, products,
              and services for their companions.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-500">
              From everyday essentials to professional services, everything
              we offer is chosen with the special bond between people and
              their pets in mind.
            </p>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex h-[320px] w-full max-w-md items-center justify-center rounded-[32px] border border-gray-200 bg-white">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-3xl">🐾</span>
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Our Story
                </p>

                <p className="mt-2 text-sm text-gray-400">
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