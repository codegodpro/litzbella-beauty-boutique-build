
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CreditCard, DollarSign, Building2, Link, Bitcoin } from "lucide-react";

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: <CreditCard className="w-6 h-6" />, description: "Visa, Mastercard, American Express" },
    { id: "paypal", name: "PayPal", icon: <DollarSign className="w-6 h-6" />, description: "Pay with your PayPal account" },
    { id: "crypto", name: "Cryptocurrency", icon: <Bitcoin className="w-6 h-6" />, description: "Bitcoin, Ethereum, USDT" },
    { id: "bank", name: "Bank Transfer", icon: <Building2 className="w-6 h-6" />, description: "Direct bank account transfer" },
    { id: "paymentlink", name: "Payment Link", icon: <Link className="w-6 h-6" />, description: "Receive payment via secure link" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Payment Methods</h1>
            <p className="text-muted-foreground">Choose your preferred payment method</p>
          </div>
          
          <Card className="mb-8 border-border">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="text-foreground">Select Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedMethod === method.id
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      selectedMethod === method.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    {selectedMethod === method.id && (
                      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {selectedMethod === "card" && (
            <Card className="border-border">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-foreground flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Card Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Card Number
                  </label>
                  <Input 
                    placeholder="1234 5678 9012 3456" 
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Expiry Date
                    </label>
                    <Input 
                      placeholder="MM/YY" 
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      CVV
                    </label>
                    <Input 
                      placeholder="123" 
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Cardholder Name
                  </label>
                  <Input 
                    placeholder="John Doe" 
                    className="border-border focus:border-primary"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {selectedMethod === "crypto" && (
            <Card className="border-border">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Bitcoin className="w-5 h-5" />
                  Cryptocurrency Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Select Cryptocurrency
                  </label>
                  <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:border-primary">
                    <option value="btc">Bitcoin (BTC)</option>
                    <option value="eth">Ethereum (ETH)</option>
                    <option value="usdt">Tether (USDT)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Wallet Address
                  </label>
                  <Input 
                    placeholder="Enter your wallet address" 
                    className="border-border focus:border-primary"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {selectedMethod === "bank" && (
            <Card className="border-border">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Bank Transfer Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Bank Name
                  </label>
                  <Input 
                    placeholder="Enter bank name" 
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Account Number
                  </label>
                  <Input 
                    placeholder="Enter account number" 
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Routing Number
                  </label>
                  <Input 
                    placeholder="Enter routing number" 
                    className="border-border focus:border-primary"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {selectedMethod === "paymentlink" && (
            <Card className="border-border">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Link className="w-5 h-5" />
                  Payment Link
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Payment URL
                  </label>
                  <Input 
                    placeholder="https://payment.example.com/pay" 
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Enter the secure payment link provided by your payment processor.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 flex justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
              Save Payment Method
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentMethods;
