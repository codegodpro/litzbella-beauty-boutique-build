
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export const FeaturedProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 18399.50,
      originalPrice: 26399.50,
      image: "🧴",
      badge: "Best Seller",
      rating: 4.8,
      reviews: 324,
      category: "skincare"
    },
    {
      id: 2,
      name: "Matte Lipstick Set",
      price: 11999.50,
      originalPrice: null,
      image: "💄",
      badge: "New",
      rating: 4.9,
      reviews: 156,
      category: "makeup"
    },
    {
      id: 3,
      name: "Anti-Aging Night Cream",
      price: 35999.50,
      originalPrice: 48399.50,
      image: "🫙",
      badge: "Sale",
      rating: 4.7,
      reviews: 892,
      category: "skincare"
    },
    {
      id: 4,
      name: "Vitamin C Brightening Mask",
      price: 13999.50,
      originalPrice: null,
      image: "✨",
      badge: "Popular",
      rating: 4.6,
      reviews: 445,
      category: "skincare"
    },
    {
      id: 5,
      name: "Long-Wear Foundation",
      price: 21199.50,
      originalPrice: 27999.50,
      image: "🫗",
      badge: "Sale",
      rating: 4.8,
      reviews: 267,
      category: "makeup"
    },
    {
      id: 6,
      name: "Eyeshadow Palette",
      price: 15999.50,
      originalPrice: null,
      image: "🎨",
      badge: "Trending",
      rating: 4.9,
      reviews: 623,
      category: "makeup"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 doodle-bg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our most loved beauty essentials, carefully curated for every skin type and style
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} compact={true} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button 
          onClick={() => navigate('/shop')}
          className="px-8 py-3 bg-yellow-500 text-black hover:bg-yellow-400 hover-lift transition-all duration-300 rounded-full font-semibold"
        >
          View All Products
        </Button>
      </div>
    </section>
  );
};
