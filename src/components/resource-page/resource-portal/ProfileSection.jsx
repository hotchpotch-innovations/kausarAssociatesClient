import React from "react";
import SectionTitle from "../reviewers/ReviewSectionTitle";
import ProfileCard from "./ProfileCard";
import PaginationButton from "@/components/common/Buttons/PaginationButton";

const ProfileSection = () => {
  return (
    <section>
      <div>
        <SectionTitle title={"OUR PROFILE"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-2 lg:gap-6">
        <ProfileCard title={"Company Profile"} />
        <ProfileCard title={"Tax Profile"} />
        <ProfileCard title={"Short Profile"} />
        <ProfileCard title={"Company Profile"} />
        <ProfileCard title={"Tax Profile"} />
        <ProfileCard title={"Short Profile"} />
        <ProfileCard title={"Company Profile"} />
        <ProfileCard title={"Tax Profile"} />
        <ProfileCard title={"Short Profile"} />
      </div>
      <div className="my-6 md:my-8 lg:my-10 flex justify-center items-center">
        <PaginationButton />
      </div>
    </section>
  );
};

export default ProfileSection;
