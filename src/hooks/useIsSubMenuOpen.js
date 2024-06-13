"use client"

import { useState } from "react";
import useOutsideClick from "./useOutSideClick";

export default function useIsSubMenuOpen(ref) {
  // STATE
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // CHANGING STATE
  const handleMouseClick = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  //  => to close the nav menu
  useOutsideClick(ref, () => {
    if (isSubMenuOpen) {
      setIsSubMenuOpen(false);
    }
  });

  return { handleMouseClick, isSubMenuOpen };
}
