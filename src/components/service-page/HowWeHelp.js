import Image from "next/image";
import React from "react";

const HowWeHelp = () => {
  return (
    <section>
      <div className="content-container">
        <div>
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
              How We Help
            </h2>
          </div>
          <div className="flex-none md:flex lg:flex justify-between items-center">
            <div className="w-full md:w-1/2 lg:w-1/2  mb-6 md:mb-0 lg:mb-0">
              <ul className="list-disc mx-8 text-base md:text-lg lg:text-xl">
                <li className="mb-2 text-gray-600">
                  Corporate Tax Assessment and Planning
                </li>
                <li className="mb-2 text-gray-600">
                  Preparation and Submission of Income Tax Returns for Local and
                  Expat Individuals
                </li>
                <li className="mb-2 text-gray-600">
                  Preparation and Submission of Income Tax Returns for Local and
                  Expat Individuals
                </li>
                <li className="mb-2 text-gray-600">
                  Preparation and Submission of Income Tax Returns for Local and
                  Expat Individuals
                </li>
                <li className="mb-2 text-gray-600">
                  Preparation and Submission of Income Tax Returns for Local and
                  Expat Individuals
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 lg:mb-0">
                <Image src={'https://png.pngtree.com/png-clipart/20230825/original/pngtree-provide-legal-advice-isolated-concept-vector-illustration-picture-image_8699191.png'} 
                alt="" 
                width={1200} 
                height={1200} 
                className="w-3/5 h-auto mx-auto">
                    
                </Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
