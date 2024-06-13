import React, { useState } from "react";
import HoverSubmenuButton from "../HoverSubmenuButton";
import { useGetLicensingCategoriesQuery } from "../../../../../provider/redux/features/categories/licensingCategoriesApi";
import { licenseCat } from "@/data";

const LicensingSubmenuSection = () => {
  const { data, isLoading } = useGetLicensingCategoriesQuery("");
  const licensingSubmenu = data?.data;
  const [showSubMenu, setShowSubMenu] = useState("");

  const handleShowSubCat = (label) => {
    setShowSubMenu((prev) => (prev === label ? "" : label));
  };

  if (isLoading) {
    return (
      <p className="text-center">
        <span className="loading loading-spinner loading-xs"></span>
      </p>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* TODO: serviceCat is now a static category that will be dynamic in future */}
      {licenseCat?.map((cat, idx) => (
        <div key={idx}>
          <div
            className={`w-full cursor-pointer font-semibold hover:text-blue-800 duration-500 border-b border-blue-300 hover:border-blue-600 ${
              showSubMenu === cat.label ? " mt-4 mb-0" : " my-4"
            }`}
          >
            <p
              onClick={() => handleShowSubCat(cat.label)}
              className="w-full cursor-pointer capitalize"
            >
              {cat.label}
            </p>
          </div>
          {/*TODO: These below sub cat will change in future and it will be dynamic */}
          <div className={showSubMenu === cat.label ? "block" : "hidden"}>
            <HoverSubmenuButton
              submenu={idx === 0 ? licenseCat[0].subCat : licenseCat[1].subCat}
              textStyle={"opacity-80"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LicensingSubmenuSection;
