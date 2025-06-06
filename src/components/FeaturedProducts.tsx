
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 45.99,
      originalPrice: 65.99,
      image: "🧴",
      badge: "Best Seller",
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Matte Lipstick Set",
      price: 29.99,
      originalPrice: null,
      image: "💄",
      badge: "New",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Anti-Aging Night Cream",
      price: 89.99,
      originalPrice: 120.99,
      image: "🫙",
      badge: "Sale",
      rating: 4.7,
      reviews: 892
    },
    {
      id: 4,
      name: "Vitamin C Brightening Mask",
      price: 34.99,
      originalPrice: null,
      image: "✨",
      badge: "Popular",
      rating: 4.6,
      reviews: 445
    },
    {
      id: 5,
      name: "Long-Wear Foundation",
      price: 52.99,
      originalPrice: 69.99,
      image: "🫗",
      badge: "Sale",
      rating: 4.8,
      reviews: 267
    },
    {
      id: 6,
      name: "Eyeshadow Palette",
      price: 39.99,
      originalPrice: null,
      image: "🎨",
      badge: "Trending",
      rating: 4.9,
      reviews: 623
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our most loved beauty essentials, carefully curated for every skin type and style
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center text-6xl">
                {product.image}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Sale' ? 'bg-red-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      product.badge === 'Best Seller' ? 'bg-purple-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/80 hover:bg-white shadow-sm"
                  >
                    <Heart className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {"★".repeat(Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          className="px-8 py-3 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
        >
          View All Products
        </Button>
      </div>
    </section>
  );
};
