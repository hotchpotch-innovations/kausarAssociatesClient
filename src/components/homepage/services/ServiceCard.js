import React from "react";
import { FaElementor } from "react-icons/fa";
const ServiceCard = ({title, body, largeRight, mediumRight, largeTop, mediumTop, mediumBottom, isTextWhite}) => {
  return (
    <div className={`p-2 md:p-4 border-r-0 border-b-0  ${largeRight ? "lg:border-r-0": "lg:border-r-2"} ${mediumRight ? "md:border-r-0": "md:border-r-2"} ${mediumTop ? "md:border-t-0": "md:border-t-2"} ${largeTop ? "lg:border-t-0": "lg:border-t-2"} ${mediumBottom ? "md:border-b-2 lg:border-b-0" : "md:border-b-0"} ${isTextWhite ? 'text-white' : 'text-black'} mx-auto`}>
      <div>
        <FaElementor className="text-3xl"></FaElementor>
      </div>
      <div className="mt-4">
        <p className="text-base md:text-lg font-semibold">{title}</p>
        <p className="text-xs md:text-sm lg:text-sm text-justify">
          {body.length > 100 ? body.slice(0, 99) + "..." : body}
        </p>
      </div>
      <div className="mt-4 text-sm text-center">
        <button className="text-sm hover:text-blue-300 px-2 duration-500">
          See More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
