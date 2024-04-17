import React from "react";
import CreateLicensingCategoryForm from "./components/CreateLicensingCategory";
import LicensingCategoryTable from "./components/LicensingCategoryTable";

const LicensingCategoryDashboard = () => {
  const api = "http://localhost:3000/api/v1/licensing-categories";
  return (
    <section>
      <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
          1. Licensing Category:
        </h3>
        <div className="w-full grid grid-cols-1 gap-3">
          <div>
            <div className="mb-2 flex justify-end">
              <CreateLicensingCategoryForm />
            </div>
            <LicensingCategoryTable api={api} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingCategoryDashboard;
