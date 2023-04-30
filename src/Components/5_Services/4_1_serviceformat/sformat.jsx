import React from "react";
// import bg1 from "../../../assets/bg1.jpg";
import "./sformat.css";
const sformat = (props) => {
  return (
    <>
      <div className="main" style={props.style}>
        <img src={props.image} alt="" />

        <div className="cont">
          <div className="cont1">
            <h1>{props.h1}</h1>
          </div>
          <div className="cont2">
            <h2>{props.h2}</h2>
          </div>
          <div className="cont3">
            <p>{props.p}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default sformat;
