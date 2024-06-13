"use client";

import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";
import React from "react";
import ArticleCard from "./ArticleCard";
import { articleData } from "@/data";
import { useState } from "react";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-3">
            {articleData?.map((data, idx) => (
              <ArticleCard
                key={idx}
              ></ArticleCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanglaArticlesSection;
