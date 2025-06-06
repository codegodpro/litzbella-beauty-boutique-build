
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "🅿️" },
    { id: "apple", name: "Apple Pay", icon: "🍎" },
    { id: "google", name: "Google Pay", icon: "🟢" },
    { id: "bank", name: "Bank Transfer", icon: "🏦" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment Methods</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedMethod === method.id
                      ? 'border-yellow-600 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-medium">{method.name}</span>
                    {selectedMethod === method.id && (
                      <div className="ml-auto w-4 h-4 bg-yellow-600 rounded-full" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {selectedMethod === "card" && (
            <Card>
              <CardHeader>
                <CardTitle>Card Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <Input placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <Input placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <Input placeholder="123" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <Input placeholder="John Doe" />
                </div>
                <Button className="bg-yellow-600 hover:bg-yellow-700 w-full">
                  Save Payment Method
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default PaymentMethods;
