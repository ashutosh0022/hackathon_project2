import React from "react";
import "./all_events.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../Redux/Actions/eventAction";
import { useEffect } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, Outlet } from "react-router-dom";
import { API } from "../../../config";
// import { useNavigate } from "react-router-dom";
// import ObjectID from "bson-objectid";
// import Image from "../../../assets/P3.jpg"
const Allevents = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { eventdetails } = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(getAllEvents());
  }, [ dispatch]);
  // let id = ObjectID(eventdetails?.eventdata[0]?._id).toHexString()
  // console.log(id);
  // console.log(eventdetails?.eventdata[0]?._id.$oid)

  // const showevent = (index) => {
  //   console.log(index);
  //   navigate("/dashboard/showevent", { state: { index: index } });
  // };
  return (
    <>
      <div className="heading">
        <div className="heading-d1">
          <h3>ALL UPCOMING</h3>
        </div>
        <div className="heading-d">
          <h1>EVENTS</h1>
        </div>
      </div>
      {/* <h2>{eventdetails?.eventdata[0]?.name}</h2> */}
      <div className="allmcontainer">
        <div className="allmcontainer2">
          <div className="alleventlistcontainer">
            {eventdetails?.eventdata?.map((e, index) => {
              const img = eventdetails?.eventdata[index]?.imagesID[0];
              return (
                <>
                  <div className="alllistitems allitem">
                    <div className="allfeatureimg1">
                      <div className="allfeatureimg">
                        <img
                          src={`${API}/getimage/${img}`}
                          alt="img"
                          // loading="lazy"
                        />
                      </div>
                      <div className="allttle">
                        <div className="ttledata">
                          <h1>{eventdetails?.eventdata[index]?.eventitle}</h1>
                          <h3>{eventdetails?.eventdata[index]?.venue}</h3>
                          <h3>{eventdetails?.eventdata[index]?.date}</h3>
                        </div>
                        <Link
                          to={`showevent/${eventdetails?.eventdata[index]?._id.$oid}`}
                        >
                          <button
                            className="allebtn"
                            // onClick={() => showevent(index)}
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Allevents;
