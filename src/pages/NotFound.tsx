
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-yellow-500 mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-200 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What would you like to do?</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="flex flex-col items-center gap-3 h-auto py-6 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black"
              >
                <ArrowLeft className="w-8 h-8" />
                <span className="text-sm font-medium">Go Back</span>
              </Button>
              
              <Button
                onClick={() => window.location.href = '/'}
                className="flex flex-col items-center gap-3 h-auto py-6 bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Home className="w-8 h-8" />
                <span className="text-sm font-medium">Go Home</span>
              </Button>
              
              <Button
                onClick={() => window.location.href = '/shop'}
                variant="outline"
                className="flex flex-col items-center gap-3 h-auto py-6 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black"
              >
                <Search className="w-8 h-8" />
                <span className="text-sm font-medium">Browse Products</span>
              </Button>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-gray-700 mb-4">
              If you believe this is an error or need assistance finding what you're looking for, 
              please contact our customer support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => window.location.href = '/message-support'}
                variant="outline"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black"
              >
                Contact Support
              </Button>
              <Button
                onClick={() => window.location.href = '/help-support'}
                variant="outline"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black"
              >
                Help Center
              </Button>
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

export default NotFound;
