"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  itemId: number | string;
  itemName?: string;
  className?: string;
}

export default function FavoriteButton({
  itemId,
  itemName = "item",
  className = "",
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((previous) => !previous);
  };

  return (
    <button
      type="button"
      onClick={handleFavorite}
      aria-label={
        isFavorite
          ? `Remove ${itemName} from favourites`
          : `Add ${itemName} to favourites`
      }
      aria-pressed={isFavorite}
      data-item-id={itemId}
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
        isFavorite
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-200 bg-white text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
      } ${className}`}
    >
      <Heart
        className="h-5 w-5"
        fill={isFavorite ? "currentColor" : "none"}
        strokeWidth={1.6}
      />
    </button>
  );
}