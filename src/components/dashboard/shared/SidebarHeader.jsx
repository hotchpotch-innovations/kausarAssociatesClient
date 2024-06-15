import Link from "next/link";
import React from "react";
import { AiFillDashboard } from "react-icons/ai";

const SidebarHeader = ({ sidebarOpen }) => {
  return (
    <div className="mb-4 text-center md:text-start lg:text-start">
      <Link
        href={"/dashboard"}
        className={`text-blue-600 border-b border-blue-600 ${
          !sidebarOpen ? "hidden md:inline-block lg:inline-block" : "hidden"
        }`}
      >
        <AiFillDashboard className="text-4xl" />
      </Link>
      <Link
        href={"/dashboard"}
        className={`text-lg md:text-xl text-white ${
          sidebarOpen ? "inline-block" : "hidden"
        }`}
      >
        DASHBOARD
      </Link>
    </div>
  );
};

export default SidebarHeader;
