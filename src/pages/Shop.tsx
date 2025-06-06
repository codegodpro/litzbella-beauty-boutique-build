
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Grid, List, Filter } from "lucide-react";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 45.99,
      originalPrice: 65.99,
      image: "🧴",
      badge: "Best Seller",
      rating: 4.8,
      reviews: 324,
      category: "skincare"
    },
    {
      id: 2,
      name: "Matte Lipstick Set",
      price: 29.99,
      originalPrice: null,
      image: "💄",
      badge: "New",
      rating: 4.9,
      reviews: 156,
      category: "makeup"
    },
    {
      id: 3,
      name: "Anti-Aging Night Cream",
      price: 89.99,
      originalPrice: 120.99,
      image: "🫙",
      badge: "Sale",
      rating: 4.7,
      reviews: 892,
      category: "skincare"
    },
    {
      id: 4,
      name: "Vitamin C Brightening Mask",
      price: 34.99,
      originalPrice: null,
      image: "✨",
      badge: "Popular",
      rating: 4.6,
      reviews: 445,
      category: "skincare"
    },
    {
      id: 5,
      name: "Long-Wear Foundation",
      price: 52.99,
      originalPrice: 69.99,
      image: "🫗",
      badge: "Sale",
      rating: 4.8,
      reviews: 267,
      category: "makeup"
    },
    {
      id: 6,
      name: "Eyeshadow Palette",
      price: 39.99,
      originalPrice: null,
      image: "🎨",
      badge: "Trending",
      rating: 4.9,
      reviews: 623,
      category: "makeup"
    },
    {
      id: 7,
      name: "Luxury Perfume",
      price: 89.99,
      originalPrice: null,
      image: "🌸",
      badge: "Premium",
      rating: 4.7,
      reviews: 234,
      category: "fragrance"
    },
    {
      id: 8,
      name: "Hair Growth Serum",
      price: 67.99,
      originalPrice: 89.99,
      image: "✨",
      badge: "Sale",
      rating: 4.5,
      reviews: 445,
      category: "haircare"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <a href="/" className="text-gray-500 hover:text-purple-600">Home</a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Shop</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
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
            <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-sm text-gray-600">{products.length} products found</span>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <div className="flex border border-gray-300 rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
