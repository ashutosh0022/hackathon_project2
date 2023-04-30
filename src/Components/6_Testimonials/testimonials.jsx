import React from "react";
// import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/P1.png";
import image2 from "../../assets/P2.jpg";
import image3 from "../../assets/P3.jpg";
import image4 from "../../assets/P4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Format from "./5_1_format/format";

import { Autoplay, Pagination, Navigation } from "swiper";

import "../../Components/6_Testimonials/testimonials.css";

const testimonials = () => {
  return (
    <>
      <div className="heading">
        <div className="heading-d1">
          <h3>OUR CUSTOMER WORDS</h3>
        </div>
        <div className="heading-d">
          <h1>RECENT REVIEWS</h1>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Format
            image={image1}
            name="Ashutosh Biswal"
            work="Developer"
            comment="The event management platform provided everything we needed to manage and promote our event successfully"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Format
            image={image2}
            name="Aakash Ranjan"
            work="Developer"
            comment="The event management platform helped me organize a successful product launch event, and I would highly recommend it to anyone looking to manage events efficiently."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Format
            image={image3}
            name="Sandeep Kumar"
            work="Developer"
            comment="The platform's mobile optimization and customer support were great features that allowed attendees to access event details on the go"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Format
            image={image4}
            name="Abhishek Singh"
            work="Developer"
            comment="The platform allowed me to create a customised event page with all the details, and the ticketing system helped me manage RSVPs"
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default testimonials;
