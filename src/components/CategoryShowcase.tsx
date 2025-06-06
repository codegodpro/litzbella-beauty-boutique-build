import { useState } from "react";

export const CategoryShowcase = () => {
  const categories = [
    { name: "Skincare", icon: "🧴", description: "Face care essentials" },
    { name: "Makeup", icon: "💄", description: "Beauty cosmetics" },
    { name: "Fragrances", icon: "🌸", description: "Luxury perfumes" },
    { name: "Hair Care", icon: "✨", description: "Hair treatments" },
    { name: "Body Care", icon: "🛁", description: "Body essentials" },
    { name: "Tools", icon: "🖌️", description: "Beauty tools" },
    { name: "Sets & Kits", icon: "🎁", description: "Gift collections" },
    { name: "New Arrivals", icon: "⭐", description: "Latest products" },
  ];

  // For desktop slider logic (window of 6)
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 6;

  const slideLeft = () => {
    setStartIdx((prev) => Math.max(0, prev - 1));
  };
  const slideRight = () => {
    setStartIdx((prev) => Math.min(categories.length - visibleCount, prev + 1));
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">All Categories</h2>
        <p className="text-gray-600">Discover our complete range of beauty products</p>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto md:hidden pb-2 -mx-4 px-4">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="min-w-[160px] group cursor-pointer flex-shrink-0"
          >
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: slider with 6 visible */}
      <div className="hidden md:flex items-center gap-2">
        <button
          onClick={slideLeft}
          disabled={startIdx === 0}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          <span className="text-xl">&#8592;</span>
        </button>
        <div className="flex gap-4 flex-1 overflow-hidden">
          {categories.slice(startIdx, startIdx + visibleCount).map((category, index) => (
            <div 
              key={index}
              className="w-full group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={slideRight}
          disabled={startIdx >= categories.length - visibleCount}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          <span className="text-xl">&#8594;</span>
        </button>
      </div>
    </section>
  );
};
