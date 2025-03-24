import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const EnterpriseResource = () => {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 lg:py-30 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          ERP Solutions (ServiceNow, Salesforce, SAP, Oracle)
        </h1>
        <p className="text-orange-500 text-lg sm:text-xl mt-2 md:mt-4">
          Streamline Business Operations with Advanced ERP Systems
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-300 text-base sm:text-lg">
          At Dev2Code IT, we deliver world-class ERP solutions tailored 
          to the unique demands of your business. With certified experts in
          ServiceNow, Salesforce, SAP, and Oracle, we provide comprehensive
          ERP consulting, implementation, and support services. Our focus is on
          optimizing your workflows, enhancing productivity, 
          and delivering the insights you need to make informed business decisions.
        </p>
        <button className="mt-6 bg-orange-500 px-6 py-2 rounded-full text-black font-bold hover:bg-orange-400 transition-colors duration-300">
          <Link to="/contact" className="w-full h-full block">
            GET IN TOUCH →
          </Link>
        </button>
      </section>

      {/* Features Section */}
      <div className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <section className="text-center max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-orange-500 text-black px-3 py-1 text-sm font-semibold rounded-lg">
              FEATURES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
            Our ERP Services Include:
          </h2>

          {/* Service Cards */}
          <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-900 p-5 sm:p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-orange-500 font-semibold text-lg sm:text-xl">
                01. ServiceNow Enterprise Solutions
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                We specialize in implementing and customizing ServiceNow across 
                ITSM, CSM, and HRSD modules, automating
                workflows and improving service delivery across your enterprise.
              </p>
            </div>
            <div className="bg-gray-900 p-5 sm:p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-orange-500 font-semibold text-lg sm:text-xl">
                02. Salesforce CRM
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                Implement and customize Salesforce to streamline
                your customer relationship management and drive business success.
              </p>
            </div>
            <div className="bg-gray-900 p-5 sm:p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-orange-500 font-semibold text-lg sm:text-xl">
                03. SAP Integration
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                End-to-end SAP solutions to improve operational 
                efficiency, integrate business processes, and boost your bottom line.
              </p>
            </div>
            <div className="bg-gray-900 p-5 sm:p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-orange-500 font-semibold text-lg sm:text-xl">
                04. Oracle ERP
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                We provide tailored Oracle ERP implementations that automate core 
                business functions like finance, supply chain, and human resources.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Why Section */}
      <div className="relative w-full min-h-screen bg-black flex items-center justify-center text-white px-4 sm:px-6 md:px-12 py-12 md:py-0">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d1f0d] to-black"></div>

        {/* Content */}
        <div className="relative max-w-4xl text-center px-4">
          {/* WHY Tag */}
          <div className="mb-4">
            <span className="px-3 py-1 text-sm font-bold uppercase bg-orange-500 text-black rounded-md shadow-md">
              WHY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 drop-shadow-lg mb-6">
            Why Dev2Code for ERP
          </h2>

          {/* Bullet Points */}
          <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-3 text-left max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Certified professionals in ServiceNow, Salesforce, SAP, and Oracle</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Customized solutions to fit your specific workflows</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Industry expertise across manufacturing, healthcare, retail, and more</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>End-to-end implementation and post-deployment support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default EnterpriseResource