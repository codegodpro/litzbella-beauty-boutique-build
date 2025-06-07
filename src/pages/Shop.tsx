
import { useState } from "react";
import { Search, Grid, List, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";

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
    // Face Products
    { id: 1, name: "Face Prep Primer", price: 33750, oldPrice: 37500, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", category: "face", rating: 4.8, reviews: 324, discount: 10 },
    { id: 2, name: "Setting Powder - Translucent", price: 40500, oldPrice: 45000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", category: "face", rating: 4.7, reviews: 234, discount: 10 },
    { id: 3, name: "Full Coverage Foundation", price: 47250, oldPrice: 52500, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", category: "face", rating: 4.9, reviews: 456, discount: 10 },
    { id: 4, name: "Color Correcting Concealer", price: 27000, oldPrice: 30000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", category: "face", rating: 4.6, reviews: 189, discount: 10 },
    { id: 5, name: "Blush & Contour Palette", price: 37800, oldPrice: 42000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", category: "face", rating: 4.8, reviews: 123, discount: 10 },
    { id: 6, name: "Highlight & Bronzer Duo", price: 31500, oldPrice: 35000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", category: "face", rating: 4.7, reviews: 156, discount: 10 },

    // Eyes Products
    { id: 7, name: "Precision Eyeliner - Black", price: 20250, oldPrice: 22500, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop", category: "eyes", rating: 4.7, reviews: 234, discount: 10 },
    { id: 8, name: "Volume Mascara - Waterproof", price: 29700, oldPrice: 33000, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop", category: "eyes", rating: 4.8, reviews: 345, discount: 10 },
    { id: 9, name: "Brow Definer Kit", price: 24300, oldPrice: 27000, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop", category: "eyes", rating: 4.6, reviews: 189, discount: 10 },
    { id: 10, name: "Pro Eyeshadow Palette", price: 60750, oldPrice: 67500, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop", category: "eyes", rating: 4.9, reviews: 567, discount: 10 },
    { id: 11, name: "Dramatic Lashes Set", price: 16200, oldPrice: 18000, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop", category: "eyes", rating: 4.5, reviews: 123, discount: 10 },
    { id: 12, name: "Glitter Eyeshadow", price: 18900, oldPrice: 21000, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop", category: "eyes", rating: 4.6, reviews: 234, discount: 10 },

    // Lips Products
    { id: 13, name: "Matte Lipstick - Ruby Red", price: 24300, oldPrice: 27000, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop", category: "lips", rating: 4.8, reviews: 456, discount: 10 },
    { id: 14, name: "High Shine Gloss", price: 18900, oldPrice: 21000, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop", category: "lips", rating: 4.7, reviews: 234, discount: 10 },
    { id: 15, name: "Velvet Matte Gloss", price: 21600, oldPrice: 24000, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop", category: "lips", rating: 4.6, reviews: 189, discount: 10 },
    { id: 16, name: "Precision Lip Liner", price: 13500, oldPrice: 15000, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop", category: "lips", rating: 4.5, reviews: 123, discount: 10 },

    // Skincare Products
    { id: 17, name: "Vitamin C Serum", price: 54000, oldPrice: 60000, image: "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=300&h=300&fit=crop", category: "skincare", rating: 4.9, reviews: 567, discount: 10 },
    { id: 18, name: "Hydrating Face Mask", price: 33750, oldPrice: 37500, image: "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=300&h=300&fit=crop", category: "skincare", rating: 4.7, reviews: 234, discount: 10 },
    { id: 19, name: "Anti-Aging Night Cream", price: 74250, oldPrice: 82500, image: "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=300&h=300&fit=crop", category: "skincare", rating: 4.8, reviews: 345, discount: 10 },
    { id: 20, name: "Gentle Cleanser", price: 27000, oldPrice: 30000, image: "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=300&h=300&fit=crop", category: "skincare", rating: 4.6, reviews: 189, discount: 10 },

    // Accessories Products
    { id: 21, name: "Beauty Blender Set", price: 27000, oldPrice: 30000, image: "https://images.unsplash.com/photo-1487804797779-1ab25fb4fdc2?w=300&h=300&fit=crop", category: "accessories", rating: 4.7, reviews: 234, discount: 10 },
    { id: 22, name: "Professional Brush Kit", price: 60750, oldPrice: 67500, image: "https://images.unsplash.com/photo-1487804797779-1ab25fb4fdc2?w=300&h=300&fit=crop", category: "accessories", rating: 4.8, reviews: 345, discount: 10 },
    { id: 23, name: "Setting Spray - All Day", price: 29700, oldPrice: 33000, image: "https://images.unsplash.com/photo-1487804797779-1ab25fb4fdc2?w=300&h=300&fit=crop", category: "accessories", rating: 4.6, reviews: 189, discount: 10 },
    { id: 24, name: "Makeup Storage Organizer", price: 47250, oldPrice: 52500, image: "https://images.unsplash.com/photo-1487804797779-1ab25fb4fdc2?w=300&h=300&fit=crop", category: "accessories", rating: 4.5, reviews: 123, discount: 10 }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen bg-background">
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
      
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default Shop;
