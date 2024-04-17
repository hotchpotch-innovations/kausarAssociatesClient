import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";
import React from "react";
import Client from "./Client";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const OurClientSection = () => {
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: async () => {
  //     const response = await axios.get("http://localhost:3000/api/v1/clients");
  //     return response?.data;
  //   },
  // });
  // console.log(data);
  return (
    <section className="content-container">
      <div className="">
        <AbsoluteText
          text={"OUR CLIENT"}
          isTextCenter={true}
          isTextWhite={false}
        ></AbsoluteText>
      </div>
      <div>
        <div className="flex">
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
        </div>
      </div>
    </section>
  );
};

export default OurClientSection;
