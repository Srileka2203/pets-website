import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import Card from "@/components/ui/Card";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image Placeholder */}
      <div className="flex h-64 items-center justify-center bg-gray-100">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          Service Image
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
          {service.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {service.description}
        </p>

        {/* Bottom Row */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock size={15} />
            <span>{service.duration}</span>
          </div>

          <Link
            href={`/services/${service.id}`}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500"
          >
            <span>Explore</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
}