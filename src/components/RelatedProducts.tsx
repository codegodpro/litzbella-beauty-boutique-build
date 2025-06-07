
import { ProductCard } from "./ProductCard";

export const RelatedProducts = () => {
  const relatedProducts = [
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
      oldPrice: 60000,
      image: "🫙",
      category: "skincare",
      rating: 4.6,
      reviews: 189,
      discount: 25
    },
    {
      id: 4,
      name: "Face Cleanser",
      price: 30000,
      image: "🧴",
      category: "skincare",
      rating: 4.5,
      reviews: 156
    }
  ];

  return (
    <section className="py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Products</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
