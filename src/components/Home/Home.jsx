import "./Home.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/A2_Logo.png";
import Logo from "./Logo/Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["m", "i", "t", ","];
  const jobArray = [
    "s",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    // Cleanup function to clear timeout when component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2 style={{fontSize: "16px"}}>Java Full Stack Developer | MERN Stack Developer</h2>
          <Link to="/contact" className="flat-button con">
            CONTACT ME
          </Link>
          <Link
            to="https://drive.google.com/file/d/1vqgT-cpuF0otb3mTUxO0m7p7cEv89D-k/view?usp=sharing"
            className="flat-button"
            target="_blank"
          >
            RESUME
          </Link>
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Home;
