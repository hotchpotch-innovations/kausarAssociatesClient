"use client";
import React from "react";
import Slide from "./Slide";
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
import { teamSlideData } from "./teamSlideFakeData";
import NavigateButton from "./NavigateButton";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
          stopOnLastSlide: false,
          waitForTransition: false,
        }}
      >
        {teamSlideData.map((member) => {
          return (
            <SwiperSlide key={member._id}>
              <div className="hidden md:block lg:block">
                <NavigateButton />
              </div>
              <Slide associate={member?.associate} images={member?.images} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
