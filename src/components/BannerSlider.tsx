
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
      image: "./public/Slider-1-Img-1.png",
      bgGradient: "from-black/60 to-black/40"
    },
    {
      id: 2,
      title: "NEW ARRIVALS",
      subtitle: "MAKEUP ESSENTIALS",
      discount: "25% OFF",
      buttonText: "Discover",
      image: "./public/Slider-1-Img-2.png",
      bgGradient: "from-purple-900/60 to-pink-900/40"
    },
    {
      id: 3,
      title: "GIFTS & SETS",
      subtitle: "PERFECT FOR ANY OCCASION",
      discount: "50% OFF",
      buttonText: "Gift",
      image: "./public/Slider-3-Img-1.png",
      bgGradient: "from-pink-900/60 to-rose-900/40"
    }
  ];

  const banners2 = [
    {
      id: 1,
      title: "SUMMER SALE",
      subtitle: "LIMITED TIME",
      discount: "15% OFF",
      buttonText: "Save Now",
      image: "./public/Products-01.1.jpg",
      bgGradient: "from-cyan-900/60 to-blue-900/40"
    },
    {
      id: 2,
      title: "BESTSELLERS",
      subtitle: "MOST LOVED",
      discount: "10% OFF",
      buttonText: "See Picks",
      image: "./public/Products-02.1.jpg",
      bgGradient: "from-green-900/60 to-emerald-900/40"
    },
    {
      id: 3,
      title: "FREE SHIPPING",
      subtitle: "ORDERS OVER ₦30,000",
      discount: "No Code Needed",
      buttonText: "Shop Free",
      image: "./public/Products-03.1.jpg",
      bgGradient: "from-orange-900/60 to-amber-900/40"
    }
  ];

  const nextSlide1 = () => {
    setCurrentSlide1((prev) => (prev + 1) % banners1.length);
  };

  const nextSlide2 = () => {
    setCurrentSlide2((prev) => (prev + 1) % banners2.length);
  };

  const prevSlide1 = () => {
    setCurrentSlide1((prev) => (prev - 1 + banners1.length) % banners1.length);
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
    <section className="w-full flex flex-col lg:flex-row gap-4">
      {/* First Slider - Always visible */}
      <div className="w-full lg:flex-[2] lg:min-w-0 relative">
        <div className="h-[300px] sm:h-[400px] lg:h-[512px] w-full overflow-hidden rounded-2xl relative shadow-2xl">
          {banners1.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide1 ? 'translate-x-0' : 
                index < currentSlide1 ? '-translate-x-full' : 'translate-x-full'
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
                      <p className="text-xs sm:text-sm lg:text-base font-medium opacity-90">{banner.subtitle}</p>
                      <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-tight">{banner.title}</h2>
                      <p className="text-lg sm:text-2xl lg:text-4xl font-bold text-yellow-400">{banner.discount}</p>
                    </div>
                    <Button 
                      className="bg-yellow-500 text-black hover:bg-yellow-400 px-4 sm:px-6 py-2 rounded-full font-semibold hover-lift text-sm sm:text-base"
                    >
                      {banner.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation buttons with rounded corners and icons */}
          <button
            onClick={prevSlide1}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded transition-all duration-300 z-10"
            style={{ borderRadius: '4px' }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          <button
            onClick={nextSlide1}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded transition-all duration-300 z-10"
            style={{ borderRadius: '4px' }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
            {banners1.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide1(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide1 ? 'w-6 sm:w-8 h-2 sm:h-3' : 'w-2 sm:w-3 h-2 sm:h-3'
                }`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentSlide1 
                    ? 'bg-yellow-500 shadow-lg shadow-yellow-500/50' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Second Slider - Hidden on mobile and smaller screens */}
      <div className="hidden lg:block w-full lg:flex-1 lg:min-w-0 relative">
        <div className="h-[300px] sm:h-[400px] lg:h-[512px] w-full overflow-hidden rounded-2xl relative shadow-2xl">
          {banners2.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide2 ? 'translate-x-0' : 
                index < currentSlide2 ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className="relative h-full">
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgGradient}`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-2 sm:px-4 text-center">
                  <div className="text-white space-y-2 sm:space-y-3 animate-slide-up">
                    <div className="space-y-1">
                      <p className="text-xs font-medium opacity-90">{banner.subtitle}</p>
                      <h2 className="text-base sm:text-lg lg:text-2xl font-bold">{banner.title}</h2>
                      <p className="text-sm sm:text-lg lg:text-xl font-bold text-yellow-400">{banner.discount}</p>
                    </div>
                    <Button 
                      className="bg-yellow-500 text-black hover:bg-yellow-400 px-3 sm:px-4 py-1 rounded-full font-semibold text-xs sm:text-sm hover-lift"
                    >
                      {banner.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation buttons with rounded corners and icons */}
          <button
            onClick={prevSlide2}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-1.5 sm:p-2 rounded transition-all duration-300 z-10"
            style={{ borderRadius: '4px' }}
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>
          <button
            onClick={nextSlide2}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-1.5 sm:p-2 rounded transition-all duration-300 z-10"
            style={{ borderRadius: '4px' }}
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {banners2.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide2(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide2 ? 'w-4 sm:w-6 h-1.5 sm:h-2' : 'w-1.5 sm:w-2 h-1.5 sm:h-2'
                }`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentSlide2 
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
