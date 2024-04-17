import Image from "next/image";
import React from "react";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogSection = () => {

  return (
    <div className="mt-8 md:mt-8 lg:mt-2">
      <div className="border-2 border-blue-600 py-2">
        <h3 className="text-base font-semibold text-center">
          RECENT BLOGS
        </h3>
      </div>
      <div className="mt-6 md:mt-6 lg:mt-4 ">
        {/* short blog */}
        <RecentBlogCard/>
        <RecentBlogCard/>
        <RecentBlogCard/>
      </div>
    </div>
  );
};

export default RecentBlogSection;
