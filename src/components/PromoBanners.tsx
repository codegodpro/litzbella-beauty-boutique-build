
export const PromoBanners = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Fashion Tips Banner */}
        <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl overflow-hidden h-64">
          <div className="absolute inset-0 p-8 flex flex-col justify-center">
            <div className="text-right">
              <span className="text-black/60 text-sm">3/3</span>
            </div>
            <div className="space-y-2">
              <p className="text-black text-sm font-medium">Streaming now</p>
              <h2 className="text-black text-4xl font-bold">
                BEAUTY
                <span className="block text-2xl italic">Tips</span>
              </h2>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center">
            <span className="text-6xl">👨‍💼</span>
          </div>
        </div>

        {/* Beauty Sale Banner */}
        <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl overflow-hidden h-64">
          <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif italic">Beauty</h2>
              <p className="text-2xl font-bold">SALE</p>
              <p className="text-lg">60% OFF</p>
              <button className="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
                SHOP NOW!
              </button>
            </div>
          </div>
          <div className="absolute right-4 top-4 space-y-2">
            <div className="w-12 h-16 bg-white rounded-lg"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-10 h-10 bg-amber-400 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
