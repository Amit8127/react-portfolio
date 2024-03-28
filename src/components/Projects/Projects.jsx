import React, { useEffect, useState } from "react";
import "./Projects.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import projectData from "../../ProjectData/projectData";
import Loader from "../Loader/Loader";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [project, setProject] = useState(projectData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });


  const renderProject = (project) => {
    return (
      <div className="images-container">
        {project.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.img} className="project-image" alt="project" />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Loader />
      <div className="container project-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Projects".split("")}
            idx={15}
          />
        </h1>
        <div className="scrollable-section">{renderProject(project)}</div>
      </div>
    </>
  );
};

export default Projects;
