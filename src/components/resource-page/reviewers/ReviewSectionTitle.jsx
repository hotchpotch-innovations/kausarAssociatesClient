import React from "react";

const SectionTitle = ({title}) => {
  return (
    <div className="py-8 text-center">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-3xl mb-1">{title}</h2>
        <div className="w-36 md:w-48 h-[2px] bg-blue-600 mx-auto"></div>
      </div>
      <p className="text-xs md:text-sm text-gray-500 font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum molestias
        quaerat nulla rem dicta ducimus optio totam, voluptates dolore
        voluptatum!
      </p>
    </div>
  );
};

export default SectionTitle;
