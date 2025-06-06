
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CategoryShowcase = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    { name: "Skincare", icon: "🧴", description: "Face care essentials", color: "from-blue-100 to-blue-200" },
    { name: "Makeup", icon: "💄", description: "Beauty cosmetics", color: "from-pink-100 to-pink-200" },
    { name: "Fragrances", icon: "🌸", description: "Luxury perfumes", color: "from-purple-100 to-purple-200" },
    { name: "Hair Care", icon: "✨", description: "Hair treatments", color: "from-green-100 to-green-200" },
    { name: "Body Care", icon: "🛁", description: "Body essentials", color: "from-yellow-100 to-yellow-200" },
    { name: "Tools", icon: "🖌️", description: "Beauty tools", color: "from-red-100 to-red-200" },
    { name: "Sets & Kits", icon: "🎁", description: "Gift collections", color: "from-indigo-100 to-indigo-200" },
    { name: "New Arrivals", icon: "⭐", description: "Latest products", color: "from-orange-100 to-orange-200" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < 
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 doodle-bg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">All Categories</h2>
        <p className="text-gray-600">Discover our complete range of beauty products</p>
      </div>
      
      {/* Desktop View - 6 columns */}
      <div className="hidden md:grid grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group cursor-pointer"
            onClick={() => navigate(`/shop?category=${category.name.toLowerCase()}`)}
          >
            <div className="bg-white rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 product-card-compact">
              <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform animate-float`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-xs mb-1">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Vertical Slider */}
      <div className="md:hidden relative">
        <div className="flex justify-between items-center mb-4">
          <Button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            variant="outline"
            size="icon"
            className="bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            variant="outline"
            size="icon"
            className="bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          onScroll={checkScrollButtons}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer flex-shrink-0 w-32"
              onClick={() => navigate(`/shop?category=${category.name.toLowerCase()}`)}
            >
              <div className="bg-white rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 product-card-compact h-full">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform animate-float`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-xs mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
