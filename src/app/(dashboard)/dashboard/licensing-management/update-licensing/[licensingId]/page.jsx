import React from "react";
import LicensingUpdateForm from "../../component/LicensingUpdateForm";

const UpdateLicensing = () => {
  return (
    <section>
      <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
          1. Licensing Update Form:
        </h3>
        <div className="mt-6">
          <LicensingUpdateForm />
        </div>
      </div>
    </section>
  );
};

export default UpdateLicensing;
