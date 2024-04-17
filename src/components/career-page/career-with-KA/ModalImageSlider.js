"use client";
import Image from "next/image";
import React from "react";
import { images } from "./imagesData";

const ModalImageSlider = ({ image, setModal, setSlideImage }) => {
  const closeBtnStyle =
    "px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-transparent  hover:bg-black duration-500 text-red-400 hover:text-red-600 text-base md:text-xl lg:text-xl font-semibold rounded-full";
  const closeHandler = (setModal, setSlideImage) => {
    setModal(false);
    setSlideImage({ url: null });
  };
  const nextBtnHandler = (image) => {
    const index = images.indexOf(image);
    const slideImage = images[index + 1];
    const imagesLength = images.length;

    if (index + 1 === imagesLength) {
      setSlideImage(images[0]);
    } else {
      setSlideImage(slideImage);
    }
  };

  const previousBtnHandler = (image) => {
    const index = images.indexOf(image);
    const slideImage = images[index - 1];
    const imagesLength = images.length;

    if (index === 0) {
      setSlideImage(images[imagesLength - 1]);
    } else {
      setSlideImage(slideImage);
    }
  };
  return (
    <div>
      <div className=" gap-3 fixed h-[100vh] w-[100vw] top-0 z-[10] pointer-events-auto  flex justify-center  items-center  box-border outline-0 bg-black/60">
        <div className="h-[70vh] md:h-[100vh] lg:h-[100vh] w-[100vw] bg-black/60 relative">
          <div className="absolute top-[5%] w-full flex justify-center items-center">
            <div className="h-[70vh] md:h-[80vh] lg:h-[90vh] w-[90vw] flex flex-col justify-start items-center relative">
              {/* Control Button  */}
              <div className="absolute top-[40%] md:top-[50%] lg:top-[50%] left-[2%]  md:left-[12.5%] lg:left-[12.5%]">
                <button
                  onClick={() => previousBtnHandler(image)}
                  className="text-lg md:text-2xl lg:text-3xl  px-2 md:px-3 lg:px-3 py-0 md:py-1 lg:py-1 rounded-full bg-transparent  text-white hover:text-blue-600 duration-500"
                >
                  {"<"}
                </button>
              </div>
              <div className="absolute top-[40%] md:top-[50%] lg:top-[50%] right-[2%] md:right-[12.5%] lg:right-[12.5%]">
                <button
                  onClick={() => nextBtnHandler(image)}
                  className="text-lg md:text-2xl lg:text-3xl  px-2 md:px-3 lg:px-3 py-0 md:py-1 lg:py-1 rounded-full bg-transparent  text-white hover:text-blue-600 duration-500"
                >
                  {">"}
                </button>
              </div>

              {/* Close Button  */}
              <div className="absolute right-10 top-2">
                <button
                  onClick={() => closeHandler(setModal, setSlideImage)}
                  className=" px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-transparent  hover:bg-black duration-500 text-red-400 hover:text-red-600 text-base md:text-xl lg:text-xl font-semibold rounded-full"
                >
                  X
                </button>
              </div>

              {/* Content Section  */}
              <div className="absolute top-14 h-3/5 md:h-4/5 lg:h-4/5 w-4/5 md:w-3/5 lg:w-3/5 ">
                <Image
                  src={image?.url ? image.url : ""}
                  width={2400}
                  height={1600}
                  alt=""
                  className="h-full w-full rounded-md"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImageSlider;
