import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
export default function Hero() {
const navigate = useNavigate();
  const images = [
   "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
   "https://images.unsplash.com/photo-1510016290251-68aaad49723e?w=600&auto=format&fit=crop&q=60",
   "https://images.unsplash.com/photo-1655360147084-613bb9bd2558?w=600&auto=format&fit=crop&q=60",
   "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?w=600&auto=format&fit=crop&q=60",
   "https://plus.unsplash.com/premium_photo-1678249204340-a76083f364d0?w=600&auto=format&fit=crop&q=60",
   "https://media.istockphoto.com/id/1328853722/photo/over-the-shoulder-view-of-young-asian-woman-doing-home-delivery-grocery-shopping-online-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=tuppJ4hUtIXvo8ovlbkb6zarIoqITkda0z1X4geZ-uU=",
   "https://images.unsplash.com/photo-1737233347389-24bc3f3fe3a1?w=294&dpr=2&h=294&auto=format&fit=crop&q=60",
   "https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=294&dpr=2&h=294&auto=format&fit=crop&q=60",
   "https://images.unsplash.com/photo-1468421201266-ec88b2809284?w=294&dpr=2&h=294&auto=format&fit=crop&q=60",
   "https://images.unsplash.com/photo-1585915473635-d4e5c564eec3?w=294&dpr=2&h=294&auto=format&fit=crop&q=60",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // 1. Initialize Animations
    AOS.init({ duration: 1000, once: true });

    // 2. Auto slide timer
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // KEPT EXACT PADDING: p-8
    <section className="bg-gradient-to-r from-[#FFEFBA] to-white p-8">
      {/* KEPT EXACT PADDING: py-20 */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT (Added fade-right animation) */}
        <div data-aos="fade-right">
          <span className="inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🔥 New Arrivals
          </span>

          <div className="h-30 flex items-center justify-start">
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tight mb-6 text-black overflow-hidden whitespace-nowrap border-r-4 border-white typing">
              Get Upto 30% off on this Winter
            </h1>
          </div>

          <p className="text-black mb-8">
            Discover premium electronics, fashion, and accessories at unbeatable prices.
          </p>

          <div className="flex gap-4">
          <button 
              onClick={() => navigate("/shop")} 
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </button>

            <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition">
              View Deals
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER (Added fade-left animation) */}
        {/* I fixed the Duplicate/Nested div issue here */}
        <div 
          data-aos="fade-left"
          className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl bg-white"
        >
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="slide"
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={() =>
              setCurrent(current === 0 ? images.length - 1 : current - 1)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full font-bold hover:bg-white transition"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() =>
              setCurrent((current + 1) % images.length)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full font-bold hover:bg-white transition"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}