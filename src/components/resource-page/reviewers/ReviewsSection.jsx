import React from "react";
import ReviewCard from "./ReviewCard";
import PaginationButton from "@/components/common/Buttons/PaginationButton";

const ReviewsSection = () => {
  return (
    <section className="">
      <div className="flex justify-end items-start">
        <div className="py-8 w-48">
          <div className="mb-1">
            <label
              htmlFor=""
              className="text-sm md:text-base font-medium text-end"
            >
              {" "}
              Search By Name:
            </label>
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="w-48 py-1 text-gray-500 border border-blue-400 rounded-md pl-2"
              placeholder="Enter reviewer name"
            />
          </div>
        </div>
      </div>

      <div className="py-8 border border-dashed">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="my-6 md:my-8 lg:my-10 flex justify-center items-center">
        <PaginationButton/>
      </div>
    </section>
  );
};

export default ReviewsSection;
