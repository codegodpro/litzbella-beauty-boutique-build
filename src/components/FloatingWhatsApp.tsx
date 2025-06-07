
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
    const message = "Hello! I'm interested in Litzbella products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:animate-none group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us!
      </div>
    </button>
  );
};
