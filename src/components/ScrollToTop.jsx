"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowScrollBtn(scrollPosition >= window.innerHeight);
  }, [scrollPosition]);

  return (
    <div
      className={`text-white fixed right-6 w-6 h-6 md:right-8 md:w-8 md:h-8 2xl:right-10 2xl:w-10 2xl:h-10 text-base rounded-md bg-gray-600 transition-all duration-1000 ease-in-out z-50 opacity-0 flex justify-center items-center cursor-pointer ${
        showScrollBtn ? "opacity-100 bottom-8" : "bottom-[105%]"
      }`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <IoIosArrowUp sizes={18} color="#fff" />
    </div>
  );
}
