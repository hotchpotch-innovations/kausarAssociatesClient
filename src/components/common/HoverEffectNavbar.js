"use client";
import Header from "./Header";
import Image from "next/image";
import logo from "./logo/KA_COLOR LOGO-01.png";
import LoginButton from "./hover-nav-buttons/LoginButton";
import { navLinks } from "./hoverNavLinks";
import HoverMenuButton from "./hover-nav-buttons/HoverMenuButton";
import HoverToggleButton from "./hover-nav-buttons/HoverToggleButton";
import { useSelector } from "react-redux";

const HoverEffectNavbar = () => {
  const hamburgerOpen = useSelector((state) => state?.navbarToggle);
  const openMenuClass = "top-[60px] md:top-[80px] opacity-100";
  const closeMenuClass = "top-[-400px] opacity-0";

  return (
    <nav className="sticky z-[10] top-0">
      <div>
        <Header></Header>
        <div className="w-full pt-2 px-6 lg:px-12 bg-blue-100 lg:bg-white">
          <div className=" w-full h-full flex-none lg:flex justify-between items-center">
            <div className="flex justify-between items-center lg:items-start w-full lg:w-auto pb-2">
              {/* Logo  */}

              <div className="hidden lg:block">
                <Image
                  src={logo}
                  alt="kausar & associates ltd"
                  className="w-32 h-14"
                ></Image>
              </div>

              {/* <ToggleButton/> */}
              <HoverToggleButton />

              {/* Authentication  */}
              <div className="block lg:hidden cursor-pointer">
                <LoginButton />
              </div>
            </div>

            {/* Menu  */}
            <div
              className={`flex-none lg:flex bg-blue-100 lg:bg-white  items-center lg:items-start text-xs lg:text-sm z-[-2] lg:z-auto  absolute md:absolute lg:static w-full lg:w-auto py-4 lg:py-0 lg:pl-0 pl-6 lg:opacity-100 left-0 transition-all ease-in duration-500 ${
                hamburgerOpen ? closeMenuClass : openMenuClass
              }`}
            >
              {navLinks?.map((nav) => {
                return (
                  <div key={nav?._id}>
                    <div className="px-2 my-6 lg:my-0 font-semibold">
                      <HoverMenuButton nav={nav} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Authentication  */}
            <div className="hidden lg:block cursor-pointer">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HoverEffectNavbar;
