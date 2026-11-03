"use client";

import Link from "next/link";
import { ArrowLeft, Package, PawPrint, ShoppingBag } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getOrders } from "@/lib/orders";
import type { Order } from "@/types/order";

import { useEffect, useState } from "react";

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedOrders = getOrders();
        setOrders(storedOrders);
        setIsLoaded(true);
    }, []);

    /* =========================================
       LOADING
    ========================================== */

    if (!isLoaded) {
        return (
            <main className="relative min-h-screen overflow-hidden bg-orange-50/50 py-16">
                {/* Decorative circles */}

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
                                Loading orders...
                            </p>
                        </div>
                    </div>
                </Container>
            </main>
        );
    }

    /* =========================================
       EMPTY ORDERS
    ========================================== */

    if (orders.length === 0) {
        return (
            <main className="relative min-h-screen overflow-hidden bg-orange-50/50 py-16 sm:py-20">
                {/* Decorative circles */}

                <div
                    aria-hidden="true"
                    className="absolute -left-28 top-10 h-60 w-60 rounded-full bg-orange-100/70"
                />

                <div
                    aria-hidden="true"
                    className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-teal-100/60"
                />

                <Container className="relative z-10">
                    <div className="mx-auto flex max-w-xl flex-col items-center rounded-[28px] border border-orange-100 bg-white px-6 py-16 text-center shadow-sm">

                        {/* Icon */}

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                            <ShoppingBag
                                size={28}
                                className="text-orange-500"
                                aria-hidden="true"
                            />
                        </div>

                        <h1 className="font-quicksand text-2xl font-bold text-gray-900">
                            No Orders Yet
                        </h1>

                        <p className="mt-3 max-w-md font-nunito text-gray-500">
                            You have not placed any orders yet. Start
                            shopping to place your first order.
                        </p>

                        <Link href="/products" className="mt-8">
                            <Button
                                className="!bg-orange-500 !text-white transition-colors hover:!bg-orange-600"
                            >
                                Start Shopping
                            </Button>
                        </Link>
                    </div>

                    {/* Bottom decoration */}

                    <div className="mt-10 flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-orange-200" />

                        <PawPrint
                            className="h-4 w-4 text-orange-400"
                            strokeWidth={1.5}
                        />

                        <div className="h-px w-12 bg-teal-200" />
                    </div>
                </Container>
            </main>
        );
    }

    /* =========================================
       ORDERS
    ========================================== */

    return (
        <main className="relative min-h-screen overflow-hidden bg-orange-50/50 py-10 sm:py-14">

            {/* Decorative circles */}

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
                    PAGE HEADER
                ========================================== */}

                <div className="mb-8">

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-nunito text-sm text-gray-500 transition-colors hover:text-orange-500"
                    >
                        <ArrowLeft
                            size={16}
                            aria-hidden="true"
                        />

                        Back to Home
                    </Link>

                    <div className="mt-5 flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
                            <PawPrint
                                className="h-5 w-5 text-orange-500"
                                strokeWidth={1.5}
                            />
                        </div>

                        <div>
                            <h1 className="font-quicksand text-3xl font-bold text-gray-900 sm:text-4xl">
                                My Orders
                            </h1>

                            <p className="mt-1 font-nunito text-gray-500">
                                View your recently placed orders.
                            </p>
                        </div>

                    </div>
                </div>

                {/* =========================================
                    ORDER LIST
                ========================================== */}

                <div className="space-y-5">

                    {orders.map((order, index) => (
                        <article
                            key={order.id}
                            className={`rounded-[28px] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                                index % 3 === 0
                                    ? "border-orange-100"
                                    : index % 3 === 1
                                    ? "border-teal-100"
                                    : "border-yellow-100"
                            }`}
                        >

                            {/* Order Header */}

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-start gap-4">

                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                                            index % 3 === 0
                                                ? "bg-orange-100"
                                                : index % 3 === 1
                                                ? "bg-teal-100"
                                                : "bg-yellow-100"
                                        }`}
                                    >
                                        <Package
                                            size={22}
                                            className={
                                                index % 3 === 0
                                                    ? "text-orange-500"
                                                    : index % 3 === 1
                                                    ? "text-teal-500"
                                                    : "text-yellow-600"
                                            }
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="font-quicksand text-lg font-bold text-gray-900">
                                            Order #
                                            {order.id.replace(
                                                "order-",
                                                ""
                                            )}
                                        </h2>

                                        <p className="mt-1 font-nunito text-sm text-gray-500">
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                            )}
                                        </p>
                                    </div>

                                </div>

                                {/* Total */}

                                <div className="sm:text-right">
                                    <p className="font-nunito text-sm text-gray-500">
                                        Total
                                    </p>

                                    <p
                                        className={`mt-1 font-quicksand text-xl font-bold ${
                                            index % 3 === 0
                                                ? "text-orange-500"
                                                : index % 3 === 1
                                                ? "text-teal-500"
                                                : "text-yellow-600"
                                        }`}
                                    >
                                        ₹
                                        {order.total.toLocaleString(
                                            "en-IN"
                                        )}
                                    </p>
                                </div>

                            </div>

                            {/* Divider */}

                            <div className="my-6 border-t border-gray-100" />

                            {/* Order Footer */}

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <p className="font-nunito text-sm text-gray-600">
                                        {order.items.length}{" "}
                                        {order.items.length === 1
                                            ? "item"
                                            : "items"}
                                    </p>

                                    <p className="mt-1 font-nunito text-sm text-gray-500">
                                        Payment:{" "}
                                        {order.paymentMethod === "cod"
                                            ? "Cash on Delivery"
                                            : "Online Payment"}
                                    </p>
                                </div>

                                <Link
                                    href={`/orders/${order.id}`}
                                >
                                    <Button
                                        variant="outline"
                                        className={`transition-colors ${
                                            index % 3 === 0
                                                ? "hover:border-orange-300 hover:text-orange-500"
                                                : index % 3 === 1
                                                ? "hover:border-teal-300 hover:text-teal-500"
                                                : "hover:border-yellow-300 hover:text-yellow-600"
                                        }`}
                                    >
                                        View Order
                                    </Button>
                                </Link>

                            </div>

                        </article>
                    ))}

                </div>

                {/* Bottom decoration */}

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