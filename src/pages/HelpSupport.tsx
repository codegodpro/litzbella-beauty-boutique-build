
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Search, MessageCircle, Phone, Mail } from "lucide-react";

const HelpSupport = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How can I track my order?",
      answer: "You can track your order by visiting the 'Track Order' page and entering your order number and email address. You'll also receive tracking information via email once your order ships."
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in their original packaging. Beauty products must be unopened for hygiene reasons. Please contact our support team to initiate a return."
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within Lagos and 5-7 business days to other states in Nigeria. Express shipping is available for next-day delivery in Lagos."
    },
    {
      id: 4,
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within Nigeria. We're working on expanding to other African countries soon. Please subscribe to our newsletter for updates."
    },
    {
      id: 5,
      question: "How can I cancel my order?",
      answer: "Orders can be cancelled within 2 hours of placement. After this time, the order enters processing and cannot be cancelled. Please contact support immediately if you need to cancel."
    },
    {
      id: 6,
      question: "Are your products authentic?",
      answer: "Yes, all our products are 100% authentic and sourced directly from authorized distributors and brands. We guarantee the authenticity of every product we sell."
    },
    {
      id: 7,
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button in the top right corner of our website. Fill in your details and verify your email address to complete the registration process."
    },
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, bank transfers, and mobile payment options like Paystack. All payments are processed securely."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
            <p className="text-xl text-gray-600">Find answers to common questions or get in touch with our team</p>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="search"
              placeholder="Search for help topics..."
              className="pl-10 pr-4 py-3 text-lg focus:ring-yellow-500 focus:border-yellow-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border border-yellow-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 p-3 rounded-full inline-block mb-4">
                  <MessageCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600 mb-4">Chat with our support team</p>
                <span className="text-yellow-600 font-medium">Available 24/7</span>
              </CardContent>
            </Card>

            <Card className="border border-yellow-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 p-3 rounded-full inline-block mb-4">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-sm text-gray-600 mb-4">+234 (0) 123 456 7890</p>
                <span className="text-yellow-600 font-medium">Mon-Fri 9AM-6PM</span>
              </CardContent>
            </Card>

            <Card className="border border-yellow-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 p-3 rounded-full inline-block mb-4">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 mb-4">support@litzbella.com</p>
                <span className="text-yellow-600 font-medium">24 hour response</span>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="border border-yellow-200">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="text-gray-900">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-4 pb-4 text-gray-700 bg-gray-50 border-t border-gray-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No results found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-400 mt-2">Try different keywords or contact our support team</p>
                </div>
              )}
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

export default HelpSupport;
