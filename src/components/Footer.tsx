
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Help & Support", href: "/help-support" },
      { name: "Track Order", href: "/track-order" }
    ],
    "Customer Service": [
      { name: "My Orders", href: "/my-orders" },
      { name: "Return Policy", href: "/return-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Shipping Info", href: "/help-support" }
    ],
    "Legal": [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-conditions" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Return Policy", href: "/return-policy" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <h3 className="text-xl font-bold">Litzbella</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Where beauty meets confidence. Enhancing your natural glow with high-quality 
              eyelash extensions and makeup essentials.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/litz.bella.5?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="w-4 h-4 filter invert" />
              </a>
              <a href="https://www.instagram.com/litzbella_world?igsh=djR0eHV6N2ZyYXk0" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="w-4 h-4 filter invert" />
              </a>
              <a href="https://www.youtube.com/channel/UCeZHeQxjvWXYR4qlF9P3aTg" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" className="w-4 h-4 filter invert" />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-lg">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => navigate(link.href)}
                      className="text-gray-400 hover:text-yellow-600 transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-4">Subscribe to our newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-600"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Litzbella. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">We accept:</span>
            <div className="flex gap-2">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visa.svg" alt="Visa" className="w-8 h-5 filter invert opacity-70" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mastercard.svg" alt="Mastercard" className="w-8 h-5 filter invert opacity-70" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg" alt="PayPal" className="w-8 h-5 filter invert opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
