
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CreditCard, DollarSign, Building2, Link, Bitcoin } from "lucide-react";

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [formData, setFormData] = useState({
    // Card details
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    // Crypto details
    cryptocurrency: 'btc',
    walletAddress: '',
    // Bank details
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    accountHolderName: '',
    // Payment link
    paymentUrl: ''
  });

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: <CreditCard className="w-6 h-6" />, description: "Visa, Mastercard, American Express" },
    { id: "paypal", name: "PayPal", icon: <DollarSign className="w-6 h-6" />, description: "Pay with your PayPal account" },
    { id: "crypto", name: "Cryptocurrency", icon: <Bitcoin className="w-6 h-6" />, description: "Bitcoin, Ethereum, USDT" },
    { id: "bank", name: "Bank Transfer", icon: <Building2 className="w-6 h-6" />, description: "Direct bank account transfer" },
    { id: "paymentlink", name: "Payment Link", icon: <Link className="w-6 h-6" />, description: "Receive payment via secure link" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSavePaymentMethod = () => {
    console.log('Saving payment method:', selectedMethod, formData);
    alert(`${selectedMethod} payment method saved successfully!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Payment Methods</h1>
            <p className="text-muted-foreground text-sm md:text-base">Choose your preferred payment method</p>
          </div>
          
          <Card className="mb-6 md:mb-8 border-border shadow-lg bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-t-lg">
              <CardTitle className="text-foreground text-lg md:text-xl">Select Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-3 md:p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedMethod === method.id
                      ? 'border-yellow-500 bg-yellow-500/10 shadow-md ring-2 ring-yellow-500/20'
                      : 'border-border hover:border-yellow-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      selectedMethod === method.id ? 'bg-yellow-500 text-black' : 'bg-muted text-muted-foreground'
                    }`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm md:text-base">{method.name}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    {selectedMethod === method.id && (
                      <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-black rounded-full" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {selectedMethod === "card" && (
            <Card className="border-border shadow-lg bg-gradient-to-r from-yellow-500/5 to-amber-500/5">
              <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-t-lg">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg md:text-xl">
                  <CreditCard className="w-4 h-4 md:w-5 md:h-5" />
                  Card Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Card Number
                  </label>
                  <Input 
                    placeholder="1234 5678 9012 3456" 
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Expiry Date
                    </label>
                    <Input 
                      placeholder="MM/YY" 
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      CVV
                    </label>
                    <Input 
                      placeholder="123" 
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Cardholder Name
                  </label>
                  <Input 
                    placeholder="John Doe" 
                    value={formData.cardholderName}
                    onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                    className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {selectedMethod === "crypto" && (
            <Card className="border-border shadow-lg bg-gradient-to-r from-yellow-500/5 to-amber-500/5">
              <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-t-lg">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg md:text-xl">
                  <Bitcoin className="w-4 h-4 md:w-5 md:h-5" />
                  Cryptocurrency Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Select Cryptocurrency
                  </label>
                  <select 
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                    value={formData.cryptocurrency}
                    onChange={(e) => handleInputChange('cryptocurrency', e.target.value)}
                  >
                    <option value="btc">Bitcoin (BTC)</option>
                    <option value="eth">Ethereum (ETH)</option>
                    <option value="usdt">Tether (USDT)</option>
                    <option value="bnb">Binance Coin (BNB)</option>
                    <option value="ada">Cardano (ADA)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Wallet Address
                  </label>
                  <Input 
                    placeholder="Enter your wallet address" 
                    value={formData.walletAddress}
                    onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                    className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                  />
                </div>
                <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> Make sure to double-check your wallet address before proceeding. Cryptocurrency transactions are irreversible.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedMethod === "bank" && (
            <Card className="border-border shadow-lg bg-gradient-to-r from-yellow-500/5 to-amber-500/5">
              <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-t-lg">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg md:text-xl">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5" />
                  Bank Transfer Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Bank Name
                  </label>
                  <Input 
                    placeholder="Enter bank name" 
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                    className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Account Holder Name
                  </label>
                  <Input 
                    placeholder="Enter account holder name" 
                    value={formData.accountHolderName}
                    onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                    className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Account Number
                  </label>
                  <Input 
                    placeholder="Enter account number" 
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                    className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Routing Number
                  </label>
                  <Input 
                    placeholder="Enter routing number" 
                    value={formData.routingNumber}
                    onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                    className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
                  />
                </div>
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-sm text-foreground">
                    Bank transfers may take 1-3 business days to process. You will receive a confirmation email once the transfer is complete.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedMethod === "paymentlink" && (
            <Card className="border-border shadow-lg bg-gradient-to-r from-yellow-500/5 to-amber-500/5">
              <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-t-lg">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg md:text-xl">
                  <Link className="w-4 h-4 md:w-5 md:h-5" />
                  Payment Link
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Payment URL
                  </label>
                  <Input 
                    placeholder="https://payment.example.com/pay" 
                    value={formData.paymentUrl}
                    onChange={(e) => handleInputChange('paymentUrl', e.target.value)}
                    className="border-border focus:border-yellow-500 focus:ring-yellow-500/20"
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

          {selectedMethod === "paypal" && (
            <Card className="border-border shadow-lg bg-gradient-to-r from-yellow-500/5 to-amber-500/5">
              <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-t-lg">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg md:text-xl">
                  <DollarSign className="w-4 h-4 md:w-5 md:h-5" />
                  PayPal Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                <div className="text-center py-8">
                  <DollarSign className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">PayPal Integration</h3>
                  <p className="text-muted-foreground mb-6">
                    You will be redirected to PayPal to complete your payment securely.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                    Continue with PayPal
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-6 md:mt-8 flex justify-center">
            <Button 
              onClick={handleSavePaymentMethod}
              className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
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
