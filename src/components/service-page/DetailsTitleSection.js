"use client";

import React from "react";

const DetailsTitleSection = ({ data }) => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="content-container">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
            {data.title}
          </h2>
        </div>
        <div className="text-sm text-gray-600">
          {data?.description?.map((desc, idx) => (
            <p key={idx} className="mb-2 text-justify">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsTitleSection;
