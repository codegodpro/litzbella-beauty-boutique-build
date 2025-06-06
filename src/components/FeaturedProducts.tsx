
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
      reviews: 324
    },
    {
      id: 2,
      name: "Matte Lipstick Set",
      price: 11999.50,
      originalPrice: null,
      image: "💄",
      badge: "New",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Anti-Aging Night Cream",
      price: 35999.50,
      originalPrice: 48399.50,
      image: "🫙",
      badge: "Sale",
      rating: 4.7,
      reviews: 892
    },
    {
      id: 4,
      name: "Vitamin C Brightening Mask",
      price: 13999.50,
      originalPrice: null,
      image: "✨",
      badge: "Popular",
      rating: 4.6,
      reviews: 445
    },
    {
      id: 5,
      name: "Long-Wear Foundation",
      price: 21199.50,
      originalPrice: 27999.50,
      image: "🫗",
      badge: "Sale",
      rating: 4.8,
      reviews: 267
    },
    {
      id: 6,
      name: "Eyeshadow Palette",
      price: 15999.50,
      originalPrice: null,
      image: "🎨",
      badge: "Trending",
      rating: 4.9,
      reviews: 623
    }
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, productName: string) => {
    e.stopPropagation();
    console.log('Adding to cart:', productName);
  };

  const handleWishlist = (e: React.MouseEvent, productName: string) => {
    e.stopPropagation();
    console.log('Adding to wishlist:', productName);
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover our most loved beauty essentials, carefully curated for every skin type and style
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-yellow-500/20 hover-lift">
              <div className="relative aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center text-6xl">
                {product.image}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Sale' ? 'bg-red-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      product.badge === 'Best Seller' ? 'bg-yellow-500 text-black' :
                      'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                
                {/* Action buttons positioned on the right side */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-slide-up">
                  <Button
                    onClick={(e) => handleWishlist(e, product.name)}
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/90 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black shadow-lg hover-lift"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={(e) => handleAddToCart(e, product.name)}
                    className="rounded-full bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg hover-lift"
                    size="icon"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {"★".repeat(Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-400">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-yellow-500">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button 
          onClick={() => navigate('/shop')}
          variant="outline" 
          className="px-8 py-3 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover-lift"
        >
          View All Products
        </Button>
      </div>
    </section>
  );
};
