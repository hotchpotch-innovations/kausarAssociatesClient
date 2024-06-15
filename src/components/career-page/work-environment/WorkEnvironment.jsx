import AnimationRing from "@/components/common/animation-ring/AnimationRing";
import React from "react";

const WorkEnvironment = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Work Environment with <span className="text-primary">KA</span>
        </h1>
      </div>
      <div className="h-[50vh] border flex justify-center items-center bg-slate-200">
        <AnimationRing></AnimationRing>
      </div>
    </div>
  );
};

export default WorkEnvironment;
