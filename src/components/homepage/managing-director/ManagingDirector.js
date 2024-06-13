import React from "react";
import MdImage from "./MD PIC-01.png";
import Image from "next/image";

const ManagingDirector = () => {
  return (
    <section className="container mx-auto">
      <div className="content-container">
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-center items-center">
          <div className="w-full md:w-full lg:w-1/2 mx-auto">
            <div className="h-4/5 relative">
              <div className="">
                <Image
                  src={MdImage}
                  alt=""
                  className="w-full"
                  width={800}
                  height={500}
                ></Image>
              </div>
              <div className="absolute right-[20%] top-[65%] text-center">
                <button className="py-1 md:py-2 px-2 md:px-4 border hover:text-white hover:bg-blue-500 rounded-md">
                  Message
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-full lg:w-1/2 mt-4 sm:mt-0 lg:mt-0">
            <div className="sm:w-5/6 px-6 py-8 sm:py-12  mx-auto">
              <div className="flex justify-start items-end">
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                    HEAD OF THE FIRM
                  </h1>
                </div>
                <div className="h-[2px] w-2/12 bg-primary mx-2"></div>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                Md. Kausar Hossain
              </h3>
              <p className="text-sm leading-5">Managing Director</p>
              <p className="text-xs leading-5 text-primary font-semibold">
                Kausar & Associates Limited
              </p>
              <p className="text-xs leading-5 ">
                Ex Executive Director & Sr. Consultant at{" "}
                <span className="hover:text-blue-600 cursor-pointer">
                  Rahamat & Associates Limited
                </span>
              </p>
              <p className="text-xs leading-5">
                LL.M at{" "}
                <span className="hover:text-blue-600 cursor-pointer">
                  Shanto-Mariam University
                </span>{" "}
                of Creative Technology, Dhaka
              </p>
              <p className="text-xs leading-5">
                LL.B at{" "}
                <span className="hover:text-blue-600 cursor-pointer">
                  Shanto-Mariam University
                </span>{" "}
                of Creative Technology, Dhaka
              </p>
              <p className="text-xs leading-5 ">Contact:</p>
              <p className="text-xs leading-5 ">Cell: +8801912 527467</p>
              <p className="text-xs leading-5 ">
                Email: kausarandassociates@gmail.com,
                info@kausarassociates.com.bd
              </p>
              <p className="text-xs leading-5 ">V-Card Download:</p>
              <button className="px-2 lg:px-4 py-1 border rounded text-xs md:text-sm mt-2 bg-white hover:bg-blue-500 hover:text-white duration-500">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagingDirector;
