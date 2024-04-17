import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";
import React from "react";
import ArticleCard from "./ArticleCard";

const BanglaArticlesSection = () => {
  return (
    <section>
      <div>
        {/* Head Section  */}
        <div className="w-full h-48 bg-[url('https://phoenix308.files.wordpress.com/2016/07/maxresdefault.jpg')] bg-cover bg-center">
          <div className="content-container flex items-center">
            <div>
              <AbsoluteText
                text={"ARTICLES"}
                isTextWhite={false}
              ></AbsoluteText>
            </div>
          </div>
        </div>
        {/* Articles Section */}
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanglaArticlesSection;
