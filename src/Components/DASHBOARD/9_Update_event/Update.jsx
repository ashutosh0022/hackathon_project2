import React from "react";
import "./Update.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { hostEvent } from "../../../Redux/Actions/eventAction";
import update from "../../../assets/update.json";
import Lottie from "lottie-react";
import { useEffect } from "react";
import Loader from "../../loader/loader";
import { useNavigate } from "react-router-dom";
import { API } from "../../../config.js"
const Update = () => {
  const navigate = useNavigate()
  // const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { uid } = useParams();
  // console.log(uid)

  const [evdata, setevdata] = useState({});
  // console.log(eid);

  useEffect(() => {
    const fetchevdata = async () => {
      const response = await fetch(`${API}/getidevent/${uid}`);
      const data = await response.json();
      setevdata(data);
    };
    fetchevdata();
    // console.log("tktdata");
  }, [uid]);
  console.log(evdata);

  useEffect(() => {
    setevent({
      altcontact: evdata?.eventdata?.[0]?.alternate_contact,
      eventitle: evdata?.eventdata?.[0]?.eventitle,
      venue: evdata?.eventdata?.[0]?.venue,
      sdesc: evdata?.eventdata?.[0]?.short_desc,
      date: evdata?.eventdata?.[0]?.date,
      timing: evdata?.eventdata?.[0]?.timing,
      plimit: evdata?.eventdata?.[0]?.participant_limit,
      ddesc: evdata?.eventdata?.[0]?.detailed_desc,
      // images: [],
    });
  }, [evdata]);

  const username = userInfo?.userdata?.name;
  const useremail = userInfo?.userdata?.email;
  const usercontact = userInfo?.userdata?.contact;
  // const etitle=evdata?.eventdata[0]?.eventitle;
  // console.log(etitle)
  const [event, setevent] = useState({
    // name: username,
    // email: useremail,
    // contact: usercontact,
    //
    altcontact: "",
    eventitle: "",
    venue: "",
    sdesc: "",
    date: "",
    timing: "",
    plimit: "",
    ddesc: "",
    // images: [],
  });

  const handleupdate = (e) => {
    e.preventDefault();
    // event.name = username;
    console.log("clicked");
    // console.log(images);
    console.log(event);
    if (
      // event.name === "" ||
      // event.email === "" ||
      // event.contact === "" ||
      event.altcontact === "" ||
      event.eventitle === "" ||
      event.venue === "" ||
      event.sdesc === "" ||
      event.date === "" ||
      event.timing === "" ||
      event.plimit === "" ||
      event.ddesc === ""
    ) {
      toast.warn("Fill all the fields");
    } else {
      fetch(`${API}/updateevent`, {
        method: "PUT",
        body: JSON.stringify({ ...event, eventid: uid }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => navigate("/dashboard/myevents"), 3000);
          toast.success(data.message);
        })
        .catch((error) => toast.error(error.message));
    }

    setevent({
      name: username,
      email: useremail,
      contact: usercontact,
      altcontact: "",
      eventitle: "",
      venue: "",
      sdesc: "",
      date: "",
      timing: "",
      plimit: "",
      ddesc: "",
      // images: [],
    });
  };

  // console.log(event)
  if (!Object.keys(evdata).length) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className="hostcontainer">
        <div className="hostcontainerleft">
          <Lottie className="lott" animationData={update} loop={true} />
        </div>
        <div className="hostcontainerright">
          <form className="form">
            <div className="sec1">
              <h2>Host Details</h2>
              {/* <h2>{userInfo?.userdata?.name}</h2> */}
              <input
                className="text"
                type="text"
                placeholder={userInfo?.userdata?.name}
                disabled="disabled"
              />
              <input
                type="email"
                placeholder={userInfo?.userdata?.email}
                disabled="disabled"
              />
              <input
                type="number"
                placeholder={userInfo?.userdata?.contact}
                disabled="disabled"
              />
              <input
                type="number"
                placeholder="Alternate contact"
                name="altcontact"
                value={event.altcontact}
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="sec2">
              <h2>Event Details</h2>
              <input
                type="text"
                placeholder="Event Title"
                name="eventitle"
                value={event.eventitle}
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Venue"
                name="venue"
                value={event.venue}
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                type="number"
                placeholder="Participants limit"
                name="plimit"
                value={event.plimit}
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Short Description"
                name="sdesc"
                value={event.sdesc}
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                type="date"
                name="date"
                value={event.date}
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Timings"
                name="timing"
                value={event.timing}
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {/* <input
                id="fileupload"
                type="file"
                multiple
                accept="image/*"
                name="images"
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.files,
                  })
                }
              /> */}
              <textarea
                className="txtarea"
                placeholder="Detailed Description"
                name="ddesc"
                value={event.ddesc}
                onChange={(e) =>
                  setevent({
                    ...event,
                    [e.target.name]: e.target.value,
                  })
                }
              ></textarea>
              <button
                type="submit"
                className="btn hostbtn"
                onClick={handleupdate}
              >
                UPDATE
              </button>
            </div>
          </form>
          <ToastContainer position="top-center" theme="dark" />
        </div>
      </div>
    </>
  );
};

export default Update;
