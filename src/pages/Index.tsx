
import { Header } from "@/components/Header";
import { BannerSlider } from "@/components/BannerSlider";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main className="space-y-4 sm:space-y-8">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <BannerSlider />
        </div>
        <CategoryShowcase />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default Index;
