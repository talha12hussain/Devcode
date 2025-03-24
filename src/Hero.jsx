import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black text-white text-center flex flex-col items-center justify-center min-h-screen px-6">
      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        We Deliver{" "}
        <span className="relative">
          <span className="absolute left-0 right-0 bottom-2 h-3 bg-[#FF6B00] transform -skew-x-12"></span>
          <span className="relative">Tailored</span>
        </span>
      </h1>

      {/* Rest of your component remains the same */}
      <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
        IT Expertise that drives your digital transformation
      </h2>

      <div className="max-w-md mx-auto">
        <p className="text-gray-400 text-lg mb-2">
          We believe our technology is a good quality shareholder and has not
        </p>
        <p className="text-gray-400 text-lg">
          disappointed. Currently, it brings our vision to life.
        </p>
      </div>

      <button className="mt-12 bg-[#FF6B00] hover:bg-[#E05D00] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
        <Link to="/contact" className="block w-full h-full">
          GET IN TOUCH →
        </Link>
      </button>
    </section>
  );
};

export default Hero;