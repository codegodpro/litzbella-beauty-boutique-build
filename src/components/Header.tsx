
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, ChevronDown, Heart, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useShoppingContext } from "@/contexts/ShoppingContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FullViewportMenu } from "./FullViewportMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("₦");
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useShoppingContext();

  const currencies = [
    { symbol: "$", name: "Dollar", rate: 0.0013 },
    { symbol: "€", name: "Euro", rate: 0.0012 },
    { symbol: "£", name: "Pound", rate: 0.0010 },
    { symbol: "₦", name: "Naira", rate: 1 },
  ];

  const categories = [
    "Skincare",
    "Makeup", 
    "Fragrances",
    "Hair Care",
    "Body Care"
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <header className="bg-gray-900 shadow-lg border-b border-yellow-500/20 sticky top-0 z-40">
        <div className="container mx-auto px-2 sm:px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm text-gray-300 border-b border-gray-700">
            <div className="hidden sm:block">
              <span>Free shipping on orders over ₦20,000</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 p-1 sm:p-2"
              >
                {isDark ? <Sun className="w-3 h-3 sm:w-4 sm:h-4" /> : <Moon className="w-3 h-3 sm:w-4 sm:h-4" />}
              </Button>
              <button className="hover:text-yellow-500 transition-colors duration-300 text-xs sm:text-sm">EN</button>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-yellow-500 transition-colors duration-300 text-xs sm:text-sm">
                  {currency} <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700">
                  {currencies.map((curr) => (
                    <DropdownMenuItem 
                      key={curr.symbol}
                      onClick={() => setCurrency(curr.symbol)}
                      className="cursor-pointer text-gray-300 hover:text-yellow-500 hover:bg-gray-700 text-xs sm:text-sm"
                    >
                      {curr.symbol} {curr.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-2 sm:py-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1" onClick={() => navigate('/')}>
              <img 
                src="/logo.png" 
                alt="Litzbella Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg shadow-2xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300"
                style={{ 
                  filter: 'brightness(1.1) contrast(1.2) drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                }}
              />
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 font-medium hover:-translate-y-1 px-3 py-2 rounded-lg"
              >
                Home
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-300 hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 font-medium flex items-center gap-1 hover:-translate-y-1 px-3 py-2 rounded-lg">
                  Categories
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-gray-800 border-gray-700">
                  {categories.map((category) => (
                    <DropdownMenuItem 
                      key={category}
                      onClick={() => navigate(`/shop?category=${category.toLowerCase()}`)}
                      className="cursor-pointer text-gray-300 hover:text-yellow-500 hover:bg-gray-700"
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Search bar - Hidden on mobile, visible on tablet+ */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-4 lg:mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search for Products" 
                  className="pl-10 bg-gray-800 border-gray-600 focus:border-yellow-500 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Action buttons with responsive sizing */}
            <div className="flex items-center gap-1 sm:gap-3">            
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/wishlist')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 relative transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-1 transform-gpu bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg w-8 h-8 sm:w-10 sm:h-10"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/cart')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 relative transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-1 transform-gpu bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg w-8 h-8 sm:w-10 sm:h-10"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold animate-bounce-in">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/login')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-1 transform-gpu bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg w-8 h-8 sm:w-10 sm:h-10"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-1 transform-gpu bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg w-8 h-8 sm:w-10 sm:h-10"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="md:hidden pb-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search for Products" 
                className="pl-10 bg-gray-800 border-gray-600 focus:border-yellow-500 text-white placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </header>

      <FullViewportMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
