import React from "react";
import { FiMonitor, FiTool, FiBriefcase, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link
import Contact from "./Contact";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Web Development & Full-stack development using modern technologies like React, Angular, Python, and .NET. We build scalable web applications to meet your business needs.",
    icon: <FiBriefcase size={30} className="text-orange-500" />,
    link: "/custom-software",
  },
  {
    title: "Enterprise Resource Planning (ERP) Solutions",
    description:
      "Salesforce, SAP, and Oracle: We provide implementation, customization, and integration services for leading ERP platforms to streamline operations and boost productivity.",
    icon: <FiTool size={30} className="text-orange-500" />,
    link: "/erp-servicenow",
  },
  {
    title: "Cloud and Infrastructure Services",
    description:
      "Cloud Migration & Management: Experts in migrating businesses to cloud platforms such as AWS, Azure, and Google Cloud.",
    icon: <FiMonitor size={30} className="text-orange-500" />,
    link: "/cloud",
  },
  {
    title: "UI/UX Design",
    description:
      "User-Centric Design: We create visually appealing and functional UI/UX designs for web and mobile applications.",
    icon: <FiEdit size={30} className="text-orange-500" />,
    link: "/ui-ux",
  },
  {
    title: "Business Process Automation",
    description:
      "Automating workflows to eliminate process inefficiencies, reduce operational costs, and enhance productivity using modern tools like ServiceNow, UiPath, and custom-built solutions.",
    icon: <FiMonitor size={30} className="text-orange-500" />,
    link: "/business-automation",
  },
  {
    title: "Training and Resource Outsourcing",
    description:
      "We offer specialized training for ServiceNow, Web Development, ERP platforms, and IT outsourcing services, helping businesses scale quickly by providing vetted IT professionals.",
    icon: <FiEdit size={30} className="text-orange-500" />,
    link: "/services/training-outsourcing",
  },
];

const Viewservices = () => {
  return (
    <div className="bg-black text-white py-20 px-5">
      {/* "Discover Our Services" Section */}
      <div className="relative bg-black text-center py-16">
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <h2 className="relative text-4xl font-bold text-white">
          Discover <span className="block">Our Services</span>
        </h2>
      </div>

      {/* Services Grid (2 Columns on Desktop, 1 Column on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition-all flex flex-col items-start"
          >
            {/* Orange Neon Border Effect */}
            <div className="absolute top-0 left-0 w-16 h-1 bg-orange-500 rounded-tr-lg"></div>

            {/* Icon Section */}
            <div className="bg-gray-800 p-4 rounded-lg mb-4">{service.icon}</div>

            {/* Text Section */}
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
            <a
              href={service.link}
              className="mt-4 text-orange-500 font-semibold flex items-center gap-2 hover:text-orange-400 transition-all"
            >
              LEARN MORE <span>↗</span>
            </a>
          </div>
        ))}
      </div>

     
      <Contact/>
    </div>
  );
};

export default Viewservices;
