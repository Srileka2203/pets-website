import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedPets from "@/components/home/FeaturedPets";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedPets />
    </main>
  );
}