"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { Product } from "@/data/products";
import { getCurrentUser } from "@/lib/auth";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  totalQuantity: number;
  subtotal: number;
  isCartLoaded: boolean;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const GUEST_CART_STORAGE_KEY = "tails-tales-cart-guest";

function getCartStorageKey(): string {
  const user = getCurrentUser();

  if (!user) {
    return GUEST_CART_STORAGE_KEY;
  }

  return `tails-tales-cart-${user.id}`;
}

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  // Load the cart belonging to the current user
  const loadUserCart = () => {
    try {
      setIsCartLoaded(false);

      const storageKey = getCartStorageKey();
      const storedCart = localStorage.getItem(storageKey);

      if (storedCart) {
        const parsedCart: CartItem[] = JSON.parse(storedCart);

        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      setCartItems([]);
    } finally {
      setIsCartLoaded(true);
    }
  };

  // Load cart when the application starts
  useEffect(() => {
    loadUserCart();
  }, []);

  // Reload cart when login/logout happens
  useEffect(() => {
    const handleAuthChange = () => {
      loadUserCart();
    };

    window.addEventListener(
      "tails-tales-auth-change",
      handleAuthChange
    );

    return () => {
      window.removeEventListener(
        "tails-tales-auth-change",
        handleAuthChange
      );
    };
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    if (!isCartLoaded) {
      return;
    }

    try {
      const storageKey = getCartStorageKey();

      localStorage.setItem(
        storageKey,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cartItems, isCartLoaded]);

  const addToCart = (product: Product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  const increaseQuantity = (productId: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalQuantity = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const numericPrice = Number(
        item.price.replace(/[^\d.]/g, "")
      );

      return total + numericPrice * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalQuantity,
        subtotal,
        isCartLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}