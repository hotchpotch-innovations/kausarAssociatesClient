import React from "react";
import CreateCompanyFormData from "./components/CreateCompanyFormData";
import CompanyFormDataTable from "./components/CompanyFormDataTable";

const CompanyFormsData = () => {
  return (
    <section>
      <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
          1. Company Profile:
        </h3>
        <div className="w-full grid grid-cols-1 gap-3">
          <div>
            <div className="mb-2 flex justify-end">
              <CreateCompanyFormData />
            </div>
            <div>
              <CompanyFormDataTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyFormsData;
