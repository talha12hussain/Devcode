import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Erpsalesforce = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">Salesforce CRM</h1>
        <p className="text-orange-500 text-lg mt-2">
          Elevating Your Customer Engagement with Salesforce CRM Mastery
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-300">
          At Dev2Code IT Solutions, we empower businesses to enhance their customer relationships with the power of Salesforce CRM. Whether you're implementing Salesforce for the first time or optimizing your current setup, we provide solutions that boost productivity, improve customer engagement, and drive sales growth.
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
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">Our Salesforce Projects</h2>
          
          {/* Project 1 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 01</span>
              <h3 className="text-2xl font-semibold text-white">Salesforce CRM - Automated Lead Management and Customer Onboarding</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> We implemented an automated lead management and customer onboarding process within Salesforce CRM, streamlining the journey from lead acquisition to customer conversion.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Automated lead-to-customer lifecycle events</li>
              <li>Task templates and activities for efficient process management</li>
              <li>Customized notifications for stakeholders during onboarding</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="mb-16 p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 02</span>
              <h3 className="text-2xl font-semibold text-white">Salesforce Service Cloud - Custom Service Processes Implementation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> We developed and implemented tailored solutions within Salesforce Service Cloud to enhance customer service processes.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Custom Lightning components for enhanced data presentation</li>
              <li>Configured flows based on client-specific needs</li>
              <li>Modified standard Salesforce components for complex functionality</li>
              <li>Validation through customized tests and testing automation</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="p-8 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-black font-bold text-xl px-4 py-2 rounded-full mr-4">Project 03</span>
              <h3 className="text-2xl font-semibold text-white">Salesforce CRM - Sales Process Optimization and Opportunity Management</h3>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="text-orange-400 font-bold">Project Overview:</span> This project focused on optimizing the sales process within Salesforce CRM to improve opportunity management for a large organization.
            </p>
            <h4 className="text-orange-400 font-bold mt-4 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Sales process automation and optimization</li>
              <li>Improved opportunity tracking and sales cycle reduction</li>
              <li>Integration with existing systems for a unified sales experience</li>
            </ul>
          </div>
        </div>
      </section>
  
      <Contact/>
    </div>
  )
}

export default Erpsalesforce