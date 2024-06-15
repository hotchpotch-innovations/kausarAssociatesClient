import Image from 'next/image';
import React from 'react';

const AboutUsBanner = () => {
    return (
        <section>
            <div className="relative z-[-2] lg:z-auto w-full h-[40vh] md:h-[70vh] lg:h-[90vh]">
          <div>
            <Image
              src={
                "https://ddpalaw.com/wp-content/uploads/2023/07/Di-Pietro-Partners-staff1.jpg"
              }
              className="absolute top-0 mx-auto w-full h-[40vh] md:h-[70vh] lg:h-[90vh]"
              width={2400}
              height={1600}
              alt=""
            />
          </div>

          <div className="absolute bg-cover w-full h-[40vh] md:h-[70vh] lg:h-[90vh] bg-gradient-to-b  from-blue-400/30 to-blue-400/30">
            
          </div>

          <div className="absolute w-full text-center top-[50%] md:top-[60%] lg:top-[60%] text-white font-bold">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-white mb-2">
              WHO WE ARE
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

export default AboutUsBanner;