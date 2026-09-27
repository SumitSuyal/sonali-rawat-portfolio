import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Utility & Power Distribution GIS",
      skills: [
        "LT & HT Network Digitization (0.433 kV & 11 kV)", "Power Distribution GIS",
        "Electrical Asset Mapping", "Feeder Realignment", "Network Reorganization",
        "Network Topology", "Connectivity Management", "RMU & Feeder Pillar Mapping",
        "Composite Units (CU) Configuration"
      ],
    },
    {
      title: "GIS Software & Platforms",
      skills: ["GE Smallworld Electric Office", "ArcMap", "ArcGIS Pro", "QGIS", "ERDAS IMAGINE", "Google Earth Pro"],
    },
    {
      title: "GIS Operations & Analysis",
      skills: [
        "Spatial Analysis", "Shapefiles", "GeoJSON", "Georeferencing", "Vector Analysis",
        "LULC Classification", "KML Integration", "Attribute Data Management",
        "GIS Quality Control", "Topology Validation", "Data Validation"
      ],
    },
    {
      title: "Integration & Tools",
      skills: ["GIS-MIS Integration", "MS Excel"],
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full pt-20">
        
        {/* Heading */}
        <div className="pb-10 pt-10">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-6 text-gray-300">
            My technical expertise as a GIS Engineer
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 shadow-md hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {category.title}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-md text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Skills;