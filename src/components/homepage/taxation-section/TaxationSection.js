"use client";

import Image from "next/image";
import React from "react";
import image from "./taxation.png";
import developmentBg from "./DEVELOPMENT-01.png";
import propertyImage from "./UNNAYAN-01.png";
import { motion } from "framer-motion";
import { taxImgVariants } from "./anim";
import { FiArrowRight } from "react-icons/fi";

const TaxationSection = () => {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto py-4 md:py-8 xl:py-12">
        <div className="content-container flex flex-col md:flex-row lg:flex-row md:justify-between gap-6 md:gap-8 lg:gap-10 lg:justify-between items-center xl:mx-20">
          {/* left side text */}
          {/* <motion.div
            variants={taxImgVariants}
            initial="initial"
            whileInView="enter"
            className=" w-full h-full md:w-1/2"
          >
            <div className="relative w-fit h-[450px] mx-auto">
              <div className="min-w-[310px] max-w-[350px] h-[450px]">
                <Image
                  src={image}
                  alt=""
                  className="min-w-[310px] max-w-[350px] h-[450px] border border-blue-600 rounded-t-full"
                ></Image>
              </div>
              <div className="absolute top-10 left-8 w-8 h-8 rounded-full bg-primary"></div>
              <div className="absolute top-10 left-[75px] w-3 h-3 rounded-full bg-primary"></div>
              <div className="absolute top-52 -right-3 w-3 h-3 rounded-full bg-primary"></div>
            </div>
          </motion.div> */}
          {/* new style */}
          <div className="tax-sec-image"></div>
          {/* right side text */}
          <div className="w-full md:w-1/2">
            <div className="mx-auto">
              <div>
                {/* subtitle */}
                <div className="flex items-center gap-3 ml-3">
                  <div className="relative flex justify-center items-center">
                    <div className=" w-4 h-4 bg-blue-500 rounded-full absolute" />
                    <div className=" w-4 h-4 border-2 border-black rounded-full absolute ml-3" />
                  </div>

                  <h2 className="text-xs md:text-sm xl:text-base 2xl:text-lg text-blue-600 font-bold ml-6 uppercase">
                    who we are
                  </h2>
                </div>
                {/* heading */}
                <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none xl:leading-[1.05] 2xl:leading-tight mt-2">
                  Inspiring & Helping <br /> Live Better Lifestyle
                </h1>

                <p className="text-justify mt-4 md:mt-4 lg:mt-5 2xl:mt-6">
                  This is one of many areas of professional service where our
                  company is well ahead of the competition. Tax consultancy team
                  of This is one of many areas of professional service where our
                  company is well ahead of the competition. Tax consultancy team
                  of
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxationSection;
