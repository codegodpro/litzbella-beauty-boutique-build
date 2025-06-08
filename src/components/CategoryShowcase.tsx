
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";

// Beauty product images from Unsplash
const beautyImages = [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop&crop=center", // makeup products
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop&crop=center", // lipstick
  "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop&crop=center", // eyeshadow palette
  "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=300&h=300&fit=crop&crop=center", // skincare products
  "https://images.unsplash.com/photo-1487804797779-1ab25fb4fdc2?w=300&h=300&fit=crop&crop=center", // makeup brushes
];

// Litzbella beauty categories with products
const categories = [
  {
    name: "Face",
    icon: "💄",
    description: "Complete face makeup essentials",
    products: [
      { name: "Face Primer - Smooth Base", image: beautyImages[0], oldPrice: 25.0, price: 22.5, discount: 10, rating: 4.8 },
      { name: "Setting Powder - Translucent", image: beautyImages[0], oldPrice: 30.0, price: 27.0, discount: 10, rating: 4.7 },
      { name: "Full Coverage Foundation", image: beautyImages[0], oldPrice: 35.0, price: 31.5, discount: 10, rating: 4.9 },
      { name: "Color Correcting Concealer", image: beautyImages[0], oldPrice: 20.0, price: 18.0, discount: 10, rating: 4.6 },
      { name: "Blush & Contour Palette", image: beautyImages[0], oldPrice: 28.0, price: 25.2, discount: 10, rating: 4.8 },
    ],
  },
  {
    name: "Eyes",
    icon: "👁️",
    description: "Eye makeup perfection",
    products: [
      { name: "Precision Eyeliner - Black", image: beautyImages[2], oldPrice: 15.0, price: 13.5, discount: 10, rating: 4.7 },
      { name: "Volume Mascara - Waterproof", image: beautyImages[2], oldPrice: 22.0, price: 19.8, discount: 10, rating: 4.8 },
      { name: "Brow Definer Kit", image: beautyImages[2], oldPrice: 18.0, price: 16.2, discount: 10, rating: 4.6 },
      { name: "Pro Eyeshadow Palette", image: beautyImages[2], oldPrice: 45.0, price: 40.5, discount: 10, rating: 4.9 },
      { name: "Dramatic Lashes Set", image: beautyImages[2], oldPrice: 12.0, price: 10.8, discount: 10, rating: 4.5 },
    ],
  },
  {
    name: "Lips",
    icon: "💋",
    description: "Luxurious lip collection",
    products: [
      { name: "Matte Lipstick - Ruby Red", image: beautyImages[1], oldPrice: 18.0, price: 16.2, discount: 10, rating: 4.8 },
      { name: "High Shine Gloss", image: beautyImages[1], oldPrice: 14.0, price: 12.6, discount: 10, rating: 4.7 },
      { name: "Velvet Matte Gloss", image: beautyImages[1], oldPrice: 16.0, price: 14.4, discount: 10, rating: 4.6 },
      { name: "Precision Lip Liner", image: beautyImages[1], oldPrice: 10.0, price: 9.0, discount: 10, rating: 4.5 },
      { name: "Lip Care Set", image: beautyImages[1], oldPrice: 25.0, price: 22.5, discount: 10, rating: 4.8 },
    ],
  },
  {
    name: "Skincare",
    icon: "✨",
    description: "Skincare and wellness products",
    products: [
      { name: "Vitamin C Serum", image: beautyImages[3], oldPrice: 40.0, price: 36.0, discount: 10, rating: 4.9 },
      { name: "Hydrating Face Mask", image: beautyImages[3], oldPrice: 25.0, price: 22.5, discount: 10, rating: 4.7 },
      { name: "Anti-Aging Night Cream", image: beautyImages[3], oldPrice: 55.0, price: 49.5, discount: 10, rating: 4.8 },
      { name: "Gentle Cleanser", image: beautyImages[3], oldPrice: 20.0, price: 18.0, discount: 10, rating: 4.6 },
      { name: "SPF Moisturizer", image: beautyImages[3], oldPrice: 30.0, price: 27.0, discount: 10, rating: 4.8 },
    ],
  },
  {
    name: "Accessories",
    icon: "🖌️",
    description: "Professional beauty tools",
    products: [
      { name: "Beauty Blender Set", image: beautyImages[4], oldPrice: 20.0, price: 18.0, discount: 10, rating: 4.7 },
      { name: "Professional Brush Kit", image: beautyImages[4], oldPrice: 45.0, price: 40.5, discount: 10, rating: 4.8 },
      { name: "Setting Spray - All Day", image: beautyImages[4], oldPrice: 22.0, price: 19.8, discount: 10, rating: 4.6 },
      { name: "Makeup Storage Organizer", image: beautyImages[4], oldPrice: 35.0, price: 31.5, discount: 10, rating: 4.5 },
      { name: "Travel Beauty Kit", image: beautyImages[4], oldPrice: 50.0, price: 45.0, discount: 10, rating: 4.8 },
    ],
  },
];

const VISIBLE_PRODUCTS = 4;

