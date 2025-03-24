import React from "react";
import { FiAward, FiSettings, FiUsers } from "react-icons/fi";
import { FaMedal } from "react-icons/fa";

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "80+", label: "Successful Projects" },
  { value: "60+", label: "Happy Clients" },
  { value: "160", label: "5 Star Reviews" },
];

const features = [
  {
    title: "Proven Track Record",
    description:
      "We deliver transformative ServiceNow solutions and exceptional UI/UX designs, backed by a proven track record of success and client satisfaction.",
    icon: <FaMedal size={30} className="text-orange-500" />,
  },
  {
    title: "Tailored Solutions",
    description:
      "We stay at the forefront of technology and design trends, ensuring that our clients benefit from the latest innovations in ServiceNow and UI/UX development.",
    icon: <FiSettings size={30} className="text-orange-500" />,
  },
  {
    title: "Client-Centric Focus",
    description:
      "We prioritize your needs and goals, ensuring that our solutions are tailored to deliver the best results and enhance your overall experience.",
    icon: <FiUsers size={30} className="text-orange-500" />,
  },
];

const badges = [
  "Continuous Innovation",
  "Dedicated Support",
  "Positive Client Experiences",
  "Commitment to Excellence",
];

const AboutUsSection = () => {
  return (
    <div className="bg-black text-white py-20 px-5">
      {/* Stats Section (Numbers in Circle) */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-800 shadow-lg">
              <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
            </div>
            <p className="text-gray-400 mt-3">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition-all flex flex-col items-center text-center"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
