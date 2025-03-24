import React from 'react'

const Newabout = () => {
  return ( <section className="bg-black text-white py-16 px-6 md:px-20">
    {/* Header Section */}
    <div className="text-center">
      <span className="bg-orange-500 text-black px-4 py-1 text-sm font-bold uppercase rounded-lg">
        Who We Are
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mt-4">
        About our Company
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        <span className="text-orange-500 font-bold">Dev2Code IT Solutions</span> 
        offers tailored IT consulting and development services, specializing in ServiceNow, ITSM, web and mobile apps, ERP solutions, and UI/UX design. Backed by over 6 years of industry experience, we provide end-to-end solutions and flexible outsourcing to drive business growth and innovation.
      </p>
    </div>

    {/* Sections: History, Mission, Vision */}
    <div className="mt-12 space-y-6">
      {/* History */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-xl">
        <h3 className="text-xl font-bold text-orange-500">History</h3>
        <p className="mt-2 text-gray-300">
          Founded with a passion for innovation and problem-solving, Dev2Code started as a small team of experts in ServiceNow and UI/UX design. Over the years, we've grown into a trusted partner for businesses across various industries, delivering tailored solutions that enhance efficiency and elevate user experiences. Our commitment to quality, collaboration, and client satisfaction has driven our success, allowing us to expand our portfolio and services while staying true to our core values. Today, we continue to push boundaries, helping businesses thrive in the digital landscape.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-xl">
        <h3 className="text-xl font-bold text-orange-500">Mission</h3>
        <p className="mt-2 text-gray-300">
          Our mission is to empower businesses by delivering innovative, user-centric solutions that enhance efficiency and elevate digital experiences. We strive to create lasting value through expert ServiceNow implementations and exceptional UI/UX design, helping our clients achieve their goals and thrive in a digital-first world.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-xl">
        <h3 className="text-xl font-bold text-orange-500">Vision</h3>
        <p className="mt-2 text-gray-300">
          Our vision is to become a leading agency recognized for transforming businesses through cutting-edge ServiceNow solutions and world-class UI/UX design, driving innovation and setting new standards for digital excellence globally.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Newabout