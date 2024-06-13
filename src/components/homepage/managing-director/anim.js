export const headingVariant = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: (idx) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      opacity: { duration: 1 },
      x: {
        duration: 1,
        delay: 0.3 + idx * 0.03,
        ease: [0.215, 0.61, 0.355, 1],
      },
      delay: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const leftAnimVariant = {
  initial: {
    opacity: 0,
    x: -20,
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
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const topAnimVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      y: {
        duration: 1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};
