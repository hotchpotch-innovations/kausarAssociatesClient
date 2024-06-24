"use client";
import React, { useEffect, useState } from "react";
import HoverSubmenuButton from "./HoverSubmenuButton";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { hamburgerToggle } from "../../../../provider/redux/features/navbarSlice";
import ServiceSubmenuSection from "./submenu-sections/ServiceSubmenuSection";
import IncorporationSubmenuSection from "./submenu-sections/IncorporationSubmenuSection";
import LicensingSubmenuSection from "./submenu-sections/LicensingSubmenuSection";
import { useScrollLock } from "@/hooks/useScrollLock";

/*
 * @params idx is used to track the index of the menu and those who have sub menu we won't allow link pushing
 */

const HoverMenuButton = ({ nav, idx }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const menuLinkHandler = (link) => {
    // those who have sub cat we don't want to have click effect on them
    if (idx === 1 || idx === 2 || idx === 3 || idx === 5) return;

    dispatch(hamburgerToggle());
    router.push(link);
  };

  const route = nav?.link;
  const submenu = nav.submenu;

  return (
    <div className="inline-block h-full">
      <div className="static lg:relative group">
        <div className="cursor-pointer">
          <p
            onClick={() =>
              menuLinkHandler(`${!nav?.submenu?.length > 0 ? route : ""}`)
            }
            className="cursor-pointer px-1 xl:px-2"
          >
            <button className="group-hover:text-blue-800 duration-600 text-sm 2xl:text-base">
              {nav?.menu}
            </button>
          </p>
        </div>

        <div
          className={`static lg:absolute w-full min-h-fit rounded inset-0 translate-y-3 group-hover:translate-y-1 lg:translate-y-8 lg:group-hover:translate-y-5 transition-all duration-500 ml-4 lg:ml-0`}
        >
          <div
            className={`${
              submenu.length > 0 &&
              " w-full lg:w-72 min-h-fit max-h-96 overflow-auto bg-blue-100 p-2 lg:p-3 rounded-sm"
            } hidden hover:block transition-all duration-500 group-hover:block lg:group-hover:border-t-2 border-blue-600 mt-0 lg:mt-4`}
          >
            {nav.menu === "About" && <HoverSubmenuButton submenu={submenu} />}

            {nav.menu === "Services" && <ServiceSubmenuSection />}

            {/* {nav.menu === "Incorporations" && <IncorporationSubmenuSection />} */}

            {nav.menu === "Licensing" && <LicensingSubmenuSection />}

            {nav.menu === "Resource" && submenu && (
              <HoverSubmenuButton submenu={submenu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverMenuButton;
