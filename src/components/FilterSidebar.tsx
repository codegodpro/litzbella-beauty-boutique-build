
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string[]>([]);

  const categories = [
    { id: 'skincare', name: 'Skincare', count: 124 },
    { id: 'makeup', name: 'Makeup', count: 89 },
    { id: 'fragrance', name: 'Fragrances', count: 45 },
    { id: 'haircare', name: 'Hair Care', count: 67 },
    { id: 'bodycare', name: 'Body Care', count: 34 },
    { id: 'tools', name: 'Beauty Tools', count: 23 }
  ];

  const brands = [
    { id: 'litzbella', name: 'Litzbella', count: 156 },
    { id: 'premium', name: 'Premium Beauty', count: 89 },
    { id: 'natural', name: 'Natural Glow', count: 67 },
    { id: 'luxury', name: 'Luxury Line', count: 45 },
    { id: 'organic', name: 'Organic Care', count: 34 }
  ];

  const ratings = [
    { id: '5', name: '5 Stars', count: 89 },
    { id: '4', name: '4 Stars & Up', count: 156 },
    { id: '3', name: '3 Stars & Up', count: 234 },
    { id: '2', name: '2 Stars & Up', count: 289 }
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId]);
    } else {
      setSelectedBrands(selectedBrands.filter(id => id !== brandId));
    }
  };

  const handleRatingChange = (ratingId: string, checked: boolean) => {
    if (checked) {
      setSelectedRating([...selectedRating, ratingId]);
    } else {
      setSelectedRating(selectedRating.filter(id => id !== ratingId));
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedRating([]);
    setPriceRange([0, 200]);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearAllFilters}>
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Price Range</h4>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={200}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-3">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, !!checked)}
              />
              <label
                htmlFor={category.id}
                className="flex-1 text-sm text-gray-700 cursor-pointer flex items-center justify-between"
              >
                <span>{category.name}</span>
                <span className="text-gray-400">({category.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Brands</h4>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-3">
              <Checkbox
                id={brand.id}
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={(checked) => handleBrandChange(brand.id, !!checked)}
              />
              <label
                htmlFor={brand.id}
                className="flex-1 text-sm text-gray-700 cursor-pointer flex items-center justify-between"
              >
                <span>{brand.name}</span>
                <span className="text-gray-400">({brand.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Customer Rating</h4>
        <div className="space-y-3">
          {ratings.map((rating) => (
            <div key={rating.id} className="flex items-center space-x-3">
              <Checkbox
                id={rating.id}
                checked={selectedRating.includes(rating.id)}
                onCheckedChange={(checked) => handleRatingChange(rating.id, !!checked)}
              />
              <label
                htmlFor={rating.id}
                className="flex-1 text-sm text-gray-700 cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400 text-xs">
                    {"★".repeat(parseInt(rating.id))}
                  </div>
                  <span>{rating.name}</span>
                </div>
                <span className="text-gray-400">({rating.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
        Apply Filters
      </Button>
    </div>
  );
};
