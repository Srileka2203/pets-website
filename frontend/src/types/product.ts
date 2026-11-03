export interface Product {
  id: number;
  name: string;
  category: "Food" | "Accessories" | "Toys";
  subcategory: string;
  price: string;
  rating: string;
  images: string[];
  petType: string[];
  description: string;
  inStock: boolean;
}