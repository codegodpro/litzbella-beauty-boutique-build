
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
  compact?: boolean;
}

export const ProductCard = ({ product, viewMode = 'grid', compact = false }: ProductCardProps) => {
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
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover-lift product-card-compact"
      >
        <div className="flex">
          <div className="relative w-48 h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center text-3xl flex-shrink-0">
            {product.image}
            {product.badge && (
              <div className="absolute top-2 left-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
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

          <div className="flex-1 p-4 flex justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {"★".repeat(Math.floor(product.rating))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-yellow-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
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
                className="rounded-full bg-white border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black hover-lift w-8 h-8"
              >
                <Heart className="w-3 h-3" />
              </Button>
              <Button
                onClick={handleQuickView}
                variant="outline"
                size="icon"
                className="rounded-full bg-white border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black hover-lift w-8 h-8"
              >
                <Eye className="w-3 h-3" />
              </Button>
              <Button
                onClick={handleAddToCart}
                className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full hover-lift w-8 h-8"
                size="icon"
              >
                <ShoppingBag className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const cardHeight = compact ? 'h-64' : 'h-80';
  const imageSize = compact ? 'text-4xl' : 'text-6xl';
  const padding = compact ? 'p-3' : 'p-6';

  return (
    <div 
      onClick={handleProductClick}
      className="group cursor-pointer"
    >
      <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover-lift product-card-compact ${cardHeight} flex flex-col`}>
        <div className={`relative flex-1 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center ${imageSize}`}>
          {product.image}
          {product.badge && (
            <div className="absolute top-2 left-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                product.badge === 'Sale' ? 'bg-red-500 text-white' :
                product.badge === 'New' ? 'bg-green-500 text-white' :
                product.badge === 'Best Seller' ? 'bg-yellow-500 text-black' :
                'bg-blue-500 text-white'
              }`}>
                {product.badge}
              </span>
            </div>
          )}
          
          {/* Action buttons positioned vertically on the right */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-slide-up">
            <Button
              onClick={handleWishlist}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/90 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black shadow-lg hover-lift w-8 h-8"
            >
              <Heart className="w-3 h-3" />
            </Button>
            <Button
              onClick={handleQuickView}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/90 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black shadow-lg hover-lift w-8 h-8"
            >
              <Eye className="w-3 h-3" />
            </Button>
            <Button
              onClick={handleAddToCart}
              className="rounded-full bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg hover-lift w-8 h-8"
              size="icon"
            >
              <ShoppingBag className="w-3 h-3" />
            </Button>
          </div>
        </div>

        <div className={padding}>
          <h3 className={`font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors ${compact ? 'text-sm' : 'text-base'}`}>
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 mb-2">
            <div className="flex text-yellow-400 text-xs">
              {"★".repeat(Math.floor(product.rating))}
            </div>
            <span className="text-xs text-gray-500">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`font-bold text-yellow-600 ${compact ? 'text-lg' : 'text-xl'}`}>
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className={`text-gray-400 line-through ${compact ? 'text-sm' : 'text-base'}`}>
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
