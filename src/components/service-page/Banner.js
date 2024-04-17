import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className="relative z-[-2] lg:z-auto w-full h-[40vh] md:h-[70vh] lg:h-[90vh]">
          <div>
            <Image
              src={
                "https://www.shutterstock.com/image-illustration/legal-services-concept-gavel-word-260nw-1749230849.jpg"
              }
              className="absolute top-0 mx-auto w-full h-[40vh] md:h-[70vh] lg:h-[90vh]"
              width={2400}
              height={1600}
              alt=""
            />
          </div>

          <div className="absolute bg-cover w-full h-[40vh] md:h-[70vh] lg:h-[90vh] bg-gradient-to-b  from-blue-400/30 to-blue-400/30">
            
          </div>

          <div className="absolute w-full text-center top-[40%] md:top-[40%] lg:top-[40%] text-white font-bold">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-black mb-2">
              Title one
            </h1>
            <p className="text-xs md:text-md lg:text-md text-white text-center">
              We are happy to tell you more about Kausar & Associates limited
            </p>
            <p className="text-xs md:text-md lg:text-md text-white text-center">
              and our skilled team!
            </p>
          </div>
        </div>
        </section>
    );
};

export default Banner;