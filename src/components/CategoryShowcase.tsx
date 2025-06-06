import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";

// Example image URLs (replace with your real images or imports)
const sampleImages = [
  "https://via.placeholder.com/160x160?text=1",
  "https://via.placeholder.com/160x160?text=2",
  "https://via.placeholder.com/160x160?text=3",
  "https://via.placeholder.com/160x160?text=4",
  "https://via.placeholder.com/160x160?text=5",
];

// All categories, each with 5 products (image, discount, rating, etc.)
const categories = [
  {
    name: "Skincare",
    icon: "🧴",
    description: "Face care essentials",
    products: [
      { name: "Touch screen Unisex LED Square Shaped Digital Watch", image: sampleImages[0], oldPrice: 60.0, price: 54.0, discount: 10, rating: 4.0 },
      { name: "B39 Bluetooth 5.0 Headphone Ear Shape Wireless", image: sampleImages[1], oldPrice: 250.0, price: 125.0, discount: 50, rating: 4.0 },
      { name: "New Ladies Fashionable Wrist Watch plus Extra Band", image: sampleImages[2], oldPrice: 150.0, price: 142.5, discount: 5, rating: 4.0 },
      { name: "New Round Fast Track Chain Analog Sports Watch", image: sampleImages[3], oldPrice: 100.0, price: 90.0, discount: 10, rating: 4.0 },
      { name: "Twill Gabardine Pant for Men", image: sampleImages[4], oldPrice: 1800.0, price: 1440.0, discount: 20, rating: 5.0 },
    ],
  },
  {
    name: "Makeup",
    icon: "💄",
    description: "Beauty cosmetics",
    products: [
      { name: "Classic Red Lipstick", image: sampleImages[0], oldPrice: 30.0, price: 27.0, discount: 10, rating: 4.5 },
      { name: "Waterproof Mascara", image: sampleImages[1], oldPrice: 22.0, price: 19.8, discount: 10, rating: 4.2 },
      { name: "Perfect Glow Foundation", image: sampleImages[2], oldPrice: 40.0, price: 36.0, discount: 10, rating: 4.3 },
      { name: "Natural Blush Palette", image: sampleImages[3], oldPrice: 28.0, price: 25.2, discount: 10, rating: 4.4 },
      { name: "Eyebrow Shaping Kit", image: sampleImages[4], oldPrice: 20.0, price: 18.0, discount: 10, rating: 4.1 },
    ],
  },
  {
    name: "Fragrances",
    icon: "🌸",
    description: "Luxury perfumes",
    products: [
      { name: "Luxury Perfume", image: sampleImages[0], oldPrice: 120.0, price: 108.0, discount: 10, rating: 4.7 },
      { name: "Citrus Mist", image: sampleImages[1], oldPrice: 80.0, price: 72.0, discount: 10, rating: 4.2 },
      { name: "Woody Blend", image: sampleImages[2], oldPrice: 90.0, price: 81.0, discount: 10, rating: 4.3 },
      { name: "Floral Bouquet", image: sampleImages[3], oldPrice: 100.0, price: 90.0, discount: 10, rating: 4.5 },
      { name: "Ocean Breeze", image: sampleImages[4], oldPrice: 85.0, price: 76.5, discount: 10, rating: 4.3 },
    ],
  },
  {
    name: "Hair Care",
    icon: "✨",
    description: "Hair treatments",
    products: [
      { name: "Hair Repair Mask", image: sampleImages[0], oldPrice: 40.0, price: 36.0, discount: 10, rating: 4.6 },
      { name: "Shampoo", image: sampleImages[1], oldPrice: 20.0, price: 18.0, discount: 10, rating: 4.4 },
      { name: "Conditioner", image: sampleImages[2], oldPrice: 22.0, price: 19.8, discount: 10, rating: 4.5 },
      { name: "Styling Gel", image: sampleImages[3], oldPrice: 15.0, price: 13.5, discount: 10, rating: 4.1 },
      { name: "Hair Oil", image: sampleImages[4], oldPrice: 25.0, price: 22.5, discount: 10, rating: 4.7 },
    ],
  },
  {
    name: "Body Care",
    icon: "🛁",
    description: "Body essentials",
    products: [
      { name: "Body Butter", image: sampleImages[0], oldPrice: 35.0, price: 31.5, discount: 10, rating: 4.6 },
      { name: "Shower Gel", image: sampleImages[1], oldPrice: 18.0, price: 16.2, discount: 10, rating: 4.3 },
      { name: "Body Scrub", image: sampleImages[2], oldPrice: 25.0, price: 22.5, discount: 10, rating: 4.4 },
      { name: "Hand Cream", image: sampleImages[3], oldPrice: 15.0, price: 13.5, discount: 10, rating: 4.2 },
      { name: "Foot Balm", image: sampleImages[4], oldPrice: 20.0, price: 18.0, discount: 10, rating: 4.3 },
    ],
  },
  {
    name: "Tools",
    icon: "🖌️",
    description: "Beauty tools",
    products: [
      { name: "Foundation Brush", image: sampleImages[0], oldPrice: 20.0, price: 18.0, discount: 10, rating: 4.6 },
      { name: "Blender Sponge", image: sampleImages[1], oldPrice: 10.0, price: 9.0, discount: 10, rating: 4.5 },
      { name: "Eyelash Curler", image: sampleImages[2], oldPrice: 15.0, price: 13.5, discount: 10, rating: 4.3 },
      { name: "Tweezers", image: sampleImages[3], oldPrice: 8.0, price: 7.2, discount: 10, rating: 4.2 },
      { name: "Mirror", image: sampleImages[4], oldPrice: 12.0, price: 10.8, discount: 10, rating: 4.1 },
    ],
  },
  {
    name: "Sets & Kits",
    icon: "🎁",
    description: "Gift collections",
    products: [
      { name: "Glow Kit", image: sampleImages[0], oldPrice: 60.0, price: 54.0, discount: 10, rating: 4.8 },
      { name: "Travel Set", image: sampleImages[1], oldPrice: 50.0, price: 45.0, discount: 10, rating: 4.7 },
      { name: "Mini Essentials", image: sampleImages[2], oldPrice: 30.0, price: 27.0, discount: 10, rating: 4.5 },
      { name: "Spa Set", image: sampleImages[3], oldPrice: 70.0, price: 63.0, discount: 10, rating: 4.8 },
      { name: "Holiday Bundle", image: sampleImages[4], oldPrice: 80.0, price: 72.0, discount: 10, rating: 4.9 },
    ],
  },
  {
    name: "New Arrivals",
    icon: "⭐",
    description: "Latest products",
    products: [
      { name: "Vitamin C Serum", image: sampleImages[0], oldPrice: 45.0, price: 40.5, discount: 10, rating: 4.6 },
      { name: "Hydra Mist", image: sampleImages[1], oldPrice: 20.0, price: 18.0, discount: 10, rating: 4.4 },
      { name: "Retinol Cream", image: sampleImages[2], oldPrice: 55.0, price: 49.5, discount: 10, rating: 4.7 },
      { name: "Peptide Booster", image: sampleImages[3], oldPrice: 35.0, price: 31.5, discount: 10, rating: 4.5 },
      { name: "SPF Moisturizer", image: sampleImages[4], oldPrice: 30.0, price: 27.0, discount: 10, rating: 4.6 },
    ],
  },
];

