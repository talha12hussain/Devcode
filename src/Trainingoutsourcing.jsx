import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Trainingoutsourcing = () => {
  return (
    <div className="bg-black text-white font-sans">
    {/* Hero Section */}
    <section className="text-center  py-30 px-6">
      <h1 className="text-5xl font-bold">Training and Resource Outsourcing</h1>
      <p className="text-orange-500 text-lg mt-2">
      Empowering Your Business with Top Talent and Expertise</p>
      <p className="max-w-2xl mx-auto mt-4 text-gray-300">
      At Dev2Code IT Solutions, we believe in empowering businesses through knowledge and talent.
       Whether you're looking to upskill your in-house team or
        outsource IT professionals for a project, we offer solutions 
        that enhance your capabilities. Our training programs and outsourcing 
        services ensure you have access to the best talent and expertise in the industry.
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
      Our Training & Outsourcing Solutions:
      </h2>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-orange-500 font-semibold text-lg">01. IT Training Programs</h3>
          <p className="text-gray-300 mt-2">
          Comprehensive training programs in ServiceNow, ERP systems, web development, and more. Our training is 
          hands-on and designed to equip your teams with the skills they need.
          </p>
        </div>

        <div className="bg-orange-500 text-black p-6 rounded-lg">
          <h3 className="font-semibold text-lg">02. Outsourcing IT Talent </h3>
          <p className="mt-2">
          Need temporary or long-term IT professionals? We offer resource outsourcing solutions, providing 
          you with skilled professionals to meet project demands.               </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg md:col-span-2">
          <h3 className="text-orange-500 font-semibold text-lg">03. Corporate IT Training        </h3>
          <p className="text-gray-300 mt-2">
          Tailored training solutions for businesses 
          looking to stay ahead of technological advancements.
           From cloud technologies to automation, we prepare your
            teams for future challenges.



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
        Why Dev2Code for Training & Outsourcing
        </h2>

        {/* Properly Aligned Bullet Points */}
        <ul className="text-lg md:text-xl text-gray-300 list-none space-y-3 text-left inline-block">
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Access to a global network of certified IT professionals </li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Cost-effective outsourcing solutions for short and long-term needs

</li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Customized corporate training programs to meet business goals</li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Scalable workforce solutions for dynamic project requirements</li>
        </ul>
      </div>
    </div>
  
    <Contact/>
    </div>
  )
}

export default Trainingoutsourcing