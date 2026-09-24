"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
        <main className="min-h-screen bg-gray-50 py-16 sm:py-20">
            <Container>
                <div className="mx-auto max-w-md">
                    <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="text-center">
                            <h1 className="font-quicksand text-3xl font-bold text-gray-900">
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
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
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
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
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
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
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
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                                />
                            </div>

                            {/* Error */}
                            {error && (
                                <p
                                    role="alert"
                                    className="font-nunito text-sm text-gray-600"
                                >
                                    {error}
                                </p>
                            )}

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Creating Account..."
                                    : "Create Account"}
                            </Button>
                        </form>

                        <p className="mt-6 text-center font-nunito text-sm text-gray-500">
                            Already have an account?{" "}

                            <Link
                                href="/login"
                                className="font-semibold text-gray-900 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
}