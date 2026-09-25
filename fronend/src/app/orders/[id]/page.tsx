"use client";

import Link from "next/link";
import {
    ArrowLeft,
    MapPin,
    Package,
    User,
    CreditCard,
    PawPrint,
} from "lucide-react";
import { useParams } from "next/navigation";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getOrders } from "@/lib/orders";
import type { Order } from "@/types/order";
import { useEffect, useState } from "react";

export default function OrderDetailsPage() {
    const params = useParams<{ id: string }>();
    const orderId = params.id;

    const [order, setOrder] = useState<Order | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const orders = getOrders();

        const foundOrder = orders.find(
            (item) => item.id === orderId
        );

        setOrder(foundOrder || null);
        setIsLoading(false);
    }, [orderId]);

    /* =========================================
       LOADING
    ========================================== */

    if (isLoading) {
        return (
            <main className="relative min-h-screen overflow-hidden bg-orange-50/50 py-16">
                <div
                    aria-hidden="true"
                    className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-orange-100/60"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-teal-100/50"
                />

                <Container className="relative z-10">
                    <div className="flex min-h-[300px] items-center justify-center">
                        <div className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                <PawPrint
                                    className="h-6 w-6 text-orange-500"
                                    strokeWidth={1.5}
                                />
                            </div>

                            <p className="mt-4 font-nunito text-sm text-gray-500">
                                Loading order...
                            </p>
                        </div>
                    </div>
                </Container>
            </main>
        );
    }

    /* =========================================
       ORDER NOT FOUND
    ========================================== */

    if (!order) {
        return (
            <main className="relative min-h-screen overflow-hidden bg-orange-50/50 py-16">
                <div
                    aria-hidden="true"
                    className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-orange-100/60"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-teal-100/50"
                />

                <Container className="relative z-10">
                    <div className="mx-auto max-w-xl rounded-[28px] border border-orange-100 bg-white px-6 py-16 text-center shadow-sm">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                            <Package
                                size={28}
                                className="text-orange-500"
                                aria-hidden="true"
                            />
                        </div>

                        <h1 className="mt-6 font-quicksand text-2xl font-bold text-gray-900">
                            Order Not Found
                        </h1>

                        <p className="mt-3 font-nunito text-gray-500">
                            We could not find the order you are looking for.
                        </p>

                        <Link
                            href="/orders"
                            className="mt-8 inline-block"
                        >
                            <Button
                                className="!bg-orange-500 !text-white hover:!bg-orange-600"
                            >
                                Back to Orders
                            </Button>
                        </Link>
                    </div>
                </Container>
            </main>
        );
    }

    const formattedDate = new Date(
        order.createdAt
    ).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <main className="relative min-h-screen overflow-hidden bg-orange-50/50 py-10 sm:py-14">

            {/* =========================================
                DECORATIVE BACKGROUND
            ========================================== */}

            <div
                aria-hidden="true"
                className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-orange-100/60"
            />

            <div
                aria-hidden="true"
                className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-teal-100/50"
            />

            <Container className="relative z-10">

                {/* =========================================
                    BACK LINK
                ========================================== */}

                <Link
                    href="/orders"
                    className="inline-flex items-center gap-2 font-nunito text-sm text-gray-500 transition-colors hover:text-orange-500"
                >
                    <ArrowLeft
                        size={16}
                        aria-hidden="true"
                    />

                    Back to Orders
                </Link>

                {/* =========================================
                    HEADER
                ========================================== */}

                <div className="mt-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
                                    <PawPrint
                                        className="h-5 w-5 text-orange-500"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <p className="font-nunito text-sm text-orange-500">
                                        Order Details
                                    </p>

                                    <h1 className="font-quicksand text-3xl font-bold text-gray-900 sm:text-4xl">
                                        #
                                        {order.id.replace(
                                            "order-",
                                            ""
                                        )}
                                    </h1>
                                </div>
                            </div>

                            <p className="mt-3 font-nunito text-sm text-gray-500">
                                Placed on {formattedDate}
                            </p>
                        </div>

                        <div className="w-fit rounded-full bg-teal-100 px-4 py-2">
                            <span className="font-nunito text-sm font-semibold text-teal-700">
                                Order Confirmed
                            </span>
                        </div>

                    </div>
                </div>

                {/* =========================================
                    MAIN LAYOUT
                ========================================== */}

                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">

                    {/* =====================================
                        MAIN CONTENT
                    ====================================== */}

                    <div className="space-y-8">

                        {/* =================================
                            ORDERED ITEMS
                        ================================== */}

                        <section className="rounded-[28px] border border-orange-100 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                                    <Package
                                        size={20}
                                        className="text-orange-500"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                        Ordered Items
                                    </h2>

                                    <p className="font-nunito text-sm text-gray-500">
                                        {order.items.length}{" "}
                                        {order.items.length === 1
                                            ? "product"
                                            : "products"}
                                    </p>
                                </div>

                            </div>

                            <div className="mt-6 divide-y divide-gray-100">

                                {order.items.map((item) => (
                                    <div
                                        key={item.product.id}
                                        className="flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
                                    >
                                        <div className="min-w-0">
                                            <h3 className="font-nunito text-sm font-semibold text-gray-900">
                                                {item.product.name}
                                            </h3>

                                            <p className="mt-1 font-nunito text-sm text-gray-500">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>

                                        <p className="whitespace-nowrap font-nunito text-sm font-semibold text-orange-500">
                                            {item.product.price}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </section>

                        {/* =================================
                            CUSTOMER INFORMATION
                        ================================== */}

                        <section className="rounded-[28px] border border-teal-100 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                                    <User
                                        size={20}
                                        className="text-teal-600"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                    Customer Information
                                </h2>

                            </div>

                            <div className="mt-6 grid gap-5 sm:grid-cols-2">

                                <div>
                                    <p className="font-nunito text-xs text-gray-500">
                                        Full Name
                                    </p>

                                    <p className="mt-1 font-nunito text-sm font-semibold text-gray-900">
                                        {order.customer.fullName}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-nunito text-xs text-gray-500">
                                        Phone
                                    </p>

                                    <p className="mt-1 font-nunito text-sm font-semibold text-gray-900">
                                        {order.customer.phone}
                                    </p>
                                </div>

                                <div className="sm:col-span-2">
                                    <p className="font-nunito text-xs text-gray-500">
                                        Email
                                    </p>

                                    <p className="mt-1 font-nunito text-sm font-semibold text-gray-900">
                                        {order.customer.email}
                                    </p>
                                </div>

                            </div>
                        </section>

                        {/* =================================
                            DELIVERY ADDRESS
                        ================================== */}

                        <section className="rounded-[28px] border border-yellow-100 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                                    <MapPin
                                        size={20}
                                        className="text-yellow-600"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                    Delivery Address
                                </h2>

                            </div>

                            <div className="mt-6 font-nunito text-sm text-gray-600">
                                <p>
                                    {order.shippingAddress.address}
                                </p>

                                <p className="mt-1">
                                    {order.shippingAddress.city},{" "}
                                    {order.shippingAddress.state}
                                </p>

                                <p className="mt-1">
                                    {order.shippingAddress.postalCode}
                                </p>

                                <p className="mt-1">
                                    {order.shippingAddress.country}
                                </p>
                            </div>
                        </section>

                        {/* =================================
                            PAYMENT METHOD
                        ================================== */}

                        <section className="rounded-[28px] border border-orange-100 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                                    <CreditCard
                                        size={20}
                                        className="text-orange-500"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                    Payment Method
                                </h2>

                            </div>

                            <p className="mt-6 font-nunito text-sm font-semibold text-gray-900">
                                {order.paymentMethod === "cod"
                                    ? "Cash on Delivery"
                                    : "Online Payment"}
                            </p>
                        </section>
                    </div>

                    {/* =====================================
                        ORDER SUMMARY
                    ====================================== */}

                    <aside className="h-fit rounded-[28px] border border-orange-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                                <ShoppingBagIcon />
                            </div>

                            <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                Order Summary
                            </h2>

                        </div>

                        <div className="mt-6 space-y-4 font-nunito text-sm">

                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>

                                <span>
                                    ₹
                                    {order.subtotal.toLocaleString(
                                        "en-IN"
                                    )}
                                </span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Delivery</span>

                                <span className="font-semibold text-teal-600">
                                    {order.delivery === 0
                                        ? "Free"
                                        : `₹${order.delivery.toLocaleString(
                                              "en-IN"
                                          )}`}
                                </span>
                            </div>

                            <div className="border-t border-gray-100 pt-4">

                                <div className="flex justify-between font-quicksand text-lg font-bold text-gray-900">
                                    <span>Total</span>

                                    <span className="text-orange-500">
                                        ₹
                                        {order.total.toLocaleString(
                                            "en-IN"
                                        )}
                                    </span>
                                </div>

                            </div>
                        </div>

                        <Link
                            href="/products"
                            className="mt-6 block"
                        >
                            <Button
                                className="w-full !bg-orange-500 !text-white transition-colors hover:!bg-orange-600"
                            >
                                Continue Shopping
                            </Button>
                        </Link>

                    </aside>
                </div>

                {/* =========================================
                    BOTTOM DECORATION
                ========================================== */}

                <div className="mt-14 flex items-center justify-center gap-3">

                    <div className="h-px w-12 bg-orange-200 sm:w-20" />

                    <PawPrint
                        className="h-4 w-4 text-orange-400"
                        strokeWidth={1.5}
                    />

                    <span className="font-nunito text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                        Happy Pets. Happy Homes.
                    </span>

                    <div className="h-px w-12 bg-teal-200 sm:w-20" />

                </div>

            </Container>
        </main>
    );
}

/* Small reusable icon for the summary card */
function ShoppingBagIcon() {
    return (
        <Package
            size={20}
            className="text-orange-500"
            aria-hidden="true"
        />
    );
}