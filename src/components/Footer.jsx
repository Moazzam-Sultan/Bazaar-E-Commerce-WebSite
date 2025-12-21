import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // 1. Import this
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

export default function Footer() {
  const location = useLocation(); // 2. Get the current page location

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, [location]); // 3. Refresh AOS when location changes

  return (
    // 4. Add key={location.pathname}
    // This forces the Footer to reload (and animate) whenever the URL changes
    <footer key={location.pathname} className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* COLUMN 1 */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Bazaar</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your one-stop shop for premium electronics, fashion, and groceries. 
            Quality products delivered to your doorstep with care.
          </p>
          <div className="flex gap-4">
            <FaFacebook className="text-2xl cursor-pointer hover:text-orange-500 transition" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-orange-500 transition" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-orange-500 transition" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-orange-500 transition" />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-semibold mb-6">Customer Care</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-orange-500 cursor-pointer transition">Help Center</li>
            <li className="hover:text-orange-500 cursor-pointer transition">How to Buy</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Returns & Refunds</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Terms & Conditions</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-orange-500 cursor-pointer transition">Electronics</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Fashion</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Groceries</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Health & Beauty</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Home Appliances</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex items-start gap-3">
              <HiLocationMarker className="text-xl text-orange-500 flex-shrink-0" />
              <p>Johar Town, Lahore, Pakistan</p>
            </div>
            <div className="flex items-center gap-3">
              <HiPhone className="text-xl text-orange-500 flex-shrink-0" />
              <p>+92 328 6403604</p>
            </div>
            <div className="flex items-center gap-3">
              <HiMail className="text-xl text-orange-500 flex-shrink-0" />
              <p>support@bazaar.com</p>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2025 Bazaar. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-6 opacity-70" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Visa" className="h-6 opacity-70 bg-white px-1 rounded" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-6 opacity-70 bg-white px-1 rounded" />
        </div>
      </div>
    </footer>
  );
}