
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FullViewportMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullViewportMenu = ({ isOpen, onClose }: FullViewportMenuProps) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: "📋", label: "My Order", description: "View order history", path: "/orders" },
    { icon: "🚚", label: "Track Order", description: "Track your shipments", path: "/track-order" },
    { icon: "👤", label: "Profile", description: "Manage account", path: "/profile" },
    { icon: "📍", label: "Address", description: "Delivery addresses", path: "/address" },
    { icon: "💬", label: "Message", description: "Support messages", path: "/messages" },
    { icon: "🎟️", label: "Coupon", description: "Your coupons", path: "/coupons" }
  ];

  const supportItems = [
    { icon: "🔔", label: "Notification", description: "Manage notifications", path: "/notifications" },
    { icon: "📞", label: "Help & Support", description: "Get help", path: "/support" },
    { icon: "📄", label: "Privacy Policy", description: "Read policy", path: "/privacy" },
    { icon: "📋", label: "Terms & Conditions", description: "View terms", path: "/terms" },
    { icon: "💰", label: "Refund policy", description: "Return policy", path: "/refund-policy" },
    { icon: "↩️", label: "Return policy", description: "Return items", path: "/return-policy" }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-yellow-600 to-gray-900 z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6 text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">Guest</h1>
              <p className="text-yellow-100">Welcome to Litzbella</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-yellow-200 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Main Menu Items */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-yellow-200 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-6">Support & Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {supportItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white group-hover:text-yellow-200 transition-colors text-sm">
                      {item.label}
                    </h3>
                    <p className="text-xs text-white/70">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
