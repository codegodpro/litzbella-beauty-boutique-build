
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
    // Add to cart logic here
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Adding to wishlist:', product.name);
    // Add to wishlist logic here
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Quick view:', product.name);
    // Quick view logic here
  };

  if (viewMode === 'list') {
    return (
      <div 
        onClick={handleProductClick}
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <div className="flex">
          {/* Product Image */}
          <div className="relative w-48 h-48 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center text-4xl flex-shrink-0">
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
          </div>

          {/* Product Info */}
          <div className="flex-1 p-6 flex justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
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
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <Button
                onClick={handleWishlist}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleQuickView}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleAddToCart}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart
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
              onClick={handleWishlist}
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white shadow-sm"
            >
              <Heart className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
          
          {/* Quick View on Hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button
              onClick={handleQuickView}
              variant="outline"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick View
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
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
