"use client";

import ConsultancyCardLoader from "@/components/common/loader/ConsultancyCardLoader";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { BiSolidFileDoc } from "react-icons/bi";

/*
 * @params -> data => will be dynamic and changed based on the backend data
 */

const ConsultancyCard = ({ data, idx }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.start({
      width: "100%",
      height: "100%",
      opacity: 1,
      transition: {
        duration: 0.65,
        opacity: {
          duration: 0.5,
        },
        ease: [0.33, 1, 0.68, 1],
      },
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      width: "100%",
      height: "0px",
      opacity: 0,
      transition: {
        duration: 0.65,
        opacity: {
          duration: 0.3,
        },
        ease: [0.33, 1, 0.68, 1],
      },
    });
  };

  useEffect(() => {
    if (controls) {
      setIsLoading(false);
    }
  }, [controls]);

  if (isLoading) return <ConsultancyCardLoader />;

  return (
    <div
      className="max-w-full sm:max-w-[450px] 2xl:max-w-[500px] flex flex-col justify-center items-center bg-[url('/working-card-bg.png')] bg-no-repeat bg-bottom shadow-lg rounded-xl overflow-hidden relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* animated div */}
      <motion.div
        initial={{
          width: "100%",
          height: "0px",
          opacity: 0,
        }}
        animate={controls}
        className="bg-blue-400 absolute"
      />
      {/* content */}
      <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 flex flex-col gap-2">
        {/* image */}
        <span className="flex justify-end">
          <BiSolidFileDoc className="w-8 h-8 md:w-12 md:h-12 2xl:w-14 2xl:h-14 group-hover:text-white transition-all duration-300 ease-in-out" />
        </span>

        <div className="flex items-center justify-end gap-1 text-base lg:text-xl 2xl:text-[22px] font-semibold">
          <span className="text-red-700 group-hover:text-white transition-all duration-300 ease-in-out ">
            0{idx + 1}-
          </span>
          <span className="text-black/90 group-hover:text-white transition-all duration-300 ease-in-out">
            {data.label}
          </span>
        </div>
        <p className=" group-hover:text-white transition-all duration-300 ease-in-out text-end text-xs lg:text-sm 2xl:text-base text-gray-500">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default ConsultancyCard;
