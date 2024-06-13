import { motion } from "framer-motion";
import { headingVariant } from "./anim";

/*
 * Mg => Managing
 */
export default function MgDirectorHeading({ isInView }) {
  const headingText1 = "Kauser";
  const headingText2 = "Associates";
  const headingText3 = "Ltd";
  return (
    <h2 className="font-amaranth font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#0A0A0A]">
      {headingText1.split("").map((string, idx) => (
        <motion.span
          custom={idx}
          variants={headingVariant}
          initial="initial"
          animate={isInView ? "enter" : "exit"}
          key={idx}
        >
          {string}
        </motion.span>
      ))}{" "}
      &{" "}
      {headingText2.split("").map((string, idx) => (
        <motion.span key={idx}>{string}</motion.span>
      ))}{" "}
      {headingText3.split("").map((string, idx) => (
        <motion.span key={idx}>{string}</motion.span>
      ))}
    </h2>
  );
}
