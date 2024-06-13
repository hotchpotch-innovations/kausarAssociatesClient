"use client";

import Image from "next/image";
import React, { useState } from "react";
import image from "../images/37385.jpg";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const CareerWithKA = () => {
  const [inView, setInView] = useState(false);
  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 lg:w-1/2 p-4 m-0 md:m-4 lg:m-4">
        <h3 className="text-base md:text-lg lg:text-xl font-medium mb-4">
          JOIN THE TEAM
        </h3>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Career With <span className="text-primary">KA</span>
        </h1>
        <div>
          <p className="mb-4 text-justify">
            At KA we believe in encouraging people within the firm to be their
            best and work in a culture that empowers them. Our employees are our
            greatest asset and are vital to the growth and success of our
            clients as well as our own firm.
          </p>
          <p className="mb-4 text-justify">
            We provide you with the highest quality training alongside practical
            work experience that will equip you with the latest technical
            knowledge and interpersonal skills. ACE Advisory provides its
            employees with a broad range of experience in various industries and
            lines of services for you to fulfil your potential.
          </p>
          <p className="mb-4 text-justify">
            In addition to supporting you though mentoring and offering
            financial support during your training period, we will assist you by
            recognizing your individual skills and abilities, and by continuing
            to provide you with challenging and stimulating work beyond your
            training period.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 mb-6 md:mt-0 lg:mt-0 p-0 md:p-8 lg:p-10 border-2 m-0 md:m-4 lg:m-4">
        <div
          onMouseEnter={() => setInView(true)}
          onMouseLeave={() => setInView(false)}
          className="relative flex justify-center items-center overflow-hidden"
        >
          <Image src={image} alt="" className="w-full h-full"></Image>
          <motion.div
            initial={{
              left: "-100%",
            }}
            animate={
              inView
                ? {
                    left: "0%",
                    transition: { ease: [0.33, 0.55, 0.45, 1] },
                  }
                : "-100%"
            }
            className="absolute w-full h-full bg-black/30 z-10 flex justify-center items-center"
          >
            <button className="py-2 px-2 md:px-4 text-white bg-black rounded-md transition-colors ease-in-out duration-300 font-medium flex items-center gap-2 group text-sm lg:text-base group">
              Join Now
              <span className="relative right-0 group-hover:-right-1 md:group-hover:-right-2 transition-all duration-300 ease-in-out">
                <FiArrowRight size={18} color="#fff" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CareerWithKA;
