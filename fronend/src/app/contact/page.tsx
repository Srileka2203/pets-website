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
        <main className="bg-[#FFFDFB]">
            {/* Hero */}
            <section
                className={`
                    relative
                    overflow-hidden
                    bg-[#E8FAF7]
                    py-20
                    sm:py-24
                    lg:py-28
                `}
            >
                {/* Decorative Circle - Top Right */}
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
                        border-[#BFEFE8]
                        sm:h-80
                        sm:w-80
                    `}
                />

                {/* Decorative Circle - Bottom Right */}
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
                        border-[#FFF0F5]
                        sm:h-96
                        sm:w-96
                    `}
                />

                {/* Decorative Circle - Left */}
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
                        border-[#FFF8D9]
                        sm:h-52
                        sm:w-52
                    `}
                />

                {/* Decorative Coral Dot */}
                <div
                    aria-hidden="true"
                    className={`
                        pointer-events-none
                        absolute
                        bottom-16
                        left-1/2
                        h-3
                        w-3
                        rounded-full
                        bg-[#FF7043]
                    `}
                />

                <Container>
                    <div
                        className={`
                            relative
                            z-10
                            max-w-3xl
                        `}
                    >
                        <p
                            className={`
                                mb-4
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-[#26AFA1]
                            `}
                        >
                            Contact Us
                        </p>

                        <h1
                            className={`
                                text-4xl
                                font-bold
                                leading-tight
                                tracking-tight
                                text-[#263238]
                                sm:text-5xl
                                lg:text-6xl
                            `}
                        >
                            We&apos;d Love to
                            <span
                                className={`
                                    block
                                    text-[#E65D89]
                                `}
                            >
                                Hear From You
                            </span>
                        </h1>

                        <p
                            className={`
                                mt-6
                                max-w-2xl
                                text-base
                                leading-7
                                text-[#667278]
                                sm:text-lg
                            `}
                        >
                            Have a question about our pets, products, or
                            services? Get in touch with our team. We&apos;re
                            always happy to help you and your furry friends.
                        </p>

                        {/* Accent Line */}
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
                </Container>
            </section>

            {/* Contact Content */}
            <section
                id="contact-form"
                className={`
                    bg-[#FFFDFB]
                    py-16
                    sm:py-20
                    lg:py-24
                `}
            >
                <Container>
                    <div
                        className={`
                            grid
                            gap-10
                            lg:grid-cols-[0.8fr_1.2fr]
                            lg:items-start
                            lg:gap-16
                        `}
                    >
                        {/* Contact Information */}
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
                                Get In Touch
                            </p>

                            <h2
                                className={`
                                    mt-3
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    text-[#263238]
                                    sm:text-4xl
                                `}
                            >
                                Let&apos;s Talk
                            </h2>

                            <p
                                className={`
                                    mt-4
                                    max-w-md
                                    text-base
                                    leading-7
                                    text-[#667278]
                                `}
                            >
                                Whether you need help choosing the right
                                product or simply want to know more about our
                                services, feel free to reach out.
                            </p>

                            {/* Contact Details */}
                            <div
                                className={`
                                    mt-8
                                    space-y-5
                                `}
                            >
                                {/* Address */}
                                <div
                                    className={`
                                        flex
                                        items-start
                                        gap-4
                                    `}
                                >
                                    <div
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-[#BFEFE8]
                                            bg-[#E8FAF7]
                                        `}
                                    >
                                        <MapPin
                                            className={`
                                                h-5
                                                w-5
                                                text-[#26AFA1]
                                            `}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <h3
                                            className={`
                                                text-sm
                                                font-semibold
                                                text-[#263238]
                                            `}
                                        >
                                            Visit Us
                                        </h3>

                                        <p
                                            className={`
                                                mt-1
                                                text-sm
                                                leading-6
                                                text-[#667278]
                                            `}
                                        >
                                            123 Pet Street
                                            <br />
                                            Coimbatore, Tamil Nadu
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div
                                    className={`
                                        flex
                                        items-start
                                        gap-4
                                    `}
                                >
                                    <div
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-[#FFD5C8]
                                            bg-[#FFF0EA]
                                        `}
                                    >
                                        <Phone
                                            className={`
                                                h-5
                                                w-5
                                                text-[#FF7043]
                                            `}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <h3
                                            className={`
                                                text-sm
                                                font-semibold
                                                text-[#263238]
                                            `}
                                        >
                                            Call Us
                                        </h3>

                                        <p
                                            className={`
                                                mt-1
                                                text-sm
                                                text-[#667278]
                                            `}
                                        >
                                            +91 98765 43210
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div
                                    className={`
                                        flex
                                        items-start
                                        gap-4
                                    `}
                                >
                                    <div
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-[#FFD5E1]
                                            bg-[#FFF0F5]
                                        `}
                                    >
                                        <Mail
                                            className={`
                                                h-5
                                                w-5
                                                text-[#E65D89]
                                            `}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <h3
                                            className={`
                                                text-sm
                                                font-semibold
                                                text-[#263238]
                                            `}
                                        >
                                            Email Us
                                        </h3>

                                        <p
                                            className={`
                                                mt-1
                                                text-sm
                                                text-[#667278]
                                            `}
                                        >
                                            hello@petshop.com
                                        </p>
                                    </div>
                                </div>

                                {/* Opening Hours */}
                                <div
                                    className={`
                                        flex
                                        items-start
                                        gap-4
                                    `}
                                >
                                    <div
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-[#F5E6A3]
                                            bg-[#FFF8D9]
                                        `}
                                    >
                                        <Clock3
                                            className={`
                                                h-5
                                                w-5
                                                text-[#D9A900]
                                            `}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <h3
                                            className={`
                                                text-sm
                                                font-semibold
                                                text-[#263238]
                                            `}
                                        >
                                            Opening Hours
                                        </h3>

                                        <p
                                            className={`
                                                mt-1
                                                text-sm
                                                leading-6
                                                text-[#667278]
                                            `}
                                        >
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