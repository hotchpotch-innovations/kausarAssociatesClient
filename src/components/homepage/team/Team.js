import React from "react";
import AbsoluteText from "../../common/absoluteText/AbsoluteText";
import Slider from "./TeamSlider";
import { SectionTitle } from "@/components/common/section-title/SectionTitle";

const Team = () => {
  return (
    <section>
      <div className="content-container">
        <div>
          {/* <AbsoluteText text={"TEAM"} isTextWhite={false}></AbsoluteText> */}
          <SectionTitle
            subtitleLabel="Law firm and company"
            titleLabel="Team"
          />
        </div>
        <div className="sm:px-8 md:px-10 lg:px-12 my-8 sm:my-6 md:my-8 lg:my-10 xl:my-14 2xl:my-16">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Team;
