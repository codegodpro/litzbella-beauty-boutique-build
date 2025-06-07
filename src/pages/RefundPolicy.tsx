
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
            <p className="text-lg text-gray-600">Your satisfaction is our priority</p>
          </div>

          <div className="space-y-8">
            {/* Overview */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Our Commitment to You</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  At Litzbella, we want you to be completely satisfied with your purchase. If for any reason 
                  you're not happy with your order, we offer a comprehensive refund policy to ensure your peace of mind.
                </p>
              </CardContent>
            </Card>

            {/* Refund Eligibility */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Refund Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 font-semibold text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      Eligible for Refund
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Unopened products in original packaging</li>
                      <li>• Items returned within 30 days</li>
                      <li>• Defective or damaged products</li>
                      <li>• Wrong items sent by mistake</li>
                      <li>• Products with manufacturing defects</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 font-semibold text-red-600">
                      <XCircle className="w-5 h-5" />
                      Not Eligible for Refund
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Opened beauty products (hygiene reasons)</li>
                      <li>• Items returned after 30 days</li>
                      <li>• Products without original packaging</li>
                      <li>• Used or damaged by customer</li>
                      <li>• Sale or clearance items (unless defective)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Process */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">How to Request a Refund</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Contact Customer Support</h3>
                      <p className="text-gray-700">Email us at support@litzbella.com or call +234 (0) 123 456 7890 within 30 days of purchase.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Provide Order Information</h3>
                      <p className="text-gray-700">Include your order number, reason for return, and photos if the item is defective.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Receive Return Authorization</h3>
                      <p className="text-gray-700">We'll send you a Return Merchandise Authorization (RMA) number and return instructions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Ship the Item</h3>
                      <p className="text-gray-700">Package the item securely with the RMA number and ship to our returns center.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Receive Your Refund</h3>
                      <p className="text-gray-700">Once we receive and inspect the item, your refund will be processed within 5-10 business days.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Timeframes */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  Refund Timeframes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-yellow-100 p-4 rounded-full inline-block mb-3">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
                    <p className="text-gray-700">1-2 business days after we receive your return</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-100 p-4 rounded-full inline-block mb-3">
                      <CheckCircle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bank Transfer</h3>
                    <p className="text-gray-700">3-5 business days to appear in your account</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-100 p-4 rounded-full inline-block mb-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Credit/Debit Card</h3>
                    <p className="text-gray-700">5-10 business days depending on your bank</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Costs */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Return Shipping</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-900">Defective or Wrong Items</span>
                    <span className="text-green-600 font-semibold">FREE Return Shipping</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-gray-900">Change of Mind Returns</span>
                    <span className="text-yellow-600 font-semibold">Customer Pays Shipping</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-900">Orders Over ₦100,000</span>
                    <span className="text-blue-600 font-semibold">FREE Return Shipping</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about our refund policy or need assistance with a return, 
                  our customer service team is here to help.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-700">support@litzbella.com</p>
                    <p className="text-sm text-gray-600">Response within 24 hours</p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-700">+234 (0) 123 456 7890</p>
                    <p className="text-sm text-gray-600">Monday - Friday, 9 AM - 6 PM</p>
                  </div>
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

export default RefundPolicy;
