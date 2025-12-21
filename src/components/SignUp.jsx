import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Signup() {
  
  // 1. Initialize Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 2. Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert(`Welcome, ${formData.name}! Your account has been created.`);
  };

  return (
    <div className="min-h-screen flex pt-20 bg-gray-50">
      
      {/* LEFT SIDE: Image/Branding (Hidden on mobile) */}
      <div 
        className="hidden lg:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')" }}
        data-aos="fade-right"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-center p-12">
            <h2 className="text-5xl font-bold mb-6">Join the Revolution</h2>
            <p className="text-xl">Discover the best products at unbeatable prices.</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8" data-aos="fade-left">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-500 mt-2">Sign up to get started!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" required />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-orange-600 hover:underline">Terms & Conditions</a>
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-orange-600 text-white font-bold text-lg px-6 py-3 rounded-lg hover:bg-orange-700 hover:shadow-lg transition duration-300 transform hover:scale-[1.02]"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">Or sign up with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5 mr-2" alt="Facebook" />
              Facebook
            </button>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}