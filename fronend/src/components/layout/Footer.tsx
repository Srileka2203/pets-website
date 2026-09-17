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
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
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
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <span className="text-base font-bold text-gray-950">TT</span>
              </div>

              <span className="text-xl font-bold tracking-tight text-white">
                Tails & Tales
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-6 text-gray-400">
              Your trusted destination for pets, quality pet products, and
              reliable pet care services.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:bg-gray-800 hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:bg-gray-800 hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:bg-gray-800 hover:text-white"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h2>

            <ul className="mt-5 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h2>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Information */}
            <div className="mt-6 space-y-3 border-t border-gray-800 pt-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />

                <span className="text-sm leading-5 text-gray-400">
                  Your City, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gray-500" />

                <a
                  href="tel:+910000000000"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  +91 00000 00000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gray-500" />

                <a
                  href="mailto:hello@petshop.com"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  hello@petshop.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pet Shop. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Made with care for pets and their families.
          </p>
        </Container>
      </div>
    </footer>
  );
}