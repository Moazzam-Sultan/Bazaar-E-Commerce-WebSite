import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero"; 
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Signup from "./components/SignUp";
import Shop from "./components/Shop";
import ProductDetail from "./components/ProductsDetails"; // Renamed route below
import ShopDetail from "./components/ShopDetails";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  // 1. ADD TO CART (With Stock Check)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if item already exists
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // STOCK CHECK: Is current quantity less than available stock?
        if (existingItem.quantity < product.stock) {
           return prevItems.map((item) =>
             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
           );
        } else {
           // Alert user if limit reached
           alert(`Sorry, you cannot add more. Only ${product.stock} in stock.`);
           return prevItems; // Return state unchanged
        }
      } else {
        // If it's new, add it
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    // Removed the generic alert here so we don't spam the user if it failed above
  };

  // 2. INCREASE QUANTITY (With Stock Check)
  // This is used inside the Cart page for the (+) button
  const increaseQuantity = (itemToUpdate) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemToUpdate.id) {
           // STOCK CHECK
           if (item.quantity < item.stock) {
             return { ...item, quantity: item.quantity + 1 };
           } else {
             alert(`Max stock reached for ${item.name}`);
             return item;
           }
        }
        return item;
      })
    );
  };

  // 3. DECREASE QUANTITY
  const decreaseQuantity = (itemToUpdate) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemToUpdate.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // 4. REMOVE ITEM
  const removeFromCart = (itemToRemove) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cartItems.length} />

        <main className="flex-grow pt-19 bg-gray-50">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Products addToCart={addToCart} />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <Cart 
                  // IMPORTANT: Mapping variable names to what Cart.jsx expects
                  cart={cartItems} 
                  removeFromCart={removeFromCart} 
                  addToCart={increaseQuantity} // We pass the increase function as 'addToCart' for the (+) button
                  decreaseQty={decreaseQuantity}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Shop Page */}
            <Route path="/Shop" element={<Shop addToCart={addToCart} />} />
            
            {/* ⚠️ FIXED ROUTE CONFLICT 
               You had two routes for "/shop/:id". I renamed the second one to "/product/:id" 
               so they don't clash.
            */}
            <Route path="/shop/:id" element={<ShopDetail addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}