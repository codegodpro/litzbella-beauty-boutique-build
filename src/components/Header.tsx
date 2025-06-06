
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, ChevronDown } from "lucide-react";
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
  const navigate = useNavigate();

  const currencies = [
    { symbol: "$", name: "Dollar" },
    { symbol: "€", name: "Euro" },
    { symbol: "£", name: "Pound" },
    { symbol: "₦", name: "Naira" },
  ];

  const categories = [
    "Skincare",
    "Makeup", 
    "Fragrances",
    "Hair Care",
    "Body Care"
  ];

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
            <div className="hidden md:block">
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-yellow-600 transition-colors">Light</button>
              <button className="hover:text-yellow-600 transition-colors">EN</button>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-yellow-600 transition-colors">
                  {currency} <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {currencies.map((curr) => (
                    <DropdownMenuItem 
                      key={curr.symbol}
                      onClick={() => setCurrency(curr.symbol)}
                      className="cursor-pointer"
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
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Litzbella</h1>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
              >
                Home
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-yellow-600 transition-colors font-medium flex items-center gap-1">
                  Categories
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {categories.map((category) => (
                    <DropdownMenuItem 
                      key={category}
                      onClick={() => navigate(`/shop?category=${category.toLowerCase()}`)}
                      className="cursor-pointer"
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
                  className="pl-10 bg-gray-50 border-0 focus:bg-white"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">            
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/cart')}
                className="text-gray-600 hover:text-yellow-600 relative"
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
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-600 hover:text-yellow-600"
              >
                <Menu className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/login')}
                className="text-gray-600 hover:text-yellow-600"
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <FullViewportMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
