import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({ title, file }) => {
  return (
    <div className="flex flex-col justify-between p-2 mx-auto mb-2 md:mb-0 lg:mb-0">
      <div>
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

      <div className="mt-2">
        <h3 className="text-lg md:text-xl font-semibold text-justify">
          {title}
        </h3>
      </div>

      <div className="w-full mt-4">
        {/* <a href="/public/pdf/Return-Form.pdf" download={true}> */}
        <button className="px-4 py-1 text-base text-white bg-blue-400 hover:bg-blue-600 duration-500 rounded-md">
          Download
        </button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default ProfileCard;
