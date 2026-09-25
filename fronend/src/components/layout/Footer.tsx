import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const shopLinks = [
  { name: "Pets", href: "/pets" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Categories", href: "/categories" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "My Account", href: "/account" },
  { name: "My Orders", href: "/orders" },
];

const supportLinks = [
  { name: "FAQs", href: "/faq" },
  { name: "Shipping & Delivery", href: "/shipping" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#FFD6C9] bg-[#FFF8F5] text-[#536174]">
      {/* Main Footer */}
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link
              href="/"
              className="mb-5 flex items-center gap-3"
              aria-label="Pet Shop Home"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#26C6B5]">
                <span className="text-sm font-bold text-white">TT</span>

                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#FF7043]" />
              </div>

              <span className="text-xl font-bold tracking-tight text-[#172B4D]">
                Tails <span className="text-[#FF7043]">&</span> Tales
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-6 text-[#68778D]">
              Your trusted destination for pets, quality pet products, and
              reliable pet care services.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#BFEDE7] bg-white text-[#26C6B5] transition-colors hover:border-[#26C6B5] hover:bg-[#26C6B5] hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FFD0DE] bg-white text-[#FF80AB] transition-colors hover:border-[#FF80AB] hover:bg-[#FF80AB] hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FFDFA0] bg-white text-[#D9A800] transition-colors hover:border-[#FFD54F] hover:bg-[#FFD54F] hover:text-[#172B4D]"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#172B4D]">
              Shop
            </h2>

            <ul className="mt-5 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#68778D] transition-colors hover:text-[#FF7043]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#172B4D]">
              Company
            </h2>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#68778D] transition-colors hover:text-[#26C6B5]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#172B4D]">
              Support
            </h2>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#68778D] transition-colors hover:text-[#FF7043]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Information */}
            <div className="mt-6 space-y-3 border-t border-[#F4D8CE] pt-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7043]" />

                <span className="text-sm leading-5 text-[#68778D]">
                  Your City, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#26C6B5]" />

                <a
                  href="tel:+910000000000"
                  className="text-sm text-[#68778D] transition-colors hover:text-[#26C6B5]"
                >
                  +91 00000 00000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#FF80AB]" />

                <a
                  href="mailto:hello@petshop.com"
                  className="text-sm text-[#68778D] transition-colors hover:text-[#FF80AB]"
                >
                  hello@petshop.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-[#F4D8CE] bg-white/60">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-[#7A8798]">
            © {new Date().getFullYear()} Tails & Tales. All rights reserved.
          </p>

          <p className="text-sm text-[#7A8798]">
            Made with <span className="text-[#FF80AB]">♥</span> for pets and
            their families.
          </p>
        </Container>
      </div>
    </footer>
  );
}