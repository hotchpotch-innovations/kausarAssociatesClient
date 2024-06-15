"use client";
import React, { useState } from "react";
import CareerWithKA from "./CareerWithKA";
import ModalImageSlider from "../memories/ModalImageSlider";
import Memories from "../memories/Memories";

const CareerPage = () => {
  const defaultSlideImage = {
    _id: "",
    url: null,
  };
  const [slideImage, setSlideImage] = useState(defaultSlideImage);
  const [isModal, setModal] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div className="content-container">
            <CareerWithKA></CareerWithKA>
          </div>
          <div className="content-container">
            <Memories
              setSlideImage={setSlideImage}
              setModal={setModal}
            ></Memories>
          </div>
        </div>
      </div>
      <div>
        {isModal && (
          <ModalImageSlider
            image={slideImage}
            setSlideImage={setSlideImage}
            setModal={setModal}
          ></ModalImageSlider>
        )}
      </div>
    </div>
  );
};

export default CareerPage;
