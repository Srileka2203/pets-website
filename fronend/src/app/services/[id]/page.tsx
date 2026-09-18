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
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                {/* Decorative Circle */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gray-100" />

                <Container>
                    <div className="grid min-h-[560px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

                        {/* Left Content */}
                        <div className="max-w-xl">
                            {/* Back Link */}
                            <Link
                                href="/services"
                                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
                            >
                                <ArrowLeft size={16} />
                                Back to Services
                            </Link>

                            {/* Category */}
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                                {service.category}
                            </p>

                            {/* Title */}
                            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
                                {service.name}
                            </h1>

                            {/* Description */}
                            <p className="mt-7 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
                                {service.description}
                            </p>

                            {/* Service Information */}
                            <div className="mt-8 flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock size={17} />
                                    <span>{service.duration}</span>
                                </div>

                                <div className="h-5 w-px bg-gray-200" />

                                <span className="text-xl font-semibold text-gray-900">
                                    ₹{service.price}
                                </span>
                            </div>

                            {/* Button */}
                            <div className="mt-9">
                                <Link
                                    href="/contact"
                                    className="inline-flex rounded-lg bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700"
                                >
                                    Book This Service
                                </Link>
                            </div>
                        </div>

                        {/* Right Visual */}

                        <div className="relative">
                            <ServiceGallery
                                image={service.image}
                                serviceName={service.name}
                            />
                        </div>

                    </div>
                </Container>
            </section>

            {/* Service Information */}
            <section className="border-t border-gray-100 bg-gray-50 py-20 sm:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">

                        {/* About Service */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                                About The Service
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Thoughtful Care for Your Companion
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
                                Our {service.name.toLowerCase()} service is designed to
                                provide your pet with comfortable, reliable, and
                                thoughtful care from people who understand how much
                                they mean to you.
                            </p>
                        </div>

                        {/* Service Details */}
                        <ServiceDetails service={service} />

                    </div>
                </Container>
            </section>

            {/* Booking CTA */}
            {/* Booking Section */}
            <section className="bg-white py-20 sm:py-24">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
                        {/* Booking Introduction */}
                        <div className="max-w-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                                Make It Easy
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Give Your Pet the Care They Deserve
                            </h2>

                            <p className="mt-5 text-base leading-7 text-gray-500">
                                Every pet deserves thoughtful attention and care.
                                Schedule a {service.name.toLowerCase()} appointment
                                at a time that works for you.
                            </p>
                        </div>

                        {/* Booking Card */}
                        <ServiceBooking service={service} />
                    </div>
                </Container>
            </section>

        </main>
    );
}