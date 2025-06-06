
import { ProductCard } from "./ProductCard";

interface RelatedProductsProps {
  currentProductId: number;
}

export const RelatedProducts = ({ currentProductId }: RelatedProductsProps) => {
  const relatedProducts = [
    {
      id: 2,
      name: "Vitamin C Serum",
      price: 39.99,
      originalPrice: null,
      image: "✨",
      badge: "Popular",
      rating: 4.7,
      reviews: 234,
      category: "skincare"
    },
    {
      id: 3,
      name: "Night Repair Cream",
      price: 59.99,
      originalPrice: 79.99,
      image: "🌙",
      badge: "Sale",
      rating: 4.8,
      reviews: 189,
      category: "skincare"
    },
    {
      id: 4,
      name: "Gentle Cleanser",
      price: 24.99,
      originalPrice: null,
      image: "🧼",
      badge: "New",
      rating: 4.6,
      reviews: 156,
      category: "skincare"
    },
    {
      id: 5,
      name: "Eye Cream",
      price: 34.99,
      originalPrice: null,
      image: "👁️",
      badge: null,
      rating: 4.5,
      reviews: 98,
      category: "skincare"
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
        <a href="/shop" className="text-purple-600 hover:text-purple-700 font-medium">
          View All →
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
