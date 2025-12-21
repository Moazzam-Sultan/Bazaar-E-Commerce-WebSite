import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"; 
// IMPORT DATA FROM YOUR NEW FILE
import { PRODUCTS_DATA } from "./data"; 
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const categories = ["All", "Electronics", "Fashion", "Home"];

export default function Shop({ addToCart }) {
  const navigate = useNavigate(); 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0,0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering Logic using the imported data
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle clicking a card
  const handleProductClick = (product) => {
    navigate(`/shop/${product.id}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER & CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6" data-aos="fade-down">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">Our Shop</h2>
            <p className="text-gray-500 mt-2">Find exactly what you need.</p>
          </div>

          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition"
            />
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-right">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 ${
                selectedCategory === cat 
                  ? "bg-orange-600 text-white shadow-lg" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                onClick={() => handleProductClick(product)}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group relative cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 50} 
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" 
                  />
                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                    {product.category}
                  </span>
                  {product.label && (
                     <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                       {product.label}
                     </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-orange-600">{product.price}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); 
                        addToCart(product);
                      }}
                      className="bg-gray-900 text-white p-3 rounded-full hover:bg-orange-600 transition shadow-lg flex items-center justify-center transform hover:scale-110"
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20" data-aos="zoom-in">
            <h3 className="text-2xl font-bold text-gray-400">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}