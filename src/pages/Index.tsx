
import { Header } from "@/components/Header";
import { BannerSlider } from "@/components/BannerSlider";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white doodle-bg">
      <Header />
      <main className="space-y-8 pt-20">
        <div className="container mx-auto px-4 py-8">
          <BannerSlider />
        </div>
        <CategoryShowcase />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
