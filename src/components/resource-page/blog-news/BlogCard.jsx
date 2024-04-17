import Image from "next/image";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";

const BlogCard = () => {
  const title = "The Procedures of VAT Registration Cancellation in Bangladesh";
  const body =
    "BIDA is the zenith Investment Promotion Agency (IPA) in Bangladesh. BIDA provides a wide range of services to foreign investors. BIDA provides a wide range of services to foreign investors.";

  return (
    <div className="h-[500px] flex flex-col justify-between p-2 mx-auto mb-2 md:mb-0 lg:mb-0">
      {/* Top Section  */}
      <div>
        {/* Image  */}
        <div className="">
          <Image
            src={
              "https://revenueaid.com.bd/assets/images/blogfeatureimage/the-procedures-of-vat-registration-cancellation-in-bangladesh-63934d1c0855b.png"
            }
            alt=""
            className="w-full h-[250px]"
            width={800}
            height={600}
          ></Image>
        </div>

        {/* Publisher and Time  */}
        <div className="w-full flex justify-between items-center my-1">
          <div>
            <p>
              <BiUser className="inline text-lg mr-2" />
              <span className="text-xs ">BY KAUSAR HOSSAIN</span>
            </p>
          </div>
          <div>
            <p>
              <FaRegClock className="inline text-lg mr-2" />
              <span className="text-xs">02 Nov 2023</span>
            </p>
          </div>
        </div>

        {/* Middle section  */}
        <div className="mt-2">
          {/* Title  */}
          <div className="">
            <h3 className="text-lg md:text-xl font-semibold text-justify">
              {title.length > 150 ? title.slice(0, 149) + "..." : title}
            </h3>
          </div>

          {/* Body  */}
          <div className="mt-1 block md:block lg:hidden">
            <p className="text-sm justify-between text-gray-400">
              {body.length > 150 ? body.slice(0, 149) + "..." : body}
            </p>
          </div>
          <div className="mt-1 hidden md:hidden lg:block">
            <p className="text-sm justify-between text-gray-400">
              {body.length > 200 ? body.slice(0, 199) + "..." : body}
            </p>
          </div>
        </div>
      </div>

      {/* Last Section  */}
      {/* Button  */}
      <div className="w-full">
        <button className="text-base hover:text-blue-600 duration-500 w-full border border-white hover:border-blue-400 rounded-lg">
          See More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
