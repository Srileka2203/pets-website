"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PawPrint } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import useAuth from "@/hooks/useAuth";

export default function RegisterPage() {
    const router = useRouter();
    const { register } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setError("");

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();

        if (!trimmedName) {
            setError("Please enter your full name.");
            return;
        }

        if (!trimmedEmail) {
            setError("Please enter your email address.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);

        try {
            const success = await register(
                trimmedName,
                trimmedEmail,
                password
            );

            if (!success) {
                setError(
                    "An account with this email already exists."
                );
                return;
            }

            router.push("/account");
        } catch (error) {
            console.error("Registration failed:", error);

            setError(
                "Something went wrong while creating your account."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-orange-50/60 py-16 sm:py-20">

            {/* Decorative pastel circles */}

            <div
                aria-hidden="true"
                className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-orange-100/70"
            />

            <div
                aria-hidden="true"
                className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-teal-100/60"
            />

            <div
                aria-hidden="true"
                className="absolute bottom-[-100px] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-100/60"
            />

            <Container className="relative z-10">
                <div className="mx-auto max-w-md">

                    <div className="rounded-[28px] border border-orange-100 bg-white p-6 shadow-sm sm:p-8">

                        {/* Header */}

                        <div className="text-center">

                            {/* Logo Icon */}

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                                <PawPrint
                                    className="h-7 w-7 text-orange-500"
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h1 className="mt-5 font-quicksand text-3xl font-bold text-gray-900">
                                Create Account
                            </h1>

                            <p className="mt-2 font-nunito text-sm text-gray-500">
                                Create an account to manage your orders.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            {/* Full Name */}

                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    placeholder="Enter your full name"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                            </div>

                            {/* Email */}

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
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="Enter your email"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                            </div>

                            {/* Password */}

                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    placeholder="Create a password"
                                    required
                                    minLength={6}
                                    disabled={isSubmitting}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                            </div>

                            {/* Confirm Password */}

                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Confirm Password
                                </label>

                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setConfirmPassword(
                                            event.target.value
                                        )
                                    }
                                    placeholder="Confirm your password"
                                    required
                                    minLength={6}
                                    disabled={isSubmitting}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                            </div>

                            {/* Error */}

                            {error && (
                                <div className="rounded-2xl border border-pink-200 bg-pink-50 px-4 py-3">
                                    <p
                                        role="alert"
                                        className="font-nunito text-sm text-pink-600"
                                    >
                                        {error}
                                    </p>
                                </div>
                            )}

                            {/* Submit */}

                            <Button
                                type="submit"
                                className="w-full !bg-orange-500 !text-white transition-all hover:!bg-orange-600"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Creating Account..."
                                    : "Create Account"}
                            </Button>
                        </form>

                        {/* Login */}

                        <p className="mt-6 text-center font-nunito text-sm text-gray-500">
                            Already have an account?{" "}

                            <Link
                                href="/login"
                                className="font-semibold text-orange-500 transition-colors hover:text-orange-600 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>

                    {/* Bottom decoration */}

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <div className="h-px w-10 bg-orange-200" />

                        <PawPrint
                            className="h-4 w-4 text-orange-400"
                            strokeWidth={1.5}
                        />

                        <div className="h-px w-10 bg-teal-200" />
                    </div>
                </div>
            </Container>
        </main>
    );
}