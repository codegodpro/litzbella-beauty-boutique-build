
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <Card className="border border-yellow-200">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="text-gray-900">Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <p className="text-gray-700">
                By accessing and using the Litzbella website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Use License</h2>
                <div className="space-y-3 text-gray-700">
                  <p>Permission is granted to temporarily download one copy of the materials on Litzbella's website for personal, non-commercial transitory viewing only.</p>
                  <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Product Information</h2>
                <div className="space-y-3 text-gray-700">
                  <p>We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
                  <p>All products are subject to availability. We reserve the right to discontinue any product at any time.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Pricing and Payment</h2>
                <div className="space-y-3 text-gray-700">
                  <p>All prices are in Nigerian Naira (NGN) and include applicable taxes unless otherwise stated.</p>
                  <p>We reserve the right to change prices at any time without notice. However, if you have already placed an order, the price at the time of order will be honored.</p>
                  <p>Payment must be received before products are shipped. We accept various payment methods as displayed during checkout.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Shipping and Delivery</h2>
                <div className="space-y-3 text-gray-700">
                  <p>We aim to process and ship orders within 1-2 business days. Delivery times may vary based on location and shipping method selected.</p>
                  <p>Risk of loss and title for products pass to you upon delivery to the shipping address you provide.</p>
                  <p>We are not responsible for delays caused by shipping carriers or circumstances beyond our control.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Returns and Refunds</h2>
                <div className="space-y-3 text-gray-700">
                  <p>We accept returns within 30 days of purchase for unopened products in original packaging.</p>
                  <p>For hygiene reasons, opened beauty products cannot be returned unless defective.</p>
                  <p>Customers are responsible for return shipping costs unless the item is defective or we made an error.</p>
                  <p>Refunds will be processed within 5-10 business days after we receive the returned item.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">6. User Accounts</h2>
                <div className="space-y-3 text-gray-700">
                  <p>You are responsible for maintaining the confidentiality of your account and password.</p>
                  <p>You agree to accept responsibility for all activities that occur under your account.</p>
                  <p>We reserve the right to terminate accounts that violate these terms.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Prohibited Uses</h2>
                <p className="text-gray-700 mb-3">You may not use our service:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
                <p className="text-gray-700">
                  In no case shall Litzbella, our directors, officers, employees, affiliates, agents, contractors, 
                  interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any 
                  direct, indirect, incidental, punitive, special, or consequential damages of any kind.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of Nigeria 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Information</h2>
                <p className="text-gray-700">
                  Questions about the Terms of Service should be sent to us at:
                </p>
                <div className="mt-3 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> legal@litzbella.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +234 (0) 123 456 7890</p>
                  <p className="text-gray-700"><strong>Address:</strong> 123 Beauty Plaza, Victoria Island, Lagos, Nigeria</p>
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

export default TermsConditions;
