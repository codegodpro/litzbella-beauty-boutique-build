
import { useNavigate } from "react-router-dom";

export const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
              New Collection Available
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Discover Your
              <span className="block text-yellow-300">Natural Beauty</span>
            </h1>
            <p className="text-lg text-purple-100 max-w-md">
              Premium cosmetics and skincare products to enhance your natural glow. 
              Quality ingredients, stunning results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/shop')}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </button>
              <button 
                onClick={() => navigate('/shop?filter=new')}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Collection
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-6xl">💄</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
