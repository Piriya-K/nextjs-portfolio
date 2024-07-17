import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center sm:pb-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project_desktop.png"
          title="Modern React POS System (On-Going)"
          description="A restaurant point-of-sales system built on modern frameworks and technologies."
          link="https://github.com/Piriya-K/restaurant-POS-system-vite-public"
          website="https://piriya-pos.onrender.com/login"
        />
        <ProjectCard
          src="/car-rental-2.png"
          title="Premium Car Rental Website (On-Going)"
          description="A premium car-rental website built on the latest NextJS version, modern UI libraries, and a content-management system with GraphQL capability."
          link="https://github.com/Piriya-K/car-rental"
          website="https://car-rental-neon.vercel.app/"
        />
        <ProjectCard
          src="/capstone-pos.png"
          title="Capstone Project: POS System"
          description="This Capstone project is a restaurant point-of-sales system. Completed by our team of six using the .NET framework, MySQL, and Windows Presentation Foundation"
          link="https://github.com/BiteByte-Capstone/POS_System"
          website=""
        />
      </div>
    </div>
  );
};

export default Projects;
