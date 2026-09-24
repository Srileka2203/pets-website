"use client";

import Link from "next/link";
import { ArrowLeft, Package, MapPin, User, CreditCard } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Order } from "@/types/order";

const ORDERS_STORAGE_KEY = "tails-tales-orders";

interface OrderDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function OrderDetailsPage({
    params,
}: OrderDetailsPageProps) {
    const [order, setOrder] = useState<Order | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        const loadOrder = async () => {
            try {
                const resolvedParams = await params;
                const id = resolvedParams.id;

                setOrderId(id);

                const storedOrders =
                    localStorage.getItem(ORDERS_STORAGE_KEY);

                if (!storedOrders) {
                    return;
                }

                const orders = JSON.parse(
                    storedOrders
                ) as Order[];

                const foundOrder = orders.find(
                    (item) => item.id === id
                );

                if (foundOrder) {
                    setOrder(foundOrder);
                }
            } catch (error) {
                console.error(
                    "Failed to load order:",
                    error
                );
            } finally {
                setIsLoading(false);
            }
        };

        loadOrder();
    }, [params]);

    if (isLoading) {
        return (
            <main className="min-h-screen bg-gray-50 py-16">
                <Container>
                    <div className="flex min-h-[300px] items-center justify-center">
                        <p className="font-nunito text-sm text-gray-500">
                            Loading order...
                        </p>
                    </div>
                </Container>
            </main>
        );
    }

    if (!order) {
        return (
            <main className="min-h-screen bg-gray-50 py-16">
                <Container>
                    <div className="mx-auto max-w-xl rounded-[28px] border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                            <Package
                                size={28}
                                className="text-gray-600"
                                aria-hidden="true"
                            />
                        </div>

                        <h1 className="mt-6 font-quicksand text-2xl font-bold text-gray-900">
                            Order Not Found
                        </h1>

                        <p className="mt-3 font-nunito text-sm text-gray-500">
                            We could not find the requested order.
                        </p>

                        <div className="mt-8">
                            <Link href="/account/orders">
                                <Button>
                                    Back to Orders
                                </Button>
                            </Link>
                        </div>
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
        <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
            <Container>
                {/* Back */}
                <Link
                    href="/account/orders"
                    className="inline-flex items-center gap-2 font-nunito text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                    <ArrowLeft
                        size={16}
                        aria-hidden="true"
                    />
                    Back to Orders
                </Link>

                {/* Header */}
                <div className="mt-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="font-nunito text-sm text-gray-500">
                                Order Details
                            </p>

                            <h1 className="mt-1 font-quicksand text-3xl font-bold text-gray-900 sm:text-4xl">
                                {order.id}
                            </h1>
                        </div>

                        <div className="font-nunito text-sm text-gray-500">
                            {formattedDate}
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
                    {/* Main content */}
                    <div className="space-y-8">
                        {/* Products */}
                        <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
                                    <Package
                                        size={20}
                                        className="text-gray-700"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                        Ordered Products
                                    </h2>

                                    <p className="mt-1 font-nunito text-sm text-gray-500">
                                        {order.items.length}{" "}
                                        product
                                        {order.items.length !==
                                        1
                                            ? "s"
                                            : ""}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 divide-y divide-gray-200">
                                {order.items.map(
                                    (item) => (
                                        <div
                                            key={
                                                item.product
                                                    .id
                                            }
                                            className="flex items-start justify-between gap-5 py-5 first:pt-0 last:pb-0"
                                        >
                                            <div>
                                                <h3 className="font-nunito text-sm font-semibold text-gray-900">
                                                    {
                                                        item
                                                            .product
                                                            .name
                                                    }
                                                </h3>

                                                <p className="mt-1 font-nunito text-sm text-gray-500">
                                                    Quantity:{" "}
                                                    {
                                                        item.quantity
                                                    }
                                                </p>
                                            </div>

                                            <p className="whitespace-nowrap font-nunito text-sm font-semibold text-gray-900">
                                                {
                                                    item
                                                        .product
                                                        .price
                                                }
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </section>

                        {/* Customer Information */}
                        <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
                                    <User
                                        size={20}
                                        className="text-gray-700"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                    Customer Information
                                </h2>
                            </div>

                            <div className="mt-6 space-y-3 font-nunito text-sm">
                                <div>
                                    <p className="text-gray-500">
                                        Full Name
                                    </p>

                                    <p className="mt-1 font-semibold text-gray-900">
                                        {
                                            order
                                                .customer
                                                .fullName
                                        }
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500">
                                        Email
                                    </p>

                                    <p className="mt-1 font-semibold text-gray-900">
                                        {
                                            order
                                                .customer
                                                .email
                                        }
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500">
                                        Phone
                                    </p>

                                    <p className="mt-1 font-semibold text-gray-900">
                                        {
                                            order
                                                .customer
                                                .phone
                                        }
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Delivery Address */}
                        <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
                                    <MapPin
                                        size={20}
                                        className="text-gray-700"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                    Delivery Address
                                </h2>
                            </div>

                            <div className="mt-6 font-nunito text-sm text-gray-600">
                                <p>
                                    {
                                        order
                                            .shippingAddress
                                            .address
                                    }
                                </p>

                                <p className="mt-1">
                                    {
                                        order
                                            .shippingAddress
                                            .city
                                    }
                                    ,{" "}
                                    {
                                        order
                                            .shippingAddress
                                            .state
                                    }{" "}
                                    {
                                        order
                                            .shippingAddress
                                            .postalCode
                                    }
                                </p>

                                <p className="mt-1">
                                    {
                                        order
                                            .shippingAddress
                                            .country
                                    }
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Order Summary */}
                    <aside className="h-fit rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
                        <h2 className="font-quicksand text-xl font-bold text-gray-900">
                            Order Summary
                        </h2>

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

                                <span>
                                    {order.delivery ===
                                    0
                                        ? "Free"
                                        : `₹${order.delivery.toLocaleString(
                                              "en-IN"
                                          )}`}
                                </span>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between font-quicksand text-lg font-bold text-gray-900">
                                    <span>Total</span>

                                    <span>
                                        ₹
                                        {order.total.toLocaleString(
                                            "en-IN"
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="my-6 border-t border-gray-200" />

                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100">
                                <CreditCard
                                    size={18}
                                    className="text-gray-700"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <p className="font-nunito text-xs text-gray-500">
                                    Payment Method
                                </p>

                                <p className="mt-1 font-nunito text-sm font-semibold text-gray-900">
                                    {order.paymentMethod ===
                                    "cod"
                                        ? "Cash on Delivery"
                                        : "Online Payment"}
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}