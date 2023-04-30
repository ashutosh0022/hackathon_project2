import React from "react";
import "./loader.css";
import loader from "../../assets/loader.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="loadercontainer">
      <div className="loaderlottie">
      <Lottie className="ldrlottie" animationData={loader} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
