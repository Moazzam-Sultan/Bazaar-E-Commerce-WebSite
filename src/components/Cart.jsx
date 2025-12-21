// src/components/Cart.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTrash, FaArrowRight, FaShoppingBag, FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";

// Note: Humne props mein 'addToCart' aur 'decreaseQty' receive kiya hai
export default function Cart({ cart, removeFromCart, addToCart, decreaseQty }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  // Total Price Logic (Assuming price is string "$100")
  const totalPrice = cart.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace("$", ""));
    return total + priceNumber * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8" data-aos="fade-down">
          Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm" data-aos="zoom-in">
            <FaShoppingBag className="mx-auto text-6xl text-gray-200 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
            <button onClick={() => navigate("/shop")} className="bg-orange-600 text-white px-8 py-3 rounded-full mt-6">Start Shopping</button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* ITEM LIST */}
            <div className="flex-1 space-y-4">
              {cart.map((item, index) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-4"
                  data-aos="fade-up"
                >
                  {/* Image */}
                  <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />

                  {/* Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">Stock Left: {item.stock}</p>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-4">
                    
                    {/* Decrease Button */}
                    <button 
                      onClick={() => decreaseQty(item)} 
                      className="text-gray-600 hover:text-orange-600 transition"
                    >
                      <FaMinus size={12} />
                    </button>

                    <span className="font-bold text-gray-800 w-4 text-center">{item.quantity}</span>

                    {/* Increase Button (Logic Logic Here) */}
                    <button 
                      onClick={() => addToCart(item)}
                      // DISABLE if quantity reached stock limit
                      disabled={item.quantity >= item.stock}
                      className={`transition ${item.quantity >= item.stock ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-orange-600"}`}
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button onClick={() => removeFromCart(item)} className="text-red-400 hover:text-red-600 p-2">
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* SUMMARY SECTION */}
            <div className="lg:w-96">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-28">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Summary</h3>
                <div className="flex justify-between items-center text-xl font-bold text-gray-900 mb-8">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
                <button className="w-full bg-gray-900 text-white py-4 rounded-full font-bold hover:bg-orange-600 transition flex items-center justify-center">
                  Checkout <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}