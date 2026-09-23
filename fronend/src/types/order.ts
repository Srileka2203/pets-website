import { Product } from "@/data/products";

export interface OrderItem {
    product: Product;
    quantity: number;
}

export interface ShippingAddress {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface CustomerInformation {
    fullName: string;
    email: string;
    phone: string;
}

export interface Order {
    id: string;
    items: OrderItem[];
    customer: CustomerInformation;
    shippingAddress: ShippingAddress;
    paymentMethod: "cod" | "online";
    subtotal: number;
    delivery: number;
    total: number;
    createdAt: string;
}