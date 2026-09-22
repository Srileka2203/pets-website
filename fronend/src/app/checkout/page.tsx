"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";

export default function CheckoutPage() {
    const { cartItems, subtotal } = useCart();

    const delivery = subtotal > 0 ? 0 : 0;
    const total = subtotal + delivery;

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50 py-16">
                <Container>
                    <div className="mx-auto flex max-w-xl flex-col items-center rounded-[28px] border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                            <ShoppingBag
                                size={28}
                                className="text-gray-600"
                                aria-hidden="true"
                            />
                        </div>

                        <h1 className="font-quicksand text-2xl font-bold text-gray-900">
                            Your Cart Is Empty
                        </h1>

                        <p className="mt-3 max-w-md font-nunito text-gray-500">
                            Add some products to your cart before proceeding to checkout.
                        </p>

                        <Link href="/products" className="mt-8">
                            <Button>Continue Shopping</Button>
                        </Link>
                    </div>
                </Container>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
            <Container>
                <div className="mb-8">
                    <Link
                        href="/cart"
                        className="inline-flex items-center gap-2 font-nunito text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                        <ArrowLeft size={16} aria-hidden="true" />
                        Back to Cart
                    </Link>

                    <h1 className="mt-5 font-quicksand text-3xl font-bold text-gray-900 sm:text-4xl">
                        Checkout
                    </h1>

                    <p className="mt-2 font-nunito text-gray-500">
                        Complete your order details below.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    {/* Checkout details will be added here */}
                  <div className="space-y-8">
                    
                    {/* Customer Information */}
                    <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
                        <div>
                            <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                Customer Information
                            </h2>

                            <p className="mt-2 font-nunito text-sm text-gray-500">
                                Enter your contact details for this order.
                            </p>
                        </div>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="fullName"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>
                        </div>
                    </section>

                    {/* delivery address section */}
                    <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
                        <div>
                            <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                Delivery Address
                            </h2>

                            <p className="mt-2 font-nunito text-sm text-gray-500">
                                Enter the address where you would like your order delivered.
                            </p>
                        </div>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="address"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Address
                                </label>

                                <textarea
                                    id="address"
                                    name="address"
                                    rows={3}
                                    placeholder="Enter your full address"
                                    className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="city"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    City
                                </label>

                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    placeholder="Enter your city"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="state"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    State
                                </label>

                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    placeholder="Enter your state"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="postalCode"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Postal Code
                                </label>

                                <input
                                    id="postalCode"
                                    name="postalCode"
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="Enter postal code"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="country"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Country
                                </label>

                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    defaultValue="India"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>
                        </div>
                    </section>

                    </div>

                    {/* Order summary */}
                    <aside className="h-fit rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
                        <h2 className="font-quicksand text-xl font-bold text-gray-900">
                            Order Summary
                        </h2>

                        <div className="mt-6 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-start justify-between gap-4"
                                >
                                    <div>
                                        <p className="font-nunito text-sm font-semibold text-gray-900">
                                            {item.name}
                                        </p>

                                        <p className="mt-1 font-nunito text-xs text-gray-500">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>

                                    <p className="whitespace-nowrap font-nunito text-sm font-semibold text-gray-900">
                                        {item.price}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="my-6 border-t border-gray-200" />

                        <div className="space-y-3 font-nunito text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toLocaleString("en-IN")}</span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Delivery</span>
                                <span>Free</span>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between font-quicksand text-lg font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>₹{total.toLocaleString("en-IN")}</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}