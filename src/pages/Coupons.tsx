
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Tag, Calendar, Copy } from "lucide-react";

const Coupons = () => {
  const coupons = [
    {
      id: 1,
      code: "WELCOME20",
      title: "Welcome Bonus",
      description: "Get 20% off your first order",
      discount: "20% OFF",
      minOrder: 50000,
      expiry: "2024-12-31",
      isActive: true,
      isUsed: false
    },
    {
      id: 2,
      code: "SKINCARE15",
      title: "Skincare Special",
      description: "15% off all skincare products",
      discount: "15% OFF",
      minOrder: 30000,
      expiry: "2024-06-30",
      isActive: true,
      isUsed: false
    },
    {
      id: 3,
      code: "MAKEUP25",
      title: "Makeup Madness",
      description: "25% off makeup products",
      discount: "25% OFF",
      minOrder: 75000,
      expiry: "2024-03-15",
      isActive: false,
      isUsed: true
    }
  ];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Coupon code ${code} copied to clipboard!`);
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Coupons</h1>
            <p className="text-xl text-gray-600">Save money with exclusive offers and discounts</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coupons.map((coupon) => (
              <Card 
                key={coupon.id} 
                className={`border-2 ${
                  coupon.isActive ? 'border-yellow-300 bg-gradient-to-br from-yellow-50 to-yellow-100' 
                  : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full ${
                        coupon.isActive ? 'bg-yellow-500' : 'bg-gray-400'
                      }`}>
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{coupon.title}</CardTitle>
                        <p className="text-sm text-gray-600">{coupon.description}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                      coupon.isActive ? 'bg-yellow-500 text-black' : 'bg-gray-400 text-white'
                    }`}>
                      {coupon.discount}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between bg-white/50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-gray-600" />
                      <span className="font-mono font-bold text-lg">{coupon.code}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyCode(coupon.code)}
                      disabled={!coupon.isActive}
                      className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </Button>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Minimum order:</span>
                      <span className="font-semibold">{formatPrice(coupon.minOrder)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600">Expires:</span>
                      <span className={coupon.isActive ? 'text-gray-900' : 'text-red-500'}>
                        {new Date(coupon.expiry).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  {coupon.isUsed && (
                    <div className="text-center py-2">
                      <span className="bg-gray-500 text-white px-4 py-1 rounded-full text-sm">
                        Already Used
                      </span>
                    </div>
                  )}
                  
                  {!coupon.isActive && !coupon.isUsed && (
                    <div className="text-center py-2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">
                        Expired
                      </span>
                    </div>
                  )}
                  
                  {coupon.isActive && (
                    <Button 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                      onClick={() => window.location.href = '/shop'}
                    >
                      Use This Coupon
                    </Button>
                  )}
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

export default Coupons;
