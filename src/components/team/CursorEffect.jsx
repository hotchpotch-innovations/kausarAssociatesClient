"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect({
  containerRef,
  isHovered,
  isPointerBig,
}) {
  const blobRef = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current || !isHovered) return;

      const rect = containerRef.current.getBoundingClientRect();
      const { clientX, clientY } = event;

      // Calculate the mouse position relative to the container
      const relativeX = clientX - rect.left;
      const relativeY = clientY - rect.top;

      // Constrain the cursor effect within the container boundaries
      const constrainedX = Math.max(0, Math.min(relativeX, rect.width));
      const constrainedY = Math.max(0, Math.min(relativeY, rect.height));

      if (blobRef.current) {
        blobRef.current.animate(
          {
            left: `${constrainedX}px`,
            top: `${constrainedY}px`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
      if (blob2Ref.current) {
        blob2Ref.current.animate(
          {
            left: `${constrainedX}px`,
            top: `${constrainedY}px`,
          },
          { duration: 0, fill: "forwards" }
        );
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("pointermove", handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "pointermove",
          handleMouseMove
        );
      }
    };
  }, [containerRef, isHovered]);

  return (
    <div
      className={`hidden sm:block relative ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={blobRef}
        className={`aspect-square absolute bg-transparent border border-blue-500 z-30 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
          isPointerBig
            ? "w-8 h-8 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 "
            : "w-7 h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 "
        }`}
      />
      <div
        ref={blob2Ref}
        className="w-2 h-2 lg:w-3 lg:h-3 rounded-full aspect-square absolute bg-blue-600 z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
