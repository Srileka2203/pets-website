"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Plus, Trash2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface Address {
    id: string;
    fullName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isDefault: boolean;
}

const ADDRESSES_STORAGE_KEY = "tails-tales-addresses";

export default function AddressesPage() {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
    });

    useEffect(() => {
        try {
            const storedAddresses = localStorage.getItem(
                ADDRESSES_STORAGE_KEY
            );

            if (storedAddresses) {
                setAddresses(JSON.parse(storedAddresses));
            }
        } catch (error) {
            console.error("Failed to load addresses:", error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    const saveAddresses = (updatedAddresses: Address[]) => {
        setAddresses(updatedAddresses);

        localStorage.setItem(
            ADDRESSES_STORAGE_KEY,
            JSON.stringify(updatedAddresses)
        );
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newAddress: Address = {
            id: `address-${Date.now()}`,
            ...form,
            isDefault: addresses.length === 0,
        };

        saveAddresses([...addresses, newAddress]);

        setForm({
            fullName: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
            country: "India",
        });

        setIsAdding(false);
    };

    const handleDelete = (id: string) => {
        const updatedAddresses = addresses.filter(
            (address) => address.id !== id
        );

        saveAddresses(updatedAddresses);
    };

    const handleSetDefault = (id: string) => {
        const updatedAddresses = addresses.map((address) => ({
            ...address,
            isDefault: address.id === id,
        }));

        saveAddresses(updatedAddresses);
    };

    if (!isLoaded) {
        return (
            <main className="min-h-screen bg-gray-50 py-16">
                <Container>
                    <div className="flex min-h-[300px] items-center justify-center">
                        <p className="font-nunito text-sm text-gray-500">
                            Loading addresses...
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

                {/* Header */}
                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h1 className="font-quicksand text-3xl font-bold text-gray-900 sm:text-4xl">
                            My Addresses
                        </h1>

                        <p className="mt-2 font-nunito text-gray-500">
                            Manage your saved delivery addresses.
                        </p>
                    </div>

                    {!isAdding && (
                        <Button
                            type="button"
                            onClick={() => setIsAdding(true)}
                        >
                            <Plus size={18} aria-hidden="true" />
                            <span className="ml-2">Add Address</span>
                        </Button>
                    )}
                </div>

                {/* Add Address Form */}
                {isAdding && (
                    <section className="mt-8 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="font-quicksand text-xl font-bold text-gray-900">
                            Add New Address
                        </h2>

                        <p className="mt-2 font-nunito text-sm text-gray-500">
                            Enter the address where you would like your orders
                            delivered.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
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
                                        required
                                        value={form.fullName}
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                fullName:
                                                    event.target.value,
                                            })
                                        }
                                        placeholder="Enter your full name"
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm outline-none transition focus:border-gray-400 focus:bg-white"
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
                                        required
                                        value={form.phone}
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                phone: event.target.value,
                                            })
                                        }
                                        placeholder="Enter your 10-digit phone number"
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm outline-none transition focus:border-gray-400 focus:bg-white"
                                    />
                                </div>

                                {/* Address */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="address"
                                        className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                    >
                                        Address
                                    </label>

                                    <textarea
                                        id="address"
                                        required
                                        rows={3}
                                        value={form.address}
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                address:
                                                    event.target.value,
                                            })
                                        }
                                        placeholder="Enter your full address"
                                        className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm outline-none transition focus:border-gray-400 focus:bg-white"
                                    />
                                </div>

                                {/* City */}
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                    >
                                        City
                                    </label>

                                    <input
                                        id="city"
                                        type="text"
                                        required
                                        value={form.city}
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                city: event.target.value,
                                            })
                                        }
                                        placeholder="Enter your city"
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm outline-none transition focus:border-gray-400 focus:bg-white"
                                    />
                                </div>

                                {/* State */}
                                <div>
                                    <label
                                        htmlFor="state"
                                        className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                    >
                                        State
                                    </label>

                                    <input
                                        id="state"
                                        type="text"
                                        required
                                        value={form.state}
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                state: event.target.value,
                                            })
                                        }
                                        placeholder="Enter your state"
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm outline-none transition focus:border-gray-400 focus:bg-white"
                                    />
                                </div>

                                {/* Postal Code */}
                                <div>
                                    <label
                                        htmlFor="postalCode"
                                        className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                    >
                                        Postal Code
                                    </label>

                                    <input
                                        id="postalCode"
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]{6}"
                                        maxLength={6}
                                        required
                                        value={form.postalCode}
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                postalCode:
                                                    event.target.value,
                                            })
                                        }
                                        placeholder="Enter 6-digit postal code"
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm outline-none transition focus:border-gray-400 focus:bg-white"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="mb-2 block font-nunito text-sm font-semibold text-gray-700"
                                    >
                                        Country
                                    </label>

                                    <input
                                        id="country"
                                        type="text"
                                        required
                                        value={form.country}
                                        onChange={(event) =>
                                            setForm({
                                                ...form,
                                                country:
                                                    event.target.value,
                                            })
                                        }
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm outline-none transition focus:border-gray-400 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:justify-end">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setIsAdding(false)}
                                >
                                    Cancel
                                </Button>

                                <Button type="submit">
                                    Save Address
                                </Button>
                            </div>
                        </form>
                    </section>
                )}

                {/* Saved Addresses */}
                <div className="mt-8 space-y-5">
                    {addresses.length === 0 && !isAdding ? (
                        <div className="rounded-[28px] border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                                <MapPin
                                    size={28}
                                    className="text-gray-600"
                                    aria-hidden="true"
                                />
                            </div>

                            <h2 className="mt-6 font-quicksand text-xl font-bold text-gray-900">
                                No Saved Addresses
                            </h2>

                            <p className="mx-auto mt-2 max-w-md font-nunito text-sm text-gray-500">
                                Add a delivery address to make checkout
                                faster.
                            </p>
                        </div>
                    ) : (
                        addresses.map((address) => (
                            <article
                                key={address.id}
                                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="flex gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gray-100">
                                            <MapPin
                                                size={20}
                                                className="text-gray-700"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h2 className="font-quicksand text-lg font-bold text-gray-900">
                                                    {address.fullName}
                                                </h2>

                                                {address.isDefault && (
                                                    <span className="rounded-full bg-gray-900 px-3 py-1 font-nunito text-xs font-semibold text-white">
                                                        Default
                                                    </span>
                                                )}
                                            </div>

                                            <p className="mt-2 font-nunito text-sm text-gray-600">
                                                {address.address}
                                            </p>

                                            <p className="mt-1 font-nunito text-sm text-gray-600">
                                                {address.city},{" "}
                                                {address.state}{" "}
                                                {address.postalCode}
                                            </p>

                                            <p className="mt-1 font-nunito text-sm text-gray-600">
                                                {address.country}
                                            </p>

                                            <p className="mt-3 font-nunito text-sm text-gray-500">
                                                Phone: {address.phone}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(address.id)
                                        }
                                        className="inline-flex items-center gap-2 self-start font-nunito text-sm text-gray-500 transition-colors hover:text-gray-900"
                                    >
                                        <Trash2
                                            size={16}
                                            aria-hidden="true"
                                        />
                                        Delete
                                    </button>
                                </div>

                                {!address.isDefault && (
                                    <div className="mt-5 border-t border-gray-200 pt-5">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleSetDefault(
                                                    address.id
                                                )
                                            }
                                            className="font-nunito text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900"
                                        >
                                            Set as default address
                                        </button>
                                    </div>
                                )}
                            </article>
                        ))
                    )}
                </div>
            </Container>
        </main>
    );
}