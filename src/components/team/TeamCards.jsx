"use client";

import { teamCardData } from "@/data";
import Card from "./Card";
import { AnimatePresence } from "framer-motion";
import useInView from "@/hooks/useInView";

export default function TeamCards() {
  const [ref, isInView] = useInView({ threshold: 0.4 });

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 container px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-8 mx-auto">
      <div className="mb-3 mt-5 md:mb-4 md:mt-6 lg:mb-6 lg:mt-8 xl:mb-8 xl:mt-12 2xl:mb-8 2xl:mt-7 flex flex-col items-center gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
        <div className="flex items-center gap-3">
          <div className="relative flex justify-center items-center">
            <div className=" w-4 h-4 bg-blue-500 rounded-full absolute" />
            <div className=" w-4 h-4 border-2 border-black rounded-full absolute ml-3" />
          </div>

          <h2 className="text-sm md:text-base xl:text-lg 2xl:text-xl text-blue-600 font-bold ml-6">
            World renown law firm and company
          </h2>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Our Professional Team
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {teamCardData.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    </div>
  );
}
