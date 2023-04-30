import React from "react";
import "./myevents.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nodata from "../../../assets/nodata.json";
import Lottie from "lottie-react";
import { Link, Outlet } from "react-router-dom";
// import error from "../../error-page/error";
import {API} from "../../../config.js"
const Myevents = () => {
  const { userInfo } = useSelector((state) => state.user);
  const id = userInfo?.userdata?.email;

  const [myevents, setmyevents] = useState("");
  const [reload, setreload] = useState(true);
  // var l;
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`${API}/getmyevents/${id}`);
      const data = await response.json();
      setmyevents(data);
      // l=myevents.eventdata.length
    };
    fetchdata();
  }, [id, setmyevents, reload]);

  const deleteevent = async (eventname) => {
    const resp = await fetch(`${API}/deleteevent/${eventname}`);
    const res = await resp.json();
    if (res.status_code === 200) {
      setreload(!reload);
      toast.success(res.message);
    } else {
      toast.error("Error occured");
    }
  };
  // console.log(myevents?.eventdata?.length);

  // const len = myevents.eventdata.length;
  if (myevents?.eventdata?.length) {
    return (
      <>
        <div className="heading">
          <div className="heading-d1">
            <h3>MY HOSTED</h3>
          </div>
          <div className="heading-d">
            <h1>EVENTS</h1>
          </div>
        </div>
        {/* {len ? "hello" : "no"} */}
        <div className="mcontainer">
          <div className="mcontainer2">
            <div className="eventlistcontainer">
              {/* {console.log(myevents?.eventdata.length)} */}
              {myevents?.eventdata?.map((e, index) => {
                const img = myevents?.eventdata[index]?.imagesID[0];

                return (
                  <>
                    <div className="listitems item">
                      <div className="featureimg1">
                        <div className="featureimg">
                          <img
                            src={`${API}/getimage/${img}`}
                            alt="img"
                          />
                        </div>
                        <div className="ttle">
                          <h1>{myevents?.eventdata[index]?.eventitle}</h1>
                        </div>
                      </div>
                      <div className="det">
                        <p>
                          Date hosted :{" "}
                          <span className="spn2">
                            {" "}
                            {myevents?.eventdata[index]?.hostedon}
                          </span>
                        </p>
                        <p>
                          Date scheduled :
                          <span className="spn2">
                            {" "}
                            {myevents?.eventdata[index]?.date}
                          </span>
                        </p>
                        <p>
                          Short description :
                          <span className="spn2">
                            {" "}
                            {myevents?.eventdata[index]?.short_desc}
                          </span>
                        </p>
                        <p>
                          Timing :{" "}
                          <span className="spn2">
                            {" "}
                            {myevents?.eventdata[index]?.timing}{" "}
                          </span>
                        </p>
                        <p>
                          Venue :{" "}
                          <span className="spn2">
                            {myevents?.eventdata[index]?.venue}
                          </span>
                        </p>
                        <p>
                          Participants Limit :{" "}
                          <span className="spn2">
                            {myevents?.eventdata[index]?.participant_limit}
                          </span>
                        </p>
                        <p>
                          Entries :{" "}
                          <span className="spn2">
                            {myevents?.eventdata[index]?.participants?.length}{" "}
                            <Link
                              to={`/dashboard/participants/${myevents?.eventdata[index]?._id.$oid}`}
                            >
                              (view attendees)
                            </Link>
                          </span>
                        </p>
                        <div className="divbtns">
                          {/* <button className="ebtn">Update</button> */}
                          <Link
                            className="ebtn"
                            to={`/dashboard/updateevent/${myevents?.eventdata[index]?._id.$oid}`}
                          >
                            Update
                          </Link>
                          <button
                            className="ebtn"
                            // onClick={() =>
                            // deleteevent(myevents?.eventdata[index]?.eventitle)
                            // }

                            onClick={() => {
                              document.getElementsByClassName("warn")[
                                index
                              ].style.display = "flex";
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="warn">
                        <div className="warndata">
                          <div className="d">Are you sure??</div>
                          <div className="botn">
                            <button
                              type="button"
                              class="botn1 "
                              onClick={() => {
                                document.getElementsByClassName("warn")[
                                  index
                                ].style.display = "none";
                              }}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              class=" botn1"
                              onClick={() =>
                                deleteevent(
                                  myevents?.eventdata[index]?.eventitle
                                )
                              }
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" theme="dark" />
        <Outlet />
      </>
    );
  }
  return (
    <>
      <div className="heading">
        <div className="heading-d1">
          <h3>MY HOSTED</h3>
        </div>
        <div className="heading-d">
          <h1>EVENTS</h1>
        </div>
      </div>
      {/* <div>no data found</div> */}
      <div className="nodata">
        <div className="contentnodata">
          <Lottie className="nodatalottie" animationData={Nodata} loop={true} />
        </div>
      </div>
    </>
  );
};

export default Myevents;
