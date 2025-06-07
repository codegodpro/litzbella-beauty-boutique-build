import { useState } from "react";
import { Search, Grid, List, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  oldPrice?: number;
  discount?: number;
}

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 68250,
      oldPrice: 91000,
      image: "🧴",
      category: "skincare",
      rating: 4.8,
      reviews: 324,
      discount: 25
    },
    {
      id: 2,
      name: "Vitamin C Serum",
      price: 52500,
      oldPrice: 70000,
      image: "✨",
      category: "skincare",
      rating: 4.7,
      reviews: 234,
      discount: 25
    },
    {
      id: 3,
      name: "Moisturizing Cream",
      price: 45000,
      image: "🫙",
      category: "skincare",
      rating: 4.6,
      reviews: 189
    },
    {
      id: 4,
      name: "Face Cleanser",
      price: 30000,
      image: "🧴",
      category: "skincare",
      rating: 4.5,
      reviews: 156
    },
    {
      id: 5,
      name: "Classic Red Lipstick",
      price: 15000,
      image: "💄",
      category: "makeup",
      rating: 4.9,
      reviews: 456
    },
    {
      id: 6,
      name: "Eyeshadow Palette",
      price: 22500,
      oldPrice: 30000,
      image: "🎨",
      category: "makeup",
      rating: 4.8,
      reviews: 345,
      discount: 25
    },
    {
      id: 7,
      name: "Mascara",
      price: 12000,
      image: "👁️",
      category: "makeup",
      rating: 4.7,
      reviews: 234
    },
    {
      id: 8,
      name: "Foundation",
      price: 25000,
      image: "🫗",
      category: "makeup",
      rating: 4.6,
      reviews: 123
    },
    {
      id: 9,
      name: "Rose Perfume",
      price: 37500,
      oldPrice: 50000,
      image: "🌹",
      category: "fragrance",
      rating: 4.9,
      reviews: 567,
      discount: 25
    },
    {
      id: 10,
      name: "Jasmine Scent",
      price: 42000,
      image: "🌸",
      category: "fragrance",
      rating: 4.8,
      reviews: 456
    },
    {
      id: 11,
      name: "Ocean Breeze",
      price: 33000,
      image: "🌊",
      category: "fragrance",
      rating: 4.7,
      reviews: 345
    },
    {
      id: 12,
      name: "Citrus Burst",
      price: 39000,
      image: "🍊",
      category: "fragrance",
      rating: 4.6,
      reviews: 234
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="search"
              placeholder="Search for products..."
              className="pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            >
              {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFilters}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {showFilters && (
            <div className="md:col-span-1">
              <FilterSidebar />
            </div>
          )}
          <div className={showFilters ? "md:col-span-3" : "md:col-span-4"}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
