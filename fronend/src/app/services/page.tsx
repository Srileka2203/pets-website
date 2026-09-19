import Container from "@/components/ui/Container";
import ServiceGrid from "@/components/services/ServiceGrid";

export default function ServicesPage() {

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                {/* Decorative Circle */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gray-100" />

                <Container>
                    <div className="grid min-h-[560px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

                        {/* Left Content */}
                        <div className="max-w-xl">
                            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                                Everything They Need
                            </p>

                            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
                                Care for Your
                                <br />
                                <span className="text-gray-500">Perfect</span>
                                <br />
                                Companion
                            </h1>

                            <p className="mt-7 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
                                From grooming and training to everyday care, discover thoughtful
                                services designed to keep your beloved pets happy, healthy, and
                                comfortable.
                            </p>

                            {/* Button */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#services"
                                    className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="relative flex min-h-[420px] items-center justify-center">

                            {/* Main Circle */}
                            <div className="absolute h-[330px] w-[330px] rounded-full bg-gray-100 sm:h-[380px] sm:w-[380px]" />

                            {/* Main Image Placeholder */}
                            <div className="relative z-10 flex h-[300px] w-[220px] items-center justify-center rounded-[120px] border-4 border-white bg-gray-50 shadow-lg sm:h-[360px] sm:w-[260px]">
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                                        <span className="text-2xl">🐾</span>
                                    </div>

                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                        Service Image
                                    </p>

                                    <p className="mt-2 text-sm text-gray-400">
                                        Coming soon
                                    </p>
                                </div>
                            </div>

                            {/* Small Circle - Left */}
                            <div className="absolute bottom-8 left-4 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gray-100 shadow-md sm:left-10">
                                <span className="text-xl">🐾</span>
                            </div>

                            {/* Small Circle - Right */}
                            <div className="absolute bottom-12 right-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gray-100 shadow-md sm:right-8">
                                <span className="text-lg">🐾</span>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>

            {/* Services Section */}
            <section id="services" className="bg-gray-50 py-20 sm:py-24">
                <Container>

                    {/* Section Header */}
                    <div className="mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                            What We Offer
                        </p>

                        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Services Made With Care
                            </h2>

                            <span className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
                                03 Services
                            </span>
                        </div>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                            Give your companion the care, attention, and support they deserve
                            with our range of pet-friendly services.
                        </p>
                    </div>

                    {/* Service Grid */}
                    <ServiceGrid />

                    {/* Services CTA */}
                    <div className="mt-16 border-t border-gray-200 pt-12">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                                    Need Help Choosing?
                                </p>

                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                                    We’re here for you and your companion.
                                </h3>
                            </div>

                            <a
                                href="/contact"
                                className="inline-flex w-fit rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
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