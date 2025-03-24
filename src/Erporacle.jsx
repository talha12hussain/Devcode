import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Erporacle = () => {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Oracle ERP
        </h1>
        <p className="text-orange-500 text-lg sm:text-xl mt-2 md:mt-4">
          Optimizing Your Business Performance with Oracle ERP Mastery
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-300 text-base sm:text-lg">
          At Dev2Code IT Solutions, we help businesses enhance their 
          operational efficiency with the power of Oracle ERP. Whether you're deploying Oracle ERP for the first time or optimizing your current system, we provide tailored solutions that streamline processes, improve data management, and boost overall performance.
        </p>
        <button className="mt-6 bg-orange-500 px-6 py-2 rounded-full text-black font-bold hover:bg-orange-400 transition-colors duration-300">
          <Link to="/contact" className="w-full h-full block">
            GET IN TOUCH →
          </Link>
        </button>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 text-center mb-8 md:mb-12">
            Our Oracle Projects
          </h2>
          
          {/* Project 1 */}
          <div className="mb-12 md:mb-16 p-6 md:p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-lg md:text-xl px-4 py-2 rounded-full mr-4">01</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Oracle ERP Integration - Financial Management System Optimization
              </h3>
            </div>
            <p className="text-gray-300 mb-4 text-base sm:text-lg">
              <span className="text-orange-400 font-bold">Project Overview:</span> We integrated Oracle ERP with existing financial systems to streamline financial processes and enhance data accuracy.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2 text-lg">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4 text-base sm:text-lg">
              <li>Seamless integration of Oracle ERP with financial systems</li>
              <li>Automation of accounts payable, receivable, and reporting processes</li>
              <li>Real-time financial data for enhanced decision-making</li>
              <li>Improved accuracy and efficiency in financial management</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="mb-12 md:mb-16 p-6 md:p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-lg md:text-xl px-4 py-2 rounded-full mr-4">02</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Oracle ERP Integration - Supply Chain and Procurement Enhancement
              </h3>
            </div>
            <p className="text-gray-300 mb-4 text-base sm:text-lg">
              <span className="text-orange-400 font-bold">Project Overview:</span> This project focused on integrating Oracle ERP with supply chain and procurement systems to optimize inventory management and supplier coordination.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2 text-lg">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4 text-base sm:text-lg">
              <li>Oracle ERP integration with supply chain and procurement systems</li>
              <li>Automated procurement workflows and inventory management</li>
              <li>Real-time data synchronization for better supply chain visibility</li>
              <li>Reduced lead times and cost efficiency</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="p-6 md:p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-lg md:text-xl px-4 py-2 rounded-full mr-4">03</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Oracle ERP Integration - Human Capital Management (HCM) System Implementation
              </h3>
            </div>
            <p className="text-gray-300 mb-4 text-base sm:text-lg">
              <span className="text-orange-400 font-bold">Project Overview:</span> We implemented Oracle ERP's Human Capital Management (HCM) module to streamline HR processes, including payroll, talent management, and employee self-service.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2 text-lg">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4 text-base sm:text-lg">
              <li>Implementation of Oracle ERP's HCM module</li>
              <li>Streamlined payroll, talent management, and employee self-service</li>
              <li>Real-time analytics for workforce planning and decision-making</li>
              <li>Enhanced HR operations and employee satisfaction</li>
            </ul>
          </div>
        </div>
      </section>
    
      <Contact />
    </div>
  )
}

export default Erporacle