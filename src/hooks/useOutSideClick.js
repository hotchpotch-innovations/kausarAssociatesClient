"use client";

import { useEffect } from "react";

/*
 * This hook require two params:
 * ref => parent container where data is located
 * callback => a function to preform when user clicked outside the parent ref container
 */

export default function useOutsideClick(ref, callback) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref?.current && !ref?.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, callback]);
}
