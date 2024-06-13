import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-primary text-white">
      {/* <div className="content-container"> */}
      {/* <div className="w-full flex flex-col md:flex-row lg:flex-row justify-center items-center">
          <div className="px-0 md:px-4 lg:px-4">
            <h3 className="w-full md:w-48 lg:w-48 text-xl md:text-2xl lg:text-3xl font-medium text-center md:text-start lg:text-start">
              If you want to watch our story
            </h3>
          </div>
          <div className=" mt-6 md:mt-0 lg:mt-0">
          </div>
        </div> */}
      {/* </div> */}
      <video
        src="/video-1.mp4"
        loop
        autoPlay
        width={1920}
        height={564}
        className="w-full h-[500px] object-cover aspect-square"
      />
    </section>
  );
};

export default VideoSection;
