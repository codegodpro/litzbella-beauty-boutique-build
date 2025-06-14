
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      title: "Lush, lightweight lashes that last",
      description: "Premium quality eyelash extensions designed for comfort and durability"
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      title: "Pigment-rich, skin-loving makeup",
      description: "Carefully formulated for every skin tone and type"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Trend-driven products",
      description: "Stay ahead of the beauty curve with our latest collections"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            About Litzbella
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Litzbella, beauty isn't just a look—it's a lifestyle.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We are a passionate online cosmetics brand dedicated to enhancing your natural glow with high-quality eyelash extensions and makeup essentials designed to make every face unforgettable. Born from a love for self-expression and elegance, Litzbella empowers beauty lovers to feel bold, confident, and effortlessly glam.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Closing Statement */}
          <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-yellow-500/30">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-300 mb-4">
                Whether you're getting ready for a night out or elevating your everyday look, Litzbella is your go-to for beauty that speaks volumes—with lashes that flutter and makeup that captivates.
              </p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-yellow-400">Welcome to Litzbella.</p>
                <p className="text-xl text-yellow-300">Where beauty meets confidence.</p>
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

export default About;
