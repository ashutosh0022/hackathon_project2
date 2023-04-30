import React from "react";
// import { useSelector } from "react-redux";
import "./Participants.css";
import { FaDownload } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {API} from "../../../config.js"
// import { getAllEvents } from "../../../Redux/Actions/eventAction";
const Participants = () => {
  const { id } = useParams();
  const [attendees, setattendees] = useState([]);
  // const { eventdetails } = useSelector((state) => state.event);
  const [idevent, setidevent] = useState();
  // console.log(eventdetails?.eventdata[0]?.participants[0]?.email)

  useEffect(() => {
    const fetchidevent = async () => {
      const response = await fetch(`${API}/getidevent/${id}`);
      const data = await response.json();
      setidevent(data);
    };
    fetchidevent();
  }, [id, setidevent]);

  useEffect(() => {
    idevent?.eventdata[0].participants?.map((e, index) => {
      fetch(`${API}/getiduser/${idevent?.eventdata[0]?.participants[index]?.email}`)
        .then((response) => response.json())
        .then((data) => setattendees((prev) => [...prev, data]));
    });
  }, [idevent]);

  // console.log(idevent?.eventdata[0].participants)
  console.log(attendees);

  return (
    <>
      <div className="heading">
        <div className="heading-d1">
          <h3>PARTICIPANTS OF</h3>
        </div>
        <div className="heading-d">
          <h1>{idevent?.eventdata[0].eventitle}</h1>
        </div>
      </div>

      <div className="pacont ppnts">
        <div className="pacont2">
          <div className="pcont3">
            <div className="etms det01">
              <h2>S.No.</h2>
            </div>
            <div className="etms det02">
              <h2>Name</h2>
            </div>
            <div className="etms det03">
              <h2>Email</h2>
            </div>
            <div className="etms det04">
              <h2>Contact</h2>
            </div>
            <div className="etms det05">
              <h2>Tickets</h2>
            </div>
          </div>

          {attendees.map((e, index) => {
            return (
              <>
                <div className="pcont3 evitems">
                  <div className="etms det01 evitemsde">{index + 1}</div>
                  <div className="etms det02 evitemsde">
                    {" "}
                    {e?.iduser_data[0]?.name}
                  </div>
                  <div className="etms det03 evitemsde">
                    {e?.iduser_data[0]?.email}
                  </div>
                  <div className="etms det04 evitemsde">
                    {e?.iduser_data[0]?.contact}
                  </div>
                  <div className="etms det05 evitemsde">
                    <FaDownload />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Participants;
