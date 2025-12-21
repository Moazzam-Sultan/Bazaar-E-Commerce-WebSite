import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// This component handles the UI and Animations for a single card
const ProductCard = ({ product, addToCart, onClick, delay }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group relative cursor-pointer flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={delay} 
    >
      {/* IMAGE SECTION */}
      <div className="h-64 overflow-hidden relative bg-gray-100">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" 
        />
        
        {/* Badges */}
        <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
          {product.category}
        </span>
        {product.label && (
            <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md animate-pulse">
              {product.label}
            </span>
        )}
      </div>

      {/* CONTENT SECTION */}
      <div className="p-5 flex flex-col flex-grow">
        
        <h3 className="text-lg font-bold text-gray-800 truncate mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 flex-grow mb-4">{product.description}</p>
        
        {/* --- ANIMATED FOOTER --- */}
        <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
          
          {/* Price: Fades in from the right */}
          <span 
            className="text-xl font-bold text-orange-600 group-hover:text-gray-900 transition-colors duration-300"
            data-aos="fade-right"
            data-aos-delay={delay + 100} // Delays slightly after card loads
          >
            {product.price}
          </span>
          
          {/* Button: Fades in from left + Hover Rotate Effect */}
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevents clicking the card background
              addToCart(product);
            }}
            data-aos="fade-left"
            data-aos-delay={delay + 200}
            className="bg-gray-900 text-white w-10 h-10 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 active:scale-90"
          >
            <FaShoppingCart className="text-sm" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;