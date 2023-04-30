import React from "react";
import Errordata from "../../assets/error-window.json";
import Lottie from "lottie-react";
import "../error-page/error.css";
const error = () => {
  return (
    <>
      <div className="main">
        <Lottie className="error-w" animationData={Errordata} loop={true} />
      </div>
    </>
  );
};

export default error;
