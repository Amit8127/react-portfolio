import { useEffect, useState } from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "../Loader/Loader";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    // Cleanup function to clear timeout when component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            As a Software Developer and DSA geek with, having excellent problem
            solving skills. I bring a wealth of engineering expertise in
            front-end and back-end technologies.
          </p>
          <p>
            Proficient in Java, Spring, and diverse databases, I specialize in
            crafting scalable and efficient solutions. Dive into my projects to
            see the seamless integration of front-end technologies, showcasing
            proficiency in HTML, CSS, JavaScript and React.
          </p>
          <p>
            Beyond technical prowess, my portfolio showcases a commitment to
            seamless collaboration and effective communication. I consistently
            demonstrate a can-do attitude and embrace tough challenges with
            energy and enthusiasm.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader />
    </>
  );
};

export default About;
