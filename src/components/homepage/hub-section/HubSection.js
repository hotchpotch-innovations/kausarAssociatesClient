import Image from "next/image";
import React from "react";
import image from "./group-study.png";

const HubSection = () => {
  return (
    <section>
      <div className="h-auto md:h-screen lg:h-screen bg-[url(https://c1.wallpaperflare.com/preview/640/450/410/man-male-face-arm.jpg)] bg-cover bg-center">
        <div className="w-full h-auto md:h-screen lg:h-screen bg-gradient-to-l from-blue-700/70 via-blue-700/60 to-blue-700/70 bg-cover py-8">
          <div className="content-container">
            <div className="mx-0 md:mx-8 lg:mx-10">
              <div className="w-full h-auto flex justify-between items-center border-2 p-6">
                <div className="w-1/2 flex justify-center items-center">
                  <div>
                    <Image
                      src={image}
                      alt=""
                      height={800}
                      width={1200}
                      className="w-full h-auto p-4 md:p-6 lg:p-6"
                    ></Image>
                  </div>
                </div>
                <div className="w-1/2 p-4 md:p-6 lg:p-6 flex justify-center items-center">
                  <div className="px-2 md:px-4 lg:px-4">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-thin text-white">
                      A HUB OF CORPORATE LAW MATTERS
                    </h1>
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
