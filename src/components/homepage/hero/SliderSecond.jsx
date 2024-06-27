"use client";

import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";
import { slideData } from "./slideFakeData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SecondSlideContent from "./SecondSlideContent";
import CarouselSkeletonLoader from "@/components/common/loader/CarouselSkeletonLoader";

export default function SliderSecond() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Autoplay, Pagination]);
      setSwiperLoaded(true);
    });
  }, []);

  if (!swiperLoaded) {
    return <CarouselSkeletonLoader />; // TODO: null will be replaced with skeleton loading
  }

  return (
    <section>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          onSlideChange={handleSlideChange}
          speed={1}
          className="mySwiper"
        >
          {slideData.map((data, idx) => (
            <SwiperSlide key={idx}>
              <SecondSlideContent
                url={data.url}
                title1={data.title1}
                title2={data.title2}
                subTitle={data.subTitle}
                isActive={idx === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
