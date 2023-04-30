import React from "react";
import "../2_Home/home.css";
// import party from "/home/arpit/PROJECT/parking/src/assets/Party_Isometric1.svg";
import party from "../../assets/lottie-gif.json";
import { Link, Outlet } from "react-router-dom";

import Lottie from "lottie-react";
const home = () => {
  return (
    <>
      <div className="home-section">
        <div className="home-left">
          <div className="home-left-content1">
            <h1>A one-stop solution for Events!</h1>
          </div>
          <div className="home-left-content2">
            <h2>A platform to manage your events </h2>
          </div>
          <div className="home-left-content2 content3">
            <h2>Trusted by 50000+ users</h2>
          </div>
          <div className="home-left-btn">
            <Link className="btn one-btn" to={`/dashboard`}>
              Get Set Go
            </Link>
            {/* <button className="btn one-btn">Get started</button> */}
          </div>
        </div>
        <div className="home-right">
          {/* <img src={party} alt="img" /> */}
          <Lottie className="img" animationData={party} loop={true} />
        </div>
      </div>
      <Outlet />
    </>

  );
};

export default home;
