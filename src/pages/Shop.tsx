
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Grid, List, Filter, ChevronLeft, ChevronRight } from "lucide-react";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
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
            <div key={product.id} className="flex-shrink-0 w-64">
              <ProductCard product={product} viewMode="grid" compact={true} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white doodle-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <a href="/" className="text-gray-500 hover:text-yellow-600">Home</a>
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
            <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
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
                <span className="text-sm text-gray-600">
                  {Object.values(productsByCategory).flat().length} products found
                </span>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900"
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
                    className="rounded-r-none bg-yellow-500 text-black hover:bg-yellow-400"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none bg-yellow-500 text-black hover:bg-yellow-400"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Categories with Horizontal Scrolling - 4 columns layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(productsByCategory).map(([categoryKey, products]) => (
                <ScrollableCategory
                  key={categoryKey}
                  title={categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                  products={products}
                  categoryKey={categoryKey}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">Previous</Button>
                <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-400">1</Button>
                <Button variant="outline" size="sm" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">2</Button>
                <Button variant="outline" size="sm" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">3</Button>
                <Button variant="outline" size="sm" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
