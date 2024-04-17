"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { hamburgerToggle } from "../../../../provider/redux/features/navbarSlice";

const HoverSubmenuButton = ({ submenu }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const submenuLinkHandler = (link) => {
    dispatch(hamburgerToggle());
    router.push(link);
  };

  return (
    <ul>
      {submenu.map((item) => {
        return (
          <li
            key={item?._id}
            className="w-full cursor-pointer my-4 font-semibold hover:text-blue-800 duration-500 border-b border-blue-300 hover:border-blue-600"
          >
            <p
              onClick={() => submenuLinkHandler(item?.link + item?._id)}
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
