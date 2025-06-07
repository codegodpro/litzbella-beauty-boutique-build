
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Bell, Mail, Smartphone, Package, Tag, Heart } from "lucide-react";

const Notifications = () => {
  const [settings, setSettings] = useState({
    orderUpdates: true,
    promotions: true,
    newProducts: false,
    priceDrops: true,
    wishlistAvailable: true,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true
  });

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const notificationTypes = [
    {
      key: 'orderUpdates',
      icon: Package,
      title: 'Order Updates',
      description: 'Get notified about order status, shipping, and delivery'
    },
    {
      key: 'promotions',
      icon: Tag,
      title: 'Promotions & Offers',
      description: 'Receive updates about sales, discounts, and special offers'
    },
    {
      key: 'newProducts',
      icon: Heart,
      title: 'New Products',
      description: 'Be the first to know about new product launches'
    },
    {
      key: 'priceDrops',
      icon: Tag,
      title: 'Price Drops',
      description: 'Get alerts when products in your wishlist go on sale'
    },
    {
      key: 'wishlistAvailable',
      icon: Heart,
      title: 'Wishlist Items Available',
      description: 'Notifications when out-of-stock wishlist items are back'
    }
  ];

  const deliveryMethods = [
    {
      key: 'emailNotifications',
      icon: Mail,
      title: 'Email Notifications',
      description: 'Receive notifications via email'
    },
    {
      key: 'smsNotifications',
      icon: Smartphone,
      title: 'SMS Notifications',
      description: 'Get text messages for important updates'
    },
    {
      key: 'pushNotifications',
      icon: Bell,
      title: 'Push Notifications',
      description: 'Browser and mobile app notifications'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Notification Settings</h1>
            <p className="text-xl text-gray-600">Manage how you receive updates from Litzbella</p>
          </div>

          <div className="space-y-8">
            {/* Notification Types */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Bell className="w-5 h-5 text-yellow-600" />
                  Notification Types
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {notificationTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <div key={type.key} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-yellow-100 rounded-full">
                            <Icon className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{type.title}</h3>
                            <p className="text-sm text-gray-600">{type.description}</p>
                          </div>
                        </div>
                        <Switch
                          checked={settings[type.key]}
                          onCheckedChange={() => handleToggle(type.key)}
                        />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Methods */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Smartphone className="w-5 h-5 text-yellow-600" />
                  Delivery Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {deliveryMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div key={method.key} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-yellow-100 rounded-full">
                            <Icon className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{method.title}</h3>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                        <Switch
                          checked={settings[method.key]}
                          onCheckedChange={() => handleToggle(method.key)}
                        />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Privacy Notice */}
            <Card className="border border-gray-200 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Privacy Notice</h3>
                <p className="text-sm text-gray-600">
                  Your notification preferences are stored securely and we will never share your information 
                  with third parties. You can change these settings at any time. For more information, 
                  please read our <a href="/privacy" className="text-yellow-600 hover:underline">Privacy Policy</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default Notifications;
