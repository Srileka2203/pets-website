"use client";

import Link from "next/link";
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
        <main className="min-h-screen bg-gray-50 py-16 sm:py-20">
            <Container>
                <div className="mx-auto max-w-md">
                    <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="text-center">
                            <h1 className="font-quicksand text-3xl font-bold text-gray-900">
                                Welcome Back
                            </h1>

                            <p className="mt-2 font-nunito text-sm text-gray-500">
                                Login to continue to your account.
                            </p>
                        </div>

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
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
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
                                    placeholder="Enter your password"
                                    required
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                                />
                            </div>

                            {/* Error message */}
                            {error && (
                                <p
                                    role="alert"
                                    className="font-nunito text-sm text-gray-600"
                                >
                                    {error}
                                </p>
                            )}

                            <Button
                                type="submit"
                                className="w-full"
                            >
                                Login
                            </Button>
                        </form>

                        <p className="mt-6 text-center font-nunito text-sm text-gray-500">
                            Don't have an account?{" "}
                            <Link
                                href="/register"
                                className="font-semibold text-gray-900 hover:underline"
                            >
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
}