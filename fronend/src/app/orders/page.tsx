"use client";

import Link from "next/link";
import { ArrowLeft, Package, ShoppingBag } from "lucide-react";

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

    if (!isLoaded) {
        return (
            <main className="min-h-screen bg-gray-50 py-16">
                <Container>
                    <div className="flex min-h-[300px] items-center justify-center">
                        <p className="font-nunito text-sm text-gray-500">
                            Loading orders...
                        </p>
                    </div>
                </Container>
            </main>
        );
    }

    if (orders.length === 0) {
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
                            No Orders Yet
                        </h1>

                        <p className="mt-3 max-w-md font-nunito text-gray-500">
                            You have not placed any orders yet. Start shopping to
                            place your first order.
                        </p>

                        <Link href="/products" className="mt-8">
                            <Button>Start Shopping</Button>
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
                        href="/"
                        className="inline-flex items-center gap-2 font-nunito text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                        <ArrowLeft size={16} aria-hidden="true" />
                        Back to Home
                    </Link>

                    <h1 className="mt-5 font-quicksand text-3xl font-bold text-gray-900 sm:text-4xl">
                        My Orders
                    </h1>

                    <p className="mt-2 font-nunito text-gray-500">
                        View your recently placed orders.
                    </p>
                </div>

                <div className="space-y-5">
                    {orders.map((order) => (
                        <article
                            key={order.id}
                            className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm"
                        >
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-100">
                                        <Package
                                            size={22}
                                            className="text-gray-700"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="font-quicksand text-lg font-bold text-gray-900">
                                            Order #{order.id.replace("order-", "")}
                                        </h2>

                                        <p className="mt-1 font-nunito text-sm text-gray-500">
                                            {new Date(order.createdAt).toLocaleDateString(
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

                                <div className="sm:text-right">
                                    <p className="font-nunito text-sm text-gray-500">
                                        Total
                                    </p>

                                    <p className="mt-1 font-quicksand text-xl font-bold text-gray-900">
                                        ₹{order.total.toLocaleString("en-IN")}
                                    </p>
                                </div>
                            </div>

                            <div className="my-6 border-t border-gray-200" />

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

                                <Link href={`/orders/${order.id}`}>
                                    <Button variant="outline">
                                        View Order
                                    </Button>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </main>
    );
}