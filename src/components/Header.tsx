
import { useState, useEffect } from "react";
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
  const [isFixed, setIsFixed] = useState(false);
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
    // Store theme preference
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Handle scroll for fixed header
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`bg-gray-900 shadow-lg border-b border-yellow-500/20 z-50 transition-all duration-300 ${isFixed ? 'header-fixed header-mobile' : 'sticky top-0'}`}>
        <div className="w-full px-4 mx-auto max-w-none">
          {/* Top bar - Hidden on mobile when fixed */}
          <div className={`items-center justify-between py-2 text-sm text-gray-300 border-b border-gray-700 ${isFixed ? 'hidden md:flex' : 'flex'}`}>
            <div className="hidden md:block">
              <span>Free shipping on orders over ₦20,000</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 icon-3d"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <button className="hover:text-yellow-500 transition-colors duration-300">EN</button>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-yellow-500 transition-colors duration-300">
                  {currency} <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700 z-50">
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
          <div className="flex items-center justify-between py-3 md:py-4 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer hover-lift animate-float" onClick={() => navigate('/')}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg animate-glow">
                <span className="text-black font-bold text-sm md:text-lg">L</span>
              </div>
              <h1 className="text-lg md:text-2xl font-bold text-white hidden sm:block">Litzbella</h1>
            </div>

            {/* Navigation - Desktop only */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-yellow-500 transition-all duration-300 font-medium hover-lift"
              >
                Home
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-300 hover:text-yellow-500 transition-all duration-300 font-medium flex items-center gap-1 hover-lift">
                  Categories
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-gray-800 border-gray-700 z-50">
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

            {/* Search bar - Hidden on mobile when fixed */}
            <div className={`items-center flex-1 max-w-md mx-4 ${isFixed ? 'hidden md:flex' : 'hidden md:flex'}`}>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search for Products" 
                  className="pl-10 bg-gray-800 border-gray-600 focus:border-yellow-500 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-1 md:gap-2">            
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/wishlist')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 relative transition-all duration-300 hover-lift animate-bounce-in icon-3d"
              >
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/cart')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 relative transition-all duration-300 hover-lift animate-bounce-in icon-3d"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-bold animate-bounce-in">
                    {cartCount}
                  </span>
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/login')}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 hover-lift animate-bounce-in icon-3d"
              >
                <User className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 hover-lift animate-bounce-in icon-3d"
              >
                <Menu className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <FullViewportMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
