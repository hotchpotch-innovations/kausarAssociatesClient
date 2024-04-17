import Image from "next/image";
import React from "react";
import image from "./taxation.png";
import developmentBg from "./DEVELOPMENT-01.png";
import propertyImage from "./UNNAYAN-01.png";

const TaxationSection = () => {
  return (
    <section>
      <div className="h-full md:h-screen lg:h-screen">
        <div className="content-container flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center">
          <div className=" w-full h-full md:w-1/2">
            <div className="relative w-[400px] h-[450px] mx-auto">
              <div className="absolute w-[350px] h-[450px]">
                <Image
                  src={image}
                  alt=""
                  className="w-[350px] h-[450px] border rounded-t-full"
                ></Image>
              </div>
              <div className="absolute w-[350px] h-[450px] border-2 border-blue-600 rounded-t-full"></div>
              {/* Large Circle  */}
              {/* relative w-72 h-80 md:w-[350px] md:h-[600px] lg:w-[400px] lg:h-[450px] mx-auto" */}
              {/* w-56 h-72 md:w-[250px] md:h-[550px] lg:w-[350px] lg:h-[450px] */}
              <div className="absolute top-10 left-8 w-8 h-8 rounded-full bg-primary"></div>
              <div className="absolute top-10 left-[75px] w-3 h-3 rounded-full bg-primary"></div>
              <div className="absolute top-52 -right-0 w-3 h-3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-4/6 mx-auto">
              <div className="w-full flex justify-end">
                <Image src={''} alt=""></Image>
              </div>
              <div>
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-3xl text-center md:text-start lg:text-start font-semibold">
                    Sobar age kor din <br /> unnoyon er ongsho nin
                  </h1>
                  <p className="text-justify mt-4">
                    A tax is a compulsory financial charge or some other type of
                    levy imposed on a taxpayer (an individual or legal entity)
                    by a governmental organization in order to collectively fund
                    government spending, public expenditures, or as a way to
                    regulate and reduce negative externalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxationSection;
