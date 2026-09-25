import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import Card from "@/components/ui/Card";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card
      className={`
        group
        overflow-hidden
        border-[#F3DCE4]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#F0B9C9]
        hover:shadow-md
      `}
    >
      {/* Image Placeholder */}
      <div
        className={`
          relative
          flex
          h-64
          items-center
          justify-center
          overflow-hidden
          bg-[#EAFBF8]
        `}
      >
        {/* Decorative Shapes */}
        <div
          className={`
            absolute
            -right-6
            -top-6
            h-24
            w-24
            rounded-full
            bg-[#FFF0F5]
          `}
        />

        <div
          className={`
            absolute
            -bottom-5
            -left-5
            h-20
            w-20
            rounded-full
            bg-[#FFF8D9]
          `}
        />

        {/* Image Placeholder */}
        <div
          className={`
            relative
            z-10
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-sm
          `}
        >
          <span className="text-2xl">🐾</span>
        </div>

        {/* Small Accent */}
        <span
          className={`
            absolute
            bottom-6
            right-6
            h-2.5
            w-2.5
            rounded-full
            bg-[#FF7043]
          `}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className={`
            text-xl
            font-semibold
            tracking-tight
            text-[#263238]
          `}
        >
          {service.name}
        </h3>

        <p
          className={`
            mt-3
            line-clamp-2
            text-sm
            leading-6
            text-[#737D82]
          `}
        >
          {service.description}
        </p>

        {/* Bottom Row */}
        <div
          className={`
            mt-6
            flex
            items-center
            justify-between
          `}
        >
          <div
            className={`
              flex
              items-center
              gap-2
              text-sm
              text-[#26AFA1]
            `}
          >
            <Clock
              size={15}
              strokeWidth={1.7}
            />

            <span className="text-[#667278]">
              {service.duration}
            </span>
          </div>

          <Link
            href={`/services/${service.id}`}
            className={`
              flex
              items-center
              gap-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#26AFA1]
              transition-colors
              duration-200
              hover:text-[#FF7043]
            `}
          >
            <span>Explore</span>

            <span
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#F3CBD8]
                bg-white
                text-[#FF7043]
                transition-all
                duration-300
                group-hover:border-[#FF7043]
                group-hover:bg-[#FF7043]
                group-hover:text-white
              `}
            >
              <ArrowRight
                size={16}
                strokeWidth={1.7}
              />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
}