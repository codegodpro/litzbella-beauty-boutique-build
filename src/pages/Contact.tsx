
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, CreditCard, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-yellow-500" />,
      title: "Visit Our Store",
      details: [
        "APT gate 1 Imo Extension",
        "Shop no 6: Balogun Trade fair Lagos",
        "Opp badagry Express way Lagos, Nigeria"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-yellow-500" />,
      title: "Call or WhatsApp",
      details: ["+2347067805145"]
    },
    {
      icon: <CreditCard className="w-6 h-6 text-yellow-500" />,
      title: "Bank Information",
      details: [
        "Fidelity Bank:",
        "LITZBELLA Cosmetics Nig LTD",
        "Account: 5600663902",
        "",
        "Access Bank (Dollar):",
        "Okenwa Chinweuba",
        "Account: 0097872929"
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/litzbella_world?igsh=djR0eHV6N2ZyYXk0",
      color: "hover:bg-pink-600"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook", 
      url: "https://www.facebook.com/litz.bella.5?mibextid=ZbWKwL",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCeZHeQxjvWXYR4qlF9P3aTg",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for inquiries, orders, or to learn more about our beauty products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-400">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <Input 
                    className="bg-gray-700 border-gray-600 focus:border-yellow-500 text-white"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <Input 
                    className="bg-gray-700 border-gray-600 focus:border-yellow-500 text-white"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  className="bg-gray-700 border-gray-600 focus:border-yellow-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel"
                  className="bg-gray-700 border-gray-600 focus:border-yellow-500 text-white"
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea 
                  className="bg-gray-700 border-gray-600 focus:border-yellow-500 text-white min-h-[120px]"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media Links */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(social.url, '_blank')}
                      className={`border-gray-600 text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </Button>
                  ))}
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

export default Contact;
