"use client";

import {
    createContext,
    useContext,
    useMemo,
    useState,
    ReactNode,
} from "react";

import { Product } from "@/data/products";

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
}

const CartContext = createContext<CartContextType | undefined>(
    undefined
);

export function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

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