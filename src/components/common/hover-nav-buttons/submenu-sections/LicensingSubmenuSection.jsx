import React from "react";
import HoverSubmenuButton from "../HoverSubmenuButton";
import { useGetLicensingCategoriesQuery } from "../../../../../provider/redux/features/categories/licensingCategoriesApi";

const LicensingSubmenuSection = () => {
  const { data, isLoading } = useGetLicensingCategoriesQuery("");
  const licensingSubmenu = data?.data;

  if (isLoading) {
    return (
      <p className="text-center">
        <span className="loading loading-spinner loading-xs"></span>
      </p>
    );
  }

  return (
    <div>
      <HoverSubmenuButton submenu={licensingSubmenu} />
    </div>
  );
};

export default LicensingSubmenuSection;
