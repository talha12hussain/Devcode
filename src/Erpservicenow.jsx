import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Erpservicenow = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">ServiceNow</h1>
        <p className="text-orange-500 text-lg mt-2">
          Transforming Your IT Operations with ServiceNow Expertise
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-300">
          At Dev2Code IT Solutions, we help businesses streamline their IT operations with the power of ServiceNow.
          Whether you're looking to implement ServiceNow for the first time or optimize your existing platform,
          we offer solutions that improve efficiency, reduce downtime, and enhance service delivery.
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
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">Our ServiceNow Projects</h2>
          
          {/* Project 1 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 01</span>
              <h3 className="text-2xl font-semibold text-white">Human Resource Service Delivery (HRSD) & Life-cycle Event Implementation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> We configured an automated new-hire onboarding
              and off-boarding life-cycle event process. Our implementation included multiple HR services, task templates,
              and activities to streamline both onboarding and off-boarding processes.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Automated onboarding/off-boarding lifecycle events</li>
              <li>Task templates and activities for efficient process management</li>
              <li>Customized notifications for stakeholders during the process</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 02</span>
              <h3 className="text-2xl font-semibold text-white">HRSD Enhancements</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> Our team developed enhancements for HRSD by
              configuring catalog items, record producers, UI policies, and client scripts.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Bulk new-hire functionality through a single catalog item</li>
              <li>Excel sheet upload for bulk processing</li>
              <li>Automated data imports through custom transform maps and scripts</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 03</span>
              <h3 className="text-2xl font-semibold text-white">Customer Service Management (CSM) & LSD Implementation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> We developed and implemented custom solutions within the
              Customer Service Management (CSM) and LSD environments.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Custom widgets for enhanced data presentation</li>
              <li>Configured flows based on client-specific needs</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 04</span>
              <h3 className="text-2xl font-semibold text-white">IT Service Management (ITSM) Implementation & Incident Management Optimization</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> This project focused on the optimization of the ITSM module to improve incident management processes for a large organization.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Incident management process automation</li>
              <li>Improved incident tracking and resolution times</li>
              <li>Seamless integration with existing systems</li>
            </ul>
          </div>

          {/* Project 5 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 05</span>
              <h3 className="text-2xl font-semibold text-white">Now Experience to Service Portal Conversion</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> We transitioned a custom Now Experience Portal into the Service Portal framework, replacing custom components to streamline the interface.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Seamless conversion from Now Experience to Service Portal</li>
              <li>Replacement of custom components to meet user experience goals</li>
              <li>Optimization of the portal interface for better user interaction</li>
            </ul>
          </div>

          {/* Project 6 */}
          <div className="p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 06</span>
              <h3 className="text-2xl font-semibold text-white">ServiceNow Instance Consolidation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> Merged two separate ServiceNow instances from different business units into a single, unified platform.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Merging multiple instances into a single platform</li>
              <li>Unified portal with AI-driven search functionalities</li>
              <li>Integrated IT and HR virtual agents for seamless support</li>
              <li>Updated Workday integration with improved audience settings</li>
            </ul>
          </div>
        </div>
      </section>

      <Contact/>
    </div>
  )
}

export default Erpservicenow