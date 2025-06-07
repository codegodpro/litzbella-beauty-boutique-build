
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export const FilterSidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const categories = [
    { id: "face", name: "Face", subcategories: ["Face Preps", "Powder", "Foundation", "Concealer", "Blush / Contour", "Highlight / Bronzers"] },
    { id: "eyes", name: "Eyes", subcategories: ["Eyeliners", "Mascara", "Brow", "Eyeshadow Palettes", "Lashes", "Glitter"] },
    { id: "lips", name: "Lips", subcategories: ["Lipsticks", "Glosses", "Matte Glosses", "Lip Liners"] },
    { id: "skincare", name: "Skincare", subcategories: ["Skincare and Wellness Products"] },
    { id: "accessories", name: "Accessories", subcategories: ["Blenders", "Brushes", "Fixing Spray", "Makeup Storage"] }
  ];

  const brands = ["Litzbella", "Premium Line", "Essential", "Professional"];
  const ratings = [5, 4, 3, 2, 1];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 100000]);
    setSelectedBrands([]);
    setSelectedRatings([]);
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => handleCategoryChange(category.id)}
                />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
              </div>
              {selectedCategories.includes(category.id) && (
                <div className="ml-6 space-y-1">
                  {category.subcategories.map((sub) => (
                    <div key={sub} className="flex items-center space-x-2">
                      <Checkbox id={sub} />
                      <label htmlFor={sub} className="text-xs text-gray-600">
                        {sub}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={100000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₦{priceRange[0].toLocaleString()}</span>
            <span>₦{priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
              />
              <label
                htmlFor={brand}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Ratings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Customer Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRatings.includes(rating)}
                onCheckedChange={() => handleRatingChange(rating)}
              />
              <label
                htmlFor={`rating-${rating}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <span className="text-yellow-500 mr-1">{"★".repeat(rating)}</span>
                <span className="text-gray-400">{"☆".repeat(5 - rating)}</span>
                <span className="ml-2">& Up</span>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button 
        variant="outline" 
        onClick={clearFilters}
        className="w-full"
      >
        Clear All Filters
      </Button>
    </div>
  );
};
