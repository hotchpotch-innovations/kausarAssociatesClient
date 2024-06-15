import React from "react";
import CreateBlogCategory from "../../../../../components/dashboard/categories/company-blogs/CreateBlogCategory";
import BlogCategoryTable from "../../../../../components/dashboard/categories/company-blogs/BlogCategoryTable";

const BlogCategoryDashboard = () => {
  // const api = `${process.env.NEXT_PUBLIC_BACKEND_API}/blogs-categories`;
  return (
    <section>
      <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
          1. Blog Category:
        </h3>
        <div className="w-full grid grid-cols-1 gap-3">
          <div>
            <div className="mb-2 flex justify-end">
              {/* <CreateBlogCategory /> */}
            </div>
            {/* <BlogCategoryTable api={api} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategoryDashboard;
