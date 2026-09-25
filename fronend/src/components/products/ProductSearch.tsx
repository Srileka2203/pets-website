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
    <section className="border-b border-[#FFDDE8] bg-[#FFF9FB] py-8">
      <Container>
        <div className="relative w-full lg:max-w-md">
          <Search
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#26AFA1]"
            strokeWidth={1.7}
          />

          <input
            type="search"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Search products..."
            className="h-12 w-full rounded-full border border-[#F7C4D5] bg-white pl-12 pr-5 text-sm text-[#263238] outline-none transition-all duration-200 placeholder:text-[#9AA3A7] hover:border-[#FFB5CB] focus:border-[#26C6B5] focus:bg-white focus:ring-2 focus:ring-[#26C6B5]/15"
          />

          {/* Small decorative accent */}
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#FFD54F]" />
        </div>
      </Container>
    </section>
  );
}