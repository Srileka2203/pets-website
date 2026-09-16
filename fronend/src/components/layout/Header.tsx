import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import Container from "@/components/ui/Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pets", href: "/pets" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <Container className="flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Pet Shop Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900">
            <span className="text-base font-bold text-white">P</span>
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            Pet Shop
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
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
            aria-label="Shopping cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <ShoppingCart className="h-[18px] w-[18px]" />

            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gray-900 px-1 text-[10px] font-semibold leading-none text-white">
              0
            </span>
          </Link>

          {/* Account */}
          <Link
            href="/account"
            aria-label="My account"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 sm:flex"
          >
            <User className="h-[18px] w-[18px]" />
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </header>
  );
}