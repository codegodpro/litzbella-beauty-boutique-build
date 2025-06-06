@ -1,273 +1,110 @@

import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Grid, List, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  // Example state. Replace with your own state/data logic.
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const productsByCategory = {
    skincare: [
      {
        id: 1,
        name: "Hydrating Face Serum",
        price: 18399.50,
        originalPrice: 26399.50,
        image: "🧴",
        badge: "Best Seller",
        rating: 4.8,
        reviews: 324,
        category: "skincare"
      },
      {
        id: 3,
        name: "Anti-Aging Night Cream",
        price: 35999.50,
        originalPrice: 48399.50,
        image: "🫙",
        badge: "Sale",
        rating: 4.7,
        reviews: 892,
        category: "skincare"
      },
      {
        id: 4,
        name: "Vitamin C Brightening Mask",
        price: 13999.50,
        originalPrice: null,
        image: "✨",
        badge: "Popular",
        rating: 4.6,
        reviews: 445,
        category: "skincare"
      }
    ],
    makeup: [
      {
        id: 2,
        name: "Matte Lipstick Set",
        price: 11999.50,
        originalPrice: null,
        image: "💄",
        badge: "New",
        rating: 4.9,
        reviews: 156,
        category: "makeup"
      },
      {
        id: 5,
        name: "Long-Wear Foundation",
        price: 21199.50,
        originalPrice: 27999.50,
        image: "🫗",
        badge: "Sale",
        rating: 4.8,
        reviews: 267,
        category: "makeup"
      },
      {
        id: 6,
        name: "Eyeshadow Palette",
        price: 15999.50,
        originalPrice: null,
        image: "🎨",
        badge: "Trending",
        rating: 4.9,
        reviews: 623,
        category: "makeup"
      }
    ],
    fragrances: [
      {
        id: 7,
        name: "Luxury Perfume",
        price: 35999.50,
        originalPrice: null,
        image: "🌸",
        badge: "Premium",
        rating: 4.7,
        reviews: 234,
        category: "fragrance"
      }
    ],
    haircare: [
      {
        id: 8,
        name: "Hair Growth Serum",
        price: 27199.50,
        originalPrice: 35999.50,
        image: "✨",
        badge: "Sale",
        rating: 4.5,
        reviews: 445,
        category: "haircare"
      }
    ]
  };
  const [sortBy, setSortBy] = useState("featured");
  const [productsByCategory, setProductsByCategory] = useState({});
  const products = []; // Fill with your products array

  const ScrollableCategory = ({ title, products, categoryKey }: { title: string, products: any[], categoryKey: string }) => {
    const scrollLeft = () => {
      const container = document.getElementById(`scroll-${categoryKey}`);
      if (container) {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      const container = document.getElementById(`scroll-${categoryKey}`);
      if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };

    return (
      <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-yellow-500/20 hover-lift">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <div className="flex gap-2">
            <Button
              onClick={scrollLeft}
              variant="outline"
              size="icon"
              className="bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 hover-lift"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={scrollRight}
              variant="outline"
              size="icon"
              className="bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 hover-lift"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div 
          id={`scroll-${categoryKey}`}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-72">
              <ProductCard product={product} viewMode="grid" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  // Dummy scroll functions for horizontal product lists
  const scrollLeft = () => {};
  const scrollRight = () => {};

  return (
    <div className="min-h-screen bg-gray-800">
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <a href="/" className="text-gray-400 hover:text-yellow-500">Home</a>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-white">Shop</span>
          <span className="text-gray-900">Shop</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">All Products</h1>
          <p className="text-gray-400">Discover our complete range of premium beauty products</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">Discover our complete range of premium beauty products</p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-80 flex-shrink-0`}>
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 p-4 bg-gray-900 rounded-lg border border-yellow-500/20">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-sm text-gray-400">
                  {Object.values(productsByCategory).flat().length} products found
                </span>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-600 rounded-md px-3 py-2 bg-gray-800 text-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <div className="flex border border-gray-600 rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none bg-yellow-500 text-black hover:bg-yellow-400"
                    onClick={scrollLeft}
                    variant="outline"
                    size="icon"
                    className="bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 hover-lift"
                  >
                    <Grid className="w-4 h-4" />
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none bg-yellow-500 text-black hover:bg-yellow-400"
                    onClick={scrollRight}
                    variant="outline"
                    size="icon"
                    className="bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 hover-lift"
                  >
                    <List className="w-4 h-4" />
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Categories with Horizontal Scrolling */}
            <div className="space-y-8">
              {Object.entries(productsByCategory).map(([categoryKey, products]) => (
                <ScrollableCategory
                  key={categoryKey}
                  title={categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                  products={products}
                  categoryKey={categoryKey}
                />
            {/* Example Product Grid/Slider */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} viewMode="grid" />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-gray-900 text-white border-gray-600 hover:bg-gray-800">Previous</Button>
                <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-400">1</Button>
                <Button variant="outline" size="sm" className="bg-gray-900 text-white border-gray-600 hover:bg-gray-800">2</Button>
                <Button variant="outline" size="sm" className="bg-gray-900 text-white border-gray-600 hover:bg-gray-800">3</Button>
                <Button variant="outline" size="sm" className="bg-gray-900 text-white border-gray-600 hover:bg-gray-800">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
More actions
export default Shop;
