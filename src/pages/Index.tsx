
import { Header } from "@/components/Header";
import { BannerSlider } from "@/components/BannerSlider";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main className="space-y-8">
        <div className="container mx-auto px-4 py-8">
          <BannerSlider />
        </div>
        <CategoryShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
