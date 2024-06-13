import { AnimatePresence, motion } from "framer-motion";

export default function TextRevealAnim({ isInView, texts, textStyle }) {
  const headingVariant = {
    initial: {
      x: 300,
      opacity: 0,
    },
    enter: ([i, j]) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        opacity: {
          duration: 1,
        },
        x: {
          duration: 1,
          delay: 0.3 + i * 0.3 + j * 0.03, // Delay each word and character
          ease: [0.215, 0.61, 0.355, 1],
        },
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const titleVariant = {
    initial: {
      opacity: 0,
      x: 200,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        opacity: {
          duration: 1.2,
        },
        x: {
          duration: 1,
        },
        delay: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className="">
      <motion.h2
        variants={titleVariant}
        initial="initial"
        animate={isInView ? "enter" : "exit"}
        className={`${textStyle}`}
      >
        <AnimatePresence>
          {texts.map((word, wordIdx) => (
            <span
              key={wordIdx}
              className="inline-block"
              style={{ marginRight: "0.5rem" }}
            >
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={headingVariant}
                  custom={[wordIdx, charIdx]}
                  initial="initial"
                  animate={isInView ? "enter" : "initial"}
                  className=""
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </AnimatePresence>
      </motion.h2>
    </div>
  );
}
