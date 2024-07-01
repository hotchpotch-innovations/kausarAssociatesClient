"use client";

import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";
import React from "react";
import ArticleCard from "./ArticleCard";
import { articleData } from "@/data";
import { useState } from "react";
import { SectionTitle } from "@/components/common/section-title/SectionTitle";

const BanglaArticlesSection = () => {
  return (
    <section className="max-w-screen-2xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto pb-8 pt-12 sm:pb-12 sm:pt-14 md:pb-14 md:pt-16 xl:pb-20 xl:pt-24 2xl:pb-24 2xl:pt-28">
      <div>
        {/* Head Section  */}
        <div className="w-full">
          <div className="flex items-center px-8">
            <div className="w-full pb-8 sm:pb-6 md:pb-8 xl:pb-10">
              {/* <AbsoluteText
                text={"ARTICLES"}
                isTextWhite={false}
              ></AbsoluteText> */}
              <SectionTitle
                subtitleLabel="Law firm and company"
                titleLabel="Articles"
              />
            </div>
          </div>
        </div>
        {/* Articles Section */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-3">
            {articleData?.map((data, idx) => (
              <ArticleCard key={idx}></ArticleCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanglaArticlesSection;
