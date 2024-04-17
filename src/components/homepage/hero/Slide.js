import Image from "next/image";
import React from "react";
import ParticlesBackground from "../particles-bg/ParticlesBackground";

const Slide = ({ url, title1, title2, subTitle }) => {
  return (
    <div className="relative w-[100vw] h-[40vh] md:h-[60vh] lg:h-[90vh]">
        
        {/* Background Image  */}
      <div>
        <Image
          src={url}
          className="absolute top-0 mx-auto w-full h-[40vh] md:h-[60vh] lg:h-[90vh]"
          width={2400}
          height={1600}
          alt=""
        />
      </div>

      {/* Black Gradient Background Color  */}
      <div className="absolute bg-cover w-full h-[40vh] md:h-[60vh] lg:h-[90vh] bg-gradient-to-l  from-black/50 via-black/50 to-black/50">
      </div>

      {/* Blue Gradient Background Color  */}
      <div className="absolute bg-cover w-full h-[40vh] md:h-[60vh] lg:h-[90vh] bg-gradient-to-l  from-blue-600/40 via-blue-600/40 to-blue-600/40">

        {/* Particles Background  */}
        <div className="relative bg-cover w-full h-[40vh] md:h-[60vh] lg:h-[90vh]">
          <ParticlesBackground />
        </div>
      </div>

      {/* Text Content  */}
      <div className="absolute left-[10%] top-20 md:top-28 lg:top-40 text-white font-bold">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">{title1}</h1>
        <h1 className="text-2xl md:text-4xl lg:text-6xl">{title2}</h1>
        <h1 className="text-lg md:text-2xl lg:text-4xl text-white">
          {subTitle}
        </h1>
      </div>
    </div>
  );
};

export default Slide;
