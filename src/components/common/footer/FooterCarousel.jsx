"use client";

import Image from "next/image";
import { images } from "@/components/career-page/career-with-KA/imagesData";
import FooterCarouselLoader from "../loader/FooterCarouselLoader";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function FooterCarousel() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [slides, setSlides] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
      ? 3
      : typeof window !== "undefined" && window.innerWidth < 768
      ? 4
      : 6
  );

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Autoplay]);
      setSwiperLoaded(true);
    });

    function resizeCheck() {
      setSlides(
        typeof window !== "undefined" && window.innerWidth < 640
          ? 3
          : typeof window !== "undefined" && window.innerWidth < 768
          ? 4
          : 6
      );
    }

    resizeCheck();

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, []);

  if (!swiperLoaded) {
    return <FooterCarouselLoader />; // TODO: null will be replaced with skeleton loading
  }
  return (
    <div className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[650px]">
      <Swiper
        slidesPerView={slides}
        spaceBetween={8}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        initialSlide={6}
        className="mySwiper flex justify-center items-center"
      >
        {images.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div>
              <Image
                src={data.url}
                alt=""
                width={120}
                height={170}
                className="rounded aspect-square lg:aspect-auto lg:w-16 lg:h-12 xl:w-20 xl:h-16 2xl:w-28 2xl:h-24"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
