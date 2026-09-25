import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";

import Card from "@/components/ui/Card";
import { Service } from "@/data/services";

interface ServiceBookingProps {
    service: Service;
}

export default function ServiceBooking({
    service,
}: ServiceBookingProps) {
    return (
        <Card
            className={`
                border-[#D8E8E3]
                bg-white
                p-6
                shadow-sm
                sm:p-8
            `}
        >
            <div>
                <p
                    className={`
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#6F8F84]
                    `}
                >
                    Book a Service
                </p>

                <h3
                    className={`
                        mt-3
                        text-2xl
                        font-bold
                        tracking-tight
                        text-[#273A35]
                    `}
                >
                    Ready to book?
                </h3>

                <p
                    className={`
                        mt-3
                        text-sm
                        leading-6
                        text-[#71817C]
                    `}
                >
                    Choose a convenient time for your pet&apos;s{" "}
                    {service.name.toLowerCase()} appointment.
                </p>
            </div>

            {/* Service Summary */}
            <div className="mt-6 grid grid-cols-2 gap-3">
                <div
                    className={`
                        rounded-2xl
                        border
                        border-[#D8E8E3]
                        bg-[#F3F8F6]
                        p-4
                    `}
                >
                    <div
                        className={`
                            flex
                            items-center
                            gap-2
                            text-[#6F8F84]
                        `}
                    >
                        <Clock size={16} />

                        <span
                            className={`
                                text-xs
                                uppercase
                                tracking-[0.15em]
                            `}
                        >
                            Duration
                        </span>
                    </div>

                    <p
                        className={`
                            mt-2
                            text-sm
                            font-semibold
                            text-[#273A35]
                        `}
                    >
                        {service.duration}
                    </p>
                </div>

                <div
                    className={`
                        rounded-2xl
                        border
                        border-[#E4DDF0]
                        bg-[#F7F4FB]
                        p-4
                    `}
                >
                    <div
                        className={`
                            flex
                            items-center
                            gap-2
                            text-[#7E7192]
                        `}
                    >
                        <CalendarDays size={16} />

                        <span
                            className={`
                                text-xs
                                uppercase
                                tracking-[0.15em]
                            `}
                        >
                            Booking
                        </span>
                    </div>

                    <p
                        className={`
                            mt-2
                            text-sm
                            font-semibold
                            text-[#332D3D]
                        `}
                    >
                        By Appointment
                    </p>
                </div>
            </div>

            {/* Price */}
            <div
                className={`
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#E5EBE8]
                    pt-5
                `}
            >
                <span className="text-sm text-[#71817C]">
                    Service Price
                </span>

                <span
                    className={`
                        text-xl
                        font-semibold
                        text-[#273A35]
                    `}
                >
                    ₹{service.price}
                </span>
            </div>

            {/* Button */}
            <Link
                href="/contact"
                className={`
        mt-6
        flex
        w-full
        items-center
        justify-center
        rounded-lg
        bg-[#D9826B]
        px-6
        py-3.5
        text-sm
        font-semibold
        text-white
        transition-all
        duration-200
        hover:bg-[#C96F58]
        hover:shadow-md
    `}
            >
                Request Appointment
            </Link>
        </Card>
    );
}