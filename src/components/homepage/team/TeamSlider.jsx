"use client";
import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { teamSlideData } from "./teamSlideFakeData";
import NavigateButton from "./NavigateButton";
import Card from "@/components/team/Card";
import { teamCardData } from "@/data";
import TeamCarouselLoader from "@/components/common/loader/TeamCarouselLoader";

const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
      ? 1
      : typeof window !== "undefined" && window.innerWidth < 768
      ? 2
      : 3
  );
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Autoplay, Navigation]);
      setSwiperLoaded(true);
    });
  }, []);

  useEffect(() => {
    function resizeCheck() {
      setSlidesPerView(
        typeof window !== "undefined" && window.innerWidth < 640
          ? 1
          : typeof window !== "undefined" && window.innerWidth < 768
          ? 2
          : 3
      );
    }

    resizeCheck();

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, []);

  if (!swiperLoaded) {
    return <TeamCarouselLoader />;
  }

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        // initialSlide={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
          stopOnLastSlide: false,
          waitForTransition: false,
        }}
      >
        {/* NEW TEAM UI */}
        {teamCardData.map((card, idx) => (
          <SwiperSlide key={idx}>
            <Card card={card} />
          </SwiperSlide>
        ))}

        {/* OLD TEAM UI */}

        {/* {teamSlideData.map((member) => {
          return (
            <SwiperSlide key={member._id}>
              <div className="hidden md:block lg:block">
                <NavigateButton />
              </div>
              <Slide associate={member?.associate} images={member?.images} />
            </SwiperSlide>
          );
        })} */}
      </Swiper>
    </div>
  );
};

export default Slider;
