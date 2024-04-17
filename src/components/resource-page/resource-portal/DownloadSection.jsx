import React from "react";
import SectionTitle from "../reviewers/ReviewSectionTitle";
import VideoCard from "./VideoCard";
import PaginationButton from "@/components/common/Buttons/PaginationButton";

const DownloadSection = () => {
  return (
    <section>
      <div>
        <SectionTitle title={"DOWNLOAD"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-3 lg:gap-6">
        <VideoCard title={"Tax Profile"}/>
        <VideoCard title={"Tax Profile"}/>
        <VideoCard title={"Tax Profile"}/>
        <VideoCard title={"Tax Profile"}/>
        <VideoCard title={"Tax Profile"}/>
        <VideoCard title={"Tax Profile"}/>
      </div>
      <div className="my-6 md:my-8 lg:my-10 flex justify-center items-center">
        <PaginationButton/>
      </div>
    </section>
  );
};

export default DownloadSection;
