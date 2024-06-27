import Image from "next/image";
import { motion } from "framer-motion";
import { popin, slideIn, sliderVariants, textVariant1 } from "./anim";
import { useEffect, useState } from "react";

export default function SecondSlideContent({
  url,
  title1,
  title2,
  subTitle,
  isActive,
}) {
  const [animationState, setAnimationState] = useState("initial");
  useEffect(() => {
    if (isActive) {
      setAnimationState("enter");
    } else {
      setAnimationState("exit");
    }
  }, [isActive]);

  // animate={animationState}>
  return (
    // <div className="w-full h-full flex justify-center items-center">
    //   <motion.div
    //     variants={sliderVariants}
    //     initial="initial"
    //     animate={animationState}
    //   >
    //     <Image
    //       src={url}
    //       alt={title2}
    //       width={2400}
    //       height={1600}
    //       priority={true}
    //       sizes="(max-width: 1280px) 100vw, 50vw"
    //       className="max-h-[500px] 2xl:max-h-[700px] object-cover"
    //     />
    //   </motion.div>

    //   <div className="absolute bg-cover w-full h-full bg-gradient-to-l from-blue-600/40 via-blue-600/40 to-blue-600/40" />

    //   <motion.div
    //     variants={textVariant1}
    //     initial="initial"
    //     whileInView={"enter"}
    //     className="absolute left-[10%] z-10"
    //   >
    //     <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold">
    //       {title1}
    //     </h1>
    //     <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold">
    //       {title2}
    //     </h1>
    //     <h1 className="text-lg md:text-2xl lg:text-4xl text-white font-semibold">
    //       {subTitle}
    //     </h1>
    //   </motion.div>
    // </div>
    <div className="w-full h-full">
      <div className="flex flex-col md:flex-row gap-8 xl:gap-16 items-center justify-between max-w-screen-2xl mx-auto px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
        <motion.div
          variants={slideIn}
          initial="initial"
          whileInView={"animate"}
          className="flex flex-col gap-5 md:gap-8 xl:gap-10 md:w-[60%] 2xl:w-[50%]"
        >
          <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:leading-snug font-bold">
            <span className="text-blue-500">Bangladesh</span> | Highlights of
            Finance Bill 2024
          </h1>
          <ul className="list-disc marker:text-blue-400 pl-8">
            <li className="text-sm lg:text-base xl:text-lg xl:leading-snug">
              This document aims to highlight the major changes to the Income
              Tax Act, 2023 and additional SROs as proposed by the Finance Bill
              2024 as placed in the Bangladesh Budget 2024-25
            </li>
            <li className="text-sm lg:text-base xl:text-lg xl:leading-snug mt-2">
              These highlights are meant to provide guidance to
              individuals/entities who operate and for those looking to expand
              in Bangladesh.
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={popin}
          initial="initial"
          whileInView={"animate"}
          className="md:w-[40%] 2xl:w-[50%]"
        >
          <Image
            src={url}
            alt={title2}
            width={900}
            height={1600}
            priority={true}
            sizes="(max-width: 1280px) 100vw, 50vw"
            className="object-contain max-h-[500px] 2xl:max-h-[600px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
