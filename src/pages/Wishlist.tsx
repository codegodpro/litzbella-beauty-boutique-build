
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Luxury Foundation",
      price: 35000,
      oldPrice: 45000,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
      category: "face",
      inStock: true
    },
    {
      id: 2,
      name: "Vitamin C Serum",
      price: 52500,
      oldPrice: 70000,
      image: "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=300&h=300&fit=crop",
      category: "skincare",
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">Save your favorite Litzbella products</p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Start adding products you love to your wishlist</p>
            <Button
              onClick={() => navigate('/shop')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(item.price)}
                    </span>
                    {item.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(item.oldPrice)}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => navigate(`/product/${item.id}`)}
                      variant="outline"
                      className="flex-1"
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      disabled={!item.inStock}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black disabled:bg-gray-300 disabled:text-gray-500"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default Wishlist;
