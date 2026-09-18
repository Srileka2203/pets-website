"use client";

interface ServiceFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ["All Services", "Grooming", "Training", "Care"];

export default function ServiceFilter({
  selectedCategory,
  onCategoryChange,
}: ServiceFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-gray-900 text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}