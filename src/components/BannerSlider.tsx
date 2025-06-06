
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "BEST FINDS",
      subtitle: "ALL STORE",
      discount: "30% OFF",
      buttonText: "Shop now!",
      image: "👩‍🦱",
      bgColor: "bg-gradient-to-r from-purple-100 to-pink-100"
    },
    {
      id: 2,
      title: "NEW ARRIVAL",
      subtitle: "COSMETICS",
      discount: "50% DISCOUNT",
      buttonText: "Discover",
      image: "💄",
      bgColor: "bg-gradient-to-r from-red-500 to-black"
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
    <section className="relative w-full">
      <div className="aspect-[3/1] overflow-hidden rounded-2xl relative">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`${banner.bgColor} h-full flex items-center justify-between px-8 lg:px-16`}>
              <div className="text-white space-y-4">
                <div className="space-y-2">
                  <p className="text-sm lg:text-base font-medium opacity-90">{banner.subtitle}</p>
                  <h2 className="text-3xl lg:text-5xl font-bold">{banner.title}</h2>
                  <p className="text-2xl lg:text-4xl font-bold text-yellow-300">{banner.discount}</p>
                </div>
                <Button 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-full font-semibold"
                >
                  {banner.buttonText}
                </Button>
              </div>
              <div className="text-6xl lg:text-8xl">
                {banner.image}
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
