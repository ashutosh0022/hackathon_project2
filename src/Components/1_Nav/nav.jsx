import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/evento_c.png";
import { BiMenuAltLeft } from "react-icons/bi";
// import { HiXMark } from "react-icons/i";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [show, setshow] = useState(false);

  const clicked = () => {
    setshow(!show);
    document.getElementsByClassName("mobile-menu")[0].style.display = "none";
  };

  const update = () => {
    setshow(!show);
    // console.log(show);
    if (!show) {
      document.getElementsByClassName("mobile-menu")[0].style.display = "flex";
    } else {
      document.getElementsByClassName("mobile-menu")[0].style.display = "none";
    }
  };

  // document.getElementsByClassName("mobile-menu")[0].style.display = "none";

  return (
    <>
      {" "}
      <div className={show ? "fixed-nav-details-clicked" : "fixed-nav-details"}>
        {/* <div className="fixed-nav-details"></div> */}
        <div className="logo">
          <img src={logo} alt="img" onClick={() => {
              navigate("/");
            }}/>
          {/* <h1>logo</h1> */}
        </div>

        <div className="list">
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
              {/* <a href={`/home`}>Home</a> */}
            </li>
            {/* <li>
              <Link to={`/showallevents`}>Events</Link>
            </li> */}
            <li>
              {/* <a href=" ">Services</a> */}
              {/* <a href={`services`}>Services</a> */}
              <Link to={`/services`}>Services</Link>
            </li>
            <li>
              <Link to={`/testimonials`}>Testimonials</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="btns">
          <Link to={`/login`}>
            <button className="btn btn-signup">Dashboard</button>
          </Link>

          {/* <Link to={`/signup`}>
            <button className="btn btn-signup">Signup</button>
          </Link> */}
        </div>

        <div className="hamburger">
          <BiMenuAltLeft onClick={update} />
        </div>
      </div>
      <div className="mobile-menu">
        <div className="mobile-menu-content">
          <ul>
            <li>
              <Link to={`/`} onClick={clicked}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/services`} onClick={clicked}>
                Services
              </Link>
            </li>
            <li>
              <Link to={`/testimonials`} onClick={clicked}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to={`/contact`} onClick={clicked}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-btn">
            <Link to={`/login`} onClick={clicked}>
              {" "}
              <button className="btnn m-btn-signup">Dashboard</button>
            </Link>
            {/* <Link to={`/signup`} onClick={clicked}>
              <button className="btnn m-btn-signup">Signup</button>
            </Link> */}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
