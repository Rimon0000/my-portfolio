import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-livid-sigma.vercel.app/api/projects")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div id="projects" className="w-[90%] mx-auto mt-20">
      <h2 className="text-center text-4xl font-bold mt-10 p-5 border-b-4 border-gray-500 w-7/12 mx-auto">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data?.data?.map((item) => (
          <ProjectCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
