import "./eventcard.css";
import React from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { API } from "../../../config";
import { Link, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import eventphoto from "../../../../assets/bg2.jpg";

const Eventcard = (props) => {
  // const { eventdetails } = useSelector((state) => state.event);
  // var ObjectID = require(props.images);
  // const mg = props.images;
  return (
    <>
      <div className="slidedata">
        {/* <p>hello</p> */}
        {/* {console.log(props)} */}
        {/* {console.log(props.images)} */}
        {/* {console.log(ObjectID)} */}
        <img
          src={`${API}/getimage/${props.images}`}
          alt={props.carddata.eventitle}
        />
        <div className="overlay"></div>
        <div className="evdetails">
          <div className="evdetails2">
            <h2>{props.carddata.eventitle}</h2>
            <h3>{props.carddata.short_desc}</h3>
            <div className="venuedate">
              <div className="date">
                <BsCalendarDateFill className="icns" />

                <p>{props.carddata.date}</p>
              </div>
              <div className="venue">
                <ImLocation2 className="icns" />
                <p>{props.carddata.venue}</p>
              </div>
            </div>
            <div className="tktbtn">
              <button className="tktbtnn">
                <Link to={`/dashboard`}>
                  Attend
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Eventcard;
