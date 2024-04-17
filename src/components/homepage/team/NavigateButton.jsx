'use client'
import React from "react";
import { useSwiper } from "swiper/react";

const NavigateButton = () => {
    const swiper = useSwiper();
  return (
    <div className="mt-6 text-start my-4">
      <button onClick={()=> swiper.slidePrev()} className="mx-4 border border-blue-500 hover:bg-blue-600 hover:text-white duration-500 text-xl rounded-full px-2">{"<"}</button>
      <button onClick={()=> swiper.slideNext()} className="mx-4 border border-blue-500 hover:bg-blue-600 hover:text-white duration-500 text-xl rounded-full px-2">{">"}</button>
    </div>
  );
};

export default NavigateButton;
