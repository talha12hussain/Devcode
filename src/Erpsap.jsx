import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Erpsap = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">SAP Integration</h1>
        <p className="text-orange-500 text-lg mt-2">
          Enhancing Your Operational Efficiency with SAP Integration Expertise
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-300">
          At Dev2Code IT Solutions, we enable businesses to optimize their operations
          through seamless SAP integration. Whether you're integrating SAP for the first time or
          enhancing your current setup, we offer solutions that streamline processes, improve data accuracy, and boost overall efficiency.
        </p>
        <button className="mt-6 bg-orange-500 px-6 py-2 rounded-full text-black font-bold hover:bg-orange-400">
          <Link to="/contact" className="w-full h-full block">
            GET IN TOUCH →
          </Link>
        </button>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">Our SAP Projects</h2>
          
          {/* Project 1 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">01</span>
              <h3 className="text-2xl font-semibold text-white">SAP Integration - Supply Chain Optimization</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> We integrated SAP with existing supply chain management systems to 
              optimize the end-to-end supply chain processes. This project involved configuring SAP modules to streamline procurement, inventory management, and logistics operations.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Seamless integration of SAP with supply chain systems</li>
              <li>Automated procurement and inventory management workflows</li>
              <li>Real-time data synchronization for improved decision-making</li>
              <li>Enhanced logistics operations with reduced lead times</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">02</span>
              <h3 className="text-2xl font-semibold text-white">SAP Integration - Financial Management and Reporting Automation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> This project focused on integrating SAP with 
              financial management systems to automate financial reporting and improve the accuracy of financial data.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Integration of SAP with financial management systems</li>
              <li>Automation of accounts payable, receivable, and general ledger processes</li>
              <li>Real-time financial reporting and data accuracy enhancement</li>
              <li>Improved financial analysis for better decision-making</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">03</span>
              <h3 className="text-2xl font-semibold text-white">SAP Integration - HR Management System Enhancement</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> We integrated SAP with existing HR management systems to enhance human resource operations, including payroll processing, employee records management, and talent acquisition.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>SAP integration with HR management systems</li>
              <li>Streamlined payroll processing and employee records management</li>
              <li>Enhanced talent acquisition workflows</li>
              <li>Improved data accuracy and HR process efficiency</li>
            </ul>
          </div>
        </div>
      </section>
   
      <Contact/>
    </div>
  )
}

export default Erpsap