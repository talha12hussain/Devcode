import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const BusinessAutomation = () => {
  return (
    <div className="bg-black text-white font-sans">
    {/* Hero Section */}
    <section className="text-center  py-30 px-6">
      <h1 className="text-5xl font-bold">Business Process Automation

      </h1>
      <p className="text-orange-500 text-lg mt-2">
      Streamlining Your Business with Advanced Process Automation</p>
      <p className="max-w-2xl mx-auto mt-4 text-gray-300">
      At Dev2Code IT Solutions, we specialize in optimizing your operations 
      through cutting-edge business process automation. Whether you're looking to
       automate routine tasks or streamline complex workflows, we provide 
       tailored solutions that enhance efficiency and reduce manual effort.
     Our automation services ensure 
      your business is equipped to thrive in a competitive environment.
      </p>
      <button className="mt-6 bg-orange-500 px-6 py-2 rounded-full text-black font-bold hover:bg-orange-400">
  <Link to="/contact" className="w-full h-full block">
    GET IN TOUCH →
  </Link>
</button>
    </section>
    <div className="bg-black text-white py-16 px-6">
      
      {/* Section Header */}
      <section className="text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-orange-500 text-black px-3 py-1 text-sm font-semibold rounded-lg">
            FEATURES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Our Business Process Automation Solutions:
        </h2>

        {/* Service Cards */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-orange-500 font-semibold">01. Workflow Automation</h3>
            <p className="text-gray-300 mt-2">
              Deploy bots to handle high-volume, rule-based tasks, allowing your team to focus on 
              more strategic initiatives. RPA increases speed and accuracy in handling data, transactions, and communications.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-orange-500 font-semibold">02. Robotic Process Automation (RPA)</h3>
            <p className="text-gray-300 mt-2">
              Need temporary or long-term IT professionals? We offer resource outsourcing solutions, 
              providing you with skilled professionals to meet project demands.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-orange-500 font-semibold">03. Process Optimization</h3>
            <p className="text-gray-300 mt-2">
              We analyze and optimize your current workflows to eliminate inefficiencies, ensuring 
              faster completion of tasks and improved resource management.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-orange-500 font-semibold">04. Custom Automation Solutions</h3>
            <p className="text-gray-300 mt-2">
              Whether it's automating your sales processes, customer service, or supply chain management, 
              we create custom automation tools that meet your business needs.
            </p>
          </div>
        </div>
      </section>
      

    </div>
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center text-white px-6 md:px-12">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d1f0d] to-black"></div>

      {/* Content */}
      <div className="relative max-w-4xl text-center">
        {/* WHY Tag */}
        <div className="mb-4">
          <span className="px-3 py-1 text-sm font-bold uppercase bg-orange-500 text-black rounded-md shadow-md">
            WHY
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-orange-400 drop-shadow-lg mb-6">
        Why Dev2Code for Training & Outsourcing

        </h2>

        {/* Properly Aligned Bullet Points */}
        <ul className="text-lg md:text-xl text-gray-300 list-none space-y-3 text-left inline-block">
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Access to industry-leading automation technologies like RPA and AI-powered solutions.</li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Reduce operational costs by minimizing manual tasks and errors.</li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Scalable automation strategies designed to grow with your business.</li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Tailored solutions for maximum impact on your unique business processes.</li>
        </ul>
      </div>
    </div>
    <Contact/>
    </div>
  )
}

export default BusinessAutomation
