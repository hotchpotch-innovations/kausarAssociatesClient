import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="content-container">
        <div className="w-full flex flex-col md:flex-row lg:flex-row justify-center items-center">
          <div className="px-0 md:px-4 lg:px-4">
            <h3 className="w-full md:w-48 lg:w-48 text-xl md:text-2xl lg:text-3xl font-medium text-center md:text-start lg:text-start">
              If you want to watch our story
            </h3>
          </div>
          <div className=" mt-6 md:mt-0 lg:mt-0">
            <video className="w-80 h-72 md:w-80 md:h-72 lg:w-96 lg:h-80 mx-auto md:mx-0 lg:mx-0 rounded-md border-8 border-white" controls></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
