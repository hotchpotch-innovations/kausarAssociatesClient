export const sliderVariants = {
  initial: {
    scale: "120%",
    opacity: 0,
  },
  enter: {
    scale: "100%",
    opacity: 1,
    transition: {
      opacity: {
        duration: 1.8,
      },
      duration: 1.5,
      ease: [0.215, 0.62, 0.355, 1],
    },
  },
};

export const textVariant1 = {
  initial: {
    opacity: 0,
    x: -60,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: {
        delay: 0.3,
        duration: 1.3,
      },
      x: {
        delay: 0.3,
        duration: 0.85,
      },
      duration: 1,
      ease: [0.215, 0.62, 0.355, 1],
    },
  },
};

export const popin = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        duration: 1,
      },
      y: {
        duration: 0.65,
      },
      duration: 0.85,
      ease: [0.215, 0.62, 0.355, 1],
    },
  },
};

export const slideIn = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.215, 0.62, 0.355, 1],
    },
  },
};
