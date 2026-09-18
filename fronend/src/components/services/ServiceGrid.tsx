import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

interface ServiceGridProps {
  selectedCategory: string;
}

export default function ServiceGrid({
  selectedCategory,
}: ServiceGridProps) {
  const filteredServices =
    selectedCategory === "All Services"
      ? services
      : services.filter(
          (service) => service.category === selectedCategory
        );

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredServices.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}