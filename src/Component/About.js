import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>

          <p className="text-xl mt-10 leading-relaxed">
            I am a <span className="font-semibold">GIS Engineer</span> with{" "}
            <span className="font-semibold">3+ years of experience</span> in{" "}
            <span className="font-semibold">Utility GIS and Power Distribution GIS</span>, 
            specializing in electrical network digitization and geospatial data management 
            using <span className="font-semibold">GE Smallworld Electric Office, ArcMap, ArcGIS Pro, and QGIS</span>.
          </p>

          <p className="text-xl mt-6 leading-relaxed">
            I have hands-on experience digitizing and maintaining{" "}
            <span className="font-semibold">LT (0.433 kV) and HT (11 kV) electrical distribution networks</span>, 
            including feeder pillars, RMUs, cables, conductors, poles, and service connections. 
            My work involves feeder realignment, network reorganization, asset reconfiguration, 
            and Composite Unit (CU) configuration to keep utility networks standardized and consistent.
          </p>

          <p className="text-xl mt-6 leading-relaxed">
            I focus strongly on <span className="font-semibold">GIS quality control, topology validation, 
            and spatial/attribute data accuracy</span>, ensuring network data integrity across large-scale 
            utility and municipal GIS projects. I've also worked on Property Taxation Management System (PTMS) 
            projects, handling shapefiles, GeoJSON, KML integration, and GIS-MIS data reporting.
          </p>

          <p className="text-xl mt-6 leading-relaxed">
            Continuously building on my foundation in Geoinformatics and Remote Sensing, 
            I aim to deliver precise, reliable, and well-structured geospatial solutions for 
            power distribution and utility networks.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;