"use client";
import React from "react";
import HoverSubmenuButton from "../HoverSubmenuButton";
import { useGetServiceCategoriesQuery } from "../../../../../provider/redux/features/categories/serviceCategoriesApi";

const ServiceSubmenuSection = () => {
  const { data, isLoading } = useGetServiceCategoriesQuery("");
  const serviceSubmenu = data?.data;

  if (isLoading) {
    return (
      <p className="text-center">
        <span className="loading loading-spinner loading-xs"></span>
      </p>
    );
  }

  return (
    <div>
      <HoverSubmenuButton submenu={serviceSubmenu} />
    </div>
  );
};

export default ServiceSubmenuSection;
