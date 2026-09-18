import ProductsHero from "@/components/products/ProductsHero";
import ProductCategories from "@/components/products/ProductCategories";
import FeaturedProducts from "@/components/products/FeaturedProducts";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategories />
      <FeaturedProducts />
    </>
  );
}