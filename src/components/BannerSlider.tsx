
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const BannerSlider = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const banners1 = [
    {
      id: 1,
      title: "LUXURY COLLECTION",
      subtitle: "PREMIUM SKINCARE",
      discount: "30% OFF",
      buttonText: "Shop now!",
      image: "🧴",
      bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-600"
    },
    {
      id: 2,
      title: "NEW ARRIVALS",
      subtitle: "MAKEUP ESSENTIALS",
      discount: "25% OFF",
      buttonText: "Discover",
      image: "💄",
      bgColor: "bg-gradient-to-r from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "BEST SELLERS",
      subtitle: "FRAGRANCES",
      discount: "40% OFF",
      buttonText: "Explore",
      image: "🌸",
      bgColor: "bg-gradient-to-r from-blue-600 to-indigo-600"
    }
  ];

  const banners2 = [
    {
      id: 1,
      title: "HAIR CARE",
      subtitle: "TREATMENTS",
      discount: "20% OFF",
      buttonText: "Shop",
      image: "✨",
      bgColor: "bg-gradient-to-r from-green-600 to-teal-600"
    },
    {
      id: 2,
      title: "BODY CARE",
      subtitle: "ESSENTIALS",
      discount: "35% OFF",
      buttonText: "Browse",
      image: "🛁",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "GIFT SETS",
      subtitle: "COLLECTIONS",
      discount: "50% OFF",
      buttonText: "Gift",
      image: "🎁",
      bgColor: "bg-gradient-to-r from-pink-500 to-rose-500"
    }
  ];

  const nextSlide1 = () => {
    setCurrentSlide1((prev) => (prev + 1) % banners1.length);
  };

  const prevSlide1 = () => {
    setCurrentSlide1((prev) => (prev - 1 + banners1.length) % banners1.length);
  };

  const nextSlide2 = () => {
    setCurrentSlide2((prev) => (prev + 1) % banners2.length);
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prev) => (prev - 1 + banners2.length) % banners2.length);
  };

  useEffect(() => {
    const timer1 = setInterval(nextSlide1, 5000);
    const timer2 = setInterval(nextSlide2, 6000);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section className="w-full flex gap-4 mb-8">
      {/* First Slider - Larger */}
      <div className="flex-[2] relative">
        <div className="h-[512px] overflow-hidden rounded-2xl relative shadow-2xl">
          {banners1.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide1 ? 'translate-x-0' : 
                index < currentSlide1 ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className={`${banner.bgColor} h-full flex items-center justify-between px-8 lg:px-16`}>
                <div className="text-white space-y-4 animate-slide-up">
                  <div className="space-y-2">
                    <p className="text-sm lg:text-base font-medium opacity-90">{banner.subtitle}</p>
                    <h2 className="text-3xl lg:text-5xl font-bold">{banner.title}</h2>
                    <p className="text-2xl lg:text-4xl font-bold text-black">{banner.discount}</p>
                  </div>
                  <Button 
                    className="bg-black text-yellow-500 hover:bg-gray-800 px-6 py-2 rounded-full font-semibold hover-lift transition-all duration-300"
                  >
                    {banner.buttonText}
                  </Button>
                </div>
                <div className="text-6xl lg:text-8xl animate-float">
                  {banner.image}
                </div>
              </div>
            </div>
          ))}
          
          <button
            onClick={prevSlide1}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hover-lift"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide1}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hover-lift"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {banners1.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide1(index)}
                className={`slider-indicator ${index === currentSlide1 ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Second Slider - Smaller */}
      <div className="flex-1 relative">
        <div className="h-[512px] overflow-hidden rounded-2xl relative shadow-2xl">
          {banners2.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide2 ? 'translate-x-0' : 
                index < currentSlide2 ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className={`${banner.bgColor} h-full flex flex-col items-center justify-center px-4 text-center`}>
                <div className="text-white space-y-3 animate-slide-up">
                  <div className="text-4xl lg:text-5xl animate-float">
                    {banner.image}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium opacity-90">{banner.subtitle}</p>
                    <h2 className="text-lg lg:text-2xl font-bold">{banner.title}</h2>
                    <p className="text-lg lg:text-xl font-bold text-black">{banner.discount}</p>
                  </div>
                  <Button 
                    className="bg-black text-yellow-500 hover:bg-gray-800 px-4 py-1 rounded-full font-semibold text-sm hover-lift transition-all duration-300"
                  >
                    {banner.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <button
            onClick={prevSlide2}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition-all duration-300 hover-lift"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide2}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition-all duration-300 hover-lift"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {banners2.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide2(index)}
                className={`slider-indicator ${index === currentSlide2 ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
