
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PromoBanners } from "@/components/PromoBanners";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroBanner />
        <PromoBanners />
        <CategoryShowcase />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;
