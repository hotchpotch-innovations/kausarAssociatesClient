import Image from "next/image";
import React from "react";
import bgImage from "../../../../public/heros.png";

const Hero = () => {
  return (
    <section>
      <div>
        <div className="relative z-[-2] lg:z-auto w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
          <div>
            <Image
              src={
                "https://www.mmoser.com/wp-content/uploads/2022/02/law-firm-london-office-open-plan-desks-1-1200x675.jpg"
              }
              className="absolute top-0 mx-auto w-full h-[50vh] md:h-[70vh] lg:h-[90vh]"
              width={2400}
              height={1600}
              alt=""
            />
          </div>

          <div className="absolute bg-cover w-full h-[50vh] md:h-[70vh] lg:h-[90vh] bg-gradient-to-l  from-black/70 via-black/60 to-black/70">
            
          </div>

          <div className="absolute left-[10%] top-20 md:top-28 lg:top-40 text-white font-bold">
            <h1 className="text-2xl md:text-3xl lg:text-6xl">Wellcome to</h1>
            <h1 className="text-2xl md:text-3xl lg:text-6xl">
              Kausar & Associates Ltd
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-6xl text-primary">
              A Hub of Corporate Law Matters
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-6xl text-primary">
              in Bangladesh
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
