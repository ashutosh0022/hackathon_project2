// import React, { useState } from "react";
import "../5_Services/services.css";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import bg6 from "../../assets/bg6.jpg";
import Sformat from "./4_1_serviceformat/sformat";
const services = () => {

  return (
    <>
      <div className="heading">
        <div className="heading-d1">
          <h3>OUR</h3>
        </div>
        <div className="heading-d">
          <h1>OFFERINGS</h1>
        </div>
      </div>
      {/* -------------------------- */}
      <div className="container">
        <div className="c-1 grid">
          <Sformat
            h1="Attend"
            h2="Events"
            p="We ensures smooth rollout of onboarding passes to the event atendees include secure payment options "
            image={bg1}
            style = {{ background: 'linear-gradient(45deg, black , black)' }}
          />
        </div>
        {/* -------------------------------- */}
        <div className="c-2 grid">
          <Sformat
            h1="Hosting"
            h2="Events"
            p="Evento provides service to host your event and allows users to get
              registered and avail passes to your event"
            image={bg2}
            style = {{ background: 'linear-gradient(105deg, black , black)' }}
          />
        </div>
        {/* ------------------------------------ */}
        <div className="c-3 grid">
          <Sformat
            h1="Organizers"
            h2="for events"
            p="Evento gives a common platform for Event organizers and clients to coordinate for organizing events"
            image={bg3}
            style = {{ background: 'linear-gradient(105deg, black , black)' }}
          />
        </div>
        {/* -------------------------------- */}
        <div className="c-4 grid">
          <Sformat
            h1="Professional"
            h2="Planners"
            p="We bridges the gap between professional event planners and clients to carry out systematic event plans "
            image={bg4}
            style = {{ background: 'linear-gradient(105deg, black , black)' }}
          />
        </div>
        {/* -------------------------------- */}
        <div className="c-5 grid">
          <Sformat
            h1="Venue"
            h2="Partners"
            p="Evento also gives an option to user to naviagte different venues whereas venue owners can also make there property visible to clients"
            image={bg5}
            style = {{ background: 'linear-gradient(105deg, black , black)' }}
          />
        </div>
        {/* -------------------------------- */}
        <div className="c-6 grid">
          <Sformat
            h1="Dashboard"
            h2="view"
            p="Evento provides feature rich dashboard to manage all activities at one spot with a seamless experience"
            image={bg6}
            style = {{ background: 'linear-gradient(105deg, black , black)' }}
          />
        </div>
        {/* -------------------------------- */}
      </div>
    </>
  );
};

export default services;
