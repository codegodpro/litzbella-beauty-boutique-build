import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

// Example categories and products arrays
const categories = [
  { name: "Skincare", icon: "🧴" },
  { name: "Makeup", icon: "💄" },
  { name: "Fragrances", icon: "🌸" },
  { name: "Hair Care", icon: "✨" },
  { name: "Body Care", icon: "🛁" },
  { name: "Tools", icon: "🖌️" },
  { name: "Sets & Kits", icon: "🎁" },
  { name: "New Arrivals", icon: "⭐" },
];

const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: 45.99,
    image: "🧴",
    category: "Skincare",
  },
  {
    id: 2,
    name: "Matte Lipstick",
    price: 19.99,
    image: "💄",
    category: "Makeup",
  },
  {
    id: 3,
    name: "Luxury Perfume",
    price: 89.99,
    image: "🌸",
    category: "Fragrances",
  },
  {
    id: 4,
    name: "Hair Repair Mask",
    price: 29.99,
    image: "✨",
    category: "Hair Care",
  },
  {
    id: 5,
    name: "Body Butter",
    price: 24.99,
    image: "🛁",
    category: "Body Care",
  },
  {
    id: 6,
    name: "Foundation Brush",
    price: 14.99,
    image: "🖌️",
    category: "Tools",
  },
  {
    id: 7,
    name: "Glow Kit",
    price: 49.99,
    image: "🎁",
    category: "Sets & Kits",
  },
  {
    id: 8,
    name: "Vitamin C Serum",
    price: 39.99,
    image: "⭐",
    category: "New Arrivals",
  },
];

const Shop = () => {
  // Example state. Replace with your own state/data logic.
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Dummy scroll functions for horizontal product lists
  const scrollLeft = () => {};
  const scrollRight = () => {};

  // Filter products by selected category (if any)
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

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

        {/* Category Slider */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                className={`min-w-[120px] rounded-2xl px-6 py-4 flex flex-col items-center border transition 
                  ${selectedCategory === cat.name
                    ? "bg-yellow-100 border-yellow-400 text-yellow-700 font-bold"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}
                `}
              >
                <span className="text-2xl mb-2">{cat.icon}</span>
                <span className="text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
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
                  {filteredProducts.length} products found
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

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
