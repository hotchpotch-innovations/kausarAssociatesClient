import React from "react";
import HoverSubmenuButton from "../HoverSubmenuButton";
import { useGetIncorporationCategoriesQuery } from "../../../../../provider/redux/features/categories/incorporationCategoriesApi";

const IncorporationSubmenuSection = () => {
  const { data, isLoading } = useGetIncorporationCategoriesQuery("");
  const incorporationSubmenu = data?.data;

  if (isLoading) {
    return (
      <p className="text-center">
        <span className="loading loading-spinner loading-xs"></span>
      </p>
    );
  }

  return (
    <div>
      <HoverSubmenuButton submenu={incorporationSubmenu} />
    </div>
  );
};

export default IncorporationSubmenuSection;
