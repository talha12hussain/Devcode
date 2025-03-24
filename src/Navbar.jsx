import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import logo from "./assets/logo.avif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-black">
      <img src={logo} alt="Logo" className="h-6" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center bg-gray-900 px-6 py-3 rounded-full shadow-lg">
        <ul className="flex gap-6 text-white">
          <li>
            <Link to="/" className={`cursor-pointer ${location.pathname === "/" ? "text-orange-500 font-bold" : "hover:text-orange-500"}`}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className={`cursor-pointer ${location.pathname === "/about" ? "text-orange-500 font-bold" : "hover:text-orange-500"}`}>
              ABOUT
            </Link>
          </li>
          <li className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center cursor-pointer hover:text-orange-500">
              SERVICES <FiChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[400px] bg-black text-white p-5 rounded-lg shadow-lg z-50">
                <Link to="/services" className="block text-orange-500 font-semibold text-lg py-2">View All Services</Link>
                <Link to="/custom-software" className="block font-semibold py-2 hover:text-orange-500">Custom Software Development</Link>
                <Link to="/enterprise-Resource" className="block font-semibold py-1  hover:text-orange-500">Enterprise Resource Planning (ERP) Solutions</Link>

                
                {/* Enterprise Resource Planning */}
                <div>
                <Link to="/erp-servicenow" className="block text-gray-400 py-1 pl-4 hover:text-orange-500">ServiceNow Enterprise Solutions</Link>
                  <Link to="/erp-salesforce" className="block text-gray-400 py-1 pl-4 hover:text-orange-500">Salesforce CRM</Link>
                  <Link to="/erp-sap" className="block text-gray-400 py-1 pl-4 hover:text-orange-500">SAP Integration</Link>
                  <Link to="/erp-oracle" className="block text-gray-400 py-1 pl-4 hover:text-orange-500">Oracle ERP</Link>
                </div>

                <Link to="/cloud" className="block font-semibold py-2 hover:text-orange-500">Cloud and Infrastructure Services</Link>
                <Link to="/ui-ux" className="block font-semibold py-2 hover:text-orange-500">UI/UX Design</Link>
                <Link to="/business-automation" className="block font-semibold py-2 hover:text-orange-500">Business Process Automation</Link>
                <Link to="/training-outsourcing" className="block font-semibold py-2 hover:text-orange-500">Training & Resource Outsourcing</Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/contact" className={`cursor-pointer ${location.pathname === "/contact" ? "text-orange-500 font-bold" : "hover:text-orange-500"}`}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Button */}
      <Link to="/contact" className="hidden md:flex items-center bg-orange-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-orange-600 transition shadow-lg">
        GET IN TOUCH <FiArrowUpRight className="ml-2" />
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        {isOpen ? (
          <FiX className="text-2xl text-white cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <FiMenu className="text-2xl text-white cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Link to="/" className="text-2xl cursor-pointer hover:text-orange-500" onClick={() => setIsOpen(false)}>HOME</Link>
        <Link to="/about" className="text-2xl cursor-pointer hover:text-orange-500" onClick={() => setIsOpen(false)}>ABOUT</Link>

        {/* Mobile Services Dropdown */}
        <div className="text-2xl cursor-pointer flex flex-col items-center" onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>
          <span className="hover:text-orange-500 flex items-center">
            SERVICES <FiChevronDown className="ml-2" />
          </span>
          {isMobileDropdownOpen && (
            <div className="flex flex-col text-center mt-2">
              <Link to="/services" className="text-lg text-orange-500 py-1" onClick={() => setIsOpen(false)}>View All Services</Link>
              <Link to="/custom-software" className="text-lg py-1 hover:text-orange-500" onClick={() => setIsOpen(false)}>Custom Software Development</Link>
              <Link to="/enterprise-Resource" className="text-lg py-1 hover:text-orange-500" onClick={() => setIsOpen(false)}>ERP Solutions</Link>
              <Link to="/erp-servicenow" className="text-lg py-1 hover:text-orange-500" onClick={() => setIsOpen(false)}>ServiceNow Enterprise Solutions</Link>
              <Link to="/erp-salesforce" className="text-lg py-1 hover:text-orange-500"  onClick={() => setIsOpen(false)}>Salesforce CRM</Link>
              <Link to="/erp-sap" className="text-lg py-1 hover:text-orange-500"  onClick={() => setIsOpen(false)}>SAP Integration</Link>
              <Link to="/erp-oracle" className="text-lg py-1 hover:text-orange-500"  onClick={() => setIsOpen(false)}>Oracle ERP</Link>
              <Link to="/cloud" className="text-lg py-1 hover:text-orange-500" onClick={() => setIsOpen(false)}>Cloud Services</Link>
              <Link to="/ui-ux" className="text-lg py-1 hover:text-orange-500" onClick={() => setIsOpen(false)}>UI/UX Design</Link>
              <Link to="/business-automation" className="text-lg py-1 hover:text-orange-500" onClick={() => setIsOpen(false)}>Business Automation</Link>
              <Link to="/training-outsourcing" className="text-lg py-1 hover:text-orange-500" onClick={() => setIsOpen(false)}>Training & Outsourcing</Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="text-2xl cursor-pointer hover:text-orange-500" onClick={() => setIsOpen(false)}>CONTACT</Link>
        <Link to="/contact" className="bg-orange-500 px-6 py-3 rounded-lg text-xl hover:bg-orange-600" onClick={() => setIsOpen(false)}>GET IN TOUCH</Link>
      </div>
    </nav>
  );
};

export default Navbar;
