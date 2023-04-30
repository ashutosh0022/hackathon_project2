import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../Redux/Actions/eventAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/loader"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./getevent.css";
import Eventcard from "./Event_cards/eventcard";

const Getevents = () => {
  const dispatch = useDispatch();
  const { error, eventdetails, loading } = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // console.log(eventdetails?.eventdata);
  // {console.log(eventdetails?.eventdata[0].imagesID[0])}
  // leng = eventdetails?.eventdata.length;4
  console.log("loading", loading);
  return (
    <div>
      {/* <h1>{eventdetails?.eventdata[0]?.name}</h1> */}
      <div className="heading">
        <div className="heading-d1">
          <h3>GLIMPSES OF 10</h3>
        </div>
        <div className="heading-d">
          <h1>LATEST EVENTS</h1>
        </div>
      </div>
      {/* <img src="/getimage/63ae80a254127b761371f534" alt="myImage" /> */}
      <ToastContainer position="top-center" theme="dark" />

      {loading ? (
        <div className="shwloder"><Loader/></div>
      ) : (
        <Swiper
          // slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            845: { slidesPerView: 2 },
            1275: { slidesPerView: 3 },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="eventswiper"
        >
          {eventdetails?.eventdata?.map((e, index) => {
            if (index < 10) {
              return (
                <SwiperSlide className="eventslide">
                  {/* {console.log("index",index)} */}
                  {/* {console.log(eventdetails?.eventdata[0])} */}
                  <Eventcard
                    carddata={eventdetails?.eventdata[index]}
                    images={eventdetails?.eventdata[index].imagesID[0]}
                  />
                </SwiperSlide>
              );
            }
            return <></>;
          })}
        </Swiper>
      )}
    </div>
  );
};

export default Getevents;
