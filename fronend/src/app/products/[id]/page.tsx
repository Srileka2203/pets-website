import Link from "next/link";
import { ArrowLeft, Check, Heart, PawPrint, Star } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ImageGallery from "@/components/ui/ImageGallery";
import FavoriteButton from "@/components/ui/FavoriteButton";
import AddToCartButton from "@/components/products/AddToCartButton";

import { products } from "@/data/products";

interface ProductDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const categoryStyles = {
    Food: {
        accent: "text-orange-500",
        accentHover: "hover:text-orange-600",
        softBg: "bg-orange-50",
        iconBg: "bg-orange-100",
        border: "border-orange-200",
        line: "bg-orange-200",
    },

    Accessories: {
        accent: "text-teal-500",
        accentHover: "hover:text-teal-600",
        softBg: "bg-teal-50",
        iconBg: "bg-teal-100",
        border: "border-teal-200",
        line: "bg-teal-200",
    },

    Toys: {
        accent: "text-yellow-600",
        accentHover: "hover:text-yellow-700",
        softBg: "bg-yellow-50",
        iconBg: "bg-yellow-100",
        border: "border-yellow-200",
        line: "bg-yellow-200",
    },
} as const;

export default async function ProductDetailsPage({
    params,
}: ProductDetailsPageProps) {
    const { id } = await params;

    const product = products.find(
        (item) => item.id === Number(id)
    );

    /* Product not found */
    if (!product) {
        return (
            <main className="bg-white">
                <section className="min-h-[70vh] py-20">
                    <Container>
                        <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                                <PawPrint
                                    className="h-8 w-8 text-gray-400"
                                    strokeWidth={1.4}
                                />
                            </div>

                            <h1 className="mt-6 text-3xl font-bold text-gray-900">
                                Product Not Found
                            </h1>

                            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                                We couldn't find the product you're looking
                                for.
                            </p>

                            <Link href="/products" className="mt-7">
                                <Button>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Products
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </section>
            </main>
        );
    }

    const colors = categoryStyles[product.category];

    return (
        <main className="bg-white">

            {/* =========================================
                PRODUCT DETAIL
            ========================================== */}

            <section className="py-12 sm:py-16 lg:py-20">
                <Container>

                    {/* Back Link */}

                    <Link
                        href="/products"
                        className={`mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors ${colors.accentHover}`}
                    >
                        <ArrowLeft
                            className="h-4 w-4"
                            strokeWidth={1.7}
                        />

                        Back to Products
                    </Link>

                    {/* Product Layout */}

                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

                        {/* =========================================
                            LEFT — PRODUCT GALLERY
                        ========================================== */}

                        <div>
                            <ImageGallery
                                images={product.images}
                                alt={product.name}
                            />
                        </div>

                        {/* =========================================
                            RIGHT — PRODUCT INFORMATION
                        ========================================== */}

                        <div className="flex flex-col justify-center">

                            {/* Category */}

                            <p
                                className={`text-sm font-semibold uppercase tracking-[0.2em] ${colors.accent}`}
                            >
                                {product.category}
                            </p>

                            {/* Product Name */}

                            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                {product.name}
                            </h1>

                            {/* Rating */}

                            <div className="mt-5 flex items-center gap-3">

                                <div
                                    className={`flex items-center gap-1.5 rounded-full ${colors.softBg} px-3 py-1.5`}
                                >
                                    <Star
                                        className={`h-4 w-4 fill-current ${colors.accent}`}
                                        strokeWidth={1.5}
                                    />

                                    <span
                                        className={`text-sm font-semibold ${colors.accent}`}
                                    >
                                        {product.rating}
                                    </span>
                                </div>

                                <span className="text-sm text-gray-400">
                                    Customer rating
                                </span>

                            </div>

                            {/* Price */}

                            <p
                                className={`mt-7 text-3xl font-bold ${colors.accent}`}
                            >
                                {product.price}
                            </p>

                            {/* Description */}

                            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
                                {product.description}
                            </p>

                            {/* Subcategory + Pet Types */}

                            <div className="mt-7 flex flex-wrap gap-2">

                                <span
                                    className={`rounded-full ${colors.softBg} px-4 py-2 text-sm font-medium ${colors.accent}`}
                                >
                                    {product.subcategory}
                                </span>

                                {product.petType.map((type) => (
                                    <span
                                        key={type}
                                        className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600"
                                    >
                                        {type}
                                    </span>
                                ))}

                            </div>

                            {/* Stock */}

                            <div className="mt-7 flex items-center gap-2">

                                <span
                                    className={`h-2.5 w-2.5 rounded-full ${
                                        product.inStock
                                            ? colors.accent.replace(
                                                  "text-",
                                                  "bg-"
                                              )
                                            : "bg-gray-400"
                                    }`}
                                />

                                <span className="text-sm font-medium text-gray-600">
                                    {product.inStock
                                        ? "In Stock"
                                        : "Currently unavailable"}
                                </span>

                            </div>

                            {/* Actions */}

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <AddToCartButton
                                    product={product}
                                />

                                {/* Wishlist Button */}

                                <FavoriteButton
                                    itemId={product.id}
                                    itemName={product.name}
                                />

                            </div>

                            {/* Product Features */}

                            <Card
                                className={`mt-8 rounded-[24px] ${colors.softBg} ${colors.border} p-6 shadow-none`}
                            >

                                <div className="grid gap-5 sm:grid-cols-2">

                                    {/* Quality */}

                                    <div className="flex items-start gap-3">

                                        <div
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${colors.iconBg}`}
                                        >
                                            <Check
                                                className={`h-4 w-4 ${colors.accent}`}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">
                                                Quality Products
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                Carefully selected for your pets.
                                            </p>
                                        </div>

                                    </div>

                                    {/* Pet Friendly */}

                                    <div className="flex items-start gap-3">

                                        <div
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${colors.iconBg}`}
                                        >
                                            <PawPrint
                                                className={`h-4 w-4 ${colors.accent}`}
                                                strokeWidth={1.6}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">
                                                Pet Friendly
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                Designed with pets in mind.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </Card>

                        </div>

                    </div>

                </Container>
            </section>

        </main>
    );
}