import React from 'react'
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Coustomersofware = () => {
  return (
    <div className="bg-black text-white">
    {/* Hero Section */}
   <section className="text-center pt-24 px-6">
  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-snug md:leading-tight">
    Custom Software Development
  </h1>
  <p className="text-orange-500 mt-4 text-lg md:text-xl font-medium">
    Innovative, Scalable, and Secure Software Solutions
  </p>
  <p className="max-w-3xl mx-auto mt-4 text-gray-300 text-md md:text-lg leading-relaxed">
    We specialize in developing software that drives business innovation and growth. 
    Our team of experts delivers solutions that are scalable, secure, and user-friendly.
  </p>
  <button className="mt-6 bg-orange-500 px-6 py-2 rounded-full text-black font-bold hover:bg-orange-400">
  <Link to="/contact" className="w-full h-full block">
    GET IN TOUCH →
  </Link>
</button>
</section>


    {/* Expertise Section */}
    <section className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center">Our Expertise:</h2>
      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-orange-500 font-semibold">01. Web Application Development</h3>
          <p className="text-gray-300 mt-2">
            Using modern technologies like React, Angular, .NET, and Python, we build secure, robust, and scalable applications tailored to your business needs.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-orange-500 font-semibold">02. Mobile App Development</h3>
          <p className="text-gray-300 mt-2">
            We offer full-cycle mobile app development for both iOS and Android, ensuring seamless user experiences on every device.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg col-span-1 md:col-span-2">
          <h3 className="text-orange-500 font-semibold">03. Custom API Development</h3>
          <p className="text-gray-300 mt-2">
            Connect and integrate your system with bespoke APIs designed for performance and security, enabling seamless communication between platforms.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold">Why Dev2Code for Custom Development</h2>
      <ul className="mt-6 text-gray-300 space-y-2">
        <li>✅ Agile, client-centered development process</li>
        <li>✅ Expertise in both frontend and backend technologies</li>
        <li>✅ Proven track record of delivering high-performance solutions</li>
        <li>✅ Scalable solutions designed for long-term growth and adaptability</li>
      </ul>
    </section>

    {/* Contact Section */}
   <Contact/>
    </div>
  )
}

export default Coustomersofware