import Image from "next/image";
import React from "react";

const HubSection = () => {
  return (
    <section>
      <div className=" bg-[url(https://c1.wallpaperflare.com/preview/640/450/410/man-male-face-arm.jpg)] bg-cover bg-top bg-no-repeat bg-fixed">
        <div className="w-full h-auto bg-gradient-to-l from-gray-700/70 via-gray-700/60 to-gray-700/70 bg-cover py-4 md:py-8 xl:py-12">
          <div className="content-container max-w-screen-2xl mx-auto ">
            <div className="flex flex-col md:flex-row gap-20 sm:gap-16 md:gap-9 lg:gap-11 xl:gap-16 2xl:gap-20 items-center justify-between ">
              {/* left side data */}
              <div className="flex-1 flex flex-col gap-5 md:gap-8 xl:gap-12">
                {/* heading */}
                <h2 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-none xl:leading-[1.05] 2xl:leading-tight mt-2 text-white">
                  Suspendisse Varius Enim In Eros Elementum Tristique. Duis
                  Cursus, Mi Quis Viverra Ornare, Eros Erat.
                </h2>

                {/* images group */}
                <div className="flex items-center">
                  <Image
                    src={"/team/team-1.jpg"}
                    alt="team-1"
                    width={44}
                    height={44}
                    className="w-10 h-10 border-[3px] border-[#292e3a] rounded-full"
                  />
                  <Image
                    src={"/team/team-2.jpg"}
                    alt="team-2"
                    width={44}
                    height={44}
                    className="w-10 h-10 border-[3px] border-[#292e3a] rounded-full -ml-4"
                  />
                  <Image
                    src={"/team/team-3.jpg"}
                    alt="team-3"
                    width={44}
                    height={44}
                    className="w-10 h-10 border-[3px] border-[#292e3a] rounded-full -ml-4"
                  />
                  <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-400 flex justify-center items-center border-[3px] border-[#292e3a] rounded-full -ml-4">
                    <p className="text-xs text-white font-bold">12+</p>
                  </div>
                  <p className="text-zinc-400 font-semibold uppercase text-xs ml-3">
                    Our Team <br /> Community{" "}
                  </p>
                </div>
              </div>

              {/* right side data */}
              <div className="flex-1 flex flex-col gap-5 2xl:gap-7">
                {/* rotate logo  */}
                <div className="flex w-full justify-center md:justify-end">
                  <div className="flex items-center justify-center relative w-[100px]">
                    <Image
                      src={"/about-shape-2.png"}
                      alt="team logo shape 1"
                      width={160}
                      height={160}
                      className="absolute z-10 w-20 h-20 rotate-img"
                    />
                    <Image
                      src={"/about-shape-1.png"}
                      alt="team logo shape 1"
                      width={100}
                      height={100}
                      className="absolute z-20 w-8 h-8"
                    />
                  </div>
                </div>

                {/* gradient div */}
                <div className="py-5 px-7 flex gap-7 justify-between items-center mt-9 grad-div">
                  <p className="font-bold text-sm lg:text-base text-white">
                    Taxation
                  </p>
                  <p className="font-bold text-sm lg:text-base text-white">
                    12 Expert
                  </p>
                </div>

                {/* team activity */}
                <div className="flex flex-col gap-2 xl:gap-3">
                  {/* Ours activity */}
                  <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
                    <p className="text-white text-xs lg:text-sm 2xl:text-base font-medium">
                      Our team activity
                    </p>
                    {/* grad div */}
                    <div className="w-[300px] h-7 grad-div" />
                  </div>
                  {/* others activity */}
                  <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
                    <p className="text-white/60 text-xs lg:text-sm 2xl:text-base font-medium">
                      Other team activity
                    </p>
                    {/* grad div */}
                    <div className="w-[100px] h-7 bg-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSection;
