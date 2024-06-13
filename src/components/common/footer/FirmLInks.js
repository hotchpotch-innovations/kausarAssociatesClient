import Link from "next/link";
import React from "react";
import ExploreUs from "./ExploreUs";

const FirmLInks = () => {
  return (
    <div className="col-span-2 w-full flex justify-start mt-4 md:mt-0 lg:mt-0">
      <div className=" w-full flex justify-start md:justify-center lg:justify-center items-start">
        <div>
          <div>
            <h1 className="text-base md:text-base lg:text-lg font-semibold uppercase text-primary">
              Firm
            </h1>
          </div>
          <div className="mt-2">
            <div className="mt-2 text-xs">
              <ul>
                <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href={"/"}>About Us</Link>
                </li>
                <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href={"/"}>Services</Link>
                </li>
                <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href={"/"}>licensing</Link>
                </li>
                <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href={"/"}>Resources</Link>
                </li>
                <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href={"/"}>Contact</Link>
                </li>
                <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href={"/"}>Site Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start md:justify-center items-start">
        <div>
          <ExploreUs></ExploreUs>
        </div>
      </div>
    </div>
  );
};

export default FirmLInks;
