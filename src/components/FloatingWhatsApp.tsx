
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
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none group"
      aria-label="Contact us on WhatsApp"
      style={{
        animationDuration: '3s'
      }}
    >
      <img 
        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" 
        alt="WhatsApp" 
        className="w-6 h-6 filter invert group-hover:scale-110 transition-transform duration-300" 
      />
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us!
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-800"></div>
      </div>
    </button>
  );
};
