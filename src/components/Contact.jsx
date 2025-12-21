import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  
  // Initialize Animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    e.target.reset(); // Clear the form
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <div className="space-y-8" data-aos="fade-right">
            
            {/* Card 1: Address */}
            <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-orange-100 p-4 rounded-full">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
                <p className="text-gray-600 mt-2">Johar Town, Lahore, Pakistan</p>
              </div>
            </div>

            {/* Card 2: Phone */}
            <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-orange-100 p-4 rounded-full">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Phone Number</h3>
                <p className="text-gray-600 mt-2">+92 328 6403604</p>
                <p className="text-gray-500 text-sm">Mon - Fri, 9am - 6pm</p>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="bg-orange-100 p-4 rounded-full">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Email Address</h3>
                <p className="text-gray-600 mt-2">dev.moazzamsultan@gmail.com</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div 
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12" 
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-600 text-white font-bold text-lg px-6 py-4 rounded-lg hover:bg-orange-700 hover:shadow-lg transition duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}