import Image from "next/image";
import React from "react";
import logo from "./SKILL HUB lOGO-01.png";
import { FiArrowRight } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

const SkillHubSection = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full  flex  items-center">
            <div className="sm:w-2/3 md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
              {/* old content & style */}
              {/* <div>
                <Image src={logo} alt="SkillHub Logo" className=""></Image>
              </div>

              <div className="mt-4">
                <p className="text-justify">
                  This is one of many areas of professional service where our
                  company is well ahead of the competition. Tax consultancy team
                  of This is one of many areas of professional service where our
                  company is well ahead of the competition. Tax consultancy team
                  of
                </p>
              </div> */}
              {/* new content & style */}
              <div>
                {/* subtitle */}
                <div className="flex items-center gap-3 ml-3">
                  <div className="relative flex justify-center items-center">
                    <div className=" w-4 h-4 bg-blue-500 rounded-full absolute" />
                    <div className=" w-4 h-4 border-2 border-black rounded-full absolute ml-3" />
                  </div>

                  <h2 className="text-xs md:text-sm xl:text-base 2xl:text-lg text-blue-600 font-bold ml-6 uppercase">
                    who we are
                  </h2>
                </div>
                {/* heading */}
                <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none xl:leading-[1.05] 2xl:leading-tight mt-2 text-black">
                  Inspiring & Helping <br /> Live Better Lifestyle
                </h1>

                <p className="text-justify mt-4 md:mt-4 lg:mt-5 2xl:mt-6 text-black">
                  This is one of many areas of professional service where our
                  company is well ahead of the competition. Tax consultancy team
                  of This is one of many areas of professional service where our
                  company is well ahead of the competition. Tax consultancy team
                  of
                </p>

                <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-center sm:justify-between mt-5 lg:mt-6 xl:mt-8 2xl:mt-10 w-fit">
                  {/* btn */}
                  <div className="">
                    <button className="py-2 px-2 md:px-4 text-white bg-black rounded-md transition-colors ease-in-out duration-300 font-medium flex items-center gap-2 group text-sm lg:text-base group">
                      Enroll Now
                      <span className="relative right-0 group-hover:-right-1 md:group-hover:-right-2 transition-all duration-300 ease-in-out">
                        <FiArrowRight size={18} color="#fff" />
                      </span>
                    </button>
                  </div>
                  {/* get help  */}
                  <div className="flex items-center gap-3">
                    {/* phone icon */}
                    <div className="rounded-full bg-[#242323] p-2 md:p-3 animated-phone-icon">
                      <FaPhoneAlt
                        size={32}
                        className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                      />
                    </div>
                    {/* phone number */}
                    <div className="flex flex-col">
                      <p className="font-bold uppercase text-xs sm:text-sm tracking-wide lg:text-base">
                        Get Help
                      </p>
                      <p className="font-bold uppercase text-xs sm:text-sm lg:text-base">
                        +8801735 887 882
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div>
              <Image
                src={
                  "https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148902090.jpg"
                }
                width={1200}
                height={800}
                className="w-2/3 md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0"
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillHubSection;
