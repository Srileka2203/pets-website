import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const quicksand = localFont({
  src: [
    {
      path: "../fonts/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
  display: "swap",
});

const nunito = localFont({
  src: [
    {
      path: "../fonts/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tails & Tales",
  description: "Find pets, pet food, accessories, and pet care services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <CartProvider>
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
          </CartProvider>
      </body>
    </html>
  );
}