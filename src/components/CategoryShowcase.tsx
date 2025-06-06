
export const CategoryShowcase = () => {
  const categories = [
    { name: "Skincare", icon: "🧴", description: "Face care essentials" },
    { name: "Makeup", icon: "💄", description: "Beauty cosmetics" },
    { name: "Fragrances", icon: "🌸", description: "Luxury perfumes" },
    { name: "Hair Care", icon: "✨", description: "Hair treatments" },
    { name: "Body Care", icon: "🛁", description: "Body essentials" },
    { name: "Tools", icon: "🖌️", description: "Beauty tools" },
    { name: "Sets & Kits", icon: "🎁", description: "Gift collections" },
    { name: "New Arrivals", icon: "⭐", description: "Latest products" },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">All Categories</h2>
        <p className="text-gray-600">Discover our complete range of beauty products</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
