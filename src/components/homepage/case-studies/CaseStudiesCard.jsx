"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GoLaw } from "react-icons/go";

const CaseStudiesCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full bg-[#e7f2f2] px-8 md:px-12 xl:px-20 py-12 lg:py-16 xl:py-20 flex flex-col md:flex-row gap-8 relative overflow-hidden max-w-[376px] sm:max-w-[630px] md:max-w-[727px] lg:max-w-[970px] xl:max-w-[1200px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* element */}
      <motion.div
        className="w-full h-[6px] 2xl:h-2 absolute bottom-0 left-0 z-10"
        initial={{ backgroundPosition: "100% 0%" }}
        animate={
          isHovered
            ? { backgroundPosition: "0% 100%" }
            : { backgroundPosition: "100% 0%" }
        }
        transition={{ duration: 0.5 }}
        style={{
          background: "linear-gradient(to right, #008080 50%, #c7e4e4 50%)",
          backgroundSize: "200% 100%",
        }}
      />
      {/* content */}
      <div className="flex flex-col sm:flex-row gap-8 justify-between sm:items-end">
        {/* left content */}
        <div className="flex flex-col gap-4 xl:gap-6">
          <div className="rounded-full p-3 bg-[#008080] w-fit">
            <GoLaw className="w-6 h-6 xl:w-8 xl:h-8 text-white" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-center px-3 py-1 border border-gray-300 text-xs xl:text-sm font-semibold text-black hover:text-white hover:bg-black transition duration-300 ease-in cursor-pointer">
              Unique case studies
            </span>
            <span className="text-center px-3 py-1 border border-gray-300 text-xs xl:text-sm font-semibold text-black hover:text-white hover:bg-black transition duration-300 ease-in cursor-pointer">
              More case studies
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl xl:text-4xl text-black font-amaranth font-semibold">
            Watch our Unique <br /> and best Case Studies.
          </h2>

          <button className="bg-white hover:bg-[#008080] px-6 py-[10px] text-black hover:text-white uppercase transition duration-300 ease-in-out w-fit text-xs lg:text-sm xl:text-base font-medium tracking-tight mt-3 lg:mt-4 xl:mt-6">
            See Projects
          </button>
        </div>
        {/* right content */}
        <div className="flex items-end sm:absolute -right-[17%] lg:-right-[12%] xl:-right-[17%] 2xl:-right-[10%] sm:bottom-10 md:bottom-5 lg:bottom-0 sm:-rotate-[27deg]">
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
          >
            <Image
              src={"/case-study-1.jpg"}
              alt="Unique Case study"
              width={400}
              height={500}
              className="w-[250px] sm:w-[210px] md:w-[230px] lg:w-[300px] xl:w-[400px]"
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.3,
                duration: 0.65,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            className=" -ml-[30%] xl:-ml-[35%] -mb-[15%] xl:-mb-[20%]"
          >
            <Image
              src={"/case-study-2.jpg"}
              alt="Unique Case study"
              width={400}
              height={500}
              className="w-[210px] sm:w-[170px] md:w-[190px] lg:w-[260px] xl:w-[360px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesCard;
