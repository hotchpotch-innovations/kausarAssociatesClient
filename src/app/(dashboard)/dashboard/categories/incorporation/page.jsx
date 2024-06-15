import React from "react";
import IncorporationCategoryTable from "../../../../../components/dashboard/categories/incorporation/IncorporationCategoryTable";
import CreateIncorporationCategoryForm from "../../../../../components/dashboard/categories/incorporation/CreateIncorporationCategory";

const page = () => {
  const api = `${process.env.NEXT_PUBLIC_BACKEND_API}/incorporation-categories`;
  return (
    <section>
      <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
          1. Incorporation Category:
        </h3>
        <div className="w-full grid grid-cols-1 gap-3">
          <div>
            <div className="mb-2 flex justify-end">
              {/* <CreateIncorporationCategoryForm /> */}
            </div>
            {/* <IncorporationCategoryTable api={api} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
