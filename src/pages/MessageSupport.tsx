
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

const MessageSupport = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support message submitted:', { email, subject, message });
    // Reset form
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Your message has been sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Support</h1>
            <p className="text-xl text-gray-600">We're here to help! Get in touch with our support team.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <Card className="border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <MessageCircle className="w-5 h-5 text-yellow-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What can we help you with?"
                      required
                      className="focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your question or issue in detail..."
                      rows={6}
                      required
                      className="focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border border-yellow-200">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                      <p className="text-gray-600">+234 (0) 123 456 7890</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                      <p className="text-gray-600">support@litzbella.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                      <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="border border-yellow-200">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="text-gray-900">Quick Help</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Order Status & Tracking</h4>
                      <p className="text-sm text-gray-600">Check your order status and tracking information</p>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Returns & Exchanges</h4>
                      <p className="text-sm text-gray-600">Learn about our return and exchange policy</p>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                      <h4 className="font-medium text-gray-900">Product Information</h4>
                      <p className="text-sm text-gray-600">Get details about our products and ingredients</p>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default MessageSupport;
