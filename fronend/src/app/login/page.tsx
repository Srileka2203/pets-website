"use client";

import Link from "next/link";
import { PawPrint, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import useAuth from "@/hooks/useAuth";

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const success = await login(email, password);

        if (!success) {
            setError("Invalid email or password.");
            return;
        }

        router.push("/account");
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-orange-50/50 py-16 sm:py-20">

            {/* =========================================
                DECORATIVE BACKGROUND
            ========================================== */}

            <div
                aria-hidden="true"
                className="absolute -left-28 top-16 h-60 w-60 rounded-full bg-orange-100/70"
            />

            <div
                aria-hidden="true"
                className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-teal-100/60"
            />

            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-yellow-100/50"
            />

            <Container className="relative z-10">

                <div className="mx-auto max-w-md">

                    {/* =================================
                        LOGIN CARD
                    ================================== */}

                    <div className="rounded-[28px] border border-orange-100 bg-white p-6 shadow-sm sm:p-8">

                        {/* Header */}

                        <div className="text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                                <PawPrint
                                    className="h-7 w-7 text-orange-500"
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h1 className="mt-5 font-quicksand text-3xl font-bold text-gray-900">
                                Welcome Back
                            </h1>

                            <p className="mt-2 font-nunito text-sm text-gray-500">
                                Login to continue to your account.
                            </p>

                        </div>

                        {/* =================================
                            FORM
                        ================================== */}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >

                            {/* Email */}

                            <div>

                                <label
                                    htmlFor="email"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Email Address
                                </label>

                                <div className="relative">

                                    <Mail
                                        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-orange-400"
                                        strokeWidth={1.7}
                                    />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(
                                                event.target.value
                                            )
                                        }
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-2xl border border-gray-200 bg-orange-50/40 py-3 pl-11 pr-4 font-nunito text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100"
                                    />

                                </div>

                            </div>

                            {/* Password */}

                            <div>

                                <label
                                    htmlFor="password"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Password
                                </label>

                                <div className="relative">

                                    <Lock
                                        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-500"
                                        strokeWidth={1.7}
                                    />

                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(
                                                event.target.value
                                            )
                                        }
                                        placeholder="Enter your password"
                                        required
                                        className="w-full rounded-2xl border border-gray-200 bg-teal-50/40 py-3 pl-11 pr-4 font-nunito text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal-300 focus:bg-white focus:ring-2 focus:ring-teal-100"
                                    />

                                </div>

                            </div>

                            {/* Error */}

                            {error && (
                                <div
                                    role="alert"
                                    className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3"
                                >
                                    <p className="font-nunito text-sm text-red-600">
                                        {error}
                                    </p>
                                </div>
                            )}

                            {/* Submit */}

                            <Button
                                type="submit"
                                className="w-full !bg-orange-500 !text-white transition-colors hover:!bg-orange-600"
                            >
                                Login
                            </Button>

                        </form>

                        {/* Register */}

                        <p className="mt-6 text-center font-nunito text-sm text-gray-500">

                            Don't have an account?{" "}

                            <Link
                                href="/register"
                                className="font-semibold text-teal-600 transition-colors hover:text-teal-700 hover:underline"
                            >
                                Create an account
                            </Link>

                        </p>

                    </div>

                    {/* Bottom decoration */}

                    <div className="mt-8 flex items-center justify-center gap-3">

                        <div className="h-px w-12 bg-orange-200" />

                        <PawPrint
                            className="h-4 w-4 text-orange-400"
                            strokeWidth={1.5}
                        />

                        <span className="font-nunito text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                            Happy Pets. Happy Homes.
                        </span>

                        <div className="h-px w-12 bg-teal-200" />

                    </div>

                </div>

            </Container>
        </main>
    );
}