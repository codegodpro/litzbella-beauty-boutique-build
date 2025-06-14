
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <Card className="border border-yellow-200">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="text-gray-900">Your Privacy Matters to Us</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Personal Information:</strong> When you create an account, we collect your name, email address, phone number, and shipping address.</p>
                  <p><strong>Payment Information:</strong> We collect payment details through secure third-party processors. We do not store your complete payment information.</p>
                  <p><strong>Usage Data:</strong> We collect information about how you use our website, including pages visited, products viewed, and search queries.</p>
                  <p><strong>Device Information:</strong> We may collect device-specific information such as your IP address, browser type, and operating system.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Provide customer support</li>
                  <li>Send promotional emails (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Information Sharing</h2>
                <p className="text-gray-700 mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping companies, email services)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our business</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. This includes SSL encryption, secure servers, and regular security audits.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h2>
                <p className="text-gray-700 mb-3">You have the right to:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct or update your information</li>
                  <li>Delete your account and personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
                <p className="text-gray-700">
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                  and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. We will notify you of any significant changes 
                  by posting the new policy on this page and updating the "last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this privacy policy or our data practices, please contact us at:
                </p>
                <div className="mt-3 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@litzbella.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +2347067805145</p>
                  <p className="text-gray-700"><strong>Address:</strong> APT gate 1 Imo Extension, Shop no 6: Balogun Trade fair Lagos, Opp badagry Express way Lagos, Nigeria</p>
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

export default PrivacyPolicy;
