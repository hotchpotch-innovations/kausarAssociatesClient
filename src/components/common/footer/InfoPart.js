import Link from "next/link";
import React from "react";

const InfoPart = () => {
  return (
    <div className="col-span-2">
      <p className="text-justify text-xs">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </p>

      <div className="flex items-center gap-4 md:gap-6 xl:gap-8 mt-5 md:mt-7 xl:mt-9">
        <Link
          href={"/term-and-conditions"}
          className="text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out font-semibold"
        >
          Terms & Conditions
        </Link>
        <Link
          href={"/privacy-policy"}
          className="text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out font-semibold"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default InfoPart;
