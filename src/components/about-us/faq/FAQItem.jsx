import { FiMinus, FiPlus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const FAQItem = ({ title, content, isOpen, onClick }) => {
  return (
    <motion.div
      className={`${
        isOpen ? "bg-blue-50 pb-4 2xl:pb-5 rounded-tr-2xl rounded-b-2xl" : ""
      } w-full xl:w-[90%] 2xl:w-[85%]`}
      initial={false}
      animate={{ height: isOpen ? "auto" : "auto" }} // Keep height 'auto' for both states
      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
      layout // Add this prop for smooth height animation
    >
      <div
        onClick={onClick}
        className={`cursor-pointer flex items-start gap-8 justify-between rounded-tr-2xl rounded-b-2xl pl-6 pr-3 font-semibold ${
          isOpen ? " text-blue-500 pt-3 pb-2" : "bg-[#fafafa] py-4"
        }`}
      >
        <p
          className={`text-base xl:text-lg 2xl:text-2xl ${
            isOpen ? "text-blue-500" : "text-black/80"
          }`}
        >
          {title}
        </p>

        {isOpen ? (
          <span className="rounded-full p-2 bg-blue-400">
            <FiMinus className={`${isOpen ? "text-white" : "text-black"}`} />
          </span>
        ) : (
          <span className="rounded-full p-2 bg-[#ededed]">
            <FiPlus className={`${isOpen ? "text-white" : "text-black"}`} />
          </span>
        )}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="px-6 text-xs xl:text-sm 2xl:text-lg text-gray-500"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{
              duration: 0.3,
              height: { duration: 0.2 },
              opacity: {
                delay: 0.15,
                duration: 0.4,
              },
              ease: [0.33, 1, 0.68, 1],
            }}
            layout
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;
