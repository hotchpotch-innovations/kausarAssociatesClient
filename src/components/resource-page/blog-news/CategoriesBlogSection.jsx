import React from "react";
import RecentBlogCard from "./RecentBlogCard";

const CategoriesBlogSection = () => {
  return (
    <div className="mt-8">
      <div className="border-2 border-blue-600 py-2">
        <h3 className="text-base font-medium text-center">
          CATEGORIES
        </h3>
      </div>
      <div className="mt-6 md:mt-6 lg:mt-4 ">
        <div>
            <ul>
                <li className="py-2 text-base font-medium border-b  border-dotted">Art <span className="text-gray-400">(1)</span></li>

                <li className="py-2 text-base font-medium border-b  border-dotted">Bangla Website <span className="text-gray-400">(1)</span></li>

                <li className="py-2 text-base font-medium border-b  border-dotted">Budget <span className="text-gray-400">(1)</span></li>

                <li className="py-2 text-base font-medium border-b  border-dotted">Birthday <span className="text-gray-400">(1)</span></li>

                <li className="py-2 text-base font-medium border-b  border-dotted">Celebration <span className="text-gray-400">(1)</span></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBlogSection;
