import React from "react";
import { IndividualProject } from "./IndividualProject";


export const Projects = () => {


  return (
    <div id="projects" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">{("Projects")}</p>
          <p className="py-6">{("Some of the great projects I've helped develop! View the demo or github for more information.")}</p>
        </div>
		<IndividualProject />
      </div>
    </div>
  );
};
