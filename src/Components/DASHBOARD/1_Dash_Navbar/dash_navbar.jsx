import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../../Redux/Actions/userAction";
import { useEffect } from "react";
import { logout } from "../../../Redux/Reducers/userSlice";
import { useNavigate } from "react-router-dom";
import "../1_Dash_Navbar/dash_navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

import logo from "../../../assets/evento_c.png";
import { useState } from "react";

const DashNavbar = () => {
  const [dropdown, setdropdown] = useState(false);

  const clicked = () => {
    setdropdown(!dropdown);
    document.getElementsByClassName("downmenu")[0].style.display = "none";
  };
  const handledropdown = () => {
    setdropdown(!dropdown);
    // console.log(show);
    if (!dropdown) {
      document.getElementsByClassName("downmenu")[0].style.display = "flex";
    } else {
      document.getElementsByClassName("downmenu")[0].style.display = "none";
    }
  };

  const { userInfo, userToken } = useSelector((state) => state.user);
  // console.log(userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (userToken) {
  //     dispatch(getuser());
  //     if (userInfo === null) {
  //       navigate("/login");
  //     }
  //   }
  //   // else {
  //   //   dispatch(getuser());
  //   // }
  // }, [userToken, navigate, dispatch]);

  useEffect(() => {
    if (userToken) {
      dispatch(getuser());
    }
  }, [dispatch, userToken]);

  useEffect(() => {
    if (userInfo === null) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  return (
    <>
      <div className="mainnav">
        <div className="logo dash-logo">
          <img
            src={logo}
            alt="img"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="mainnavcontainer">
          <div className="mainnavcont">
            <FaUserCircle className="profileicn" />
            <div className="showuser">
              <h2>{userInfo?.userdata?.name}</h2>
              <p>{userInfo?.userdata?.email}</p>
              {/* */}
            </div>
          </div>
          <div className="downicn" onClick={handledropdown}>
            <AiFillCaretDown />
          </div>
          <div className="downmenu">
            <div className="menulist">
              <li>
                <Link to={`/dashboard`} onClick={clicked}>
                  ALL EVENTS
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/myevents`} onClick={clicked}>
                  MY EVENTS
                </Link>
              </li>
              <li>
                <Link to={`/dashboard/partcipatedevents`} onClick={clicked}>
                  PARTICIPATED
                </Link>
              </li>
              <li>
                {" "}
                <Link to={`/dashboard/hostevent`} onClick={clicked}>
                  HOST EVENT
                </Link>
              </li>
            </div>
          </div>
        </div>
        <div className=" logoutbtn">
          <div
            className=""
            onClick={() => {
              dispatch(logout());
            }}
          >
            <TbLogout className="logouticon" />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default DashNavbar;
