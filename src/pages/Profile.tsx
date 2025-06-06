
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const menuItems = [
    { icon: "📋", label: "My Order", description: "View order history" },
    { icon: "🚚", label: "Track Order", description: "Track your shipments" },
    { icon: "👤", label: "Profile", description: "Manage account" },
    { icon: "📍", label: "Address", description: "Delivery addresses" },
    { icon: "💬", label: "Message", description: "Support messages" },
    { icon: "🎟️", label: "Coupon", description: "Your coupons" }
  ];

  const supportItems = [
    { icon: "🔔", label: "Notification", description: "Manage notifications" },
    { icon: "📞", label: "Help & Support", description: "Get help" },
    { icon: "📄", label: "Privacy Policy", description: "Read policy" },
    { icon: "📋", label: "Terms & Conditions", description: "View terms" },
    { icon: "💰", label: "Refund policy", description: "Return policy" },
    { icon: "↩️", label: "Return policy", description: "Return items" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-6 text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">Guest</h1>
              <p className="text-purple-100">Welcome to Litzbella</p>
              <Button 
                variant="outline" 
                className="mt-3 border-white text-white hover:bg-white hover:text-purple-600"
              >
                Complete Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Account Menu */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Support & Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {supportItems.map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors text-sm">
                      {item.label}
                    </h3>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
