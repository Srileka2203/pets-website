import { Clock } from "lucide-react";

import Card from "@/components/ui/Card";
import { Service } from "@/data/services";

interface ServiceDetailsProps {
    service: Service;
}

export default function ServiceDetails({
    service,
}: ServiceDetailsProps) {
    return (
        <div
            className={`
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
            `}
        >
            {/* Service */}
            <Card
                className={`
                    border-[#D8E8E3]
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-200
                    hover:border-[#BFE3DA]
                    hover:shadow-md
                `}
            >
                <p
                    className={`
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#26AFA1]
                    `}
                >
                    Service
                </p>

                <p
                    className={`
                        mt-3
                        text-lg
                        font-semibold
                        text-[#263238]
                    `}
                >
                    {service.name}
                </p>
            </Card>

            {/* Category */}
            <Card
                className={`
                    border-[#F3DCE4]
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-200
                    hover:border-[#EFC5D2]
                    hover:shadow-md
                `}
            >
                <p
                    className={`
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#E65D89]
                    `}
                >
                    Category
                </p>

                <p
                    className={`
                        mt-3
                        text-lg
                        font-semibold
                        text-[#263238]
                    `}
                >
                    {service.category}
                </p>
            </Card>

            {/* Duration */}
            <Card
                className={`
                    border-[#D8E8E3]
                    bg-[#F8FCFB]
                    p-6
                    shadow-sm
                    transition-all
                    duration-200
                    hover:border-[#BFE3DA]
                    hover:shadow-md
                `}
            >
                <div
                    className={`
                        flex
                        items-center
                        gap-2
                    `}
                >
                    <Clock
                        size={16}
                        strokeWidth={1.7}
                        className="text-[#FF7043]"
                    />

                    <p
                        className={`
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-[#5F7D73]
                        `}
                    >
                        Duration
                    </p>
                </div>

                <p
                    className={`
                        mt-3
                        text-lg
                        font-semibold
                        text-[#263238]
                    `}
                >
                    {service.duration}
                </p>
            </Card>

            {/* Price */}
            <Card
                className={`
                    border-[#E5DDF0]
                    bg-[#FBF9FD]
                    p-6
                    shadow-sm
                    transition-all
                    duration-200
                    hover:border-[#D8CBE8]
                    hover:shadow-md
                `}
            >
                <p
                    className={`
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#26AFA1]
                    `}
                >
                    Price
                </p>

                <p
                    className={`
                        mt-3
                        text-lg
                        font-bold
                        text-[#FF7043]
                    `}
                >
                    ₹{service.price}
                </p>
            </Card>
        </div>
    );
}