
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, ChevronDown, Heart, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FullViewportMenu } from "./FullViewportMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [currency, setCurrency] = useState("₦");
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

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
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-300 border-b border-gray-700">
            <div className="hidden md:block">
              <span>Free shipping on orders over ₦20,000</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <button className="hover:text-yellow-500 transition-colors duration-300">EN</button>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-yellow-500 transition-colors duration-300">
                  {currency} <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700">
                  {currencies.map((curr) => (
                    <DropdownMenuItem 
                      key={curr.symbol}
                      onClick={() => setCurrency(curr.symbol)}
                      className="cursor-pointer text-gray-300 hover:text-yellow-500 hover:bg-gray-700"
                    >
                      {curr.symbol} {curr.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-lg">L</span>
              </div>
              <h1 className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">Litzbella</h1>
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

            {/* Search bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search for Products" 
                  className="pl-10 bg-gray-800 border-gray-600 focus:border-yellow-500 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Action buttons with 3D effect */}
            <div className="flex items-center gap-3">            
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/wishlist')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 relative transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-1 transform-gpu bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                <Heart className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/cart')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 relative transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-1 transform-gpu bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce-in">
                    {cartCount}
                  </span>
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/login')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-1 transform-gpu bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                <User className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-1 transform-gpu bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <FullViewportMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
