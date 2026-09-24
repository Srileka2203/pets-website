import type { Order } from "@/types/order";

const ORDERS_STORAGE_KEY = "tails-tales-orders";

export function getOrders(): Order[] {
    if (typeof window === "undefined") {
        return [];
    }

    try {
        const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);

        if (!storedOrders) {
            return [];
        }

        return JSON.parse(storedOrders) as Order[];
    } catch (error) {
        console.error("Failed to load orders:", error);
        return [];
    }
}

export function saveOrder(order: Order): void {
    if (typeof window === "undefined") {
        return;
    }

    try {
        const existingOrders = getOrders();

        const updatedOrders = [order, ...existingOrders];

        localStorage.setItem(
            ORDERS_STORAGE_KEY,
            JSON.stringify(updatedOrders)
        );
    } catch (error) {
        console.error("Failed to save order:", error);
    }
}