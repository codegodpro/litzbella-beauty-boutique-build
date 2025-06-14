
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Clock, Package, CreditCard, Users, HelpCircle } from "lucide-react";

const HelpSupport = () => {
  const quickHelp = [
    {
      icon: <Package className="w-6 h-6 text-yellow-500" />,
      title: "Track Your Order",
      description: "Get real-time updates on your order status",
      action: "Track Order",
      href: "/track-order"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-yellow-500" />,
      title: "Returns & Refunds",
      description: "Easy returns within 30 days",
      action: "Return Policy",
      href: "/return-policy"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Account Help",
      description: "Manage your account and orders",
      action: "My Account",
      href: "/profile"
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-yellow-500" />,
      title: "Product Questions",
      description: "Find answers about our products",
      action: "Contact Us",
      href: "/contact"
    }
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "WhatsApp Support",
      description: "Quick responses via WhatsApp",
      contact: "+2347067805145",
      availability: "24/7 Available"
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+2347067805145",
      availability: "Mon-Fri, 9 AM - 6 PM"
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: "Email Support",
      description: "Send us your questions",
      contact: "support@litzbella.com",
      availability: "Response within 24 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
            <p className="text-lg text-gray-600">We're here to help you with any questions or concerns</p>
          </div>

          {/* Quick Help Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickHelp.map((item, index) => (
                <Card key={index} className="border border-yellow-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = item.href}
                      className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    >
                      {item.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                        <p className="font-medium text-gray-900 mb-1">{method.contact}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {method.availability}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="border border-yellow-200">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="text-gray-900">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How long does shipping take?</h3>
                  <p className="text-gray-700">We process orders within 1-2 business days. Delivery typically takes 3-7 business days within Nigeria.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I return opened beauty products?</h3>
                  <p className="text-gray-700">For hygiene reasons, opened beauty products cannot be returned unless they are defective or damaged upon arrival.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Do you offer international shipping?</h3>
                  <p className="text-gray-700">Currently, we only ship within Nigeria. We're working on expanding our shipping options.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How can I track my order?</h3>
                  <p className="text-gray-700">You can track your order using the tracking link sent to your email or by visiting our Track Order page.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-700">We accept bank transfers, card payments, and mobile money. You can also pay on delivery for orders within Lagos.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default HelpSupport;
