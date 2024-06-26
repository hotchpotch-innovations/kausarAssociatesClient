"use client";

import React, { useEffect } from "react";
import { servicesData } from "./servicesData";
import ServiceCard from "./ServiceCard";
import {
  largeDevicesRightBorderElements,
  largeDevicesTopBorderElements,
  mediumDevicesRightBorderElements,
  mediumDevicesTopBorderElements,
} from "@/components/common/storageVariables";
import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";
import { SectionTitle } from "@/components/common/section-title/SectionTitle";
import ServiceCatCard from "@/components/common/ServiceCatCard/ServiceCatCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubCatData } from "../../../../provider/redux/features/serviceCatDataSlice";
import ServicesCardLoader from "@/components/common/loader/ServicesCardLoader";
import { containerVariants, itemVariants } from "./anim";
import useInView from "@/hooks/useInView";

const Services = ({ isBg }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // to grigger the animation only once
    observerOpt: {
      threshold: 0.1, // when 0.1 -> 10% of the component is in view
    },
  });

  const dispatch = useDispatch();
  const data = useSelector((state) => state.serviceCatData);

  // Duplicate the single object 6 times if there is only 1 object in the array
  const serviceCards =
    data?.data?.length === 1 ? Array(6).fill(data?.data[0]) : data?.data;

  useEffect(() => {
    dispatch(fetchSubCatData("?_id"));
  }, [dispatch]);

  // if data is loading. We can set also error state later.
  if (data?.loading) {
    return <ServicesCardLoader />;
  }

  return (
    <section className={`${isBg ? "bg-primary" : "bg-none"} relative`}>
      <div className="content-container mx-auto">
        {/* <AbsoluteText text={"SERVICES"} isTextWhite={isBg ? true : false}></AbsoluteText> */}
        <SectionTitle
          subtitleLabel="Law firm and company"
          titleLabel="Services & Expertise"
        />
        <div className="w-full text-white my-8 sm:my-6 md:my-8 lg:my-10 xl:my-14 2xl:my-16">
          {/* section elements */}
          {/* top right rotate icon */}
          <div className="absolute top-0 right-4 md:right-10 xl:top-20 xl:right-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <Image
                src={"/service-icon.png"}
                alt="service-icon"
                width={100}
                height={100}
                className="w-8 h-8"
              />
            </motion.div>
          </div>
          {/* bottom left up & down icon */}
          <div className="absolute bottom-0 left-4 md:left-10 xl:left-20">
            <motion.div
              animate={{ y: [0, -30, 0, 30, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <Image
                src={"/service-one_pattern.png"}
                alt="service-icon"
                width={100}
                height={100}
                className="w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20"
              />
            </motion.div>
          </div>
          {/* section content */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-16 lg:gap-y-20 xl:gap-y-24 2xl:px-20 max-w-screen-2xl mx-auto"
            variants={containerVariants}
            animate={inView ? "show" : "hidden"}
          >
            {serviceCards.map((card, idx) =>
              card.is_published ? (
                <motion.div key={card._id} variants={itemVariants}>
                  <ServiceCatCard card={card} idx={idx} />
                </motion.div>
              ) : null
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
