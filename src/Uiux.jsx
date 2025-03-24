import React from 'react'
import Contact from './Contact'
import Lazyer from './assets/lazylays.avif'
import Nest from './assets/nest.avif'
import Fintech from './assets/fintech.avif'
import Direct from './assets/directio.avif'
import { Link } from 'react-router-dom'

const Uiux = () => {
    const projects = [
        {
          title: "LazyLays",
          image: Nest,
          bg: "bg-green-900",
        },
        {
          title: "NEST Shopping",
          image: Lazyer,
          bg: "bg-emerald-600",
        },
        {
          title: "FinTech WebApp",
          image: Fintech,
          bg: "bg-blue-600",
        },
        {
          title: "Direct.io",
          image: Direct,
          bg: "bg-purple-700",
        },
      ];
  return (
    <div className="bg-black text-white font-sans">
    {/* Hero Section */}
    <section className="text-center  py-30 px-6">
      <h1 className="text-5xl font-bold">UI/UX Design </h1>
      <p className="text-orange-500 text-lg mt-2">
      Creating Engaging and Intuitive Digital Experiences</p>
      <p className="max-w-2xl mx-auto mt-4 text-gray-300">
      A great user experience is essential for customer satisfaction and 
      business success. At Dev2Code IT Solutions, we craft visually 
      compelling and user-friendly designs that offer seamless navigation
      and an enjoyable user journey. Our UI/UX team combines creativity and 
      data-driven insights to deliver designs that
       not only look stunning but also perform efficiently.
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
      Our UI/UX Services Include:
      </h2>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-orange-500 font-semibold text-lg">01. User Interface Design (UI):</h3>
          <p className="text-gray-300 mt-2">
          Beautifully designed interfaces that reflect
           your brand identity while ensuring ease of use and functionality.
          </p>
        </div>

        <div className="bg-orange-500 text-black p-6 rounded-lg">
          <h3 className="font-semibold text-lg">02. User Experience Design (UX): </h3>
          <p className="mt-2">
          We prioritize intuitive design, creating user experiences that keep your customers engaged and coming back for more.          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg md:col-span-2">
          <h3 className="text-orange-500 font-semibold text-lg">03. Prototyping & Wireframing          </h3>
          <p className="text-gray-300 mt-2">
          Detailed prototypes and wireframes that give you a 
          clear visual of the final product before development begins.


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
          Why Dev2Code for UI/UX?
        </h2>

        {/* Properly Aligned Bullet Points */}
        <ul className="text-lg md:text-xl text-gray-300 list-none space-y-3 text-left inline-block">
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Tailored, user-centered design process
            </li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Focus on creating cross-platform solutions for web and mobile</li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Expertise in delivering high-conversion digital experiences</li>
          <li>
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
            • Designs that are both aesthetically pleasing and functionally sound</li>
        </ul>
      </div>
    </div>
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center text-white px-6 md:px-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-20"></div>

      {/* Section Heading */}
      <div className="relative text-center mb-8">
        <span className="text-sm font-bold uppercase text-gray-400 tracking-widest">
          Some Samples of Our Works
        </span>
      </div>

      {/* Grid Layout for Projects */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative ${project.bg} rounded-2xl p-4 flex items-center justify-center shadow-lg transform transition hover:scale-105`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    <Contact/>
    </div>
  )
}

export default Uiux