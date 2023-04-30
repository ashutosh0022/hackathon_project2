import React from "react";
import "../7_Contact/contact.css";
import Contactani from "../../assets/contact.json";
import Lottie from "lottie-react";

const contact = () => {
  return (
    <div className="contct">
      {/* <Loader/> */}
      <div className="heading">
        <div className="heading-d1">
          <h3>MESSAGE</h3>
        </div>
        <div className="heading-d">
          <h1>US !</h1>
        </div>
      </div>
      <div className="contact-main">
        <div className="contact-main-2">
          <Lottie
            className="contact-w"
            animationData={Contactani}
            loop={true}
          />
        </div>
        <div className="contact-main-3">
          <div className="b2">
            <form>
              <input type="text" placeholder="YOUR NAME:" name="user_name" />
              <input type="email" placeholder="YOUR EMAIL ID:" name="user_email" />
              <input type="text" placeholder="YOUR SUBJECT:" name="subject" />
              <textarea
                cols="28"
                rows="8"
                placeholder="YOUR MESSAGE:"
                name="message"
              ></textarea>
              <button className="btn btn2" type="submit" value="Send">
                <a href=" ">
                  <h5>SEND MESSAGE</h5>
                </a>
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default contact;
