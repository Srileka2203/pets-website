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
        <Card className="p-6 sm:p-8">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Book a Service
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
                    Ready to book?
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                    Choose a convenient time for your pet's{" "}
                    {service.name.toLowerCase()} appointment.
                </p>
            </div>

            {/* Service Summary */}
            <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-gray-50 p-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Clock size={16} />

                        <span className="text-xs uppercase tracking-[0.15em]">
                            Duration
                        </span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-gray-900">
                        {service.duration}
                    </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <CalendarDays size={16} />

                        <span className="text-xs uppercase tracking-[0.15em]">
                            Booking
                        </span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-gray-900">
                        By Appointment
                    </p>
                </div>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-sm text-gray-500">
                    Service Price
                </span>

                <span className="text-xl font-semibold text-gray-900">
                    ₹{service.price}
                </span>
            </div>

            {/* Button */}
            <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center rounded-lg bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
                Request Appointment
            </Link>
        </Card>
    );
}