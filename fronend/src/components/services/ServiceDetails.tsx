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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Service
                </p>

                <p className="mt-3 text-lg font-semibold text-gray-900">
                    {service.name}
                </p>
            </Card>

            <Card className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Category
                </p>

                <p className="mt-3 text-lg font-semibold text-gray-900">
                    {service.category}
                </p>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />

                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                        Duration
                    </p>
                </div>

                <p className="mt-3 text-lg font-semibold text-gray-900">
                    {service.duration}
                </p>
            </Card>

            <Card className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Price
                </p>

                <p className="mt-3 text-lg font-semibold text-gray-900">
                    ₹{service.price}
                </p>
            </Card>
        </div>
    );
}