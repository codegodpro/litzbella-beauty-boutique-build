
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Truck, RotateCcw, CheckCircle } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Return Policy</h1>
            <p className="text-lg text-gray-600">Easy returns for your peace of mind</p>
          </div>

          <div className="space-y-8">
            {/* Quick Return Process */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Return Process Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-yellow-500 p-4 rounded-full inline-block mb-4">
                      <Package className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Request Return</h3>
                    <p className="text-sm text-gray-600">Contact us within 30 days</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-500 p-4 rounded-full inline-block mb-4">
                      <RotateCcw className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Get RMA Number</h3>
                    <p className="text-sm text-gray-600">Receive authorization code</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-500 p-4 rounded-full inline-block mb-4">
                      <Truck className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ship Item Back</h3>
                    <p className="text-sm text-gray-600">Use provided return label</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-500 p-4 rounded-full inline-block mb-4">
                      <CheckCircle className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Get Refund</h3>
                    <p className="text-sm text-gray-600">Process within 5-10 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Return Conditions */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Return Conditions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">General Return Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Items must be returned within <strong>30 days</strong> of purchase</li>
                    <li>• Products must be in original, unopened packaging</li>
                    <li>• All original tags and labels must be attached</li>
                    <li>• Return authorization (RMA) number required</li>
                    <li>• Original receipt or order confirmation needed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Beauty Product Special Conditions</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Important:</strong> For hygiene and safety reasons, opened beauty products 
                      (cosmetics, skincare, fragrances) cannot be returned unless they are defective 
                      or damaged upon arrival.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Non-Returnable Items</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Opened cosmetics and skincare products</li>
                    <li>• Used or partially used items</li>
                    <li>• Items without original packaging</li>
                    <li>• Final sale or clearance items</li>
                    <li>• Gift cards and digital products</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Exchange vs Return */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Exchange vs Return Options</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">Exchange</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Different size or color</li>
                      <li>• Same or higher value item</li>
                      <li>• No processing fees</li>
                      <li>• Faster than return + new order</li>
                    </ul>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                      Request Exchange
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-3">Return for Refund</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Full refund to original payment</li>
                      <li>• Processing time: 5-10 business days</li>
                      <li>• Customer pays return shipping*</li>
                      <li>• No restocking fees</li>
                    </ul>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                      Request Refund
                    </Button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mt-4">
                  *Free return shipping for defective items or our mistakes
                </p>
              </CardContent>
            </Card>

            {/* Defective Items */}
            <Card className="border border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900">Defective or Damaged Items</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-red-800">
                    If you receive a defective or damaged item, we'll make it right immediately:
                  </p>
                  
                  <ul className="space-y-2 text-red-800">
                    <li>• <strong>Priority processing</strong> - handled within 24 hours</li>
                    <li>• <strong>Free return shipping</strong> with prepaid label</li>
                    <li>• <strong>Immediate replacement</strong> or full refund</li>
                    <li>• <strong>No questions asked</strong> return policy</li>
                  </ul>
                  
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">What to do:</h4>
                    <ol className="space-y-1 text-red-800 text-sm">
                      <li>1. Take photos of the defective item</li>
                      <li>2. Contact us immediately at support@litzbella.com</li>
                      <li>3. Include your order number and photos</li>
                      <li>4. We'll send a prepaid return label</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Return Shipping Information */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Return Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Return Address</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-mono text-gray-800">
                        Litzbella Returns Center<br />
                        123 Beauty Plaza<br />
                        Victoria Island<br />
                        Lagos, Nigeria 101001
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Packaging Tips</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Use original packaging when possible</li>
                      <li>• Include all original accessories and documentation</li>
                      <li>• Write RMA number clearly on the outside of package</li>
                      <li>• Use adequate padding to prevent damage</li>
                      <li>• Keep tracking receipt until refund is processed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Returns */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Start Your Return</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <p className="text-gray-700">
                    Ready to return an item? Contact our customer service team to get started.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                      <p className="text-gray-700 mb-3">returns@litzbella.com</p>
                      <p className="text-sm text-gray-600">Include order number and reason for return</p>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                      <p className="text-gray-700 mb-3">+234 (0) 123 456 7890</p>
                      <p className="text-sm text-gray-600">Monday - Friday, 9 AM - 6 PM</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3"
                    onClick={() => window.location.href = '/message-support'}
                  >
                    Start Return Request
                  </Button>
                </div>
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

export default ReturnPolicy;
