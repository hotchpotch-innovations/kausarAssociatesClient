"use client"

import Banner from "@/components/service-page/Banner";
import DetailsTitleSection from "@/components/service-page/DetailsTitleSection";
import HowWeHelp from "@/components/service-page/HowWeHelp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubCatData } from "../../../../../provider/redux/features/serviceCatDataSlice";

const page = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.serviceCatData);

  useEffect(() => {
    dispatch(fetchSubCatData("?_id"))
  }, [dispatch])

  // if data is loading. We can set also error state later.
  if(data?.loading) {
    return <p>Loading</p>
  }

  console.log(data.data[0], "drom page")

  return (
    <section>
      <Banner data={data.data[0].banner} />
      <DetailsTitleSection data={data.data[0]} />
      <HowWeHelp data={data.data[0]} />
    </section>
  );
};

export default page;
