"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";

export default function CartPage() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        subtotal,
    } = useCart();

    const formatPrice = (price: number) => {
        return `₹${price.toLocaleString("en-IN")}`;
    };

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50">
                <Container>
                    <section className="flex min-h-[70vh] items-center justify-center py-16">
                        <div className="w-full max-w-lg rounded-[32px] border border-gray-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                                <ShoppingBag
                                    className="h-9 w-9 text-gray-700"
                                    strokeWidth={1.5}
                                />
                            </div>

                            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                                Your Cart
                            </p>

                            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                                Your cart is empty
                            </h1>

                            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
                                Looks like you haven&apos;t added anything to your cart yet.
                                Explore our products and find something your pet will love.
                            </p>

                            <div className="mt-8">
                                <Link href="/products">
                                    <Button>Continue Shopping</Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        );
    }

    return (
        <main className="bg-gray-50 py-16 sm:py-20 lg:py-24">
            <Container>
                {/* Header */}
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Shopping Cart
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                        Your Cart
                    </h1>

                    <p className="mt-4 text-base text-gray-600">
                        Review your selected products before checkout.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
                    {/* Cart Items */}
                    <div className="space-y-4">
                        {cartItems.map((item) => {
                            const numericPrice = Number(
                                item.price.replace(/[^\d.]/g, "")
                            );

                            const itemTotal = numericPrice * item.quantity;

                            return (
                                <div
                                    key={item.id}
                                    className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
                                >
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                        {/* Product Image */}
                                        <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-[22px] bg-gray-100 sm:h-28 sm:w-28">
                                            <ShoppingBag
                                                className="h-8 w-8 text-gray-400"
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                {item.category}
                                            </p>

                                            <h2 className="mt-1 text-lg font-bold text-gray-950">
                                                {item.name}
                                            </h2>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {item.subcategory}
                                            </p>

                                            <p className="mt-3 text-base font-semibold text-gray-900">
                                                {item.price}
                                            </p>
                                        </div>

                                        {/* Quantity */}
                                        <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                                            <div className="flex items-center rounded-full border border-gray-200 bg-gray-50">
                                                <button
                                                    type="button"
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    aria-label={`Decrease quantity of ${item.name}`}
                                                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-200 hover:text-gray-950"
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </button>

                                                <span className="min-w-8 text-center text-sm font-semibold text-gray-900">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() => increaseQuantity(item.id)}
                                                    aria-label={`Increase quantity of ${item.name}`}
                                                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-200 hover:text-gray-950"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <p className="text-sm font-bold text-gray-950">
                                                    {formatPrice(itemTotal)}
                                                </p>

                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCart(item.id)}
                                                    aria-label={`Remove ${item.name} from cart`}
                                                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Cart Summary */}
                    <aside className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-24">
                        <h2 className="text-xl font-bold text-gray-950">
                            Order Summary
                        </h2>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Subtotal</span>

                                <span className="font-semibold text-gray-950">
                                    {formatPrice(subtotal)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Delivery</span>

                                <span className="font-semibold text-gray-950">
                                    Free
                                </span>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-gray-950">
                                        Total
                                    </span>

                                    <span className="text-xl font-bold text-gray-950">
                                        {formatPrice(subtotal)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-7">
                            <Link href="/checkout" className="block">
                                <Button className="w-full">
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        </div>

                        <Link
                            href="/products"
                            className="mt-4 block text-center text-sm font-semibold text-gray-600 transition hover:text-gray-950"
                        >
                            Continue Shopping
                        </Link>
                    </aside>
                </div>
            </Container>
        </main>
    );
}