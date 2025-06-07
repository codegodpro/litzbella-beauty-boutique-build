
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=512&fit=crop",
      bgGradient: "from-black/60 to-black/40"
    },
    {
      id: 2,
      title: "NEW ARRIVALS",
      subtitle: "MAKEUP ESSENTIALS",
      discount: "25% OFF",
      buttonText: "Discover",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=512&fit=crop",
      bgGradient: "from-purple-900/60 to-pink-900/40"
    },
    {
      id: 3,
      title: "GIFTS & SETS",
      subtitle: "PERFECT FOR ANY OCCASION",
      discount: "50% OFF",
      buttonText: "Gift",
      image: "https://images.unsplash.com/photo-1591375462077-800b6193cfb5?w=800&h=512&fit=crop",
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
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=512&fit=crop",
      bgGradient: "from-cyan-900/60 to-blue-900/40"
    },
    {
      id: 2,
      title: "BESTSELLERS",
      subtitle: "MOST LOVED",
      discount: "10% OFF",
      buttonText: "See Picks",
      image: "https://images.unsplash.com/photo-1586495985586-bfa6a4b19e7f?w=400&h=512&fit=crop",
      bgGradient: "from-green-900/60 to-emerald-900/40"
    },
    {
      id: 3,
      title: "FREE SHIPPING",
      subtitle: "ORDERS OVER ₦30,000",
      discount: "No Code Needed",
      buttonText: "Shop Free",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=512&fit=crop",
      bgGradient: "from-orange-900/60 to-amber-900/40"
    }
  ];

  const nextSlide1 = () => {
    setCurrentSlide1((prev) => (prev + 1) % banners1.length);
  };

  const nextSlide2 = () => {
    setCurrentSlide2((prev) => (prev + 1) % banners2.length);
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
    <section className="w-full flex gap-4">
      {/* First Slider - Larger width */}
      <div className="flex-[2] min-w-0 relative">
        <div className="h-[512px] w-full overflow-hidden rounded-2xl relative shadow-2xl">
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
                <div className="absolute inset-0 flex items-center justify-center px-8 lg:px-16">
                  <div className="text-white space-y-4 animate-slide-up text-center">
                    <div className="space-y-2">
                      <p className="text-sm lg:text-base font-medium opacity-90">{banner.subtitle}</p>
                      <h2 className="text-3xl lg:text-5xl font-bold">{banner.title}</h2>
                      <p className="text-2xl lg:text-4xl font-bold text-yellow-400">{banner.discount}</p>
                    </div>
                    <Button 
                      className="bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-2 rounded-full font-semibold hover-lift"
                    >
                      {banner.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Creative indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
            {banners1.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide1(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide1 ? 'w-8 h-3' : 'w-3 h-3'
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

      {/* Second Slider - Smaller width */}
      <div className="flex-1 min-w-0 relative">
        <div className="h-[512px] w-full overflow-hidden rounded-2xl relative shadow-2xl">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                  <div className="text-white space-y-3 animate-slide-up">
                    <div className="space-y-1">
                      <p className="text-xs font-medium opacity-90">{banner.subtitle}</p>
                      <h2 className="text-lg lg:text-2xl font-bold">{banner.title}</h2>
                      <p className="text-lg lg:text-xl font-bold text-yellow-400">{banner.discount}</p>
                    </div>
                    <Button 
                      className="bg-yellow-500 text-black hover:bg-yellow-400 px-4 py-1 rounded-full font-semibold text-sm hover-lift"
                    >
                      {banner.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Creative indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {banners2.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide2(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide2 ? 'w-6 h-2' : 'w-2 h-2'
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
