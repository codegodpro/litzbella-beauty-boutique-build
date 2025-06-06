
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);

  const handleTrack = () => {
    // Mock order tracking
    setOrderDetails({
      orderNumber: orderNumber,
      status: "In Transit",
      estimatedDelivery: "Dec 25, 2024",
      tracking: [
        { status: "Order Placed", date: "Dec 20, 2024", completed: true },
        { status: "Order Confirmed", date: "Dec 21, 2024", completed: true },
        { status: "Shipped", date: "Dec 22, 2024", completed: true },
        { status: "In Transit", date: "Dec 23, 2024", completed: true },
        { status: "Out for Delivery", date: "Dec 25, 2024", completed: false },
        { status: "Delivered", date: "Dec 25, 2024", completed: false }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Order</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number
                </label>
                <Input
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Enter your order number"
                />
              </div>
              <Button 
                onClick={handleTrack}
                className="bg-yellow-600 hover:bg-yellow-700 w-full"
              >
                Track Order
              </Button>
            </CardContent>
          </Card>

          {orderDetails && (
            <Card>
              <CardHeader>
                <CardTitle>Order #{orderDetails.orderNumber}</CardTitle>
                <p className="text-green-600 font-medium">Status: {orderDetails.status}</p>
                <p className="text-gray-600">Estimated Delivery: {orderDetails.estimatedDelivery}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderDetails.tracking.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${
                        step.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <p className={`font-medium ${
                          step.completed ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {step.status}
                        </p>
                        <p className="text-sm text-gray-500">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default TrackOrder;
