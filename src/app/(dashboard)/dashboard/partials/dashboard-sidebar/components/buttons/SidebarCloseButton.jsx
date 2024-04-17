import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarCloseButton = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div>
      <button
        className="lg:hidden text-slate-500 hover:text-slate-400"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
      >
        <span className="sr-only">Close sidebar</span>

        {sidebarOpen ? (
          <AiOutlineClose className="inline"></AiOutlineClose>
        ) : (
          <GiHamburgerMenu className="inline"></GiHamburgerMenu>
        )}
      </button>
    </div>
  );
};

export default SidebarCloseButton;
