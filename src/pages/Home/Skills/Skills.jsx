import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Skills.css";

const Skills = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-livid-sigma.vercel.app/api/skills")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div id="skills" className="w-[90%] mx-auto">
      <h2 className="text-center text-4xl font-bold m-5 p-5 border-b-4 border-gray-500 w-1/2 mx-auto">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-5">
        {data?.data?.map((item) => (
          <div className="card bg-base-200 shadow-xl px-5 pt-1 pb-2 border hover:border-blue-500 transition-all duration-400 hover:rounded-md ">
            <figure className="text-center">
              <img
                src={item.icon}
                alt="Icon"
                className="rounded-xl max-w-[8%]" />
              <h2 className="card-title ml-3">{item.title}</h2>
            </figure>
            <div className="mt-2">
              <ProgressBar
               className="progress"
                completed={item.progress}
              ></ProgressBar>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
