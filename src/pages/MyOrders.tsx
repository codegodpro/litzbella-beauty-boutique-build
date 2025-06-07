
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState('all');

  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 127500,
      items: [
        { name: "Hydrating Face Serum", price: 45000, quantity: 1, image: "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=100&h=100&fit=crop" },
        { name: "Vitamin C Serum", price: 52500, quantity: 1, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop" },
        { name: "Setting Powder", price: 30000, quantity: 1, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=100&h=100&fit=crop" }
      ]
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-20",
      status: "shipped",
      total: 75000,
      items: [
        { name: "Matte Lipstick", price: 24300, quantity: 2, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop" },
        { name: "Mascara", price: 26400, quantity: 1, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=100&h=100&fit=crop" }
      ]
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-22",
      status: "processing",
      total: 60000,
      items: [
        { name: "Foundation", price: 47250, quantity: 1, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop" },
        { name: "Concealer", price: 12750, quantity: 1, image: "https://images.unsplash.com/photo-1583241800692-31d5c5ae44dc?w=100&h=100&fit=crop" }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'shipped':
        return 'text-blue-600 bg-blue-100';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
          
          {/* Order Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-200">
            {['all', 'processing', 'shipped', 'delivered'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-sm font-medium capitalize ${
                  activeTab === tab 
                    ? 'text-yellow-600 border-b-2 border-yellow-600' 
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {orders
              .filter(order => activeTab === 'all' || order.status === activeTab)
              .map((order) => (
                <Card key={order.id} className="border border-yellow-200">
                  <CardHeader className="bg-yellow-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-gray-900">Order {order.id}</CardTitle>
                        <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.status)}
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-yellow-600">{formatPrice(item.price)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 mt-4 flex justify-between items-center">
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          Total: {formatPrice(order.total)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black">
                          View Details
                        </Button>
                        {order.status === 'delivered' && (
                          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                            Reorder
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default MyOrders;
