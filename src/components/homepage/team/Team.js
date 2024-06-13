import React from "react";
import AbsoluteText from "../../common/absoluteText/AbsoluteText";
import Slider from "./TeamSlider";

const Team = () => {
  return (
    <section>
      <div className="content-container">
        <div>
          <AbsoluteText text={"TEAM"} isTextWhite={false}></AbsoluteText>
        </div>
        <div className="sm:px-8 md:px-10 lg:px-12">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Team;
