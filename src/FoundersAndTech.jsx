import React from "react";

const FoundersAndTech = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Meet The Founders */}
      <div className="text-center">
        <span className="bg-orange-500 text-black px-4 py-1 text-sm font-bold uppercase rounded-lg">
          About Team
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Meet The Founders</h1>

        {/* Founder Profiles */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { name: "SUFYAN MEMON", link: "https://www.linkedin.com/in/sufiyan-memon" },
            { name: "AHMED RAZA", link: "https://www.linkedin.com/in/ahmed-raza-a7b4b11a4/" },
            { name: "MUHAMMAD MAIRAJ", link: "https://www.linkedin.com/in/muhammad-mairaj-947113111" },
          ].map((founder, index) => (
            <a
              key={index}
              href={founder.link}
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg text-lg font-bold text-orange-400 hover:text-orange-500 transition"
            >
              <span className="bg-gray-700 p-2 rounded-full">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                     alt="LinkedIn" className="w-5 h-5" />
              </span>
              {founder.name}
            </a>
          ))}
        </div>
      </div>

      {/* Technologies We Work With */}
      <div className="text-center mt-16">
        <span className="bg-orange-500 text-black px-4 py-1 text-sm font-bold uppercase rounded-lg">
          Tech Stack
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Technologies We Work With
        </h1>

        {/* Tech List */}
        <ul className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed text-left mx-auto max-w-3xl">
          <li><strong className="text-orange-500">Languages:</strong> Python, JavaScript, HTML5, CSS, PHP, .NET</li>
          <li><strong className="text-orange-500">Frameworks:</strong> React, Angular, Node.js, Django, .NET Core</li>
          <li><strong className="text-orange-500">Mobile Development:</strong> Android (Kotlin, Java), iOS (Swift), Flutter</li>
          <li><strong className="text-orange-500">Cloud Services:</strong> AWS, Microsoft Azure, Google Cloud</li>
          <li><strong className="text-orange-500">ERP Platforms:</strong> Salesforce, SAP, Oracle, ServiceNow</li>
          <li><strong className="text-orange-500">Automation & Workflow:</strong> ServiceNow, UiPath</li>
          <li><strong className="text-orange-500">Databases:</strong> MySQL, Oracle, MongoDB, Microsoft SQL Server</li>
        </ul>
      </div>
    </section>
  );
};

export default FoundersAndTech;
