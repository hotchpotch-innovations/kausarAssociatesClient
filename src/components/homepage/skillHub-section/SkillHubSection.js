import Image from "next/image";
import React from "react";
import logo from "./SKILL HUB lOGO-01.png";

const SkillHubSection = () => {
  return (
    <section className="border-b border-blue-600">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full  flex  items-center p-4">
            <div className="w-2/3 md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
              <div>
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
