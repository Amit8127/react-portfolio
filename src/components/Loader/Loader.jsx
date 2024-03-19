import React, { useEffect, useState } from "react";
import "./Loader.scss";
import loaderImg from "../../assets/images/A_Logo.png";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <>
      {loading ? (
        <div className="cont">
          <img src={loaderImg} alt="logopreload" />
          <h2>Amit is Working....</h2>
          <div className="bar">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
