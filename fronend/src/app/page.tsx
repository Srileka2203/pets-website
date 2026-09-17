import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedPets from "@/components/home/FeaturedPets";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedPets />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}