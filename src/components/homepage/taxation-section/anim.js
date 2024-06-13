export const taxImgVariants = {
  initial: {
    scale: "90%",
    opacity: 0,
  },
  enter: {
    scale: "100%",
    opacity: 1,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.3,
      },
      scale: {
        duration: 0.75,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};
