"use client";
import Image from "next/image";
import React from "react";

const MemoriesImage = ({ image, setModal, setSlideImage }) => {
  const openModal = (image) => {
    setSlideImage(image);
    setModal(true);
  };
  return (
    <div className="w-full h-72 relative group items-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 transition-shadow mx-auto">
      <div className="w-full h-72">
        <Image
          src={image?.url ? image.url : ""}
          alt=""
          width={2400}
          height={1600}
          className="w-full h-72"
        ></Image>
      </div>
      <div className="w-full h-72 flex justify-center items-center absolute top-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 ">
        <div>
          <button
            onClick={() => openModal(image)}
            className="text-xl md:text-2xl lg:text-3xl font-bold px-4 py-2 rounded-full bg-transparent text-white hidden border border-white group-hover:block duration-500"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoriesImage;