const VISIBLE_PRODUCTS = 4;

export const CategoryShowcase = () => {
  const [sliderPositions, setSliderPositions] = useState<{ [index: number]: number }>(
    Object.fromEntries(categories.map((_, i) => [i, 0]))
  );

  const slide = (catIdx: number, direction: "left" | "right") => {
    setSliderPositions(pos => {
      const max = Math.max(0, categories[catIdx].products.length - VISIBLE_PRODUCTS);
      let next = pos[catIdx] + (direction === "left" ? -1 : 1);
      if (next < 0) next = 0;
      if (next > max) next = max;
      return { ...pos, [catIdx]: next };
    });
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Offer Products</h2>
        <a href="#" className="text-indigo-500 font-medium text-sm hover:underline">View All</a>
      </div>
      <div className="space-y-12">
        {categories.map((category, catIdx) => {
          const start = sliderPositions[catIdx];
          const end = start + VISIBLE_PRODUCTS;
          const canSlideLeft = start > 0;
          const canSlideRight = end < category.products.length;

          return (
            <div key={category.name}>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <span className="font-semibold text-lg">{category.name}</span>
                <span className="ml-2 text-gray-400 text-sm italic">{category.description}</span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => slide(catIdx, "left")}
                  disabled={!canSlideLeft}
                  className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition disabled:opacity-30"
                  aria-label="Slide Left"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-6 flex-1 overflow-hidden">
                  {category.products.slice(start, end).map((prod, pidx) => (
                    <div
                      key={prod.name}
                      className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-xl transition relative flex flex-col items-center min-w-[220px] max-w-[260px] p-4 pb-5"
                    >
                      {/* Discount tag */}
                      <span className="absolute top-4 left-4 bg-yellow-400 text-xs font-bold text-white rounded px-2 py-1 z-10">
                        -{prod.discount} %
                      </span>
                      {/* Wishlist button */}
                      <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition z-10">
                        <Heart className="w-5 h-5 text-purple-400" />
                      </button>
                      {/* Image */}
                      <div className="aspect-square w-full max-w-[120px] mx-auto flex items-center justify-center mb-3">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      {/* Product Title */}
                      <div className="mt-1 text-[15px] text-center font-medium text-gray-900 leading-tight min-h-[38px] line-clamp-2">
                        {prod.name}
                      </div>
                      {/* Rating */}
                      <div className="flex items-center justify-center mt-2 mb-2">
                        <span className="text-yellow-400 text-lg mr-1">★</span>
                        <span className="text-gray-700 font-semibold text-sm">{prod.rating.toFixed(1)}</span>
                      </div>
                      {/* Prices */}
                      <div className="flex flex-col items-center justify-center mt-1 mb-2">
                        <span className="line-through text-gray-400 text-xs">{prod.oldPrice && prod.oldPrice.toFixed(3)}</span>
                        <span className="text-indigo-900 font-bold text-lg">{prod.price.toFixed(3)}<span className="text-xs font-normal"> USD</span></span>
                      </div>
                      {/* Cart button */}
                      <button className="absolute bottom-4 right-4 bg-white border border-indigo-100 rounded-full p-2 shadow hover:bg-indigo-50 transition z-10">
                        <ShoppingCart className="w-5 h-5 text-indigo-600" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => slide(catIdx, "right")}
                  disabled={!canSlideRight}
                  className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition disabled:opacity-30"
                  aria-label="Slide Right"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
