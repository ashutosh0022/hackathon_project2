import React from "react";
import "./host_event.css";
import Lottie from "lottie-react";
import organize from "../../../assets/organize.json";
import { useState } from "react";
import { hostEvent } from "../../../Redux/Actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../loader/loader";
// import { useNavigate } from "react-router-dom";
// import Getevent from "../getevent";

const Hostevent = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const username = userInfo?.userdata?.name;
  const useremail = userInfo?.userdata?.email;
  const usercontact = userInfo?.userdata?.contact;

  const { success, error, successmsg, loading } = useSelector(
    (state) => state.event
  );
  const [event, setevent] = useState({
    // name: username,
    // email: useremail,
    // contact: usercontact,
    altcontact: "",
    eventitle: "",
    venue: "",
    sdesc: "",
    date: "",
    timing: "",
    plimit: "",
    ddesc: "",
    images: [],
  });

  useEffect(() => {
    if (error) {
      alert("error");
      toast.error(error);
      console.log(error);
      // toast.success("success");
    }
    if (success) {
      console.log(successmsg);
      toast.success(successmsg);
      // setTimeout(() => navigate("/dashboard/myevents"), 3000);
    }
  }, [success, error, successmsg]);

  const handlehost = (e) => {
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
      const formData = new FormData();

      formData.append("name", username);
      formData.append("email", useremail);
      formData.append("contact", usercontact);
      formData.append("altcontact", event.altcontact);
      formData.append("evetitle", event.eventitle);
      formData.append("venue", event.venue);
      formData.append("sdesc", event.sdesc);
      formData.append("date", event.date);
      formData.append("timing", event.timing);
      formData.append("plimit", event.plimit);
      formData.append("ddesc", event.ddesc);
      // console.log(event.venue)
      for (let i = 0; i < event.images.length; i++) {
        formData.append("images", event.images[i]);
      }

      dispatch(hostEvent(formData));
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
      images: [],
    });
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="heading">
        <div className="heading-d1">
          <h3>HOST</h3>
        </div>
        <div className="heading-d">
          <h1>EVENT</h1>
        </div>
      </div>

      {/* ------------------host form-------------- */}
      <div className="hostcontainer">
        <div className="hostcontainerleft">
          <Lottie className="lott" animationData={organize} loop={true} />
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
              <input
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
              />
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
                onClick={handlehost}
              >
                HOST
              </button>
            </div>
          </form>
          <ToastContainer position="top-center" theme="dark" />
        </div>
      </div>
      {/* <Getevent/> */}
    </>
  );
};

export default Hostevent;
