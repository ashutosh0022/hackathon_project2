import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import Tkt from "../../../assets/tkt.png";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import "./ticket.css";
import TT from "../../../assets/tt.png";
import Lgo from "../../../assets/evento_c.png";
import Loader from "../../loader/loader";
import { useSelector } from "react-redux";
import {API} from "../../../config.js"

const Ticket = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { eid } = useParams();
  const [tktdata, settktdata] = useState();
  // console.log(eid);

  useEffect(() => {
    const fetchtktdata = async () => {
      const response = await fetch(`${API}/getidevent/${eid}`);
      const data = await response.json();
      settktdata(data);
    };
    fetchtktdata();
    // console.log("tktdata");
  }, [eid]);

  // console.log(tktdata);
  if (tktdata) {
    console.log(tktdata?.eventdata[0]);
  }

  const handledownload = async () => {
    const canvas = await html2canvas(document.querySelector(".ctre3"));
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  };
  // console.log(eventofid.eventdata[0]?.eventitle);
  if (!tktdata) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className="ctre">
        <div className="ctre2">
          <div className="ctre3">
            <div className="dtt">
              <div className="lgo">
                <p>Issued by</p>
                <img src={Lgo} alt="" />
              </div>
              <div className="evv">
                <h4>{tktdata?.eventdata[0]?.eventitle}</h4>
                <p>
                  <span className="spnn">is</span>
                </p>
                <p>
                  <span className="spnn">scheduled on</span>
                </p>
                <p>
                  Date :{" "}
                  <span className="spnn">{tktdata?.eventdata[0]?.date}</span>
                </p>
                <p>
                  Time :{" "}
                  <span className="spnn">{tktdata?.eventdata[0]?.timing}</span>
                </p>
                <p>
                  Venue :{" "}
                  <span className="spnn">{tktdata?.eventdata[0]?.venue}</span>
                </p>
              </div>
              <div className="orgnn">
                <p>Organiser</p>
                <p>
                  Name :{" "}
                  <span className="spnn">{tktdata?.eventdata[0]?.name}</span>
                </p>
                <p>
                  Phone :{" "}
                  <span className="spnn">{tktdata?.eventdata[0]?.contact}</span>
                </p>
              </div>
              <div className="ptpt">
                <p>Attendee</p>
                <p>
                  Name : <span className="spnn">{userInfo?.userdata?.name}</span>
                </p>
                <p>
                  Phone : <span className="spnn">{userInfo?.userdata?.contact}</span>
                </p>
              </div>
            </div>

            <img src={TT} alt="" />
          </div>

          <div className="bttn">
            <button className="bttnn" onClick={handledownload}>
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
