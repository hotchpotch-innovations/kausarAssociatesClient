"use client";
import Image from "next/image";
import React, { useState } from "react";

const MemoriesPhotoForm = () => {
  const [stateImage, setStateImage] = useState();
  const [image, setImage] = useState();

  const handleImage = (e) => {
    const file = e.target?.files[0];
    setStateImage(file);
    const reader = new FileReader();
    reader?.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  // For Submit into database
  const submitHandler = async () => {
    const imageData = {
      img: stateImage,
    };

    console.log(imageData);
  };

  return (
    <div className="w-full mx-4 mb-6 md:mb-0 lg:mb-0">
      {/* Image View Section  */}
      <div>
        {image && (
          <div>
            <Image
              src={image}
              alt="image"
              className="mx-auto p-4 border border-gray-300 rounded-md"
              width={100}
              height={80}
            ></Image>
          </div>
        )}
      </div>

      {/* Image Select Button Section  */}
      <div className="mx-auto flex justify-center items-end">
        {!image && (
          <div className="py-6 md:py-8" id="cropper">
            <label className="mx-auto flex flex-col justify-center items-center border border-blue-500 text-gray-400 hover:text-gray-600 duration-500 rounded-md w-20 h-20 md:w-48 md:h-12 text-center cursor-pointer text-base md:text-xl font-medium">
              + Add Images
              <br />
              <input
                onChange={handleImage}
                type="file"
                name="images"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>
        )}

        {/* Post or Cancel Section  */}
        {image && (
          <div className="text-center mt-4">
            <button
              onClick={() => setImage(null)}
              className="btn text-sm text-red-500 capitalize btn-sm border-none hover:border hover:border-red-400 rounded-md mx-4"
            >
              Cancel
            </button>
            <button
              onClick={() => submitHandler()}
              className="btn text-sm bg-blue-400 hover:bg-blue-600 text-white text-white-500 capitalize btn-sm duration-500  rounded-md mx-4 font-normal"
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoriesPhotoForm;
