import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Cloud = () => {
  return (
    <div className="bg-black text-white font-sans">
    {/* Hero Section */}
    <section className="text-center  py-30 px-6">
      <h1 className="text-5xl font-bold">Cloud and Infrastructure Services

      </h1>
      <p className="text-orange-500 text-lg mt-2">
      Harness the Power of the Cloud with Scalable and Secure Solutions</p>
      <p className="max-w-2xl mx-auto mt-4 text-gray-300">
      Cloud technology is reshaping business operations across industries,
       and Dev2Code IT Solutions is at the forefront of this transformation. 
       We offer comprehensive cloud migration, management, and IT infrastructure 
       services, ensuring your organization runs efficiently and securely in the cloud. From AWS and Azure to ServiceNow cloud solutions, we help you scale
       and secure your infrastructure while reducing operational costs.
      </p>
      <button className="mt-6 bg-orange-500 px-6 py-2 rounded-full text-black font-bold hover:bg-orange-400">
  <Link to="/contact" className="w-full h-full block">
    GET IN TOUCH →
  </Link>
</button>
    </section>
    <div className="bg-black text-white py-16 px-6">
      
      {/* Features Tag */}
      <div className="flex items-center mb-4">
        <span className="bg-orange-500 text-black px-3 py-1 text-sm font-semibold rounded-lg">
          FEATURES
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        Our Cloud Services Include:
      </h2>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        
        {/* Cloud Migration */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-orange-500 font-semibold text-lg">01. Cloud Migration</h3>
          <p className="text-gray-300 mt-2">
            Seamless transitions to the cloud, with expertise in AWS, Microsoft Azure, Google Cloud, 
            and ServiceNow. We ensure minimal downtime and a secure environment.
          </p>
        </div>

        {/* Cloud Infrastructure Management */}
        <div className="bg-orange-500 text-black p-6 rounded-lg">
          <h3 className="font-semibold text-lg">02. Cloud Infrastructure Management</h3>
          <p className="mt-2">
            End-to-end management of your cloud infrastructure, optimizing performance, security, and cost-efficiency.
          </p>
        </div>

        {/* Infrastructure as a Service */}
        <div className="bg-gray-900 p-6 rounded-lg md:col-span-2">
          <h3 className="text-orange-500 font-semibold text-lg">03. Infrastructure as a Service (IaaS)</h3>
          <p className="text-gray-300 mt-2">
            Flexible infrastructure solutions tailored to your business needs, allowing you to scale operations 
            without the limitations of on-premises hardware.
          </p>
        </div>

      </div>
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
          Why Dev2Code
        </h2>

        {/* Properly Aligned Bullet Points */}
        <ul className="text-lg md:text-xl text-gray-300 list-none space-y-3 text-left inline-block">
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            Expertise in leading cloud platforms including AWS, Azure, Google Cloud, and ServiceNow
          </li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            Zero downtime cloud migrations
          </li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            Cost-effective and scalable cloud management
          </li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            24/7 support and proactive infrastructure monitoring
          </li>
        </ul>
      </div>
    </div>
    <Contact/>
    </div>
  )
}

export default Cloud