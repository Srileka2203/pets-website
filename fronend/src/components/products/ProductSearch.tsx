"use client";

import { Search } from "lucide-react";

import Container from "@/components/ui/Container";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <section className="border-b border-gray-100 bg-white py-8">
      <Container>
        <div className="relative w-full lg:max-w-md">
          <Search
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            strokeWidth={1.7}
          />

          <input
            type="search"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Search products..."
            className="h-12 w-full rounded-full border border-gray-200 bg-gray-50 pl-12 pr-5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-400 focus:bg-white"
          />
        </div>
      </Container>
    </section>
  );
}