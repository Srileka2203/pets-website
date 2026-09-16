"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
        className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute inset-x-0 top-16 border-b border-gray-200 bg-white shadow-sm">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col">
              <Link
                href="/"
                onClick={closeMenu}
                className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>

              <Link
                href="/pets"
                onClick={closeMenu}
                className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Pets
              </Link>

              <Link
                href="/products"
                onClick={closeMenu}
                className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Products
              </Link>

              <Link
                href="/services"
                onClick={closeMenu}
                className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Services
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="py-3 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}