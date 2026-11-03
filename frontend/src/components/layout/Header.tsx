"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import useCart from "@/hooks/useCart";
import useAuth from "@/hooks/useAuth";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pets", href: "/pets" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const { totalQuantity, isCartLoaded } = useCart();
  const { user, isLoading } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#FF7043]/20 bg-[#FF7043]/10 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Pet Shop Home"
          className="flex shrink-0 items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#26C6B5]">
            <span className="text-sm font-bold tracking-tight text-white">
              TT
            </span>

            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#FF7043]" />
          </div>

          <span className="text-xl font-bold tracking-tight text-[#172B4D]">
            Tails <span className="text-[#FF7043]">&</span> Tales
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#536174] transition-colors duration-200 hover:text-[#FF7043]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex shrink-0 items-center gap-1">
          {/* Cart */}
          <Link
            href="/cart"
            aria-label={`Shopping cart with ${totalQuantity} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#536174] transition-colors duration-200 hover:bg-[#FFF1EC] hover:text-[#FF7043]"
          >
            <ShoppingCart className="h-[18px] w-[18px]" />

            {isCartLoaded && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF7043] px-1 text-[10px] font-semibold leading-none text-white">
                {totalQuantity}
              </span>
            )}
          </Link>

          {/* Account */}
          <Link
            href="/account"
            aria-label={user ? `Account for ${user.name}` : "My account"}
            className="hidden h-10 w-10 items-center justify-center rounded-full text-[#536174] transition-colors duration-200 hover:bg-[#E8FAF7] hover:text-[#26C6B5] sm:flex"
          >
            {isLoading ? (
              <User className="h-[18px] w-[18px]" />
            ) : user ? (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#26C6B5] font-quicksand text-sm font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </span>
            ) : (
              <User className="h-[18px] w-[18px]" />
            )}
          </Link>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}