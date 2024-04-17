import AboutUsBanner from "@/components/about-us/AboutUsBanner";
import FAQ from "@/components/about-us/FAQ";
import OurConsultancy from "@/components/about-us/OurConsultancy";
import PresidentMessage from "@/components/about-us/PresidentMessage";
import SolveCases from "@/components/about-us/SolveCases";
import TitleSection from "@/components/about-us/TitleSection";
import Values from "@/components/about-us/Values";
import VisionMission from "@/components/about-us/VisionMission";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import React from "react";

const page = () => {
  return (
    <section>
      <AboutUsBanner />
      <WhoWeAre />
      <SolveCases />
      <PresidentMessage />
      <div>
        <VisionMission />
        <OurConsultancy />
      </div>
      <TitleSection></TitleSection>
      <Values></Values>
      <FAQ></FAQ>
    </section>
  );
};

export default page;
