import Image from "next/image";
import CursorEffect from "./CursorEffect";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Card({ card }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [yValue, setYValue] = useState(-80);
  const [isPointerBig, setIsPointerBig] = useState(false);

  useEffect(() => {
    const updateYValue = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        // Small screens (mobile)
        setYValue(-50);
      } else if (screenWidth < 1024) {
        setYValue(-70);
      } else if (screenWidth < 1280) {
        setYValue(-80);
      } else {
        // large device
        setYValue(-100);
      }
    };

    updateYValue();

    window.addEventListener("resize", updateYValue);
    return () => window.removeEventListener("resize", updateYValue);
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <CursorEffect
        containerRef={containerRef}
        isHovered={isHovered}
        isPointerBig={isPointerBig}
      />
      <div
        className="relative p-2 2xl:p-3 bg-slate-100 rounded-t-[36px] rounded-br-[36px] hover:bg-blue-400 transition-all duration-700 ease-in-out group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={card.img}
          alt={card.name}
          width={800}
          height={800}
          className="rounded-t-[30px] rounded-br-[30px]"
        />

        {/* Social Icons */}
        <div className="py-3 md:py-4 xl:py-5 flex flex-col lg:gap-1 2xl:gap-2 justify-center items-center relative">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: yValue }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                }}
                className="flex items-center gap-2 w-fit mx-auto absolute"
              >
                <div
                  onMouseEnter={() => setIsPointerBig(true)}
                  onMouseLeave={() => setIsPointerBig(false)}
                  className="bg-blue-500 rounded-full text-lg p-1 lg:p-2 2xl:p-3 cursor-pointer"
                >
                  <FaFacebookF
                    size={24}
                    color="#fff"
                    className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
                  />
                </div>
                <div
                  onMouseEnter={() => setIsPointerBig(true)}
                  onMouseLeave={() => setIsPointerBig(false)}
                  className="bg-blue-500 rounded-full text-lg p-1 lg:p-2 2xl:p-3 cursor-pointer"
                >
                  <FaTwitter
                    size={24}
                    color="#fff"
                    className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
                  />
                </div>
                <div
                  onMouseEnter={() => setIsPointerBig(true)}
                  onMouseLeave={() => setIsPointerBig(false)}
                  className="bg-blue-500 rounded-full text-lg p-1 lg:p-2 2xl:p-3 cursor-pointer"
                >
                  <FaLinkedinIn
                    size={24}
                    color="#fff"
                    className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
                  />
                </div>
                <div
                  onMouseEnter={() => setIsPointerBig(true)}
                  onMouseLeave={() => setIsPointerBig(false)}
                  className="bg-blue-500 rounded-full text-lg p-1 lg:p-2 2xl:p-3 cursor-pointer"
                >
                  <FaInstagram
                    size={24}
                    color="#fff"
                    className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* text */}
          <h2 className="text-black group-hover:text-white font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl transition-all duration-500 ease-in-out">
            {card.name}
          </h2>
          <p className="text-black/60 group-hover:text-white font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl transition-all duration-500 ease-in-out">
            {card.title}
          </p>
        </div>
      </div>
    </div>
  );
}
