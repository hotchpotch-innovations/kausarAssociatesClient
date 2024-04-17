'use client'
import React, { useState } from "react";
import ModalImageSlider from "./ModalImageSlider";
import CareerWithKA from "./CareerWithKA";
import WorkEnvironment from "./WorkEnvironment";
import Memories from "./Memories";
import image from '../images/37385.jpg';

const CareerPage = () => {
  const defaultSlideImage = {
    _id : "",
    url : null
  }
  const [slideImage, setSlideImage] = useState(defaultSlideImage)
  const [isModal, setModal] = useState(false);
  return (
    <div>
      <div>
          <div>
            <div className="content-container">
              <CareerWithKA></CareerWithKA>
            </div>
            <div className="content-container">
              <WorkEnvironment></WorkEnvironment>
            </div>
            <div className="content-container">
              <Memories setSlideImage={setSlideImage} setModal={setModal}></Memories>
            </div>
          </div>
      </div>
      <div>{isModal && <ModalImageSlider 
      image={slideImage}
      setSlideImage={setSlideImage}
      setModal={setModal}></ModalImageSlider>}</div>
    </div>
  );
};

export default CareerPage;
