
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export const ProductCard = ({ product, viewMode = 'grid' }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Adding to cart:', product.name);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Adding to wishlist:', product.name);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Quick view:', product.name);
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  if (viewMode === 'list') {
    return (
      <div 
        onClick={handleProductClick}
        className="group cursor-pointer bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-500/20 hover-lift"
      >
        <div className="flex">
          <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
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
          </div>

          <div className="flex-1 p-6 flex justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-yellow-500 transition-colors">
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

              <div className="flex items-center gap-2 mb-4">
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

            <div className="flex flex-col gap-2">
              <Button
                onClick={handleWishlist}
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-800 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover-lift"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleQuickView}
                variant="outline"
                size="icon"
                className="rounded-full bg-gray-800 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover-lift"
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleAddToCart}
                className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full hover-lift"
              >
                <ShoppingBag className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleProductClick}
      className="group cursor-pointer"
    >
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-yellow-500/20 hover-lift relative">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
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
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-slide-up">
            <Button
              onClick={handleWishlist}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/90 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black shadow-lg hover-lift"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleQuickView}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/90 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black shadow-lg hover-lift"
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleAddToCart}
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
  );
};
