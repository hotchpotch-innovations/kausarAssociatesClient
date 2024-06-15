import React from "react";
import { images } from "../../../../public/fake-data/memories/imagesData";
import MemoriesImage from "./MemoriesImage";

const Memories = ({ setModal, setSlideImage }) => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-base md:text-lg lg:text-xl font-medium mb-4">
          OUR SUCCESSES OVER THE YEARS
        </h3>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Memories at <span className="text-primary">KA</span>
        </h1>
        <p className="text-justify">
          As a recognition of the quality of our training program, ACE Advisory
          maintains ACCA’s Gold Status Approved Employer – Trainee Development
          certification. This symbolizes the support ACE Advisory offers to the
          trainees that enables them to be the best version of themselves and in
          turn ensuring the quality of their output.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => {
          return (
            <MemoriesImage
              key={image?._id}
              setModal={setModal}
              setSlideImage={setSlideImage}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Memories;
