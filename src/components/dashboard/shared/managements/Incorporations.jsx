import Link from "next/link";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRef } from "react";
import useIsSubMenuOpen from "@/hooks/useIsSubMenuOpen";
import { incorporationRoutes } from "../../routes/incorporationRoutes";

const IncorporationManagementRoutes = ({ sidebarOpen }) => {
  // REF
  const menuRef = useRef(null);
  // CUSTOM HOOKS
  // for sub menu
  // useIsSubMenuOpen() receives @params ref to track outside click and change state
  const { isSubMenuOpen, handleMouseClick } = useIsSubMenuOpen(menuRef);

  return (
    <div ref={menuRef} className=" my-2">
      <div
        onClick={handleMouseClick}
        className="static group text-xs md:text-sm"
      >
        <div className="cursor-pointer">
          <Link href={""} className="cursor-pointer">
            <button
              className={`${
                sidebarOpen
                  ? "group-hover:text-blue-800 duration-600 inline-block"
                  : "hidden"
              }`}
            >
              Incorporation Management
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
        <div
          className={`static w-full min-h-fit rounded inset-0 translate-y-1 transition-all duration-500 ml-4 `}
        >
          <div
          onClick={(e) => e.stopPropagation()} // stopPropagation() stops event from bubbling to top
            className={`w-full p-2 rounded-sm ${
              sidebarOpen && isSubMenuOpen ? "block" : "hidden"
            } transition-all duration-500  border-blue-600 mt-0`}
          >
            <ul>
              {incorporationRoutes.map((item) => {
                return (
                  <li
                    key={item._id}
                    className={`w-full cursor-pointer my-2 font-semibold ${
                      sidebarOpen && "hover:text-blue-800"
                    } duration-500`}
                  >
                    <Link href={item.route} className="w-full">
                      {item.title}
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

export default IncorporationManagementRoutes;
