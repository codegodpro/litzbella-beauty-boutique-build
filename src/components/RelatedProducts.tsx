
import { ProductCard } from "./ProductCard";

export const RelatedProducts = () => {
  const relatedProducts = [
    {
      id: 2,
      name: "Vitamin C Serum",
      price: 52500,
      oldPrice: 70000,
      image: "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=300&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
      category: "skincare",
      rating: 4.6,
      reviews: 189,
      discount: 25
    },
    {
      id: 4,
      name: "Face Cleanser",
      price: 30000,
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop",
      category: "skincare",
      rating: 4.5,
      reviews: 156
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-900 rounded-2xl sm:rounded-3xl border border-yellow-500/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">You Might Also Like</h3>
          <p className="text-gray-400 text-base sm:text-lg">Discover more beautiful products from Litzbella</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
