import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"; 
import { FaStar, FaShoppingCart, FaArrowLeft, FaTruck, FaShieldAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORT DATA FROM YOUR NEW FILE
import { PRODUCTS_DATA } from "./data"; 

export default function ShopDetail({ addToCart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  // LOGIC: Use state if available, otherwise find by ID from the data file
  const product = location.state?.product || PRODUCTS_DATA.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Item Not Found</h2>
        <button onClick={() => navigate("/shop")} className="bg-orange-600 text-white px-8 py-3 rounded-full">
          Back to Shop
        </button>
      </div>
    );
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={`w-5 h-5 ${i < (5) ? "text-yellow-400" : "text-gray-300"}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate("/shop")} className="flex items-center text-gray-600 hover:text-orange-600 mb-8 transition font-medium">
          <FaArrowLeft className="mr-2" /> Back to Shop
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10" data-aos="fade-up">
          
          {/* Image */}
          <div className="relative group overflow-hidden rounded-xl border border-gray-100 h-[300px] md:h-[500px] flex items-center justify-center bg-white">
             <img src={product.img} alt={product.name} className="w-full h-full object-contain transform group-hover:scale-110 transition duration-500"/>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center mb-6">
              {renderStars(product.rating || 5)}
              <span className="text-gray-500 ml-2">(5.0 Reviews)</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="mb-6">
               {product.stock > 0 ? (
                 <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">
                   <FaCheckCircle className="mr-2" /> In Stock ({product.stock})
                 </span>
               ) : (
                 <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-sm">
                   <FaExclamationCircle className="mr-2" /> Out of Stock
                 </span>
               )}
            </div>
            <div className="flex items-center gap-4 mb-8 border-t border-b border-gray-100 py-4">
              <span className="text-4xl md:text-5xl font-bold text-orange-600">{product.price}</span>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className={`flex-1 px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition transform active:scale-95 ${
                  product.stock === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-orange-600"
                }`}
              >
                <FaShoppingCart /> {product.stock === 0 ? "Sold Out" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}