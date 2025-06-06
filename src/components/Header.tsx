
import { useState } from "react";
import { Search, ShoppingBag, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Litzbella</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center gap-1">
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">New Arrivals</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Sale</a>
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
              className="text-gray-600 hover:text-purple-600 relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
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
              <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Categories</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Sale</a>
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
