"use client";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";
import { Product } from "@/data/products";

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({
    product,
}: AddToCartButtonProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <Button
            disabled={!product.inStock}
            onClick={handleAddToCart}
            className="sm:flex-1"
        >
            Add to Cart
        </Button>
    );
}