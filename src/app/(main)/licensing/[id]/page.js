"use client";

import Banner from "@/components/service-page/Banner";
import DetailsTitleSection from "@/components/service-page/DetailsTitleSection";
import HowWeHelp from "@/components/service-page/HowWeHelp";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLicenseCatData } from "../../../../../provider/redux/features/licenseCatDataSlice";
import { usePathname } from "next/navigation";

const LicensingPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.licenseCatData);
  const params = usePathname();
  const id = params.split("/")[2]; // getting id from url
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    dispatch(fetchLicenseCatData("?_id"));
  }, [dispatch]);

  useEffect(() => {
    // filter out the static single data
    if (!data?.data) return;

    if (data?.data.length) {
      const filteredData = data?.data.filter((data) => data._id === id);
      console.log(filteredData, "fills");
      setFilteredData(filteredData[0]);
    }
  }, [data?.data]);
  console.log(filteredData, "fill");

  // if data is loading. We can set also error state later.
  if (!filteredData) {
    return <p>Loading</p>;
  }
  return (
    <section>
      <Banner data={filteredData.banner} />
      <DetailsTitleSection data={filteredData} />
      <HowWeHelp data={filteredData} />
    </section>
  );
};

export default LicensingPage;
