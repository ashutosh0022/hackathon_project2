import React from "react";
import "../5_1_format/format.css";
import { FaQuoteLeft } from "react-icons/fa";
const format = (props) => {
  return (
    <>
      <div className="t-data">
        <div className="profile">
          <img src={props.image} alt="profile" />
        </div>
        <div className="name">
          <h2>{props.name}</h2>
        </div>
        <div className="prof">
          <p>{props.work}</p>
        </div>
        <div className="icnq">
          <h1>
            <FaQuoteLeft />
          </h1>
        </div>
        <div className="comment">
          <p>{props.comment}</p>
        </div>
      </div>
    </>
  );
};

export default format;
