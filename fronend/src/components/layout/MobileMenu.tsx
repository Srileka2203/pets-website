"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pets", href: "/pets" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute inset-x-0 top-[72px] border-b border-gray-200 bg-white shadow-sm">
          <Container>
            <nav
              className="flex flex-col py-4"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 transition-colors last:border-b-0 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </div>
  );
}