
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  ShoppingBag, 
  MapPin, 
  MessageCircle, 
  Ticket, 
  Bell, 
  HelpCircle, 
  FileText, 
  DollarSign, 
  RotateCcw,
  User,
  Package
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      icon: <ShoppingBag className="w-5 h-5" />, 
      label: "My Order", 
      description: "View order history",
      path: "/my-orders"
    },
    { 
      icon: <Package className="w-5 h-5" />, 
      label: "Track Order", 
      description: "Track your shipments",
      path: "/track-order"
    },
    { 
      icon: <User className="w-5 h-5" />, 
      label: "Profile", 
      description: "Manage account",
      path: "/profile"
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: "Address", 
      description: "Delivery addresses",
      path: "/address"
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      label: "Message", 
      description: "Support messages",
      path: "/message-support"
    },
    { 
      icon: <Ticket className="w-5 h-5" />, 
      label: "Coupon", 
      description: "Your coupons",
      path: "/coupons"
    }
  ];

  const supportItems = [
    { 
      icon: <Bell className="w-4 h-4" />, 
      label: "Notification", 
      description: "Manage notifications",
      path: "/notifications"
    },
    { 
      icon: <HelpCircle className="w-4 h-4" />, 
      label: "Help & Support", 
      description: "Get help",
      path: "/help-support"
    },
    { 
      icon: <FileText className="w-4 h-4" />, 
      label: "Privacy Policy", 
      description: "Read policy",
      path: "/privacy"
    },
    { 
      icon: <FileText className="w-4 h-4" />, 
      label: "Terms & Conditions", 
      description: "View terms",
      path: "/terms"
    },
    { 
      icon: <DollarSign className="w-4 h-4" />, 
      label: "Refund policy", 
      description: "Return policy",
      path: "/refund-policy"
    },
    { 
      icon: <RotateCcw className="w-4 h-4" />, 
      label: "Return policy", 
      description: "Return items",
      path: "/return-policy"
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-4 md:py-8">
        {/* Profile Header */}
        <Card className="mb-6 md:mb-8 shadow-xl">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-4 md:gap-6 text-primary-foreground">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <User className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="flex-1">
                  <h1 className="text-xl md:text-2xl font-bold mb-1">Guest</h1>
                  <p className="text-primary-foreground/80 text-sm md:text-base mb-3">Welcome to Litzbella</p>
                  <Button 
                    variant="outline" 
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                    onClick={() => navigate('/login')}
                  >
                    Complete Profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-border"
              onClick={() => handleNavigation(item.path)}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                      {item.label}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Section */}
        <Card className="shadow-lg border-border">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">Support & Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {supportItems.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 md:p-4 rounded-xl hover:bg-muted transition-colors cursor-pointer group"
                  onClick={() => handleNavigation(item.path)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                        {item.label}
                      </h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
