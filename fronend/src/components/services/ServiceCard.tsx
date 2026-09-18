import Link from "next/link";
import { ArrowRight, Clock, PawPrint } from "lucide-react";

import Card from "@/components/ui/Card";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image Placeholder */}
      <div className="relative flex h-64 items-center justify-center bg-gray-100">
        {/* Small Icon */}
        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
          <PawPrint size={20} className="text-gray-500" />
        </div>

        {/* Placeholder */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
            <PawPrint size={28} className="text-gray-400" />
          </div>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Service Image
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Coming soon
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Service Name */}
        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
          {service.name}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {service.description}
        </p>

        {/* Bottom Row */}
        <div className="mt-6 flex items-center justify-between">
          {/* Duration */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gray-400">
            <Clock size={15} />
            <span>{service.duration}</span>
          </div>

          {/* Explore */}
          <Link
            href={`/services/${service.id}`}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500"
          >
            <span>Explore</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
              <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
}