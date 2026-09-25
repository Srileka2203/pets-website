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
      className={`
        sm:flex-1
        border-[#FF7043]
        bg-[#FF7043]
        text-white
        shadow-sm
        transition-all
        duration-200
        hover:border-[#E85D35]
        hover:bg-[#E85D35]
        hover:shadow-md
        disabled:border-[#D9DEDF]
        disabled:bg-[#E5E9EA]
        disabled:text-[#8A9498]
        disabled:shadow-none
      `}
    >
      {product.inStock ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
}