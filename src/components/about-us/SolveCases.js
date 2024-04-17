import React from "react";

const SolveCases = () => {
  return (
    <section className="bg-primary text-white">
      <div className="content-container flex justify-between items-center">
        <div className="w-1/3 text-end flex justify-start">
          <h1 className="text-base md:text-3xl lg:text-4xl font-bold text-white">
            We can solve all your difficult cases
          </h1>
        </div>
        <div className="w-1/3 flex justify-center mx-auto">
          <div className="w-2/3 -rotate-[60deg]">
            <div className="w-3/4 h-[1px] bg-white mb-4 md:mb-6 lg:mb-6 mx-auto"></div>
            <div className="w-2/4 h-[1px] bg-white mx-auto"></div>
          </div>
        </div>
        <div className="w-1/3 text-end flex justify-center">
            {/* PUT IMAGE  */}
          <div className="w-48 text-justify text-sm">
            <h1 className="text-2xl text-justify w-full leading-5">CORPORATE</h1>
            <h1 className="text-lg font-medium text-justify w-full leading-5">TRADE LICENSE</h1>
            <h1 className="text-lg text-justify w-full leading-5">INCORPORATION</h1>
            <h1 className="text-xl text-justify w-full leading-5">INTELLECTUAL</h1>
            <h1 className="text-sm text-justify w-full leading-5">PROPERTY TAXATION</h1>
            <h1 className="text-xl text-justify w-full leading-5">COLLABORATE</h1>
            <h1 className="text-lg font-normal text-justify w-full leading-5">CONTRACT&VAT</h1>
            <h1 className="text-2xl font-medium text-justify w-full leading-5">LICENSING</h1>
            <h1 className="text-2xl font-medium text-justify w-full leading-5">TEAMWORK</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolveCases;
