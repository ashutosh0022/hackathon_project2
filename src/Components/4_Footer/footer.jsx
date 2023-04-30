import React from "react";
import "../../Components/4_Footer/footer.css";
import logo from "../../assets/evento_c.png";
import { Link, Outlet } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {

  return (
    <>
      <div className="footer">
        <div className="foot footer-1">
          <div className="f-1-1">
            <h2>MENU</h2>
          </div>
          <div className="menu-content f-1-2">
            <Link to={`/`}>
              <h1>Home</h1>
            </Link>
          </div>
          <div className="menu-content f-1-3">
            <Link to={`/testimonials`}>
              <h1>Testimonials</h1>
            </Link>
          </div>
          <div className="menu-content f-1-4">
            <Link to={`/services`}>
              <h1>Services</h1>
            </Link>
          </div>
          <div className="menu-content f-1-4">
            <Link to={`/contact`}>
              <h1>Contact Us</h1>
            </Link>
          </div>
        </div>
        <div className="foot footer-2">
          <div>
            <h2>CONNECT US</h2>
          </div>
          <div className="icc">
            <div className="icc-con">
              <a href="https://instagram.com/iem.arpit?igshid=ZmZhODViOGI=">
                <AiFillInstagram className="icn" />
              </a>
              <a href="https://www.youtube.com/@imarpit8248">
                <AiFillYoutube className="icn" />
              </a>
              <a href="https://www.linkedin.com/in/arpit25">
                <AiFillLinkedin className="icn" />
              </a>

              <a href="https://twitter.com/mr_arpit_25?s=08">
                <AiFillTwitterCircle className="icn" />
              </a>

            </div>
          </div>
        </div>
        <div className="foot footer-3">
          <img src={logo} alt="logo" />
          <div className="f3-2">
            <div>
              <h1>Reowned brand to incoperate </h1>
            </div>
            <div className="f3-2-1">
              <h1>happiness to your life</h1>
            </div>
            <div className="f3-2-2">
              <h1>copyright@2022 | All rights reserved</h1>
            </div>
            <div className="f3-2-3">
              <h1>Designed and Developed by Visionary_team</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
