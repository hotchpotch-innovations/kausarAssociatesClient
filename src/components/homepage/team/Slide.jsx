import Image from "next/image";
import React from "react";
import lawerImage from "./lawer.png";
import teamBg from "./TEAM-01.png";

const Slide = ({ associate, images }) => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center py-12">
        {/* First Part  */}
        <div className="w-full md:w-1/2 flex justify-start items-start mx-2 mt-8 md:mt-0 lg:mt-0">
          <div className="w-72">
            <div>
              <div className="text-sm">
                <h3 className="text-xl md:text-2xl lg:text-3xl">
                  {associate?.name}
                </h3>
                <p className="text-base md:text-lg lg:text-xl">
                  {associate?.designation}
                </p>
                <p>Kausar & Associates Limited</p>
                <p className="font-semibold">Case Deal:</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin">
                  {associate?.dealCase}
                </h1>
              </div>
              <div className="text-sm">
                <p className="font-semibold">Contact:</p>
                <p>Cell: {associate?.contact?.cell}</p>
                <div>
                  <table className="w-full">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td className="pr-2">Email:</td>
                        <td></td>
                      </tr>
                      {associate.contact.email.map((item) => {
                        return (
                          <tr key={item}>
                            <td className="">{item}</td>
                            <td className="pr-2"></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p>V-Card Download:</p>
                <button className="mt-2 px-6 border bg-gray-200 duration-500 text-primary hover:bg-blue-600 hover:text-white rounded-md">
                  TEAM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Part  */}
        <div
          className={`w-full h-auto md:w-1/2 mx-auto mb-8 md:mb-0 lg:mb-0 mt-8 md:mt-0 lg:mt-0`}
        >
          <div className="relative w-96 h-72 md:w-[500px] md:h-[300px] lg:w-[500px] lg:h-[300px]">
            <div className="absolute -top-20 md:-top-24 lg:-top-32 w-96 h-72 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[300px]">
              <Image
                src={teamBg}
                alt=""
                className="w-96 h-72 md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[450px] scale-125 opacity-75"
              ></Image>
            </div>
            <div className="absolute w-60 h-72 md:w-[280px] md:h-[350px] lg:w-[280px] lg:h-[350px] bottom-0 right-[35%]">
              <Image
                src={lawerImage}
                alt=""
                width={1200}
                height={1000}
                className="lg:w-[280px] lg:h-[350px] mx-auto"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
