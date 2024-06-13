import Image from "next/image";
import { motion } from "framer-motion";
import { sliderVariants, textVariant1 } from "./anim";
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
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate={animationState}
      >
        <Image
          src={url}
          alt={title2}
          width={2400}
          height={1600}
          priority={true}
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="max-h-[500px] 2xl:max-h-[700px] object-cover"
        />
      </motion.div>

      {/* Blue Gradient Background Color  */}
      <div className="absolute bg-cover w-full h-full bg-gradient-to-l from-blue-600/40 via-blue-600/40 to-blue-600/40" />

      {/* content */}
      <motion.div
        variants={textVariant1}
        initial="initial"
        whileInView={"enter"}
        className="absolute left-[10%] z-10"
      >
        <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold">
          {title1}
        </h1>
        <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold">
          {title2}
        </h1>
        <h1 className="text-lg md:text-2xl lg:text-4xl text-white font-semibold">
          {subTitle}
        </h1>
      </motion.div>
    </div>
  );
}
