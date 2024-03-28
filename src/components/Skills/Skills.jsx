import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import bootstrap from "../../assets/images/bootstrap.png";
import css from "../../assets/images/css.png";
import express from "../../assets/images/express.png";
import git from "../../assets/images/git.png";
import hibernate from "../../assets/images/hibernate.png";
import html from "../../assets/images/html.png";
import java from "../../assets/images/Java.png";
import javaScript from "../../assets/images/JavaScript.png";
import mongoDB from "../../assets/images/mongoDB.png";
import mysql from "../../assets/images/mysql.png";
import react from "../../assets/images/react.png";
import springBoot from "../../assets/images/springBoot.png";
import firebase from "../../assets/images/firebase.png";
import Loader from "../Loader/Loader";
import "./Skills.scss";
const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <Loader />
      <div className="container project-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Skills & Experience".split("")}
            idx={10}
          />
        </h1>
        <div className="text">
          <ul>
            <li>
              Currently enrolled in the Full Stack Java Development
              Apprenticeship at AccioJob since October 2022.
            </li>
            <li>
              Engaged in intensive learning and mastery of essential tech stacks
              including{" "}
              <span>
                Data Structures and Algorithms (DSA), Java, Spring Boot, JPA
                Hibernate
              </span>
              , and <span>MERN stack</span> (MongoDB, Express.js, React,
              Node.js), along with <span>Database Management Systems</span>{" "}
              (DBMS).
            </li>
            <li>
              Actively applying theoretical knowledge to real-life projects,
              fostering practical skills and deepening understanding of
              industry-standard practices.
            </li>
            <li>
              Collaborating closely with professionals from{" "}
              <span>top multinational corporations</span> (MNCs), gaining
              invaluable experience and insights while working on real-world
              projects.
            </li>
            <li>
              Demonstrating a strong commitment to professional growth by
              consistently seeking opportunities to enhance skills and
              knowledge.
            </li>
            <li>
              Adaptable and quick to grasp new technologies, ensuring efficient
              development and contributing effectively to project completion
              even under tight deadlines.
            </li>
          </ul>
        </div>
        <div className="animation-container">
          <div className="image-wrapper">
            <img src={java} alt="Skill 1" />
            <h2>Java</h2>
          </div>
          <div className="image-wrapper">
            <img src={springBoot} alt="Skill 2" />
            <h2>Spring Boot</h2>
          </div>
          <div className="image-wrapper">
            <img src={hibernate} alt="Skill 3" />
            <h2>Hibernate</h2>
          </div>
          <div className="image-wrapper">
            <img src={mysql} alt="Skill 4" />
            <h2>MySQL</h2>
          </div>
          <div className="image-wrapper">
            <img src={html} alt="Skill 5" />
            <h2>HTML5</h2>
          </div>
          <div className="image-wrapper">
            <img src={css} alt="Skill 6" />
            <h2>CSS3</h2>
          </div>
          <div className="image-wrapper">
            <img src={bootstrap} alt="Skill 7" />
            <h2>Bootstrap</h2>
          </div>
          <div className="image-wrapper">
            <img src={javaScript} alt="Skill 8" />
            <h2>JavaScript</h2>
          </div>
          <div className="image-wrapper">
            <img src={react} alt="Skill 9" />
            <h2>React</h2>
          </div>
          <div className="image-wrapper">
            <img src={express} alt="Skill 10" />
            <h2>Express</h2>
          </div>
          <div className="image-wrapper">
            <img src={mongoDB} alt="Skill 11" />
            <h2>MongoDB</h2>
          </div>
          <div className="image-wrapper">
            <img src={git} alt="Skill 12" />
            <h2>Git</h2>
          </div>
          <div className="image-wrapper">
            <img src={firebase} alt="Skill 13" />
            <h2>Firebase</h2>
          </div>

          {/* Second line  */}

          <div className="image-wrapper">
            <img src={java} alt="Skill 1" />
            <h2>Java</h2>
          </div>
          <div className="image-wrapper">
            <img src={springBoot} alt="Skill 2" />
            <h2>Spring Boot</h2>
          </div>
          <div className="image-wrapper">
            <img src={hibernate} alt="Skill 3" />
            <h2>Hibernate</h2>
          </div>
          <div className="image-wrapper">
            <img src={mysql} alt="Skill 4" />
            <h2>MySQL</h2>
          </div>
          <div className="image-wrapper">
            <img src={html} alt="Skill 5" />
            <h2>HTML5</h2>
          </div>
          <div className="image-wrapper">
            <img src={css} alt="Skill 6" />
            <h2>CSS3</h2>
          </div>
          <div className="image-wrapper">
            <img src={bootstrap} alt="Skill 7" />
            <h2>Bootstrap</h2>
          </div>
          <div className="image-wrapper">
            <img src={javaScript} alt="Skill 8" />
            <h2>JavaScript</h2>
          </div>
          <div className="image-wrapper">
            <img src={react} alt="Skill 9" />
            <h2>React</h2>
          </div>
          <div className="image-wrapper">
            <img src={express} alt="Skill 10" />
            <h2>Express</h2>
          </div>
          <div className="image-wrapper">
            <img src={mongoDB} alt="Skill 11" />
            <h2>MongoDB</h2>
          </div>
          <div className="image-wrapper">
            <img src={git} alt="Skill 12" />
            <h2>Git</h2>
          </div>
          <div className="image-wrapper">
            <img src={firebase} alt="Skill 13" />
            <h2>Firebase</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
