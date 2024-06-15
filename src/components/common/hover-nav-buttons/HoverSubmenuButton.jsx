"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { hamburgerToggle } from "../../../../provider/redux/features/navbarSlice";

const HoverSubmenuButton = ({ submenu, textStyle }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const submenuLinkHandler = (link) => {
    dispatch(hamburgerToggle());
    router.push(link);
  };

  return (
    <ul className="overflow-x-hidden">
      {submenu?.map((item, idx) => {
        return (
          <li
            key={item?._id ? item?._id : idx}
            className={`cursor-pointer mt-4 font-semibold hover:text-blue-800 duration-500 border-b border-blue-300 hover:border-blue-600 ml-4 ${textStyle}`}
          >
            <p
              onClick={() =>
                submenuLinkHandler(
                  item?._id ? item?.link + item?._id : item?.link
                )
              }
              className="w-full cursor-pointer"
            >
              {item?.menu}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default HoverSubmenuButton;
