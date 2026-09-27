import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        
        {/* Heading */}
        <div className="pb-10 pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education & Experience
          </p>
        </div>

        {/* EXPERIENCE */}
        <div>
          <div className="pb-6 w-full flex items-center">
            <p className="text-xl w-full text-center font-bold">Experience</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">

            {/* NPCL */}
            <div className="w-full md:w-1/2">
              <div className="h-full bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md p-4 border border-white">
                <h2 className="text-lg font-semibold">
                  <MdOutlineWork className="inline mr-2" />
                  GIS Digitizer / Utility GIS Engineer at Noida Power Company Limited (via TeamLease India)
                </h2>
                <p className="text-gray-200 mt-2">Aug 2024 - Present</p>
                <p className="text-gray-300 mt-4 text-sm">
                  Manage GIS layers in GE Smallworld Electric Office for LT (0.433 kV) and HT (11 kV) electrical 
                  distribution networks. Digitize and maintain electrical assets including feeder pillars, RMUs, 
                  cables, conductors, poles, and service connections. Perform feeder realignment, network 
                  reorganization, asset reconfiguration, and connectivity corrections. Configure Composite Units (CUs) 
                  to maintain standardized network representation, along with GIS quality control and topology validation 
                  to ensure data integrity.
                </p>
              </div>
            </div>

            {/* Neogeoinfo */}
            <div className="w-full md:w-1/2">
              <div className="h-full bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md p-4 border border-white">
                <h2 className="text-lg font-semibold">
                  <MdOutlineWork className="inline mr-2" />
                  GIS Engineer at Neogeoinfo Technologies Limited
                </h2>
                <p className="text-gray-200 mt-2">May 2023 - Jul 2024</p>
                <p className="text-gray-300 mt-4 text-sm">
                  Supported Property Taxation Management System (PTMS) GIS projects for municipal government clients. 
                  Performed GIS operations using ArcMap, ArcGIS Pro, and QGIS, including topology creation, shapefile 
                  and GeoJSON handling, and ARV identification/mapping. Supported map creation, spatial data processing, 
                  and KML integration for project deliverables, along with GIS quality control and GIS-MIS integration 
                  for spatial data reporting.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* EDUCATION */}
        <div className="pt-12">
          <div className="pb-6 w-full flex items-center">
            <p className="text-xl w-full text-center font-bold">Education</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto">

            <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md p-4 border border-white">
              <h2 className="text-lg font-semibold">
                <FaGraduationCap className="inline mr-2" />
                PG Diploma in Geoinformatics and Remote Sensing
              </h2>
              <p className="text-gray-200 mt-2">2023</p>
              <p className="text-gray-300 mt-2">
                Swastik Edustart, New Delhi
              </p>
            </div>

            <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md p-4 border border-white">
              <h2 className="text-lg font-semibold">
                <FaGraduationCap className="inline mr-2" />
                Master's in Geography
              </h2>
              <p className="text-gray-200 mt-2">2022</p>
              <p className="text-gray-300 mt-2">
                Kumaon University, Nainital
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;