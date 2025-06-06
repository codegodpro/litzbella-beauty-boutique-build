
import { useState } from "react";
import { Search, ShoppingBag, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // This would come from global state
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
          <div className="hidden md:block">
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-purple-600 transition-colors">Light</button>
            <button className="hover:text-purple-600 transition-colors">EN</button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Litzbella</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </button>
            <div className="relative group">
              <button 
                onClick={() => navigate('/shop')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center gap-1"
              >
                Shop
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="space-y-2">
                    <button 
                      onClick={() => navigate('/shop?category=skincare')}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                    >
                      Skincare
                    </button>
                    <button 
                      onClick={() => navigate('/shop?category=makeup')}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                    >
                      Makeup
                    </button>
                    <button 
                      onClick={() => navigate('/shop?category=fragrance')}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                    >
                      Fragrances
                    </button>
                    <button 
                      onClick={() => navigate('/shop?category=haircare')}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                    >
                      Hair Care
                    </button>
                    <button 
                      onClick={() => navigate('/shop?category=bodycare')}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                    >
                      Body Care
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => navigate('/shop?filter=new')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              New Arrivals
            </button>
            <button 
              onClick={() => navigate('/shop?filter=sale')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Sale
            </button>
          </nav>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search for Products" 
                className="pl-10 bg-gray-50 border-0 focus:bg-white"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-gray-600 hover:text-purple-600"
            >
              <Heart className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/cart')}
              className="text-gray-600 hover:text-purple-600 relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/login')}
              className="text-gray-600 hover:text-purple-600"
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => { navigate('/'); setIsMenuOpen(false); }}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => { navigate('/shop'); setIsMenuOpen(false); }}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Shop
              </button>
              <button 
                onClick={() => { navigate('/shop?filter=new'); setIsMenuOpen(false); }}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                New Arrivals
              </button>
              <button 
                onClick={() => { navigate('/shop?filter=sale'); setIsMenuOpen(false); }}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Sale
              </button>
            </nav>
            <div className="mt-4">
              <Input placeholder="Search for Products" className="bg-gray-50" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
