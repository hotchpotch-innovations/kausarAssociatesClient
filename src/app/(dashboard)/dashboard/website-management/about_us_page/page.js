// import CreateCoreValuesForm from "@/components/dashboard/managements/website/about-us/forms/create-forms/CreateCoreValuesForm";
// import CreateFAQForm from "@/components/dashboard/managements/website/about-us/forms/create-forms/CreateFAQForm";
// import CoreValuesTable from "@/components/dashboard/managements/website/about-us/tables/CoreValuesTable";
// import FaqTable from "@/components/dashboard/managements/website/about-us/tables/FaqTable";
import React from "react";


const AboutUsDashboard = () => {
  return (
    <section>
      <div>
        <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
            1. Core Values :
          </h3>
          <div className="w-full grid grid-cols-1 gap-3">
            <div>
              <div className="mb-2 flex justify-end">
                {/* <CreateCoreValuesForm /> */}
              </div>
              {/* <CoreValuesTable /> */}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
            2. FAQ :
          </h3>
          <div className="w-full grid grid-cols-1 gap-3">
            <div>
              <div className="mb-2 flex justify-end">
                {/* <CreateFAQForm /> */}
              </div>
              {/* <FaqTable /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDashboard;
