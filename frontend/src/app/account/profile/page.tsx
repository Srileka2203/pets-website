"use client";

import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface Profile {
    fullName: string;
    email: string;
    phone: string;
}

const PROFILE_STORAGE_KEY = "tails-tales-profile";

const defaultProfile: Profile = {
    fullName: "",
    email: "",
    phone: "",
};

export default function ProfilePage() {
    const [profile, setProfile] = useState<Profile>(defaultProfile);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        try {
            const storedProfile = localStorage.getItem(
                PROFILE_STORAGE_KEY
            );

            if (storedProfile) {
                setProfile(JSON.parse(storedProfile));
            }
        } catch (error) {
            console.error("Failed to load profile:", error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            localStorage.setItem(
                PROFILE_STORAGE_KEY,
                JSON.stringify(profile)
            );

            setIsEditing(false);
            setIsSaved(true);

            setTimeout(() => {
                setIsSaved(false);
            }, 3000);
        } catch (error) {
            console.error("Failed to save profile:", error);
        }
    };

    if (!isLoaded) {
        return (
            <main className="min-h-screen bg-gray-50 py-16">
                <Container>
                    <div className="flex min-h-[300px] items-center justify-center">
                        <p className="font-nunito text-sm text-gray-500">
                            Loading profile...
                        </p>
                    </div>
                </Container>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
            <Container>
                {/* Back to Account */}
                <Link
                    href="/account"
                    className="inline-flex items-center gap-2 font-nunito text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to Account
                </Link>

                {/* Page Header */}
                <div className="mt-6">
                    <h1 className="font-quicksand text-3xl font-bold text-gray-900 sm:text-4xl">
                        My Profile
                    </h1>

                    <p className="mt-2 font-nunito text-gray-500">
                        Manage your personal information.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="mt-8 max-w-3xl rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    {/* Profile Header */}
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
                                Profile Information
                            </h2>

                            <p className="mt-1 font-nunito text-sm text-gray-500">
                                Update your personal details.
                            </p>
                        </div>
                    </div>

                    <div className="my-8 border-t border-gray-200" />

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="fullName"
                                    type="text"
                                    value={profile.fullName}
                                    disabled={!isEditing}
                                    onChange={(event) =>
                                        setProfile((current) => ({
                                            ...current,
                                            fullName: event.target.value,
                                        }))
                                    }
                                    placeholder="Enter your full name"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white disabled:cursor-not-allowed disabled:text-gray-500"
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
                                    type="email"
                                    value={profile.email}
                                    disabled={!isEditing}
                                    onChange={(event) =>
                                        setProfile((current) => ({
                                            ...current,
                                            email: event.target.value,
                                        }))
                                    }
                                    placeholder="Enter your email address"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white disabled:cursor-not-allowed disabled:text-gray-500"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                >
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    type="tel"
                                    inputMode="numeric"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    value={profile.phone}
                                    disabled={!isEditing}
                                    onChange={(event) =>
                                        setProfile((current) => ({
                                            ...current,
                                            phone: event.target.value,
                                        }))
                                    }
                                    placeholder="Enter your 10-digit phone number"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white disabled:cursor-not-allowed disabled:text-gray-500"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                            {!isEditing ? (
                                <Button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit Profile
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setIsEditing(false)}
                                    >
                                        Cancel
                                    </Button>

                                    <Button type="submit">
                                        Save Changes
                                    </Button>
                                </>
                            )}
                        </div>

                        {/* Saved Message */}
                        {isSaved && (
                            <p className="mt-4 text-right font-nunito text-sm text-gray-600">
                                Profile updated successfully.
                            </p>
                        )}
                    </form>
                </div>
            </Container>
        </main>
    );
}