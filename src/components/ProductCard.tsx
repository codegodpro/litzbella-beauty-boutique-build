import { useState } from "react";
import { Star, Heart, Eye, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    category?: string;
    rating?: number;
    reviews?: number;
    discount?: number;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  const discountPercentage = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-yellow-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              -{discountPercentage}%
            </span>
          )}
          {product.category && (
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium capitalize">
              {product.category}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-300 hover:scale-110"
        >
          <Heart 
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>

        {/* Quick Action Buttons */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xs sm:text-sm py-1 sm:py-2"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            View
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
            className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold text-xs sm:text-sm py-1 sm:py-2"
          >
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        <div className="space-y-1 sm:space-y-2">
          <h3 
            className="font-semibold text-gray-800 line-clamp-2 cursor-pointer hover:text-yellow-600 transition-colors duration-300 text-sm sm:text-base"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {product.name}
          </h3>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      star <= Math.floor(product.rating!)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm sm:text-base text-gray-500 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic here
          }}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base py-2"
        >
          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
