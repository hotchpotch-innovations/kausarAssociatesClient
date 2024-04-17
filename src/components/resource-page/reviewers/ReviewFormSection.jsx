import React from "react";
import SectionTitle from "./ReviewSectionTitle";

const ReviewFormSection = () => {
  return (
    <section>
      <div className="content-container">

        <div>
            <SectionTitle title={"ADD REVIEW"}/>
        </div>

        {/* Form  */}
        <div className="mt-8">
          <div className="w-2/3 md:w-1/2 lg:w-1/2 mx-auto space-y-4">
            <div>
              <input
                type="text"
                className="w-full border py-2 rounded-sm bg-transparent pl-2"
                placeholder="Enter Your Name"
              ></input>
            </div>
            <div>
              <input
                type="text"
                className="w-full border py-2 rounded-sm bg-transparent pl-2"
                placeholder="Enter Your Email"
              ></input>
            </div>
            <div>
              <input
                type="number"
                className="w-full border py-2 rounded-sm bg-transparent pl-2"
                placeholder="Select right button (up-down) to give review rate (0/10)"
                min={"1"}
                max={"10"}
              ></input>
            </div>
            <div>
              <input
                type="text"
                className="w-full border py-8 rounded-sm bg-transparent pl-2"
                placeholder="Enter Your Review"
              ></input>
            </div>
            <div>
              <input
                type="submit"
                className="w-full border py-2 rounded-sm bg-transparent text-center hover:bg-primary text-gray-300 hover:text-white duration-500 cursor-pointer"
                value={"Post Review"}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewFormSection;
