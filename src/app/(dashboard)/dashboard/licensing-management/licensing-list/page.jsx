import React from "react";
import LicensingTable from "../component/LicensingTable";

const LicensingList = () => {
  return (
    <section>
      <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
          1. Services Table:
        </h3>
        <div className="mt-6">
          <LicensingTable />
        </div>
      </div>
    </section>
  );
};

export default LicensingList;
