import React, { useEffect } from "react";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, Pagination } from "swiper";
import "./showevent.css";
import Loader from "../../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ImLocation2 } from 'react-icons/im';
import { useNavigate } from "react-router-dom";
import { getuser } from "../../../Redux/Actions/userAction";
import { API } from "../../../config";

const Showevent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { id } = useParams();
  const [idevent, setidevent] = useState();
  const isregistered = userInfo?.userdata?.participated.some(
    (e) => e.eventid === id
  );
  useEffect(() => {
    const fetchidevent = async () => {
      const response = await fetch(`${API}/getidevent/${id}`);
      const data = await response.json();
      setidevent(data);
    };
    fetchidevent();
  }, [id, setidevent]);

  const handleattend = () => {
    fetch(`${API}/participate`, {
      method: "POST",
      body: JSON.stringify({
        email: userInfo?.userdata?.email,
        eventid: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        dispatch(getuser());
        setTimeout(() => navigate("/dashboard/partcipatedevents"), 3000);
      })
      .catch((e) => toast.error(e.message));
  };

  if (!idevent) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <div className="eventead">
        <div className=" titlehead">
          <h1>{idevent?.eventdata[0]?.eventitle}</h1>
        </div>
      </div>
      <div className="eventcontainer">
        <div className="cardswiper">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCards, Autoplay, Pagination]}
            className="mySwipercard"
          >
            {idevent?.eventdata[0]?.imagesID.map((e, index) => {
              return (
                <>
                  <SwiperSlide className="sldimg">
                    <img
                      src={`${API}/getimage/${idevent?.eventdata[0]?.imagesID[index]}`}
                      alt="img"
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="dtamain">
        <div className="dtamain1">
          <div className="dtamain2">
            <div className="hosteddate">
              <h3>
                HOSTED ON :{" "}
                <span className="spn">{idevent?.eventdata[0]?.hostedon}</span>{" "}
              </h3>
            </div>
            <h3>
              EVENT ON :{" "}
              <span className="spn">{idevent?.eventdata[0]?.date}</span>{" "}
            </h3>
            <div className="hosteddate sptn">
              <h3>
                TIMINGS :{" "}
                <span className="spn">{idevent?.eventdata[0]?.timing}</span>{" "}
              </h3>
              <h3>
                VENUE :{" "}
                <span className="spn">{idevent?.eventdata[0]?.venue}</span>{" "}
              </h3>
              <h3>
                PARTICIPANTS LIMIT :{" "}
                <span className="spn">
                  {idevent?.eventdata[0]?.participant_limit}
                </span>{" "}
              </h3>
            </div>

            <div className="hosteddate">
              <h3>
                DESCRIPTION :{" "}
                <span className="spn">
                  {idevent?.eventdata[0]?.detailed_desc}
                </span>{" "}
              </h3>
            </div>

            <div className="hosteddate sptn orgn">
              <h3>
                ORGANIZER :{" "}
                <span className="spn">{idevent?.eventdata[0]?.name}</span>{" "}
              </h3>
              <h3>
                CONTACT 1 :{" "}
                <span className="spn">{idevent?.eventdata[0]?.contact}</span>{" "}
              </h3>
              <h3>
                CONTACT 2 :{" "}
                <span className="spn">
                  {idevent?.eventdata[0]?.alternate_contact}
                </span>{" "}
              </h3>
            </div>
            {isregistered ? (
              <button
                className=" atndbtn"
                onClick={() => {
                  navigate("/dashboard/partcipatedevents");
                }}
              >
                VIEW TICKET
              </button>
            ) : (
              <button
                className=" atndbtn"
                onClick={() => {
                  document.getElementsByClassName("modal")[0].style.display =
                    "flex";
                }}
              >
                ATTEND
              </button>
            )}
          </div>
        </div>
        <div class="modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">CONFIRMATION</h5>
                {/* <button type="button" class="btn-close"></button> */}
              </div>
              <div class="modal-body">Please confirm your participation</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class=" dbtn btn-secondary "
                  onClick={() => {
                    document.getElementsByClassName("modal")[0].style.display =
                      "none";
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class=" dbtn btn-primary"
                  onClick={() => {
                    handleattend();
                    document.getElementsByClassName("modal")[0].style.display =
                      "none";
                  }}
                >
                  Attend
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </>
  );
};

export default Showevent;
