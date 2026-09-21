import {
    Clock3,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
    return (
        <main>
            {/* Hero */}
            {/* Hero */}
            <section
                className={`
    relative
    overflow-hidden
    bg-gray-50
    py-20
    sm:py-24
    lg:py-28
  `}
            >
                {/* Decorative circles */}
                <div
                    aria-hidden="true"
                    className={`
      pointer-events-none
      absolute
      -right-20
      -top-24
      h-64
      w-64
      rounded-full
      border-[32px]
      border-gray-200
      sm:h-80
      sm:w-80
    `}
                />

                <div
                    aria-hidden="true"
                    className={`
      pointer-events-none
      absolute
      -bottom-32
      right-24
      h-72
      w-72
      rounded-full
      border-[24px]
      border-gray-100
      sm:h-96
      sm:w-96
    `}
                />

                <div
                    aria-hidden="true"
                    className={`
      pointer-events-none
      absolute
      left-[-80px]
      top-1/2
      h-40
      w-40
      -translate-y-1/2
      rounded-full
      border-[18px]
      border-gray-100
      sm:h-52
      sm:w-52
    `}
                />

                <Container>
                    <div className="relative z-10 max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                            Contact Us
                        </p>

                        <h1
                            className={`
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          text-gray-950
          sm:text-5xl
          lg:text-6xl
        `}
                        >
                            We&apos;d Love to
                            <span className="block text-gray-500">
                                Hear From You
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                            Have a question about our pets, products, or services?
                            Get in touch with our team. We&apos;re always happy to
                            help you and your furry friends.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Content */}
            <section className="py-16 sm:py-20 lg:py-24">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
                        {/* Contact Information */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                                Get In Touch
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
                                Let&apos;s Talk
                            </h2>

                            <p className="mt-4 max-w-md text-base leading-7 text-gray-600">
                                Whether you need help choosing the right product or
                                simply want to know more about our services, feel free
                                to reach out.
                            </p>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gray-100">
                                        <MapPin
                                            className="h-5 w-5 text-gray-700"
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-950">
                                            Visit Us
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            123 Pet Street
                                            <br />
                                            Coimbatore, Tamil Nadu
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gray-100">
                                        <Phone
                                            className="h-5 w-5 text-gray-700"
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-950">
                                            Call Us
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-600">
                                            +91 98765 43210
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gray-100">
                                        <Mail
                                            className="h-5 w-5 text-gray-700"
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-950">
                                            Email Us
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-600">
                                            hello@petshop.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gray-100">
                                        <Clock3
                                            className="h-5 w-5 text-gray-700"
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-950">
                                            Opening Hours
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            Monday – Saturday
                                            <br />
                                            9:00 AM – 7:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </Container>
            </section>
        </main>
    );
}