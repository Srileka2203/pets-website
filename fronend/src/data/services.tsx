export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  price: number;
}

export const services: Service[] = [
  {
    id: "grooming",
    name: "Pet Grooming",
    description:
      "Professional grooming to keep your pet clean, healthy, and comfortable.",
    image: "/images/services/grooming/grooming.jpg",
    category: "Grooming",
    duration: "60 min",
    price: 999,
  },
  {
    id: "training",
    name: "Pet Training",
    description:
      "Friendly training sessions designed to build good habits and confidence.",
    image: "/images/services/training/training.jpg",
    category: "Training",
    duration: "45 min",
    price: 799,
  },
  {
    id: "pet-care",
    name: "Pet Care",
    description:
      "Reliable care and attention for your pet when you are away.",
    image: "/images/services/care/care.jpg",
    category: "Care",
    duration: "2 hours",
    price: 599,
  },
];