import Link from "next/link";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { resourcePortalRoutes } from "../../routes/resourcePortalRoutes";

const ResourcePortalRoutes = ({ sidebarOpen }) => {
  return (
    <div className=" my-2">
      <div className="static group text-xs md:text-sm">
        <div className="cursor-pointer">
          <Link href={""} className="cursor-pointer">
            <button
              className={`${
                sidebarOpen
                  ? "group-hover:text-blue-800 duration-600 inline-block"
                  : "hidden"
              }`}
            >
              Resource Portal
              <span>
                <IoMdArrowDropdown className="inline-block mx-2 text-xl" />
              </span>
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

        {/* Items  */}
        <div
          className={`static w-full min-h-fit rounded inset-0 translate-y-3 transition-all duration-500 ml-4 `}
        >
          <div
            className={`w-full p-2 rounded-sm hidden ${
              sidebarOpen && "hover:block group-hover:block"
            } transition-all duration-500  border-blue-600 mt-0`}
          >
            <ul>
              {resourcePortalRoutes.map((item) => {
                return (
                  <li
                    key={item._id}
                    className={`w-full cursor-pointer my-2 font-semibold ${
                      sidebarOpen && "hover:text-blue-800"
                    } duration-500`}
                  >
                    <Link href={item.route} className="w-full">
                      {item?.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePortalRoutes;
