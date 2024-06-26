// Define the staggered animation settings
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adjust the stagger duration
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};
