"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { topAnimVariant } from "../managing-director/anim";

const ArticleCard = () => {
  const [inView, setInView] = useState(false);


  return (
    <motion.div
      onMouseEnter={() => setInView(true)}
      onMouseLeave={() => setInView(false)}
      variants={topAnimVariant}
      initial="initial"
      whileInView="enter"
      // viewport={{
      //   once: true,
      // }}
      className="h-full w-auto sm:w-96 md:w-full lg:w-full mx-auto rounded-lg sm:p-4 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <Image
          src={
            "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/12/17065538/mc11702.jpg"
          }
          width={800}
          height={1200}
          alt=""
          className="md:h-56 lg:h-64 xl:h-80 2xl:h-96 w-full aspect-square"
        ></Image>

        {/* hovered div element */}
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
          className="absolute top-0 w-full h-full bg-black/30 z-10 flex justify-center items-center"
        ></motion.div>
      </div>
      <div className="overflow-hidden flex-col justify-between mt-4">
        <h1 className="text-base md:text-lg lg:text-xl font-semibold 2xl:text-justify">
          How to obtain VAT/BIN Registration in Bangladesh?
        </h1>
        <p className="text-gray-500 text-xs md:text-sm lg:text-sm 2xl:text-justify">
          This is one of many areas of professional service where our company is
          well ahead of the competition. Tax consultancy team of
        </p>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
