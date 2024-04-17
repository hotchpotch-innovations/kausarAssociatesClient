import React from "react";
import BlogBanner from "@/components/resource-page/blog-news/BlogBanner";
import ReviewSectionTitle from "@/components/resource-page/reviewers/ReviewSectionTitle";
import ReviewCard from "@/components/resource-page/reviewers/ReviewCard";
import ReviewsSection from "@/components/resource-page/reviewers/ReviewsSection";
import ReviewFormSection from "@/components/resource-page/reviewers/ReviewFormSection";

const page = () => {
  return (
    <section>
      <div>
        <BlogBanner title={"Reviewers"} />
      </div>
      <div className="content-container">
        <ReviewsSection />
      </div>
      <div>
        <ReviewFormSection />
      </div>
    </section>
  );
};

export default page;
