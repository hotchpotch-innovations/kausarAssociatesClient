import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerToggle } from "../../../../provider/redux/features/navbarSlice";

const HoverToggleButton = () => {
  const hamburgerOpen = useSelector((state) => state?.navbarToggle);
  // console.log(hamburgerOpen);
  const dispatch = useDispatch();
  return (
    <div className="block lg:hidden cursor-pointer">
      <div className="text-2xl" onClick={() => dispatch(hamburgerToggle())}>
        {hamburgerOpen ? (
          <GiHamburgerMenu className="inline"></GiHamburgerMenu>
        ) : (
          <AiOutlineClose className="inline"></AiOutlineClose>
        )}
      </div>
    </div>
  );
};

export default HoverToggleButton;
