import Link from "next/link";
import React from "react";
import ExploreUs from "./ExploreUs";

const FirmLInks = () => {
  return (
    <div className="col-span-2 w-full flex justify-start mt-4 md:mt-0 lg:mt-0">
      <div className=" w-full flex justify-start md:justify-center lg:justify-center items-start">
        <div>
          <div>
            <h1 className="text-base md:text-base lg:text-lg underline font-semibold">
              Firm
            </h1>
          </div>
          <div className="mt-2">
            <div className="mt-2 text-xs">
              <ul>
                <li className="leading-5">
                  <Link href={"/"}>About Us</Link>
                </li>
                <li className="leading-5">
                  <Link href={"/"}>Services</Link>
                </li>
                <li className="leading-5">
                  <Link href={"/"}>licensing</Link>
                </li>
                <li className="leading-5">
                  <Link href={"/"}>Resources</Link>
                </li>
                <li className="leading-5">
                  <Link href={"/"}>Contact</Link>
                </li>
                <li className="leading-5">
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
