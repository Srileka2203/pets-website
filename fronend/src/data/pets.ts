export interface Pet {
  id: number;
  name: string;
  breed: string;
  category: string;
  age: string;
  gender: string;
  location: string;
  price: string;
  rating: string;
  description: string;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    category: "Dogs",
    age: "2 years",
    gender: "Male",
    location: "Chennai",
    price: "₹25,000",
    rating: "4.9",
    description:
      "Max is a friendly and playful Golden Retriever who loves spending time with people. He is looking for a caring family and a loving forever home.",
  },

  {
    id: 2,
    name: "Luna",
    breed: "Persian Cat",
    category: "Cats",
    age: "1 year",
    gender: "Female",
    location: "Chennai",
    price: "₹18,000",
    rating: "4.8",
    description:
      "Luna is a gentle and affectionate Persian cat who enjoys quiet spaces, cuddles and playful moments.",
  },

  {
    id: 3,
    name: "Coco",
    breed: "Cockatiel",
    category: "Birds",
    age: "8 months",
    gender: "Female",
    location: "Coimbatore",
    price: "₹8,000",
    rating: "4.7",
    description:
      "Coco is a cheerful Cockatiel with a playful personality and a curious nature.",
  },

  {
    id: 4,
    name: "Bunny",
    breed: "Holland Lop",
    category: "Rabbits",
    age: "10 months",
    gender: "Male",
    location: "Bangalore",
    price: "₹6,500",
    rating: "4.9",
    description:
      "Bunny is a gentle Holland Lop who loves exploring, playing and spending time with caring families.",
  },

  {
    id: 5,
    name: "Nemo",
    breed: "Goldfish",
    category: "Fish",
    age: "6 months",
    gender: "Male",
    location: "Chennai",
    price: "₹1,500",
    rating: "4.8",
    description:
      "Nemo is a beautiful and peaceful Goldfish that can bring a calming touch to your home.",
  },

  {
    id: 6,
    name: "Milo",
    breed: "Syrian Hamster",
    category: "Hamsters",
    age: "7 months",
    gender: "Male",
    location: "Coimbatore",
    price: "₹2,500",
    rating: "4.9",
    description:
      "Milo is a small and energetic Syrian Hamster with a curious and lovable personality.",
  },
];