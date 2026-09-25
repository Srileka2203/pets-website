import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import ServiceGallery from "@/components/services/ServiceGallery";
import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceBooking from "@/components/services/ServiceBooking";

interface ServiceDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ServiceDetailsPage({
    params,
}: ServiceDetailsPageProps) {
    const { id } = await params;

    const service = services.find(
        (service) => service.id === id
    );

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-[#FFFDFB]">
            {/* Hero Section */}
            <section
                className={`
                    relative
                    overflow-hidden
                    bg-[#E8FAF7]
                `}
            >
                {/* Decorative Circle */}
                <div
                    aria-hidden="true"
                    className={`
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-72
                        w-72
                        rounded-full
                        bg-[#BFEFE8]
                        opacity-70
                    `}
                />

                {/* Decorative Pink Circle */}
                <div
                    aria-hidden="true"
                    className={`
                        pointer-events-none
                        absolute
                        -bottom-20
                        left-1/3
                        h-40
                        w-40
                        rounded-full
                        bg-[#FFDDE8]
                        opacity-50
                    `}
                />

                <Container>
                    <div
                        className={`
                            relative
                            z-10
                            grid
                            min-h-[560px]
                            items-center
                            gap-12
                            py-16
                            lg:grid-cols-2
                            lg:py-20
                        `}
                    >
                        {/* Left Content */}
                        <div className="max-w-xl">
                            {/* Back Link */}
                            <Link
                                href="/services"
                                className={`
                                    mb-8
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-medium
                                    text-[#667278]
                                    transition-colors
                                    duration-200
                                    hover:text-[#26AFA1]
                                `}
                            >
                                <ArrowLeft
                                    size={16}
                                    strokeWidth={1.7}
                                />

                                Back to Services
                            </Link>

                            {/* Category */}
                            <p
                                className={`
                                    text-sm
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#26AFA1]
                                `}
                            >
                                {service.category}
                            </p>

                            {/* Title */}
                            <h1
                                className={`
                                    mt-5
                                    text-5xl
                                    font-bold
                                    leading-[1.05]
                                    tracking-tight
                                    text-[#263238]
                                    sm:text-6xl
                                `}
                            >
                                {service.name}
                            </h1>

                            {/* Description */}
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
                                {service.description}
                            </p>

                            {/* Service Information */}
                            <div
                                className={`
                                    mt-8
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-6
                                `}
                            >
                                <div
                                    className={`
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-[#667278]
                                    `}
                                >
                                    <Clock
                                        size={17}
                                        strokeWidth={1.7}
                                        className="text-[#FF7043]"
                                    />

                                    <span>
                                        {service.duration}
                                    </span>
                                </div>

                                <div
                                    className={`
                                        h-5
                                        w-px
                                        bg-[#D9E8E5]
                                    `}
                                />

                                <span
                                    className={`
                                        text-xl
                                        font-semibold
                                        text-[#263238]
                                    `}
                                >
                                    ₹{service.price}
                                </span>
                            </div>

                            {/* Booking Link */}
                            <div className="mt-9">
                                <Link
                                    href="/contact"
                                    className={`
                                        inline-flex
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-[#FF7043]
                                        bg-[#FF7043]
                                        px-7
                                        py-3.5
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
                                    Book This Service
                                </Link>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div
                            className={`
                                relative
                            `}
                        >
                            <ServiceGallery
                                image={service.image}
                                serviceName={service.name}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Service Information */}
            <section
                className={`
                    border-t
                    border-[#F3DCE4]
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
                        `}
                    >
                        {/* About Service */}
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
                                About The Service
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
                                Thoughtful Care for Your Companion
                            </h2>

                            <p
                                className={`
                                    mt-5
                                    max-w-xl
                                    text-base
                                    leading-7
                                    text-[#667278]
                                `}
                            >
                                Our{" "}
                                {service.name.toLowerCase()}{" "}
                                service is designed to provide your pet with
                                comfortable, reliable, and thoughtful care from
                                people who understand how much they mean to you.
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

                        {/* Service Details */}
                        <ServiceDetails service={service} />
                    </div>
                </Container>
            </section>

            {/* Booking Section */}
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
                            gap-10
                            lg:grid-cols-[1fr_420px]
                            lg:items-start
                        `}
                    >
                        {/* Booking Introduction */}
                        <div className="max-w-xl">
                            <p
                                className={`
                                    text-sm
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#26AFA1]
                                `}
                            >
                                Make It Easy
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
                                Give Your Pet the Care They Deserve
                            </h2>

                            <p
                                className={`
                                    mt-5
                                    text-base
                                    leading-7
                                    text-[#667278]
                                `}
                            >
                                Every pet deserves thoughtful attention and
                                care. Schedule a{" "}
                                {service.name.toLowerCase()} appointment at a
                                time that works for you.
                            </p>

                            {/* Supporting Accent */}
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
                                        bg-[#E65D89]
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

                        {/* Booking Card */}
                        <ServiceBooking service={service} />
                    </div>
                </Container>
            </section>
        </main>
    );
}