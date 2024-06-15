import React from "react";
import AbsoluteText from "../../common/absoluteText/AbsoluteText";
import Consultancy from "./Consultancy";
import Image from "next/image";
import taxImage from "@/assets/images/tax.jpeg";

const OurConsultancy = () => {
  const content =
    "The first step involves a free consultation where we sit down with you and thoroughly review your situation in order to discuss your available options";
  return (
    <section className="content-container">
      <div className="mb-16 md:mb-28 lg:mb-32">
        <AbsoluteText
          isTextCenter={true}
          isTextWhite={false}
          text={"OUR CONSULTANCY"}
          isText2={true}
          text2={"PROCESS"}
        ></AbsoluteText>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className=" mb-6 md:mb-0 lg:mb-0">
          <Consultancy
            serial={"01"}
            title={"Free Consultancy"}
            body={content}
            isTextStart={false}
            isTextEnd={true}
          />
          <Consultancy
            serial={"02"}
            title={"Submit file"}
            body={content}
            isTextStart={false}
            isTextEnd={true}
          />
        </div>

        <div className="mb-6 md:mb-0 lg:mb-0">
          <div>
            <Image
              src={taxImage}
              alt=""
              width={800}
              height={1600}
              className="w-4/5 h-64 md:h-[640px] lg:h-[480px]  mx-auto"
            ></Image>
          </div>
        </div>

        <div>
          <Consultancy
            serial={"03"}
            title={"Prepare Documents"}
            body={content}
            isTextStart={true}
            isTextEnd={false}
          />
          <Consultancy
            serial={"04"}
            title={"Finally"}
            body={content}
            isTextStart={true}
            isTextEnd={false}
          />
        </div>
      </div>
    </section>
  );
};

export default OurConsultancy;
