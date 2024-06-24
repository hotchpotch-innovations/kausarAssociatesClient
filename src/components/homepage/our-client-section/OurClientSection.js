import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";
import React from "react";
import Client from "./Client";
import { SectionTitle } from "@/components/common/section-title/SectionTitle";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const OurClientSection = () => {
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: async () => {
  //     const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/clients`);
  //     return response?.data;
  //   },
  // });
  // console.log(data);
  return (
    <section className=" overflow-hidden content-container">
      <div className="pb-3 md:pb-5 xl:pb-8">
        <SectionTitle
          subtitleLabel="Law firm and company"
          titleLabel="Our Client"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-6 2xl:gap-10 ">
        <div className="flex slide-client-carousel">
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          {/* ////////////// */}
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          {/* ////////////// */}
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          {/* ////////////// */}
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          {/* ////////////// */}
        </div>
        {/* ///// */}
        <div className="flex slide-client-carousel-2">
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          {/* ////////////// */}
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          {/* ////////////// */}
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          {/* ////////////// */}
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          {/* ////////////// */}
        </div>
      </div>
    </section>
  );
};

export default OurClientSection;
