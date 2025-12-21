import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";
// 1. IMPORT ICONS TO MATCH SHOP STYLE
import { FaShoppingCart, FaStar, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const initialProducts = [
  { id: 1, name: "Smart Watch", price: "$50", oldPrice: "$65", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60", category: "Electronics", stock: 6, rating: 5, description: "Stay connected with style. This smart watch tracks your fitness, notifications, and more." },
  { id: 2, name: "Headphones", price: "$80", oldPrice: "$100", img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop&q=60", category: "Electronics", stock: 5, rating: 4, description: "Immerse yourself in high-fidelity sound. Noise-cancelling technology meets premium comfort." },
  { id: 3, name: "Laptops", price: "$30", category: "Electronics", stock: 6, rating: 4, img: "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=600&auto=format&fit=crop&q=60", description: "Powerful performance for work and play. Features a high-resolution display." },
  { id: 4, name: "Grocery Basket", price: "$50", category: "Home", stock: 4, rating: 5, img: "https://images.unsplash.com/photo-1458917524587-d3236cc8c2c8?w=294&dpr=2&h=294&auto=format&fit=crop&q=60", description: "Fresh and organic essentials for your daily needs." },
  { id: 5, name: "Cosmetics Kit", price: "$80", category: "Fashion", stock: 5, rating: 5, img: "https://images.unsplash.com/photo-1610733867869-bd60674ca8b5?w=294&dpr=2&h=294&auto=format&fit=crop&q=60", description: "Complete beauty kit with premium ingredients." },
  { id: 6, name: "Laptop Bag", price: "$30", category: "Fashion", stock: 7, rating: 3, img: "https://images.unsplash.com/photo-1673505379580-fe6de14f3080?w=600&auto=format&fit=crop&q=60", description: "Stylish protection for your devices." },
  { id: 7, name: "Trendy Clothes", price: "$50", oldPrice: "$80", category: "Fashion", stock: 8, rating: 4, img: "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=600&auto=format&fit=crop&q=60", description: "Upgrade your wardrobe with the latest trends." },
  { id: 8, name: "Smartphone", price: "$80", category: "Electronics", stock: 6, rating: 5, img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=60", description: "Next-gen technology in your palm. Stunning camera and long battery life." },
];

export default function Products({ addToCart }) {
  const [products, setProducts] = useState(initialProducts);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleAddToCart = (id) => {
    const product = products.find((p) => p.id === id);
    if (product && product.stock > 0) {
      addToCart(product);
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, stock: p.stock - 1 } : p))
      );
    }
  };

  // Helper for Stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={`w-3 h-3 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} />
    ));
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <h2 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, index) => (
          <div 
            key={p.id} 
            data-aos="fade-up" 
            data-aos-delay={index * 100} 
            // Navigate on Click
            onClick={() => navigate(`/shop/${p.id}`, { state: { product: p } })}
            // EXACT SHOP CARD STYLING 👇
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group border border-gray-100 flex flex-col cursor-pointer"
          >
            {/* IMAGE SECTION */}
            <div className="h-64 overflow-hidden relative bg-gray-100">
               <img src={p.img} alt={p.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
               
               {/* Category Badge */}
               <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                 {p.category}
               </span>

               {/* Sale Badge */}
               {p.oldPrice && (
                 <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                   SALE
                 </span>
               )}
            </div>

            {/* DETAILS SECTION */}
            <div className="p-5 flex flex-col flex-grow">
              
              {/* Stars */}
              <div className="flex items-center mb-2">
                {renderStars(p.rating)}
                <span className="text-xs text-gray-400 ml-2">({p.rating}.0)</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{p.name}</h3>

              {/* Stock Status Logic */}
              <div className="mb-4 text-sm font-medium flex items-center gap-2">
                {p.stock === 0 ? (
                  <span className="text-red-600 flex items-center gap-1 font-bold">
                    <FaExclamationCircle /> Sold Out
                  </span>
                ) : p.stock > 5 ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <FaCheckCircle /> In Stock ({p.stock})
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center gap-1">
                    <FaExclamationCircle /> Low Stock ({p.stock} Left)
                  </span>
                )}
              </div>

              {/* Price & Cart Button Row */}
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                   {p.oldPrice && <span className="text-gray-400 text-sm line-through">{p.oldPrice}</span>}
                   <span className="text-2xl font-bold text-orange-600">{p.price}</span>
                </div>

                {/* CIRCLE CART BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleAddToCart(p.id);
                  }}
                  disabled={p.stock === 0}
                  className={`p-3 rounded-full transition duration-300 shadow-lg flex items-center justify-center transform group-hover:scale-110 ${
                    p.stock === 0 
                      ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                      : "bg-gray-900 text-white hover:bg-orange-600"
                  }`}
                >
                  <FaShoppingCart />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}