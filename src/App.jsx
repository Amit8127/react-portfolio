import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useEffect, useState } from "react";

function App() {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkWindowSize = () => {
  //     setIsMobile(window.innerWidth <= 1280); // Adjust the threshold as needed
  //   };

  //   // Initial check
  //   checkWindowSize();

  //   // Listen for window resize events
  //   window.addEventListener("resize", checkWindowSize);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", checkWindowSize);
  //   };
  // }, []);

  // if (isMobile) {
  //   return (
  //     <div className="mobile-tablet">
  //       <p style={{color: "#fff", textAlign: "center", paddingTop: "25%"}}>
  //         Currently, we're not supporting Mobile & Tablets{" "}
  //         <span role="img" aria-label="Warn">
  //           🙏
  //         </span>
  //       </p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/skills" element={<Skills />} />
  //         <Route path="/project" element={<Projects />} />
  //         <Route path="/contact" element={<Contact />} />
  //       </Route>
  //     </Routes>
  //   );
  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
