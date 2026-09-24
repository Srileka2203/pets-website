"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    ChevronRight,
    LogOut,
    MapPin,
    Package,
    User,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import useAuth from "@/hooks/useAuth";

export default function AccountPage() {
    const router = useRouter();
    const { user, logout, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/login");
        }
    }, [user, isLoading, router]);

    if (isLoading || !user) {
        return (
            <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
                <Container>
                    <div className="mx-auto max-w-xl rounded-[28px] border border-gray-200 bg-white p-8 text-center shadow-sm">
                        <p className="font-nunito text-sm text-gray-500">
                            Loading account...
                        </p>
                    </div>
                </Container>
            </main>
        );
    }

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
            <Container>
                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-nunito text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to Home
                </Link>

                {/* Page Header */}
                <div className="mt-6">
                    <h1 className="font-quicksand text-3xl font-bold text-gray-900 sm:text-4xl">
                        My Account
                    </h1>

                    <p className="mt-2 font-nunito text-gray-500">
                        Welcome back, {user.name}.
                    </p>
                </div>

                {/* Account Information */}
                <section className="mt-8 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                                <User
                                    size={24}
                                    className="text-gray-700"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                    {user.name}
                                </h2>

                                <p className="mt-1 font-nunito text-sm text-gray-500">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleLogout}
                            className="w-full sm:w-auto"
                        >
                            <LogOut size={16} aria-hidden="true" />
                            Logout
                        </Button>
                    </div>
                </section>

                {/* Account Options */}
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {/* Orders */}
                    <Link
                        href="/account/orders"
                        className="group"
                    >
                        <div className="h-full rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                                    <Package
                                        size={22}
                                        className="text-gray-700"
                                        aria-hidden="true"
                                    />
                                </div>

                                <ChevronRight
                                    size={20}
                                    className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-900"
                                    aria-hidden="true"
                                />
                            </div>

                            <h2 className="mt-6 font-quicksand text-xl font-bold text-gray-900">
                                My Orders
                            </h2>

                            <p className="mt-2 font-nunito text-sm leading-6 text-gray-500">
                                View your recent orders and track your purchases.
                            </p>
                        </div>
                    </Link>

                    {/* Profile */}
                    <Link
                        href="/account/profile"
                        className="group"
                    >
                        <div className="h-full rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                                    <User
                                        size={22}
                                        className="text-gray-700"
                                        aria-hidden="true"
                                    />
                                </div>

                                <ChevronRight
                                    size={20}
                                    className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-900"
                                    aria-hidden="true"
                                />
                            </div>

                            <h2 className="mt-6 font-quicksand text-xl font-bold text-gray-900">
                                My Profile
                            </h2>

                            <p className="mt-2 font-nunito text-sm leading-6 text-gray-500">
                                Manage your personal information and account details.
                            </p>
                        </div>
                    </Link>

                    {/* Addresses */}
                    <Link
                        href="/account/addresses"
                        className="group"
                    >
                        <div className="h-full rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                                    <MapPin
                                        size={22}
                                        className="text-gray-700"
                                        aria-hidden="true"
                                    />
                                </div>

                                <ChevronRight
                                    size={20}
                                    className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-900"
                                    aria-hidden="true"
                                />
                            </div>

                            <h2 className="mt-6 font-quicksand text-xl font-bold text-gray-900">
                                My Addresses
                            </h2>

                            <p className="mt-2 font-nunito text-sm leading-6 text-gray-500">
                                Manage your saved delivery addresses.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Orders Shortcut */}
                <section className="mt-8 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                        <div>
                            <h2 className="font-quicksand text-xl font-bold text-gray-900">
                                Looking for your orders?
                            </h2>

                            <p className="mt-2 font-nunito text-sm text-gray-500">
                                View all your recently placed orders in one place.
                            </p>
                        </div>

                        <Link href="/account/orders">
                            <Button variant="outline">
                                View Orders
                            </Button>
                        </Link>
                    </div>
                </section>
            </Container>
        </main>
    );
}