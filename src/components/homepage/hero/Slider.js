"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Slide from "./Slide";
import { slideData } from "./slideFakeData";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
          stopOnLastSlide: false,
          waitForTransition: false,
        }}
      >
        {slideData.map((data) => {
          return (
            <SwiperSlide key={data?._id}>
              <Slide
                url={data?.url}
                title1={data?.title1}
                title2={data?.title2}
                subTitle={data?.subTitle}
              ></Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