export const CategoryShowcase = () => {
  const [sliderPositions, setSliderPositions] = useState<{ [index: number]: number }>(
    Object.fromEntries(categories.map((_, i) => [i, 0]))
  );
  
  // Responsive visible products count
  const getVisibleProducts = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // sm
      if (window.innerWidth < 768) return 2; // md
      if (window.innerWidth < 1024) return 3; // lg
      return 4; // xl and above
    }
    return 4;
  };

  const [visibleProducts, setVisibleProducts] = useState(getVisibleProducts());

  useEffect(() => {
    const handleResize = () => {
      setVisibleProducts(getVisibleProducts());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-swiper functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPositions(prevPositions => {
        const newPositions = { ...prevPositions };
        categories.forEach((category, catIdx) => {
          const max = Math.max(0, category.products.length - visibleProducts);
          if (max > 0) {
            newPositions[catIdx] = (prevPositions[catIdx] + 1) % (max + 1);
          }
        });
        return newPositions;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleProducts]);

  const slide = (catIdx: number, direction: "left" | "right") => {
    setSliderPositions(pos => {
      const max = Math.max(0, categories[catIdx].products.length - visibleProducts);
      let next = pos[catIdx] + (direction === "left" ? -1 : 1);
      if (next < 0) next = 0;
      if (next > max) next = max;
      return { ...pos, [catIdx]: next };
    });
  };

  return (
    <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-10">
      <div className="flex justify-center items-center mb-6 sm:mb-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Litzbella Collection</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Discover premium beauty essentials across all categories</p>
        </div>
      </div>
      
      <div className="space-y-6 sm:space-y-8">
        {categories.map((category, catIdx) => {
          const start = sliderPositions[catIdx];
          const end = start + visibleProducts;
          const canSlideLeft = start > 0;
          const canSlideRight = end < category.products.length;

          return (
            <div key={category.name} className="bg-card rounded-xl sm:rounded-2xl border shadow-lg p-3 sm:p-6 transition-all duration-300">
              <div className="mb-4 sm:mb-6 text-center">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                  <span className="text-2xl sm:text-3xl">{category.icon}</span>
                  <h3 className="font-bold text-xl sm:text-2xl text-foreground text-center">{category.name}</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground italic text-center">{category.description}</p>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => slide(catIdx, "left")}
                  disabled={!canSlideLeft}
                  className="hidden sm:flex p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Slide Left"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </button>
                
                <div className="flex-1 overflow-hidden">
                  <div className={`grid gap-3 sm:gap-4 ${
                    visibleProducts === 1 
                      ? 'grid-cols-1' 
                      : visibleProducts === 2 
                        ? 'grid-cols-2' 
                        : visibleProducts === 3 
                          ? 'grid-cols-3' 
                          : 'grid-cols-4'
                  }`}>
                    {category.products.slice(start, end).map((prod, pidx) => (
                      <div
                        key={prod.name}
                        className="bg-background rounded-lg sm:rounded-xl border shadow-sm hover:shadow-lg transition-all duration-500 relative flex flex-col items-center p-3 sm:p-4 group hover:-translate-y-1 hover:border-primary/30 w-full"
                      >
                        {/* Discount tag */}
                        <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-destructive text-xs font-bold text-destructive-foreground rounded-full px-2 py-1 z-10">
                          -{prod.discount}%
                        </span>
                        
                        {/* Wishlist button */}
                        <button className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-background rounded-full p-1.5 sm:p-2 shadow-md hover:bg-primary/10 transition-all duration-300 z-10 hover:scale-110">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        </button>
                        
                        {/* Image */}
                        <div className="aspect-square w-full max-w-[80px] sm:max-w-[100px] mx-auto flex items-center justify-center mb-2 sm:mb-3 bg-muted/30 rounded-lg overflow-hidden">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        
                        {/* Product Title - Centered */}
                        <div className="mt-1 text-xs sm:text-sm text-center font-medium text-foreground leading-tight min-h-[24px] sm:min-h-[32px] line-clamp-2">
                          {prod.name}
                        </div>
                        
                        {/* Rating - Centered */}
                        <div className="flex items-center justify-center mt-1 sm:mt-2 mb-1 sm:mb-2">
                          <span className="text-primary text-base sm:text-lg mr-1">★</span>
                          <span className="text-muted-foreground font-semibold text-xs sm:text-sm">{prod.rating.toFixed(1)}</span>
                        </div>
                        
                        {/* Prices - Centered */}
                        <div className="flex flex-col items-center justify-center mt-1 mb-2 sm:mb-3">
                          <span className="line-through text-muted-foreground text-xs">₦{prod.oldPrice && (prod.oldPrice * 1500).toFixed(0)}</span>
                          <span className="text-primary font-bold text-base sm:text-lg">₦{(prod.price * 1500).toFixed(0)}</span>
                        </div>
                        
                        {/* Cart button */}
                        <button className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-primary text-primary-foreground rounded-full p-1.5 sm:p-2 shadow-md hover:bg-primary/90 transition-all duration-300 z-10 hover:scale-110">
                          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => slide(catIdx, "right")}
                  disabled={!canSlideRight}
                  className="hidden sm:flex p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Slide Right"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </button>
              </div>
              
              {/* Mobile navigation dots */}
              <div className="flex sm:hidden justify-center mt-4 space-x-2">
                {Array.from({ length: Math.max(0, category.products.length - visibleProducts) + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSliderPositions(pos => ({ ...pos, [catIdx]: idx }))}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      sliderPositions[catIdx] === idx ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
