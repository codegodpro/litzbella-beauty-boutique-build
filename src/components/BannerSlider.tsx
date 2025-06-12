
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "LITZBELLA COSMETIC STORE",
      subtitle: "PREMIUM SKINCARE",
      discount: "30% OFF",
      buttonText: "Shop now!",
      image: "/Slider-1-Img-1.png",
      bgGradient: "from-black/60 to-black/40"
    },
    {
      id: 2,
      title: "NEW ARRIVALS",
      subtitle: "MAKEUP ESSENTIALS",
      discount: "25% OFF",
      buttonText: "Discover",
      image: "/Slider-1-Img-2.png",
      bgGradient: "from-purple-900/60 to-pink-900/40"
    },
    {
      id: 3,
      title: "GIFTS & SETS",
      subtitle: "PERFECT FOR ANY OCCASION",
      discount: "50% OFF",
      buttonText: "Gift",
      image: "/Slider-3-Img-1.png",
      bgGradient: "from-pink-900/60 to-rose-900/40"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">
      <div className="w-full relative">
        <div className="h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-2xl relative shadow-2xl">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className="relative h-full">
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgGradient}`}></div>
                <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-16">
                  <div className="text-white space-y-2 sm:space-y-4 animate-slide-up text-center">
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base lg:text-lg font-medium opacity-90">{banner.subtitle}</p>
                      <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight">{banner.title}</h2>
                      <p className="text-xl sm:text-3xl lg:text-5xl font-bold text-yellow-400">{banner.discount}</p>
                    </div>
                    <Button 
                      className="bg-yellow-500 text-black hover:bg-yellow-400 px-6 sm:px-8 py-3 rounded-full font-semibold hover-lift text-base sm:text-lg"
                    >
                      {banner.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 sm:p-4 rounded transition-all duration-300 z-10"
            style={{ borderRadius: '8px' }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 sm:p-4 rounded transition-all duration-300 z-10"
            style={{ borderRadius: '8px' }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 sm:space-x-4">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide ? 'w-8 sm:w-10 h-3 sm:h-4' : 'w-3 sm:w-4 h-3 sm:h-4'
                }`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-500 shadow-lg shadow-yellow-500/50' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
