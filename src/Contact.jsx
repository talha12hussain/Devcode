import React from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-6 flex flex-col items-center">
      {/* Page Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center">
        Let's Work <span className="text-orange-500">Together</span>
      </h2>
      <p className="text-orange-400 text-center mt-2 text-lg">
        Get in touch with our team and let us guide you to your most optimal path!
      </p>

      {/* Contact Form & Info */}
      <div className="mt-12 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="flex flex-col space-y-4 border border-gray-700 p-6 rounded-lg">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            Let's <span className="text-orange-500">Talk!</span>
          </h1>
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-800 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Phone"
            className="bg-gray-800 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="bg-gray-800 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-lg font-bold">
            Send
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 border border-gray-700 p-6 rounded-lg">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
            <FaEnvelope className="text-orange-500 text-2xl" />
            <a href="mailto:info@dev2code.com" className="hover:text-orange-500 transition">
              info@dev2code.com
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
            <FaPhone className="text-orange-500 text-2xl" />
            <a href="tel:+19452060615" className="hover:text-orange-500 transition">
              +1 (945) 206 0615
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl mt-12 border border-gray-700 p-6 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-gray-400">
          {/* Menu */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg">Menu</h3>
            <Link to="/" className="hover:text-orange-500 transition block">
              Home
            </Link>
            <Link to="/about" className="hover:text-orange-500 transition block">
              About
            </Link>
            <Link to="/services" className="hover:text-orange-500 transition block">
              Services
            </Link>
            <Link to="/contact" className="hover:text-orange-500 transition block">
              Contact Us
            </Link>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <Link to="/custom-software" className="hover:text-orange-500 transition block">
              Custom Software Development
            </Link>
            <Link to="/enterprise-Resource" className="hover:text-orange-500 transition block">
              ERP Solutions
            </Link>
            <Link to="/cloud" className="hover:text-orange-500 transition block">
              Cloud Infrastructure Solutions
            </Link>
            <Link to="/ui-ux" className="hover:text-orange-500 transition block">
              UI/UX Design
            </Link>
            <Link to="/business-automation" className="hover:text-orange-500 transition block">
              Business Process Automation
            </Link>
            <Link to="/training-outsourcing" className="hover:text-orange-500 transition block">
              Training & Resource Outsourcing
            </Link>
          </div>
        </div>
      </footer>

      {/* Follow Us (Separate Section) */}
      <div className="w-full max-w-6xl mt-6 text-center border border-gray-700 p-6 rounded-lg">
        <h3 className="text-white font-semibold text-lg">Follow us:</h3>
        <div className="mt-4 flex justify-center gap-4 text-gray-400 text-2xl">
          <a href="https://www.facebook.com/people/Dev2Code/61567694710838" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-orange-500 cursor-pointer transition" />
          </a>
          <a href="https://x.com/Dev2code1" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-orange-500 cursor-pointer transition" />
          </a>
          <a href="https://www.linkedin.com/company/devtwocode" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-orange-500 cursor-pointer transition" />
          </a>
          <a href="https://www.instagram.com/dev2.code" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-orange-500 cursor-pointer transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
