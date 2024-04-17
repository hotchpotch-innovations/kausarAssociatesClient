import Link from "next/link";
import React from "react";
import { CgWebsite } from "react-icons/cg";

const FormRoutes = ({ sidebarOpen }) => {
  return (
    <div className=" my-2">
      <div className="static group text-xs md:text-sm">
        <div className="cursor-pointer">
          <Link href={"/dashboard/forms"} className="cursor-pointer">
            <button
              className={`${
                sidebarOpen
                  ? "group-hover:text-blue-800 duration-600 inline-block"
                  : "hidden"
              }`}
            >
              Forms
            </button>

            <button
              className={`${
                !sidebarOpen
                  ? "group-hover:text-blue-800 duration-600 inline-block"
                  : "hidden"
              }`}
            >
              <CgWebsite
                className={`${
                  !sidebarOpen &&
                  "group-hover:text-blue-800 duration-600 inline-block text-2xl"
                }`}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormRoutes;
