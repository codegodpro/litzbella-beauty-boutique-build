
import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

const Shop = () => {
  // Example state. Replace with your own state/data logic.
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [productsByCategory, setProductsByCategory] = useState({});
  const products = []; // Fill with your products array

  // Dummy scroll functions for horizontal product lists
  const scrollLeft = () => {};
  const scrollRight = () => {};

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <a href="/" className="text-gray-400 hover:text-yellow-500">Home</a>
          <span className="mx-2 text-gray-500">/</span>
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
            </div>

            {/* Example Product Grid/Slider */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} viewMode="grid" />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
