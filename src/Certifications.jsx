import React from "react";

const Certifications = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 relative">
      {/* Tag */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-black px-4 py-1 text-sm font-bold uppercase rounded-lg">
        Certifications
      </div>

      {/* Title & Description */}
      <div className="text-center mt-12">
        <h1 className="text-4xl md:text-5xl font-bold">Our Certifications</h1>
        <p className="text-lg text-orange-500 mt-2">
          Our team holds numerous certifications across various platforms and technologies:
        </p>
      </div>

      {/* Certification List */}
      <ul className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed text-left mx-auto max-w-3xl list-disc pl-5">
        <li>Certified System Administrator (CSA) – ServiceNow</li>
        <li>Certified Application Developer (CAD) – ServiceNow</li>
        <li>Certified Implementation Specialist (CIS) – ITSM, CSM, HRSD</li>
        <li>ITIL v4 Foundation Certification</li>
        <li>Certified Professional in Salesforce Administration and Development</li>
        <li>Microsoft Azure Fundamentals Certification</li>
        <li>AWS Certified Solutions Architect</li>
      </ul>
    </section>
  );
};

export default Certifications;
