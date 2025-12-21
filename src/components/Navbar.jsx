import { useState } from "react";
import { HiShoppingCart, HiMenu, HiX } from "react-icons/hi"; // Removed HiUser since we are using a button now
import { useNavigate } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1
          className="text-4xl font-bold text-orange-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Bazaar
        </h1>

        {/* DESKTOP MENU LINKS */}
        <ul className="hidden md:flex gap-8 items-center font-semibold text-gray-700">
          <li className="cursor-pointer hover:text-orange-600 transition" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer hover:text-orange-600 transition"onClick={() => navigate("/Shop")}>Shop</li>
          <li className="cursor-pointer hover:text-orange-600 transition" onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        {/* DESKTOP RIGHT SIDE: Cart & Sign Up */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Cart Button */}
          <button
            onClick={() => navigate("/cart")}
            className="relative bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition transform duration-300 shadow-md"
          >
            <HiShoppingCart className="inline w-5 h-5 mr-2" />
            Cart ({cartCount})
          </button>

          {/* NEW: Sign Up Button */}
          <button
            onClick={() => navigate("/signup")}
            className="border-2 border-orange-600 text-orange-600 px-5 py-2 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU ICON (Hamburger) */}
        <div className="md:hidden flex items-center gap-4">
           {/* Mobile Cart Icon (Visible on mobile) */}
            <div className="relative cursor-pointer text-gray-700 hover:text-orange-600" onClick={() => navigate("/cart")}>
               <HiShoppingCart className="w-7 h-7" />
               <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">{cartCount}</span>
            </div>

            <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <HiX className="w-8 h-8 text-gray-700" /> : <HiMenu className="w-8 h-8 text-gray-700" />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <ul className="flex flex-col p-4 gap-4 font-semibold text-gray-700 text-center">
            <li className="hover:text-orange-600" onClick={() => { navigate("/"); setIsMobileOpen(false); }}>Home</li>
            <li className="hover:text-orange-600" onClick={() => { setIsMobileOpen(false); }}>Shop</li>
            <li className="hover:text-orange-600" onClick={() => { navigate("/contact"); setIsMobileOpen(false); }}>Contact</li>
            <li className="hover:text-orange-600" onClick={() => { navigate("/signup"); setIsMobileOpen(false); }}>Sign Up</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
