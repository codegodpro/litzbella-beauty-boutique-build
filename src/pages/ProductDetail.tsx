
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, Share2, Minus, Plus } from "lucide-react";
import { Header } from "@/components/Header";
import { ProductReviews } from "@/components/ProductReviews";
import { RelatedProducts } from "@/components/RelatedProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data
  const product = {
    id: 1,
    name: "Hydrating Face Serum",
    price: 45.99,
    originalPrice: 65.99,
    images: ["🧴", "✨", "💫", "🌟"],
    badge: "Best Seller",
    rating: 4.8,
    reviews: 324,
    category: "skincare",
    description: "Our premium hydrating face serum is formulated with hyaluronic acid and vitamin E to deeply moisturize and rejuvenate your skin. Suitable for all skin types.",
    ingredients: ["Hyaluronic Acid", "Vitamin E", "Aloe Vera", "Rose Water", "Glycerin"],
    benefits: ["Deep Hydration", "Anti-Aging", "Brightening", "Gentle Formula"],
    howToUse: "Apply 2-3 drops to clean face morning and evening. Gently pat into skin until absorbed.",
    inStock: true,
    stockCount: 24
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', { product: product.name, quantity });
    // Add to cart logic here
  };

  const handleWishlist = () => {
    console.log('Adding to wishlist:', product.name);
    // Add to wishlist logic here
  };

  const handleShare = () => {
    console.log('Sharing product:', product.name);
    // Share logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <a href="/" className="text-gray-500 hover:text-purple-600">Home</a>
          <span className="mx-2 text-gray-400">/</span>
          <a href="/shop" className="text-gray-500 hover:text-purple-600">Shop</a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex items-center justify-center text-8xl relative">
              {product.images[selectedImage]}
              {product.badge && (
                <div className="absolute top-6 left-6">
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-2xl flex items-center justify-center text-2xl border-2 ${selectedImage === index ? 'border-purple-500' : 'border-transparent'} transition`}
                  style={{ background: "linear-gradient(135deg, #f3e8ff 0%, #ffe4e6 100%)" }}
                >
                  {image}
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-yellow-500 text-xl font-bold">${product.price.toFixed(2)}</span>
              <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-semibold">{`${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF`}</span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-purple-600 font-semibold">{product.rating}★</span>
              <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>
            <p className="mb-6 text-gray-700">{product.description}</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="h-10 w-10 flex items-center justify-center"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="h-10 w-10 flex items-center justify-center"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition"
              >
                <ShoppingBag className="w-5 h-5 mr-2 inline-block" />
                Add to Cart
              </button>
              <button
                onClick={handleWishlist}
                className="text-purple-600 hover:bg-purple-50 p-3 rounded-full transition"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                onClick={handleShare}
                className="text-gray-700 hover:bg-gray-100 p-3 rounded-full transition"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-8">
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'description' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'ingredients' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'benefits' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
                >
                  Benefits
                </button>
                <button
                  onClick={() => setActiveTab('howToUse')}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'howToUse' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
                >
                  How to Use
                </button>
              </div>
              {activeTab === 'description' && <p className="text-gray-700">{product.description}</p>}
              {activeTab === 'ingredients' && (
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  {product.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'benefits' && (
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'howToUse' && (
                <p className="text-gray-700">{product.howToUse}</p>
              )}
            </div>
            <div>
              <span className={`font-medium text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? `In stock (${product.stockCount} left)` : 'Out of stock'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Product Reviews */}
        <ProductReviews productId={Number(product.id)} />
        
        {/* Related Products */}
        <RelatedProducts />
      </main>
    </div>
  );
};

export default ProductDetail;
