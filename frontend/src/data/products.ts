export interface Product {
  id: number;
  name: string;
  category: "Food" | "Accessories" | "Toys";
  subcategory: string;
  price: string;
  rating: string;
  description: string;
  image: string;
  images: string[];
  petType: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Puppy Food",
    category: "Food",
    subcategory: "Dog Food",
    price: "₹1,299",
    rating: "4.9",
    description:
      "Nutritious premium food specially prepared to support healthy growth and development for puppies.",
    image: "",
    images: [],
    petType: ["Dogs"],
    inStock: true,
  },

  {
    id: 2,
    name: "Healthy Adult Dog Food",
    category: "Food",
    subcategory: "Dog Food",
    price: "₹1,599",
    rating: "4.8",
    description:
      "Balanced everyday nutrition for adult dogs with carefully selected ingredients.",
    image: "",
    images: [],
    petType: ["Dogs"],
    inStock: true,
  },

  {
    id: 3,
    name: "Premium Cat Food",
    category: "Food",
    subcategory: "Cat Food",
    price: "₹999",
    rating: "4.8",
    description:
      "A balanced and tasty meal designed to support the health and energy of cats.",
    image: "",
    images: [],
    petType: ["Cats"],
    inStock: true,
  },

  {
    id: 4,
    name: "Adjustable Pet Collar",
    category: "Accessories",
    subcategory: "Collars",
    price: "₹499",
    rating: "4.7",
    description:
      "A comfortable adjustable collar designed for everyday use.",
    image: "",
    images: [],
    petType: ["Dogs", "Cats"],
    inStock: true,
  },

  {
    id: 5,
    name: "Cozy Pet Bed",
    category: "Accessories",
    subcategory: "Beds",
    price: "₹1,499",
    rating: "4.9",
    description:
      "A soft and comfortable resting space for your beloved companion.",
    image: "",
    images: [],
    petType: ["Dogs", "Cats", "Rabbits"],
    inStock: true,
  },

  {
    id: 6,
    name: "Interactive Chew Toy",
    category: "Toys",
    subcategory: "Dog Toys",
    price: "₹399",
    rating: "4.8",
    description:
      "An engaging toy designed to keep pets active, entertained and mentally stimulated.",
    image: "",
    images: [],
    petType: ["Dogs"],
    inStock: true,
  },

  {
    id: 7,
    name: "Cat Play Ball",
    category: "Toys",
    subcategory: "Cat Toys",
    price: "₹299",
    rating: "4.7",
    description:
      "A playful toy that encourages cats to stay active and curious.",
    image: "",
    images: [],
    petType: ["Cats"],
    inStock: true,
  },

  {
    id: 8,
    name: "Rope Tug Toy",
    category: "Toys",
    subcategory: "Dog Toys",
    price: "₹449",
    rating: "4.8",
    description:
      "A durable rope toy made for interactive play between pets and their families.",
    image: "",
    images: [],
    petType: ["Dogs"],
    inStock: true,
  },
];